# Rescoldo — React app

Vite + React + React Router. Same design as the Claude Design project, ported to a real React app.

## Run locally
```
npm install
npm run dev
```

## Build for production
```
npm run build
```
Outputs static files to `dist/` — deploy that folder anywhere (Netlify, Vercel, GitHub Pages, any static host).

## Structure
- `src/pages/` — Home, Catalogo, Sobre, Producto (one route per product: `/producto/:slug`)
- `src/components/Layout.jsx` — nav + footer shared across pages
- `src/components/ImagePlaceholder.jsx` — stand-in for real photos
- `src/data/products.js` — catalog data (17 products across 5 categories)
- `src/config.js` — WhatsApp number + Instagram link
- `src/styles/design-system.css` — the "Organic" design system tokens/components from the Claude Design project

## Before going live
- `src/config.js`: replace `WHATSAPP_NUMBER` (currently placeholder `5491100000000`) and `INSTAGRAM_URL`.
- `src/data/products.js`: replace made-up measures/descriptions with real ones, add real prices if wanted.
- Replace `ImagePlaceholder` usages with real `<img>` photos.
