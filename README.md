# portfolio-v2

My personal portfolio: [portfolio.ccloud.co.za](https://portfolio.ccloud.co.za)

A rebuild of my 2022 plain HTML/SCSS portfolio, written in **Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**.

## How it is built

- **Static export.** `next build` writes plain HTML, CSS and JS to `out/` (`output: "export"`). Nothing runs on the server, so there is no Node.js process to patch or attack; nginx serves the files from my own VPS.
- **Content as data.** All copy lives in typed modules in [`src/content/`](src/content/), one per section. The featured card and the project grid read the same `ProjectType` shape, so this site is listed the same way as the other projects.
- **Small shared parts.** Sections are built from a few shared pieces (`ChipList`, `LinkButton`, `ExternalLink`, card and focus-ring class constants) and `cn()` composes their classes.
- **Dark / light theme.** A tiny inline script in `<head>` applies the saved theme (or the OS preference) before first paint, so the page never flashes the wrong colours. The toggle reads the theme through `useSyncExternalStore`, and the section nav tracks the visible section the same way, without `useEffect`.
- **No third-party requests.** The Poppins font is self-hosted via `@fontsource`, and images are pre-converted to WebP with metadata stripped.
- **Accessible by default.** Semantic landmarks, labelled icon buttons, visible focus rings and `prefers-reduced-motion` support.

## Project layout

```
src/
  app/            layout, page, global styles, icon
  components/     Section, SectionNav, ThemeToggle, SiteFooter
    sections/     one component per page section
    projects/     featured card, project card, screenshot, stack chips
    ui/           ChipList, LinkButton, ExternalLink, shared class constants
  content/        every word on the page, typed, one module per section
  lib/            cn(), theme and active-section helpers
public/images/    photo and project screenshots (WebP)
public/apps/      prebuilt bundles of the demo apps the project cards open
tests/e2e/        end-to-end check of the built site
```

## Running it

```bash
npm ci
npm run dev       # http://localhost:3000
npm run check     # typecheck + lint + format check + production build
npm run e2e       # end-to-end check of out/ (run after npm run build)
```

The end-to-end check serves `out/` on `127.0.0.1:8735` with the production security headers and drives Chromium through every section, the nav, the theme toggle and each demo app, failing on any console error. It also feeds every text slot a 45-character word to prove nothing overflows. It needs Playwright with Chromium installed; set `PLAYWRIGHT_MODULE` to Playwright's `index.mjs` if it is installed outside this project. `npm run e2e -- --shots <dir>` also saves full-page screenshots at 390×844 and 1440×900 in light and dark.

`npm run build` produces the deployable site in `out/`. CI runs the same checks on every push.
