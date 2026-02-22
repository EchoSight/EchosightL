# EchoSight website (GitHub Pages ready)

This repository contains a like-for-like recreation of the full EchoSight marketing website, built as a static React site that can be hosted on GitHub Pages.

## What is included

- Full multi-page website experience via `HashRouter` routes:
  - Home
  - Services
  - Pricing
  - About
  - Case Studies
  - FAQ
  - Contact
  - Privacy
  - Terms
- Shared global layout components (header, footer, cookie consent, navigation).
- Tailwind + shadcn UI styling.
- Static GitHub Pages compatibility configured with:
  - `base: "./"` in Vite config
  - `HashRouter` for route compatibility without server rewrites
  - GitHub Actions workflow at `.github/workflows/deploy.yml`

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In **Settings → Pages**, set Source to **GitHub Actions**.
3. Push to `main`.
4. The workflow in `.github/workflows/deploy.yml` will build and publish `dist/`.

## Notes

- The project intentionally uses hash-based routing for static hosting.
- A duplicate Pages workflow was removed to avoid conflicting deploy jobs.
