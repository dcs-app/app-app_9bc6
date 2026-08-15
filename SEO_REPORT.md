# SEO Recommendations for **Haveli Restaurant Mumbai**

## 1. Meta Tags (Add to `<head>` of every HTML page)

| Page | Title (50‑60 chars) | Description (150‑160 chars) |
|------|---------------------|------------------------------|
| Home (`index.html`) | Haveli Restaurant Mumbai – Heritage Indian Dining | Experience authentic Indian heritage cuisine in Mumbai’s iconic Haveli. Book a table, explore the menu, and view our heritage gallery. |
| Menu (`menu.html`) | Menu – Haveli Restaurant Mumbai | Browse our curated Indian menu – veg, non‑veg, and specialty dishes with pricing and dietary tags. |
| Reservation (`reservation.html`) | Reserve a Table – Haveli Restaurant Mumbai | Secure your dining experience online. Choose date, time, party size, and any dietary notes. |
| About (`about.html`) | About Us – Haveli Restaurant Mumbai | Learn the story behind Haveli’s royal heritage, chef background, and sourcing philosophy. |
| Gallery (`gallery.html`) | Photo Gallery – Haveli Restaurant Mumbai | View high‑resolution images of our dishes, interior décor, and live kitchen moments. |
| Contact (`contact.html`) | Contact – Haveli Restaurant Mumbai | Get in touch, find our Mumbai address, opening hours, and send an inquiry via the contact form. |
| Private Dining (`private-dining.html`) | Private Dining – Haveli Restaurant Mumbai | Host exclusive events in our regal private dining spaces with customized menus. |

**Common tags to include on every page**

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.havelirestaurantmumbai.com/[PAGE]">
```

## 2. Open Graph & Twitter Card Tags

Add the following to each page (replace `[PAGE]` with the actual page URL and adjust titles/descriptions accordingly):

```html
<!-- Open Graph -->
<meta property="og:title" content="[Title] | Haveli Restaurant Mumbai">
<meta property="og:description" content="[Description]">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.havelirestaurantmumbai.com/[PAGE]">
<meta property="og:image" content="https://placehold.co/1200x630/131921/FF9900?text=Haveli+Restaurant+Mumbai">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Title] | Haveli Restaurant Mumbai">
<meta name="twitter:description" content="[Description]">
<meta name="twitter:image" content="https://placehold.co/1200x630/131921/FF9900?text=Haveli+Restaurant+Mumbai">
<meta name="twitter:site" content="@HaveliRestaurant">
<meta name="twitter:creator" content="@HaveliRestaurant">
```

## 3. Structured Data (JSON‑LD)

Insert a `<script type="application/ld+json">` block on each page.

### a. Site‑wide (e.g., on `index.html`)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Haveli Restaurant Mumbai",
  "url": "https://www.havelirestaurantmumbai.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.havelirestaurantmumbai.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### b. Organization (same block can be reused)

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Haveli Restaurant Mumbai",
  "url": "https://www.havelirestaurantmumbai.com/",
  "logo": "https://placehold.co/400x300/FF9900/white?text=Haveli+Logo",
  "image": "https://placehold.co/1200x630/131921/FF9900?text=Haveli+Restaurant+Mumbai",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bandra West",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400050",
    "addressCountry": "IN"
  },
  "telephone": "+91-22-1234-5678",
  "servesCuisine": ["Indian"],
  "priceRange": "₹₹",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "12:00",
      "closes": "23:30"
    }
  ]
}
```

### c. BreadcrumbList (add to each page)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.havelirestaurantmumbai.com/index.html"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Page Name]",
      "item": "https://www.havelirestaurantmumbai.com/[PAGE]"
    }
  ]
}
```

### d. Product (for each menu item on `menu.html`)

For each dish, add a `MenuItem` schema inside a `Menu`:

```json
{
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Haveli Menu",
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "Starters",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Paneer Tikka",
          "description": "Grilled cottage cheese marinated in spices.",
          "offers": {
            "@type": "Offer",
            "price": "250",
            "priceCurrency": "INR"
          }
        }
        // repeat for each menu item
      ]
    }
  ]
}
```

## 4. Image Optimization

- Replace all external placeholder images with **placehold.co** URLs that include the dish or theme name (e.g., `https://placehold.co/400x300/FF9900/white?text=Paneer+Tikka`).
- Use `loading="lazy"` on every `<img>` tag.
- Provide descriptive `alt` attributes for accessibility and SEO.

## 5. Heading Hierarchy & Semantic HTML

- Ensure each page starts with a single `<h1>` that matches the page title.
- Use `<h2>` for major sections, `<h3>` for subsections, etc.
- Wrap the main content in `<main>`, navigation in `<nav>`, and footer in `<footer>` (already present, but verify no duplicate `<header>` elements).

## 6. Internal Linking & Anchor Text

- Link from the homepage to the most important pages (`Menu`, `Reservation`, `Gallery`) using keyword‑rich anchor text.
- Add “Back to top” links where appropriate for long pages.

## 7. Performance & Core Web Vitals

- Serve all images via **placehold.co** (lightweight) or optimized WebP files.
- Minify CSS/JS and defer non‑critical scripts.
- Enable HTTP/2 and set proper caching headers (e.g., `Cache-Control: max-age=31536000` for static assets).

## 8. Accessibility & UX

- Ensure color contrast meets WCAG AA (especially for the dark header/footer).
- Provide focus styles for keyboard navigation.
- Add `aria-label` to the navigation toggle (hamburger) for screen readers.

## 9. Sitemap & Robots.txt (already generated)

- Verify that `https://www.havelirestaurantmumbai.com/sitemap.xml` is accessible and returns a 200 status.
- Ensure `robots.txt` points to the sitemap and does not block any content pages.