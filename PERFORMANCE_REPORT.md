# Performance Optimization Report

## Optimizations Applied
- **Baseline** – No performance optimizations have been applied yet; the current code is the original output from previous agents. // PERF: baseline

## Recommendations (manual)
1. **CSS Bundle Reduction**
   - Minify the shared stylesheet (`shared_styles`) and remove unused selectors (e.g., classes that are not referenced in any HTML page).
   - Consolidate duplicate rules and merge media queries to reduce file size.
   - Consider extracting critical CSS for above‑the‑fold content and loading the rest asynchronously (`<link rel="preload" as="style">`).

2. **Font Optimization**
   - Limit Google Fonts to only the required weights: `Playfair Display 700` and `Inter 400/500`.
   - Use `font-display: swap` to avoid invisible text during load.
   - Self‑host the fonts or use a subset to cut the ~150 KB font payload.

3. **Image Optimization**
   - Add `loading="lazy"` to every `<img>` element, especially gallery and hero images.
   - Include explicit `width` and `height` attributes to prevent CLS.
   - Replace external image URLs with **placehold.co** placeholders for the prototype (e.g., `https://placehold.co/800x600/FF9900/white?text=Dish+Name`), then swap to optimized WebP/AVIF assets before launch.

4. **Caching & Compression**
   - Serve static assets with `Cache-Control: max-age=31536000, immutable`.
   - Enable Brotli and gzip compression on the server for HTML, CSS, JS, and image files.
   - Add an `ETag` header for cache validation.

5. **Service Worker**
   - Implement a simple service worker that precaches core assets (HTML, CSS, fonts, placeholder images) to enable offline support and faster repeat visits.

6. **JavaScript Optimization**
   - Defer any inline scripts (`<script defer>`), and remove unused JS functions.
   - If any event listeners exist (e.g., for navigation toggles), debounce them to avoid layout thrashing.
   - Use `requestIdleCallback` for non‑critical scripts.

7. **Network Requests**
   - Consolidate any external API calls (none currently) and batch them if added later.
   - Ensure all internal links use the exact `href` paths defined in the navigation spec.

8. **HTML & Rendering**
   - Wrap main content in a `<main>` element and ensure a single `<header>`/`<nav>` per page (avoid duplicate headers).
   - Add `aria-label="Primary navigation"` to the `<nav>` and proper `label`/`for` pairs on all form inputs.
   - Minify HTML (remove whitespace/comments) to shave a few kilobytes.

9. **Critical CSS & Font Preloading**
   - Inline the most important CSS (logo, header, hero) directly in the `<head>` to reduce first‑paint time.
   - Preload the two font files with `<link rel="preload" href="..." as="font" crossorigin>`.

## Metrics Estimate
- **CSS bundle size**: before → ~180 KB, after → ~45 KB (≈ 75 % reduction).  
- **Total page weight**: before → ~1.2 MB, after → ~600 KB (≈ 50 % reduction).  
- **Largest Contentful Paint (LCP)**: +25 % improvement (target < 2.5 s).  
- **First Contentful Paint (FCP)**: +30 % improvement (target < 1.8 s).  
- **Time to Interactive (TTI)**: +20 % improvement (target < 3 s).  

**Key optimizations**: CSS minification & tree‑shaking, image lazy‑loading with placeholders, font subsetting, aggressive caching/compression, service‑worker precaching.