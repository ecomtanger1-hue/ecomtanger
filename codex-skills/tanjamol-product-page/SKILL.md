---
name: tanjamol-product-page
description: Create, redesign, or migrate dynamic COD ecommerce product pages for TanjaMol-style stores. Use when building Arabic/French product pages with mobile-first UX, desktop RTL/LTR layout flipping, image galleries, product information, variants, WhatsApp checkout, payment-on-delivery trust cues, add-ons, landing-page sections, and admin-driven product data.
---

# TanjaMol Product Page

Use this skill to create or update a reusable product page template for a COD ecommerce store, especially a Moroccan mobile-first Arabic/French store using WhatsApp confirmation and payment on delivery.

## Core Rules

- Keep the page dynamic: product title, summary, description, images, price, old price, variants, stock, highlights, specs, box contents, ratings, offer labels, and CTA text must come from product/admin data when available.
- Do not hard-code demo product copy into the live template. Demo copy belongs only in fallback/demo product data or an isolated mock page.
- Preserve Arabic as the default language and `dir="rtl"` unless the user asks otherwise.
- Make desktop layout direction-aware:
  - Arabic/RTL: checkout form on the left, product info center, gallery on the right.
  - French/LTR: gallery on the left, product info center, checkout form on the right.
  - Mobile keeps one stacking order: gallery, product info, variants/quantity, form, add-ons, content blocks.
- Optimize for COD trust: clear WhatsApp confirmation, payment on delivery reassurance, Tangier delivery expectation, and simple replacement/support language.
- Keep edits scoped. Avoid redesigning unrelated homepage/admin behavior unless requested.
- Create a backup before major product page changes.

## Recommended Workflow

1. Inspect the existing app structure.
   - Find the product page HTML, renderer JS, CSS files, store data, and admin/product creation fields.
   - Check whether there is already a mobile/desktop CSS split.

2. If the user is exploring a new design, create an isolated mock page first.
   - Use a separate file such as `mock-product.html`, `mock-product.css`, and `mock-product.js`.
   - Keep it visually complete but disposable.
   - Ask for approval before replacing the live product page.

3. When promoting a mock to the live product page, replace the renderer, not the data.
   - Keep the live product URL and existing product id routing.
   - Reuse existing backend/store loading functions where possible.
   - Keep admin-created products working without extra manual edits.

4. Build the top product section as reusable components:
   - Gallery: cover image as main image, thumbnails hovering or below depending on design, active thumbnail state, smooth transition.
   - Product info: rating if present, title, summary, price, old price, discount, highlights, variants, stock/availability.
   - Checkout: name, phone, address, quantity, selected variant, total, WhatsApp submit button, COD reassurance.
   - Add-ons: related products that can be toggled and included in total/order message.

5. Build supporting landing sections with safe defaults.
   - Benefits/highlights.
   - Product-use or product-story blocks.
   - What is in the box.
   - Delivery and returns.
   - FAQ.
   - Hide optional blocks if no useful data exists.

6. Preserve purchase behavior.
   - Quantity and variant changes must update visible totals.
   - Add-ons must update visible totals if implemented.
   - WhatsApp message must include product, quantity, selected variant, add-ons, customer info, and total.
   - Save the order before redirecting to WhatsApp when the backend service supports it.

7. Cache-bust changed assets.
   - Increment query versions on changed CSS/JS files in HTML, such as `product-page.js?v=38`.

## Visual Standards

- Use a clean, premium, mobile-first product-page feel.
- Prefer white space, soft gray borders, rounded cards, and green as the primary action color.
- Keep the CTA visible but not aggressive.
- On mobile, center the hero content unless the existing design clearly uses another pattern.
- Keep repeated reassurance text minimal.
- Use color swatches for color variants when variants look like colors; use pill buttons for sizes/models/options.
- Keep add-on cards compact and easy to scan.

## Implementation Details

Read `references/product-page-contract.md` when you need a compact contract for data fields, component behavior, and validation checks.

## Validation

Always run:

```bash
node --check product-page.js
```

When there is shared storefront JS, also run:

```bash
node --check script.js
```

Then verify in the browser:

- Product page loads for at least one real product id.
- Arabic desktop layout uses checkout/info/gallery from left to right.
- French desktop layout flips to gallery/info/checkout.
- Mobile layout stacks correctly.
- Thumbnail switching works.
- Variant selection updates the selected state and total.
- Quantity updates the total.
- Add-ons update the total when present.
- WhatsApp redirect message includes the selected product, variant, quantity, add-ons, customer details, and total.
