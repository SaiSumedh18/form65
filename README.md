# FORM / 65

An interactive mechanical keyboard concept by Sai Sumedh Kaveti. React 19, TypeScript, Vite, and CSS 3D transforms; no WebGL engine, backend, analytics, payment collection, or secret keys.

## Run

```sh
npm ci
npm run dev
```

`npm run lint` checks code; `npm run build` creates a static production bundle in `dist/`.

## Features

- Scroll-linked exploded assembly: keycaps, switches/plate, PCB, and case.
- Three case finishes, three keycap palettes, three switch options: 27 configurations.
- Immediate preview and deterministic illustrative pricing.
- Inspect/assemble toggle, shareable URL, reset, quantity limits, cart removal.
- Browser-local saved cart with malformed-storage recovery.
- Native accessible modal, keyboard focus handling, live price/status announcements.
- Responsive layout and reduced-motion support.

All products, prices, switch forces, and visual specifications are illustrative. This is a portfolio demo, not a real store or manufacturing design. The CSS keyboard is a stylized 65% concept, not an exact physical key layout. Google Fonts supplies typography; system-font fallbacks work offline. No third-party product photography or models are used.

The configuration is encoded in `?case=blue&caps=arctic&switch=silent`. The cart is stored on the current browser/device only, under `form65-cart`; it is not account-synced. Share links must use a public deployment to work on other devices.

## Verification

- Lint and TypeScript/Vite production build.
- Browser: Blue + Arctic + Silent = $219; quantity two = $438.
- Cart survives reload; shared URL restores choices.
- Desktop and 390px mobile visual checks.

## Deploy

The output is static and can be hosted on GitHub Pages or Vercel. Live site: https://saisumedh18.github.io/form65/

Source: https://github.com/SaiSumedh18/form65

GitHub Actions runs lint and build before publishing to GitHub Pages on each push to main.

## Expanded product flow

Hash-based routes work on static hosting without rewrite rules:
- `#/home`: animated product story
- `#/build`: dedicated builder with live preview and inspect toggle
- `#/summary`: line-item price breakdown and downloadable text build sheet
- `#/cart`: full saved collection, quantities, edit, and removal
- `#/details`: switch comparison and FAQ

The quick cart drawer links to the full collection. Editing replaces the saved configuration (merging identical configurations with the nine-unit limit); cancelling preserves the saved item. Share links restore options. All prices are illustrative, not real checkout prices.
