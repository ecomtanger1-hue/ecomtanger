# Cloudflare Pages + Supabase Deployment

## 1. Create Supabase

1. Create a Supabase project.
2. Open the SQL editor and run `supabase-schema.sql`.
3. In Supabase Auth, create the admin user with email/password.
4. Confirm the `product-images` storage bucket exists and is public.

## 2. Connect The Frontend

1. Open `supabase-config.js`.
2. Replace:
   - `YOUR_SUPABASE_PROJECT_URL`
   - `YOUR_SUPABASE_ANON_KEY`
3. Keep `storageBucket` as `product-images` unless you changed it in Supabase.

The anon key is designed to be public. Security comes from the Supabase Row Level Security policies in `supabase-schema.sql`.

## 3. Deploy To Cloudflare Pages

1. Push this folder to GitHub.
2. In Cloudflare Pages, create a project from that GitHub repo.
3. Use these settings:
   - Framework preset: none
   - Build command: empty
   - Output directory: `/`
4. Deploy a preview first.
5. Test storefront, product pages, admin login, image upload, and orders.
6. Promote the preview to production.

## 4. Production Checklist

- Storefront loads products from Supabase.
- Admin login uses the Supabase email/password account.
- Product images upload to Supabase Storage.
- Rich description images upload to Supabase Storage.
- Product page renders the exact rich description from the editor.
- Checkout creates a Supabase order before opening WhatsApp.
- Admin dashboard can update order status.
- Anonymous visitors cannot edit products/settings/orders.
