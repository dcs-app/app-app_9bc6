# SEO Report for **Haveli Restaurant Mumbai**

## 1. Meta Tags (to be added in `<head>` of every HTML page)

| Page | Title (≈50‑60 chars) | Description (150‑160 chars) | Robots |
|------|----------------------|------------------------------|--------|
| **Home** | Haveli Restaurant Mumbai – Authentic Indian Cuisine | Experience heritage Indian dining in Mumbai. Enjoy classic veg & non‑veg dishes, elegant ambience, and easy online reservations. | index, follow |
| **Menu** | Haveli Mumbai Menu – Veg & Non‑Veg Indian Delights | Browse our curated North Indian menu with fresh ingredients, vegetarian, non‑vegetarian, and Jain options. Prices and dish details included. | index, follow |
| **Reservation** | Reserve a Table at Haveli Restaurant Mumbai | Book your table online instantly. Choose date, time, party size, and special dietary preferences for a seamless dining experience. | noindex, follow |
| **About** | About Haveli Restaurant – Heritage Indian Elegance | Learn the story behind Haveli’s royal heritage, chef’s philosophy, and our commitment to authentic Indian flavors. | index, follow |
| **Gallery** | Haveli Mumbai Gallery – Food & Ambience Photos | Browse high‑resolution images of our signature dishes, interior décor, and festive celebrations at Haveli Restaurant. | index, follow |
| **Private Dining** | Private Dining at Haveli – Events & Banquets | Discover private dining options for celebrations, corporate events, and bespoke menus at our elegant Mumbai venue. | index, follow |
| **Contact** | Contact Haveli Restaurant – Mumbai Location & Hours | Find our address, operating hours, parking details, and contact form for inquiries or reservations. | index, follow |

**Common tags for all pages**

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.havelirestaurantmumbai.com/[PAGE].html">
```

## 2. Open Graph & Twitter Card Tags

Add the following tags to each page (replace `[PAGE]` and `[IMAGE_URL]` accordingly).

```html
<!-- Open Graph -->
<meta property="og:title" content="[PAGE TITLE] | Haveli Restaurant Mumbai">
<meta property="og:description" content="[PAGE DESCRIPTION]">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.havelirestaurantmumbai.com/[PAGE].html">
<meta property="og:image" content="[IMAGE_URL]">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[PAGE TITLE] | Haveli Restaurant Mumbai">
<meta name="twitter:description" content="[PAGE DESCRIPTION]">
<meta name="twitter:image" content="[IMAGE_URL]">
<meta name="twitter:site" content="@HaveliMumbai">
<meta name="twitter:creator" content="@HaveliMumbai">
```

**Suggested OG/Twitter images (use placehold.co as per project guidelines):**

| Page | Image URL |
|------|-----------|
| Home | `https://placehold.co/1200x630/131921/FF9900?text=Haveli+Restaurant+Mumbai` |
| Menu | `https://placehold.co/1200x630/131921/FF9900?text=Menu+Haveli+Mumbai` |
| Reservation | `https://placehold.co/1200x630/131921/FF9900?text=Reserve+Your+Table` |
| About | `https://placehold.co/1200x630/131921/FF9900?text=About+Haveli+Restaurant` |
| Gallery | `https://placehold.co/1200x630/131921/FF9900?text=Gallery+Haveli+Mumbai` |
| Private Dining | `https://placehold.co/1200x630/131921/FF9900?text=Private+Dining+Haveli` |
| Contact | `https://placehold.co/1200x630/131921/FF9900?text=Contact+Haveli+Mumbai` |

## 3. Structured Data (JSON‑LD)

Add a `<script type="application/ld+json">` block to **every** page containing the following base markup (adjust `url`, `image`, and `address` as needed).

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Haveli Restaurant Mumbai",
  "url": "https://www.havelirestaurantmumbai.com",
  "logo": "https://placehold.co/400x300/FF9900/white?text=Haveli+Logo",
  "image": "https://placehold.co/1200x630/131921/FF9900?text=Haveli+Restaurant+Mumbai",
  "telephone": "+91-22-1234-5678",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Marine Drive",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400002",
    "addressCountry": "IN"
  },
  "servesCuisine": ["Indian", "North Indian"],
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
        "Saturday"
      ],
      "opens": "12:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "13:00",
      "closes": "22:00"
    }
  ],
  "hasMenu": "https://www.havelirestaurantmumbai.com/menu.html",
  "acceptsReservations": true,
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "18.9600",
    "longitude": "72.8258"
  }
}
```

**Additional schema per page**

- **Home**: Add `WebSite` with `SearchAction` (even if search is not functional yet) to improve visibility.
- **Menu**: Add `ItemList` for each menu category (Veg, Non‑Veg, Jain) with `Product` items (name, description, price, image).
- **Reservation**: Add `Reservation` schema (`Reservation` type) with `reservationStatus` set to `ReservationConfirmed` when a booking is made (via JavaScript after form submit).
- **Gallery**: Add `ImageObject` entries for each featured photo.
- **Contact**: Add `ContactPoint` for customer service.

## 4. Semantic HTML Recommendations

| Issue | Recommendation |
|-------|----------------|
| **Heading hierarchy** | Ensure each page starts with `<h1>` (unique per page). Use `<h2>` for sections, `<h3>` for subsections. No skipping levels. |
| **Main landmark** | Wrap primary content in `<main>` element. |
| **Navigation** | Use the exact `<nav><ul><li>` structure defined by the design system. Add `aria-label="Primary navigation"` and `role="navigation"`. |
| **Article/Section** | For menu categories, use `<section>` with an accessible `<h2>`. For blog‑style content (e.g., heritage story), use `<article>`. |
| **Footer** | Use a single `<footer>` element with the simple centered markup (no columns). Include business name, tagline, navigation links, and copyright. |
| **Forms** | Add `label` elements linked via `for`/`id`. Use `aria-required="true"` where needed. Provide clear error messages for validation. |
| **Images** | Use descriptive `alt` text (e.g., `alt="Butter Chicken – creamy tomato curry"`). Include `width` and `height` attributes to prevent CLS. |
| **Schema markup** | Place JSON‑LD **after** the opening `<head>` tag but before any other scripts to ensure it’s parsed early. |
| **Performance** | Optimize images using the placehold.co placeholders for now; replace with optimized WebP/AVIF assets before launch. |

## 5. URL & Linking Strategy

- Use **clean, descriptive URLs** as listed in the sitemap.
- Ensure every internal link uses the exact `href` paths (e.g., `<a href="/menu.html">Menu</a>`).
- Add `rel="noopener noreferrer"` to any external links.
- Implement a **breadcrumb** navigation on each page using `BreadcrumbList` schema for better SERP appearance.

## 6. Additional SEO Enhancements

1. **Local SEO** – Register the restaurant on Google Business Profile, include NAP (Name, Address, Phone) consistently across the site.
2. **Schema for Reviews** – Collect and embed customer reviews using `Review` schema on the home or testimonial section.
3. **FAQ Section** – Add a collapsible FAQ on the contact page with `FAQPage` schema (e.g., “Do you offer vegetarian options?”).
4. **Sitemap Updates** – Regenerate `sitemap.xml` whenever a new page or blog post is added.
5. **Robots.txt** – Keep it simple (as above) but consider disallowing any temporary staging directories if they exist.
6. **Page Speed** – Leverage lazy‑loading for gallery images (`loading="lazy"`), minify CSS/JS, and enable compression on the server.

## 7. Next Steps for the Front‑End Team

1. Insert the meta, OG, and Twitter tags into each HTML `<head>` as per the table.
2. Add the JSON‑LD scripts (base `Restaurant` schema + page‑specific additions).
3. Refactor HTML to follow the semantic structure recommendations.
4. Verify the final markup with Google’s Rich Results Test and Screaming Frog.
5. Deploy the updated `sitemap.xml` and `robots.txt` to the `public/` folder.