create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(full_name) between 2 and 120),
  organization text not null check (char_length(organization) between 2 and 160),
  email text not null check (char_length(email) between 3 and 254),
  phone text not null check (char_length(phone) between 7 and 40),
  service text not null,
  budget_range text check (budget_range is null or char_length(budget_range) <= 160),
  project_description text not null check (char_length(project_description) between 20 and 5000),
  preferred_contact_method text not null check (preferred_contact_method in ('Email', 'Phone call', 'WhatsApp')),
  privacy_consent boolean not null check (privacy_consent),
  status text not null default 'new' check (status in ('new', 'in_progress', 'closed')),
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

revoke all on table public.contact_submissions from anon, authenticated, service_role;
grant insert on table public.contact_submissions to service_role;

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

create index if not exists contact_submissions_status_idx
  on public.contact_submissions (status);

create table if not exists public.contact_submission_rate_limits (
  request_key text primary key,
  window_started_at timestamptz not null default now(),
  request_count integer not null default 1 check (request_count > 0)
);

alter table public.contact_submission_rate_limits enable row level security;
revoke all on table public.contact_submission_rate_limits from public, anon, authenticated, service_role;

create or replace function public.consume_contact_submission_rate_limit(p_request_key text)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  current_window timestamptz := now();
  current_count integer;
begin
  delete from public.contact_submission_rate_limits
  where window_started_at < current_window - interval '1 day';

  insert into public.contact_submission_rate_limits (request_key, window_started_at, request_count)
  values (p_request_key, current_window, 1)
  on conflict (request_key) do update
  set request_count = case
        when public.contact_submission_rate_limits.window_started_at <= current_window - interval '15 minutes' then 1
        else public.contact_submission_rate_limits.request_count + 1
      end,
      window_started_at = case
        when public.contact_submission_rate_limits.window_started_at <= current_window - interval '15 minutes' then current_window
        else public.contact_submission_rate_limits.window_started_at
      end
  returning request_count into current_count;

  return current_count <= 5;
end;
$$;

revoke all on function public.consume_contact_submission_rate_limit(text) from public, anon, authenticated;
grant execute on function public.consume_contact_submission_rate_limit(text) to service_role;
