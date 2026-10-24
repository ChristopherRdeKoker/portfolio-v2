# portfolio-v2

My personal portfolio: [portfolio.ccloud.co.za](https://portfolio.ccloud.co.za)

A rebuild of my 2022 plain HTML/SCSS portfolio, written in **Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**.

## How it is built

- **Static export.** `next build` writes plain HTML, CSS and JS to `out/` (`output: "export"`). Nothing runs on the server, so there is no Node.js process to patch or attack; nginx serves the files from my own VPS.
- **Content as data.** All copy lives in typed objects in [`src/content/profile.ts`](src/content/profile.ts); the components in `src/components/` only render it.
- **Dark / light theme.** A tiny inline script in `<head>` applies the saved theme (or the OS preference) before first paint, so the page never flashes the wrong colours. The toggle reads the theme through `useSyncExternalStore`.
- **No third-party requests.** The Poppins font is self-hosted via `@fontsource`, and images are pre-converted to WebP with metadata stripped.
- **Accessible by default.** Semantic landmarks, labelled icon buttons, visible focus rings and `prefers-reduced-motion` support.

## Project layout

```
src/
  app/            layout, page, global styles, icon
  components/     ThemeToggle, SectionNav, Section, sections/*
  content/        profile.ts - every word on the page
  lib/            theme helpers
public/images/    photo and project screenshots (WebP)
```

## Running it

```bash
npm ci
npm run dev       # http://localhost:3000
npm run check     # typecheck + lint + format check + production build
```

`npm run build` produces the deployable site in `out/`. CI runs the same checks on every push.
