# PostHog Error Tracking Report

> ⚠️ **Needs your attention**
> - Add `POSTHOG_API_KEY`, `POSTHOG_PROJECT_ID`, and `POSTHOG_HOST` to the Vercel Production build environment, then redeploy.
> - Ensure Vercel also provides `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to the deployed app.
> - If `.replit` is an active deployment, configure the same five variable names there and change it to run a production build; if it is stale, no action is needed.

## What error tracking does now

Uncaught browser exceptions and promise rejections are captured by PostHog's browser exception autocapture, initialized in `instrumentation-client.ts`. Next.js root render failures are reported by `app/global-error.tsx` with `posthog.captureException`. Node uncaught exceptions and unhandled rejections are covered by the server client in `lib/posthog-server.ts`, and `instrumentation.ts` starts that client and exports PostHog's `createOnRequestError` hook for Next.js server request errors.

The duplicate browser initialization was removed from `components/posthog-provider.tsx`; `instrumentation-client.ts` is now the sole browser initializer. The existing server capture remains in `lib/posthog-server.ts` and `instrumentation.ts`.

## Source-map upload

Source-map upload is already wired in `next.config.mjs`; the existing package configuration is in `package.json` and `bun.lock`. The exact production build command is:

```sh
bun run build
```

The uploader reads `POSTHOG_API_KEY`, `POSTHOG_PROJECT_ID`, and `POSTHOG_HOST`. With those variables present where the build runs, every production build is set up to upload source maps and delete them after upload. The local `.env` contains the three uploader variables, but the repository has no CI workflow or deploy configuration to edit. Vercel's project settings control the production build.

## Verification

The verified command was `bun run build`, and it passed: Next.js compilation, TypeScript checking, page-data collection, and static generation all completed successfully. The build loaded `.env`; the uploader found 100 source-map pairs and 78 chunks, and reported `0` uploaded with `59` skipped because those eligible chunks were already present (`0` too large). No release name was provided by the verification handoff, so none is claimed here. Existing missing-debug-ID and duplicate-ID warnings were non-fatal.

## What you still need to do

1. In the Vercel project settings, add the existing source-map upload credential as the sensitive `POSTHOG_API_KEY` environment variable for Production. Add `POSTHOG_PROJECT_ID` with value `766018` and `POSTHOG_HOST` under those exact names. Add them to Preview too only if preview builds should upload symbol sets, then redeploy.
2. In the same Vercel settings, ensure the deployed app has `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` under those exact names, with the runtime/build scope required by each deployed environment. Next.js public variables must be present during the build.
3. If Replit is an active deployment, add `POSTHOG_API_KEY`, `POSTHOG_PROJECT_ID`, `POSTHOG_HOST`, `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`, and `NEXT_PUBLIC_POSTHOG_HOST` to Replit Secrets/environment, and change that deployment externally to run a production build followed by the production server. The checked-in `.replit` only runs `npm run dev`; its active status could not be verified. If it is stale, no action is needed.

No release-linking wiring was added. There is no repository-controlled deploy path that resolves a release ID; Vercel's own git metadata should remain responsible for build identity, but the external Vercel configuration could not be inspected here.

## How to verify in PostHog

Trigger an error in the deployed app and inspect [Error Tracking](https://us.posthog.com/project/766018/error_tracking). Uploaded symbol sets appear at [Error Tracking configuration](https://us.posthog.com/project/766018/error_tracking/configuration). After the next credentialed production deployment, confirm that the exception has a readable, symbolicated stack trace.
