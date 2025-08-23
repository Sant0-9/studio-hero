# Studio Hero

High-quality studio site built with Next.js App Router, motion-safe animations, and strong a11y/perf defaults.

## Features
- Next.js App Router with TypeScript
- Case study flow with sticky steps and KPIs
- GSAP ScrollTrigger pinned section (code-split, motion-safe)
- React Hook Form + Zod contact form with honeypot and Lottie success
- Motion-safe animations (Framer Motion) honoring `prefers-reduced-motion`
- Optimized media: Next/Image, lazy content, content-visibility, intrinsic sizing
- Defer non-critical JS via `next/dynamic`

## Stack
- Next.js 15, React 19, TypeScript 5
- Framer Motion, GSAP ScrollTrigger
- RHF + Zod, Lottie React
- Tailwind CSS 4

## Accessibility & Performance
- Keyboard focus rings and logical tab order throughout
- `prefers-reduced-motion` respected across transitions and effects
- Images include width/height to avoid CLS; content-visibility + contain-intrinsic-size to reduce layout cost
- Deferred non-critical JS (hero blobs, scroll progress) via dynamic imports
- Removed unnecessary `will-change`; pinned section cleans up on unmount

## Local Development
```bash
npm install
npm run dev
```
- Type check: `npm run typecheck`
- Lint: `npm run lint`
- Test (lint+typecheck): `npm test`

Environment:
1. Copy `.env.example` to `.env.local` and set values.
2. Restart the dev server after changes.

## Deploy (Vercel)
1. Push to GitHub.
2. Import the repo in Vercel.
3. Set Environment Variables (Project Settings → Environment Variables):
   - `SENTRY_DSN`
   - `POSTHOG_KEY`
   - `POSTHOG_HOST` (optional; defaults to PostHog cloud)
4. Build command: `npm run build`
5. Output: `/.next`

## 90‑Second Demo Script (Outline)
- Land on home: call out animated hero blobs (motion-safe) and crisp type.
- Scroll: point out top scroll progress and marquee.
- Open Work: filter chips animate, cards tilt subtly; keyboard navigate a card.
- Open a case study: sticky steps, KPI counters; show pinned GSAP section; mention reduced motion.
- Contact: submit invalid → inline errors; valid → 800ms wait, toast + success Lottie; show reduced-motion fallback.

## Architecture (Simplified)
```
app/
  layout.tsx        # Shell, Nav/Footer, Providers, Toaster, progress bar (client-only)
  page.tsx          # Home; code-split hero blobs
  work/             # Listing and [slug] details; case study + pinned section
  contact/          # page.tsx (server) + ContactForm.tsx (client)
components/
  animations/       # HeroBlobs, Tilt, Reveal
  case-study/       # CaseStudy
  cards/            # ProjectCard
  ui/               # Toaster
lib/
  content.ts        # Site/work content
  validations.ts    # Zod schemas (contact)
  lottie/           # success.json
```
- Client-only bits are dynamically imported where possible
- Animations bail when `prefers-reduced-motion` is enabled
```