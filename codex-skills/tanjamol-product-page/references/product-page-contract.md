# Product Page Contract

## Data Fields

Use existing product/admin fields first:

- `id`, `sku`, `active`
- `title`
- `summary` or `box.summary`
- `description`
- `price`, `oldPrice`
- `images`
- `variants`
- `stock`
- `highlights`
- `box`, `box.specs`
- `box.offer.ctaLabel`
- `rating`, `reviewCount`, `socialProof` if present

Safe fallbacks:

- No images: show a neutral placeholder.
- No variants: hide the variant selector.
- No old price: hide old price and discount badge.
- No rating/reviews: hide rating row.
- No stock: show neutral availability/COD language.
- No box/specs: use a short generic box-content fallback or hide the block.

## Top Layout

Desktop:

- Arabic/RTL visual order from left to right:
  - Checkout form
  - Product info
  - Gallery
- French/LTR visual order from left to right:
  - Gallery
  - Product info
  - Checkout form

Mobile:

- Gallery
- Product info
- Variant/quantity choices
- Checkout form
- Add-ons
- Content sections

When CSS grid is affected by `dir="rtl"`, lock the product hero grid itself to physical `direction: ltr` on desktop and restore text direction inside each column.

## Component Behavior

Gallery:

- First image is the cover/main image.
- Remaining images are thumbnails.
- Active thumbnail has a green state.
- Switching images should animate subtly.

Variants:

- Color-like variants use circular swatches.
- Other variants use pill buttons.
- Disabled variants are visually muted if stock is managed.

Checkout:

- Required fields: name, phone, address, quantity.
- Keep the WhatsApp CTA large and green.
- Use a proper filled WhatsApp mark, not a broken line icon.
- Show COD reassurance once near the bottom of the form.

Totals:

- Total = `(base price + variant extra price) * quantity + selected add-ons`.
- Update all visible total nodes after quantity, variant, or add-on changes.
- Keep WhatsApp message and saved order total identical.

Add-ons:

- Use related/other active products.
- Toggle selected state.
- Include selected add-ons in order total and WhatsApp message.

## Validation Checklist

- `node --check product-page.js`
- Product page route loads with a real product id.
- Arabic and French language toggles update text and desktop column order.
- Mobile sticky CTA jumps to the order form.
- Thumbnail switching works.
- Quantity, variant, and add-ons update total.
- WhatsApp submit still redirects.
- No demo product text appears in the live template unless it comes from the product data.
