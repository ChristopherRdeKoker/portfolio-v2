import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const PORT = 8735;
const BASE_URL = `http://127.0.0.1:${PORT}`;
const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const OUT_DIR = path.join(ROOT_DIR, "out");

const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1440, height: 900 },
];
const COLOR_SCHEMES = ["light", "dark"];

const SECTIONS = [
  { id: "home", heading: "Christopher de Koker" },
  { id: "about", heading: "About me" },
  { id: "achievements", heading: "Recent achievements" },
  { id: "experience", heading: "My timeline" },
  { id: "projects", heading: "My projects" },
  { id: "contact", heading: "Contact me" },
];

const EXPECTED_COUNTS = [
  { label: "stats", selector: "#about dl > div", count: 4 },
  { label: "skill groups", selector: "#about h3 + div > div", count: 5 },
  { label: "achievements", selector: "#achievements ul > li", count: 8 },
  { label: "timeline entries", selector: "#experience ol > li", count: 7 },
  { label: "featured project", selector: "#projects article", count: 1 },
  { label: "project grid cards", selector: "#projects ul.grid > li", count: 4 },
  { label: "contact items", selector: "#contact ul > li", count: 3 },
];

const APPS = [
  {
    href: "/apps/retirement/",
    name: "Retirement calculator",
    renderedText: "Your savings last until",
  },
  { href: "/apps/expenses/", name: "Expense tracker", renderedText: "Start fresh" },
  { href: "/apps/stays/", name: "Holiday home booking", renderedText: "Find your stoep." },
];

const EXTERNAL_LINKS = [
  { name: "View the source", href: "https://github.com/ChristopherRdeKoker/portfolio-v2" },
  { name: "See more on GitHub", href: "https://github.com/ChristopherRdeKoker" },
];

const args = process.argv.slice(2);
const shotsFlagIndex = args.indexOf("--shots");
const shotsDir = shotsFlagIndex === -1 ? null : path.resolve(args[shotsFlagIndex + 1] ?? "");
const playwrightModule = process.env.PLAYWRIGHT_MODULE ?? "playwright";
const playwrightSpecifier = path.isAbsolute(playwrightModule)
  ? pathToFileURL(playwrightModule).href
  : playwrightModule;
const { chromium } = await import(playwrightSpecifier);

const results = [];

function record(name, passed, detail = "") {
  results.push({ name, passed, detail });
  const status = passed ? "PASS" : "FAIL";
  console.log(`${status} ${name}${detail ? ` - ${detail}` : ""}`);
}

async function startServer() {
  const server = spawn("python3", [path.join(ROOT_DIR, "tests/e2e/serve.py"), "--dir", OUT_DIR], {
    stdio: ["ignore", "pipe", "pipe"],
  });
  const isReady = await new Promise((resolve) => {
    const timer = setTimeout(() => resolve(false), 10_000);
    server.stdout.on("data", (chunk) => {
      if (chunk.toString().includes("serving")) {
        clearTimeout(timer);
        resolve(true);
      }
    });
    server.stderr.on("data", (chunk) => process.stderr.write(chunk));
    server.on("exit", () => {
      clearTimeout(timer);
      resolve(false);
    });
  });
  if (!isReady) {
    server.kill();
    throw new Error(
      `e2e: static server did not start on ${BASE_URL} (port in use or python3 missing)`,
    );
  }

  return server;
}

async function runStep(name, step) {
  try {
    await step();
  } catch (error) {
    record(`${name} crashed`, false, error.message.split("\n")[0]);
  }
}

function watchConsole(page, errors) {
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
}

async function settlePage(page) {
  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 40));
    }
    await Promise.all(
      [...document.images].map((image) =>
        image.complete
          ? null
          : new Promise((resolve) => image.addEventListener("load", resolve, { once: true })),
      ),
    );
    await document.fonts.ready;
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(400);
}

async function checkSections(page, label) {
  for (const section of SECTIONS) {
    const heading = page.locator(`#${section.id} :is(h1, h2)`).first();
    const text = (await heading.textContent())?.replace(/\s+/g, " ").trim();
    record(
      `${label} section #${section.id} renders`,
      text === section.heading,
      `heading "${text}"`,
    );
  }
  for (const expected of EXPECTED_COUNTS) {
    const count = await page.locator(expected.selector).count();
    record(
      `${label} ${expected.label} count`,
      count === expected.count,
      `${count}/${expected.count}`,
    );
  }
  const brokenImages = await page.evaluate(() =>
    [...document.images]
      .filter((image) => !image.complete || image.naturalWidth === 0)
      .map((image) => image.src),
  );
  record(`${label} all images load`, brokenImages.length === 0, `${brokenImages.length} broken`);
}

async function checkNav(page, label) {
  for (const section of SECTIONS) {
    const navLink = page
      .getByRole("navigation", { name: "Sections" })
      .getByRole("link", { name: new RegExp(section.id, "i") });
    await navLink.click();
    await page.waitForFunction((id) => location.hash === `#${id}`, section.id);
    await page.waitForTimeout(300);
    const isInView = await page.evaluate((id) => {
      const top = document.getElementById(id).getBoundingClientRect().top;
      return top >= -2 && top < window.innerHeight / 2;
    }, section.id);
    const ariaCurrent = await navLink.getAttribute("aria-current");
    record(
      `${label} nav to #${section.id}`,
      isInView && ariaCurrent === "true",
      `inView=${isInView} aria-current=${ariaCurrent}`,
    );
  }
}

async function checkThemeToggle(page, label, colorScheme) {
  const isDarkAtStart = await page.evaluate(() =>
    document.documentElement.classList.contains("dark"),
  );
  record(
    `${label} initial theme follows OS`,
    isDarkAtStart === (colorScheme === "dark"),
    `dark=${isDarkAtStart}`,
  );
  const toggle = page.getByRole("button", { name: /switch to (light|dark) mode/i });
  await toggle.click();
  const isDarkAfterClick = await page.evaluate(() =>
    document.documentElement.classList.contains("dark"),
  );
  const storedTheme = await page.evaluate(() => localStorage.getItem("theme"));
  const toggleLabel = await toggle.getAttribute("aria-label");
  const expectedLabel = isDarkAfterClick ? "Switch to light mode" : "Switch to dark mode";
  record(
    `${label} theme toggle flips`,
    isDarkAfterClick !== isDarkAtStart &&
      storedTheme === (isDarkAfterClick ? "dark" : "light") &&
      toggleLabel === expectedLabel,
    `dark=${isDarkAfterClick} stored=${storedTheme} label="${toggleLabel}"`,
  );
  await page.reload();
  const isDarkAfterReload = await page.evaluate(() =>
    document.documentElement.classList.contains("dark"),
  );
  record(
    `${label} theme persists after reload`,
    isDarkAfterReload === isDarkAfterClick,
    `dark=${isDarkAfterReload}`,
  );
  await toggle.click();
}

async function checkExternalLinks(page, label) {
  for (const link of EXTERNAL_LINKS) {
    const locator = page.locator(`#projects a[href="${link.href}"]`).filter({ hasText: link.name });
    const count = await locator.count();
    const target = count ? await locator.first().getAttribute("target") : null;
    const rel = count ? await locator.first().getAttribute("rel") : null;
    record(
      `${label} link "${link.name}"`,
      count === 1 && target === "_blank" && rel === "noopener noreferrer",
      `count=${count} target=${target} rel=${rel}`,
    );
  }
}

async function checkApps(context, label) {
  for (const app of APPS) {
    const page = await context.newPage();
    const appErrors = [];
    watchConsole(page, appErrors);
    await page.goto(`${BASE_URL}/#projects`);
    const card = page.locator(`#projects a[href="${app.href}"]`);
    const cardCount = await card.count();
    const cardText = cardCount ? await card.first().textContent() : "";
    appErrors.length = 0;
    let status = 0;
    let isRendered = false;
    if (cardCount === 1) {
      const isAppDocument = (candidate) =>
        candidate.request().resourceType() === "document" &&
        new URL(candidate.url()).pathname === app.href;
      const [response] = await Promise.all([
        page.waitForResponse(isAppDocument),
        card.first().click(),
      ]);
      status = response?.status() ?? 0;
      isRendered = await page
        .getByText(app.renderedText)
        .first()
        .waitFor({ timeout: 20_000 })
        .then(() => true)
        .catch(() => false);
    }
    const pathname = new URL(page.url()).pathname;
    record(
      `${label} card "${app.name}" opens ${app.href}`,
      cardCount === 1 &&
        cardText.includes(app.name) &&
        status === 200 &&
        pathname === app.href &&
        isRendered &&
        appErrors.length === 0,
      `cards=${cardCount} status=${status} path=${pathname} rendered=${isRendered} consoleErrors=${appErrors.length}${appErrors.length ? ` [${appErrors.join(" | ")}]` : ""}`,
    );
    await page.close();
  }
}

async function takeScreenshot(browser, viewport, colorScheme) {
  const context = await browser.newContext({ viewport, colorScheme, reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto(BASE_URL);
  await settlePage(page);
  const file = path.join(shotsDir, `${viewport.width}x${viewport.height}-${colorScheme}.png`);
  await page.screenshot({ path: file, fullPage: true });
  await context.close();
  console.log(`shot ${file}`);
}

const server = await startServer();
const browser = await chromium.launch();
try {
  for (const viewport of VIEWPORTS) {
    for (const colorScheme of COLOR_SCHEMES) {
      const label = `[${viewport.name} ${colorScheme}]`;
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        colorScheme,
        reducedMotion: "reduce",
      });
      context.setDefaultTimeout(5_000);
      const page = await context.newPage();
      const consoleErrors = [];
      watchConsole(page, consoleErrors);
      const response = await page.goto(BASE_URL);
      record(`${label} page loads`, response?.status() === 200, `status ${response?.status()}`);
      await settlePage(page);
      await runStep(`${label} sections`, () => checkSections(page, label));
      await runStep(`${label} nav`, () => checkNav(page, label));
      await runStep(`${label} theme`, () => checkThemeToggle(page, label, colorScheme));
      await runStep(`${label} external links`, () => checkExternalLinks(page, label));
      record(`${label} 0 console errors`, consoleErrors.length === 0, consoleErrors.join(" | "));
      if (viewport.name === "desktop" && colorScheme === "light") {
        await runStep(`${label} apps`, () => checkApps(context, label));
      }
      await context.close();
    }
  }
  if (shotsDir) {
    await mkdir(shotsDir, { recursive: true });
    for (const viewport of VIEWPORTS) {
      for (const colorScheme of COLOR_SCHEMES) {
        await takeScreenshot(
          browser,
          { width: viewport.width, height: viewport.height },
          colorScheme,
        );
      }
    }
  }
} finally {
  await browser.close();
  server.kill();
}

const failed = results.filter((result) => !result.passed);
console.log(
  `e2e: ${results.length - failed.length}/${results.length} checks passed, ${failed.length} failed`,
);
console.log("e2e: DONE");
process.exit(failed.length ? 1 : 0);
