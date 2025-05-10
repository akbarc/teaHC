-- Create the pre-reservations table
create table pre_reservations (
  id bigint primary key generated always as identity,
  email text not null,
  landing_page text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  status text default 'pending'::text not null,
  discount_code text,
  metadata jsonb default '{}'::jsonb
);

-- Enable Row Level Security
alter table pre_reservations enable row level security;

-- Create policy to allow public to insert pre-reservations
create policy "public can insert pre-reservations"
on public.pre_reservations
for insert to anon
with check (true);

-- Create policy to allow public to read their own pre-reservations
create policy "public can read own pre-reservations"
on public.pre_reservations
for select to anon
using (email = current_user);

-- Create index on email for faster lookups
create index pre_reservations_email_idx on pre_reservations (email);

-- Create index on landing_page for analytics
create index pre_reservations_landing_page_idx on pre_reservations (landing_page); 