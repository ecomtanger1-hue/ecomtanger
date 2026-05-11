-- CasaTanja production update
-- Run this in Supabase SQL Editor.
-- It is safe to run more than once.

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  created_at timestamptz not null default now()
);

create table if not exists public.categories (
  id text primary key,
  title jsonb not null default '{"ar":"","fr":""}'::jsonb,
  image_url text,
  active boolean not null default true,
  sort_order integer not null default 100,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_categories_updated_at on public.categories;
create trigger set_categories_updated_at
before update on public.categories
for each row execute function public.set_updated_at();

insert into public.categories (id, title, sort_order)
values
  ('Maison', '{"ar":"المنزل","fr":"Maison"}'::jsonb, 10),
  ('Cuisine', '{"ar":"مطبخ","fr":"Cuisine"}'::jsonb, 20),
  ('Tech', '{"ar":"تقنية","fr":"Tech"}'::jsonb, 30),
  ('Beaute', '{"ar":"جمال","fr":"Beaute"}'::jsonb, 40),
  ('Clothing', '{"ar":"ملابس","fr":"Clothing"}'::jsonb, 50)
on conflict (id) do nothing;

alter table public.admin_users enable row level security;
alter table public.categories enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = auth.uid()
  );
$$;

grant execute on function public.is_admin() to authenticated;

drop policy if exists "Admins can read own admin status" on public.admin_users;
create policy "Admins can read own admin status"
on public.admin_users for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "Public can read active categories" on public.categories;
create policy "Public can read active categories"
on public.categories for select
using (active = true);

drop policy if exists "Admins can manage categories" on public.categories;
create policy "Admins can manage categories"
on public.categories for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Admins can manage products" on public.products;
create policy "Admins can manage products"
on public.products for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Admins can manage orders" on public.orders;
create policy "Admins can manage orders"
on public.orders for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Admins can manage settings" on public.settings;
create policy "Admins can manage settings"
on public.settings for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Admins can read analytics" on public.analytics;
create policy "Admins can read analytics"
on public.analytics for select
to authenticated
using (public.is_admin());

drop policy if exists "Admins can upload product images" on storage.objects;
create policy "Admins can upload product images"
on storage.objects for insert
to authenticated
with check (bucket_id = 'product-images' and public.is_admin());

drop policy if exists "Admins can update product images" on storage.objects;
create policy "Admins can update product images"
on storage.objects for update
to authenticated
using (bucket_id = 'product-images' and public.is_admin())
with check (bucket_id = 'product-images' and public.is_admin());

drop policy if exists "Admins can delete product images" on storage.objects;
create policy "Admins can delete product images"
on storage.objects for delete
to authenticated
using (bucket_id = 'product-images' and public.is_admin());

-- After this succeeds, approve your admin email by running this separately:
-- insert into public.admin_users (user_id, email)
-- select id, email from auth.users where email = 'YOUR_EMAIL@example.com'
-- on conflict (user_id) do nothing;
