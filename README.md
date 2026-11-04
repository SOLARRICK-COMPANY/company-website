# SolarRick Technologies website

A responsive corporate website for SolarRick Technologies, an early-stage software engineering and digital innovation company operating from Kenya.

The site uses Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion and Lucide icons. Company information comes from the supplied SolarRick profile. No client names, testimonials, published case studies, certifications or contact details have been invented.

## Requirements

- Node.js 20.9 or later
- npm
- A Supabase project only if enquiry submission persistence is required

## Install and run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server refreshes when files change.

## Environment configuration

Copy `.env.example` to `.env.local` and set values only when confirmed:

```dotenv
NEXT_PUBLIC_SITE_URL=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
RATE_LIMIT_SECRET=
```

`NEXT_PUBLIC_SITE_URL` should be the verified production domain, including `https://`. It is used for sitemap URLs and metadata. Until the domain is provided, the sitemap contains no public URLs.

The contact API requires `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, and `RATE_LIMIT_SECRET`. The service-role key and rate-limit secret are server-only and must never use a `NEXT_PUBLIC_` prefix or be committed. Generate a unique random `RATE_LIMIT_SECRET` for each environment. Without these values, the API reports that submissions are unavailable; it does not pretend to accept or store enquiries.

## Supabase enquiry setup

1. Create a Supabase project.
2. Apply `supabase/migrations/20261104000000_create_contact_submissions.sql` in the Supabase SQL editor or using the Supabase CLI.
3. Configure `SUPABASE_URL` and the project service-role key in the local environment and production secret store.
4. Restart the Next.js server and submit a test enquiry. Verify the record in the private `contact_submissions` table.

Row Level Security is enabled and direct table access is revoked from `anon` and `authenticated` roles. The server API uses the service key for a database-enforced limit of five requests per 15 minutes per client address, then inserts accepted enquiries. The rate-limit key is hashed with the server-only secret and old counters are pruned. Ensure the hosting platform sets a trustworthy `x-forwarded-for` header. There is no admin dashboard, email notification, or public enquiry-reading endpoint.

Before public production use, configure provider-level request rate limiting and a CAPTCHA/anti-bot service, and verify the retention and privacy policy appropriate to the business. Keep database backups enabled in Supabase.

## Quality checks

```bash
npm run lint
npm run build
```

## Production

For Vercel, import the repository, configure environment variables in project settings, and deploy. Apply the Supabase migration before enabling enquiry submissions. Set `NEXT_PUBLIC_SITE_URL` to the confirmed domain so the sitemap uses valid absolute URLs.

To run the standalone production output locally:

```bash
npm run build
npm run start
```

## Content maintenance

- Update shared navigation and footer in `components/site-layout.tsx`.
- Update company pages in `app/`.
- The work page intentionally shows capabilities rather than fabricated case studies. Add only projects approved for publication.
- The insights page intentionally has no placeholder articles. Publish only reviewed, approved content.
- Confirm business hours with the founders before adding them to the Contact page.
