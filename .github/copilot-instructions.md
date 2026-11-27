# Personal Website

## Repository commands

The primary application is at the repository root and uses npm; `package-lock.json` is the lockfile.

- Install: `npm install`
- Development server: `npm run dev` (http://localhost:3000)
- Production build: `npm run build`
- Production server: `npm run start`
- Lint all source: `npm run lint`
- Lint one file: `npx eslint app/projects/page.tsx`
- Type-check: `npx tsc --noEmit`
- There is no configured test runner or test script. Do not add or invoke `npm test`; verify behavior with lint, type-check, build, and targeted browser checks.

The `11ty/` directory is a separate Eleventy workspace, not the primary Next.js app:

- Install from that directory: `npm install`
- Build/serve: `npx eleventy --serve`
- Eleventy reads `11ty/src/`, outputs to `11ty/_site/`, and copies `11ty/src/assets/` with the config in `11ty/.eleventy.js`.

## Architecture

- This is a Next.js App Router site. Routes and layouts live under `app/`; shared reusable UI lives under `components/`.
- Static files served from `/` come from `public/`.
- `app/api/carousel-photos/route.ts` returns image paths by reading `public/images/carousel/` at request time. `components/photo-carousel.tsx` fetches that route and performs client-side cycling/navigation.
- `app/layout.tsx` is the root layout: it loads local Geist fonts, global CSS, metadata, and `PostHogProvider`.
- The site uses Tailwind CSS and shadcn-style Radix UI primitives. `app/globals.css` defines the CSS variables and Tailwind base styles; `components/ui/` contains shared primitives.
- `@/*` is mapped to the repository root in `tsconfig.json`. Prefer existing imports such as `@/components/...` and `@/lib/...`.
- PostHog has both browser and server integration:
  - `instrumentation-client.ts` initializes `posthog-js`.
  - `instrumentation.ts` configures server instrumentation and OpenTelemetry log export.
  - `lib/posthog-server.ts` owns the shared `posthog-node` client.
  - `next.config.mjs` proxies `/ingest/*` and `/ingest/static/*` to PostHog and enables source-map upload when build-time credentials are present.
- `PostHogProvider` is currently a pass-through component, so browser analytics initialization is handled by `instrumentation-client.ts`.
- Comments on project pages are loaded through Utterances by `components/utterances-comments.tsx`, using `rk504/rk-website-comments`.

## Environment and configuration

- Copy `.env.example` values into a local `.env` or `.env.local` for local work; `.env` is ignored by git.
- Browser analytics require `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST`.
- Source-map upload additionally requires `POSTHOG_API_KEY`, `POSTHOG_PROJECT_ID`, and `POSTHOG_HOST`.
- Keep credentials out of source and do not make the build depend on analytics configuration; the instrumentation code is expected to warn or degrade safely when variables are absent.

## Repository conventions

- Use the App Router: server components by default, and add `"use client"` only when component code uses hooks, browser APIs, or `posthog-js`.
- Keep route-specific composition in `app/<route>/page.tsx` and reusable UI in `components/`.
- Preserve the fixed header and page layout pattern used across routes: render `Header`, use `main className="min-h-screen flex flex-col"`, and include `SocialLinks` where appropriate.
- Reuse the `Button`, `Card`, and other primitives in `components/ui/` rather than recreating them for each page.
- Use `lib/utils.ts`'s `cn` helper for composed Tailwind class names.
- Use `next/image` for local images and `next/link` for internal navigation. External links should include `target="_blank"` and `rel="noopener noreferrer"` when opening in a new tab.
- Theme colors and spacing are Tailwind/CSS-variable driven; add new colors through the variables in `app/globals.css` and `tailwind.config.ts`.
- Site interactions commonly emit named PostHog events with a snake_case event name and descriptive properties. Add browser captures in client components and keep server logging in `instrumentation.ts` or route handlers.
- Carousel assets belong in `public/images/carousel/`; the API discovers supported JPG/JPEG/PNG/WebP files automatically, so no carousel data list should be maintained manually.
- When changing Next.js or build configuration, be aware that `next.config.mjs` currently has a local modification; inspect the diff rather than assuming the file is clean.
