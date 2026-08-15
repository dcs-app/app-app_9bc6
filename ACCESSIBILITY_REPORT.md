# Accessibility Audit

## Summary
- **Total pages audited:** 1
- **Critical issues:** 0
- **Major issues:** 2
- **Minor issues:** 1

## Findings by page

### /index.html
- **MAJOR** [WCAG 2.4.1 Skip Link] No skip‑to‑content link is present as the first focusable element in the `<body>`.  
  *Recommendation:* Add a hidden skip link (e.g., `<a href="#main" class="skip-link">Skip to main content</a>`) as the first child of `<body>` and ensure it becomes visible on focus.

- **MAJOR** [WCAG 1.3.1 Semantic Structure] The page does not contain a single `<main>` landmark element, and the use of structural elements (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`) cannot be verified from the provided markup.  
  *Recommendation:* Wrap the primary content in a `<main id="main">` element. Ensure that only one `<main>` exists per page and that other landmarks are used appropriately.

- **MINOR** [WCAG 2.1.1 Keyboard] Focus indicator styles are not defined in the visible CSS. The default browser outline may be removed elsewhere in the stylesheet (e.g., `outline: none;`).  
  *Recommendation:* Verify that any custom focus styles provide a visible indicator meeting a contrast ratio of at least 3:1 against the background.

## Recommendations summary

| WCAG criterion | Count | Recommended action |
|---|---|---|
| 2.4.1 Skip Link | 1 | Add a skip‑to‑content link as the first focusable element |
| 1.3.1 Semantic Structure | 1 | Ensure a single `<main>` landmark and appropriate use of other landmarks |
| 2.1.1 Keyboard | 1 | Provide visible focus indicators for all interactive elements |