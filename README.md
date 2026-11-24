# WinBGM marketing website

A responsive marketing website for [WinBGM](https://github.com/hariharen9/WinBGM), a portable
Windows background and startup manager.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL printed by Vite (usually http://localhost:5173).

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check and build to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint
- `npm run format` — format with Prettier

## Structure

- `src/App.tsx` — home, features, safety, and download pages
- `src/lib/router.tsx` — small history-based router (`Link`, `RouterProvider`)
- `src/lib/routes.ts` — known paths and path-to-page resolution
- `src/components/winbgm-site.tsx` — shared shell, navigation, footer, and product preview
- `src/components/ui/` — shadcn/ui primitives
- `src/styles.css` — design tokens, marketing layout, motion, and reduced-motion support
- `public/` — favicon, icon, and robots.txt

## Routing

The site is a single-page app with four paths: `/`, `/features`, `/safety`, and `/download`.
Navigation uses the History API, so the host must serve `index.html` for unknown paths
(Vite dev and preview do this by default).

## Product accuracy

The content is based on the WinBGM README and source structure. The product preview is a static
marketing representation of the application workflow, not a live connection to a Windows machine.
Sample values are illustrative. Download and source links point to the project's GitHub repository
and Releases page.
