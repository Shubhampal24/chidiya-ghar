# Chidiya Ghar — React Migration

This is the same site, migrated from the original single-string
`rawHtml.js` (parsed via `html-react-parser` with vanilla-JS DOM hacks)
into real, componentized React/JSX. Every element, class, inline style
and text node was converted 1:1 from the original markup, so the visual
output — fonts, spacing, colors, layout — is unchanged.

## What changed under the hood

- The one giant HTML blob is now split into proper components under
  `src/components/`: `Header`, `HeroSection`, `WhoWeAreSection`,
  `ServicesSection`, `AccommodationsSection`, `ExtraServicesSection`,
  `OfferSection`, `GallerySection`, `ManagementSection`,
  `TestimonialsSection`, `NewsSection`, `Footer`, and `PluginAssets`
  (the batch of third-party WordPress/Divi plugin scripts).
- `GallerySection` and `TestimonialsSection` used to work by mutating
  the DOM directly through `window.dhSwitchGallery` /
  `window.dhSwitchTestimonial` globals and `document.getElementById`.
  They're now driven by real `useState` — same fade transitions, same
  pagination behavior, just idiomatic React instead of DOM hacks.
- `src/App.jsx` assembles all sections inside the exact original wrapper
  hierarchy (`#page-container > #et-boc > ...`) so none of the Divi CSS
  selectors that key off those ids/classes break.
- `styles.css` is untouched — zero CSS changes.
- Removed the now-unused `html-react-parser` dependency (nothing else
  changed in `package.json`).

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```



