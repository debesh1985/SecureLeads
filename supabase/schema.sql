create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default timezone('utc'::text, now()),
  service_category text not null,
  service_name text not null,
  full_name text not null,
  email text not null,
  phone text not null,
  address text not null,
  consent boolean not null default false,
  metadata jsonb default '{}'::jsonb
);

create table if not exists subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default timezone('utc'::text, now()),
  first_name text not null,
  last_name text not null,
  email text not null unique,
  consent boolean not null default false
);
