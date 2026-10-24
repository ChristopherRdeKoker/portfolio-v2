import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = "out";
const INLINE_SCRIPT = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g;

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return htmlFiles(full);
      return entry.name.endsWith(".html") ? [full] : [];
    }),
  );
  return nested.flat();
}

function policyFor(html) {
  const hashes = [...html.matchAll(INLINE_SCRIPT)]
    .map(([, body]) => body)
    .filter((body) => body.length > 0)
    .map((body) => `'sha256-${createHash("sha256").update(body).digest("base64")}'`);

  return [
    "default-src 'self'",
    `script-src 'self' ${[...new Set(hashes)].join(" ")}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}

const files = await htmlFiles(OUT_DIR);
if (files.length === 0) {
  console.error(`add-csp: no HTML files found in ${OUT_DIR}/ - run next build first`);
  process.exit(1);
}

for (const file of files) {
  const html = await readFile(file, "utf8");
  if (html.includes('http-equiv="Content-Security-Policy"')) {
    console.error(`add-csp: ${file} already has a CSP tag - refusing to add a second one`);
    process.exit(1);
  }
  if (!html.includes("<head>")) {
    console.error(`add-csp: ${file} has no <head> tag - cannot place the CSP before the scripts`);
    process.exit(1);
  }
  const scriptCount = [...html.matchAll(INLINE_SCRIPT)].length;
  const meta = `<meta http-equiv="Content-Security-Policy" content="${policyFor(html)}">`;
  await writeFile(file, html.replace("<head>", `<head>${meta}`));
  console.log(`add-csp: ${file} - ${scriptCount} inline scripts hashed`);
}
