# Hexora

Lyrics site powered by Next.js and Supabase, configured for GitHub Pages static deployment.

## Local development

1. Create `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-public-anon-key
```
2. Run:
```bash
npm install
npm run dev
```

## GitHub Pages deploy

1. Push this repo to GitHub.
2. In GitHub repo settings, go to `Settings > Secrets and variables > Actions`.
3. Add these repository secrets:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. In `Settings > Pages`, set source to `GitHub Actions`.
5. Push to `main` branch. Workflow at `.github/workflows/deploy.yml` will publish.

## Supabase schema

Run SQL from `supabase/schema.sql`.
