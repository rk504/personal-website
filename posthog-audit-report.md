# PostHog Audit Report

## Summary

The browser-side Next.js integration is installed, current, env-sourced, and free of duplicate initialization, with static custom event names and appropriate anonymous identity handling for a public site. The urgent issue is that PostHog has observed no `$pageview` or `$screen` events in the last 30 days; the non-canonical init location, direct ingest, and three error-tracking configuration recommendations also need attention.

No application source files were changed during this read-only audit. `posthog-audit-report.md` is the only project file created or updated.

**Counts**

- **Errors**: 1 (must fix)
- **Warnings**: 2 (should fix)
- **Suggestions**: 3 (nice to have)
- **Passes**: 10

**Problematic items**

| Severity | Area | Check | File | Details |
|----------|------|-------|------|---------|
| `error` | Live Data | No live pageview events | — | Verify whether events are landing, confirm the project key and initialization, and ensure pageview autocapture is enabled. |
| `warning` | Installation | Initialization is correct | `components/posthog-provider.tsx:9` | Env-sourced browser init is guarded, but Next.js 16 expects top-level initialization in `instrumentation-client.ts`. |
| `warning` | Event Capture | Captures route through a reverse proxy | `components/posthog-provider.tsx:9` | Browser capture uses the standard PostHog ingest host rather than a first-party reverse proxy. |
| `suggestion` | Live Data | Error alerts not wired | — | No alert is wired for issue-created, issue-reopened, or issue-spiking. |
| `suggestion` | Live Data | Issue summaries disabled | — | PostHog reports that error-tracking issue summaries are disabled. |
| `suggestion` | Live Data | Rate limits not configured | — | No project or per-issue ingestion rate limit is configured. |

## Recommended actions

1. **Live Data · No live pageview events** — PostHog has observed no `$pageview` or `$screen` events in the last 30 days. _Why it matters:_ Missing pageviews make traffic, paths, web funnels, and session-level analysis incomplete or unusable. _Fix:_ Load a production page, check Activity → Live events, and if nothing arrives verify the configured project key and initialization; if other events arrive, ensure pageview autocapture remains enabled. See [Next.js installation docs](https://posthog.com/docs/libraries/next-js).

2. **Installation · Initialization is correct** — The SDK initializes from a client provider module rather than the canonical Next.js 16 `instrumentation-client.ts` entry point. _Why it matters:_ A non-canonical initialization path is easier to omit or execute later than expected, which can lose early pageviews and exceptions. _Fix:_ Move the guarded top-level initialization at `components/posthog-provider.tsx:9` to `instrumentation-client.ts` while preserving environment sourcing and defaults. See [Next.js installation docs](https://posthog.com/docs/libraries/next-js).

3. **Event Capture · Captures route through a reverse proxy** — Browser events go directly to PostHog ingest rather than through a first-party proxy. _Why it matters:_ Ad and tracking blockers can drop a meaningful share of events, biasing funnels, traffic counts, and experiments toward users without blockers. _Fix:_ Add a same-origin Next.js reverse proxy and point `api_host` at it from the initialization currently at `components/posthog-provider.tsx:9`. See [reverse proxy docs](https://posthog.com/docs/advanced/proxy/nextjs-middleware).

4. **Live Data · Error alerts not wired** — No alert is configured for issue-created, issue-reopened, or issue-spiking triggers. _Why it matters:_ Recorded errors can remain unnoticed, increasing detection and response time. _Fix:_ Configure the appropriate error-tracking alerts and destinations. See [error tracking alert docs](https://posthog.com/docs/error-tracking/alerts).

5. **Live Data · Issue summaries disabled** — PostHog reports that automatic issue summaries are disabled. _Why it matters:_ This does not affect captured data, but it removes an optional triage aid that can speed issue review. _Fix:_ Review the recommendation and enable issue summaries if AI-assisted triage is useful for this project. See [error tracking docs](https://posthog.com/docs/error-tracking).

6. **Live Data · Rate limits not configured** — Neither project nor per-issue ingestion limits are configured. _Why it matters:_ Missing ingestion limits can allow a noisy error to consume unexpected volume and cost. _Fix:_ Configure project and per-issue limits in Error tracking → Settings. See [error tracking settings docs](https://posthog.com/docs/error-tracking).

## Full audit

### Installation

Whether the PostHog SDK is present, current, and initialized the way the framework expects. Everything downstream depends on this: a missing or stale SDK silently changes which events exist and which config options are honoured.

| Check | Status | File | Details |
|-------|--------|------|---------|
| PostHog SDK installed | `pass` | `package.json:27` | `posthog-js@1.455.2` (resolved in `package-lock.json`). |
| SDK version up to date | `pass` | `package-lock.json:9421` | Installed 1.455.2, latest 1.455.2. |
| Initialization is correct | `warning` | `components/posthog-provider.tsx:9` | Env-sourced browser init is guarded and configured, but Next.js 16 canonical placement is top-level `instrumentation-client.ts`. |
| One initialization per runtime | `pass` | `components/posthog-provider.tsx:9` | One logical browser-runtime `posthog.init()` call site found. |

#### Assumptions and blind spots

Static inspection confirms the init module is imported by the root layout, but it cannot prove the production bundle receives the expected environment values or executes successfully in every deployment. A deployment configuration mismatch, cached build, or runtime exception could explain the absence of live pageviews despite correct-looking source. Verify a production page load in PostHog Live events and inspect browser network/console diagnostics.

### Identification

Whether the same human maps to one stable `distinct_id` across sessions, runtimes, and logins. Identity defects are the most expensive kind to fix after the fact, because they corrupt person counts, funnels, and retention retroactively rather than going forward.

| Check | Status | File | Details |
|-------|--------|------|---------|
| Stable distinct_id (not session UUID) | `pass` | — | No `posthog.identify()` call or authenticated user identity flow; anonymous tracking is appropriate for this public site. |
| identify() called before captures / flag evals | `pass` | — | No authenticated identity flow; captures appropriately remain anonymous. |
| Same distinct_id across client and server | `pass` | `components/posthog-provider.tsx:9` | Single runtime: only the browser runtime initializes PostHog. |
| reset() called on logout / account switch | `pass` | — | No logout or account-switch flow found. |

#### Assumptions and blind spots

No authentication or account-switch flow was detected in the scanned project source, so anonymous capture may be intentional for this personal website. Identity could still be established by an external script or future auth integration not present in this repository. Verify whether PostHog Persons are expected to remain anonymous before treating the missing identify call as a required change.

### Event Capture

Whether events are named consistently, reach PostHog reliably, and cover the moments the business actually reasons about. Gaps here don't break anything visibly; they just leave the questions you want to ask unanswerable.

| Check | Status | File | Details |
|-------|--------|------|---------|
| Event names are static and consistent | `pass` | `components/social-links.tsx:16` | All 11 explicit `posthog.capture()` calls use static string literal event names. |
| Captures route through a reverse proxy | `warning` | `components/posthog-provider.tsx:9` | Browser capture uses the standard PostHog ingest host from env rather than a first-party reverse proxy, so blockers may drop events. |
| Key activation events captured | `pass` | `app/projects/page.tsx:36` | No auth/billing paths detected; signup and payments appear only in portfolio copy for an external project. |

#### Assumptions and blind spots

The audit inspected explicit `posthog.capture()` calls and likely growth surfaces, but autocaptured DOM interactions and third-party scripts are not fully represented by static source. Direct ingest may still work for visitors without blockers, while blocked requests could contribute to the live-data gap. Confirm the 11 custom events and `$pageview` in Live events using a normal browser with blockers both enabled and disabled.

### Live Data

What PostHog itself has already flagged for this project, read from its recommendations and health checks. These come from ingested data rather than source code, so they catch problems no static scan can see — stack frames that never resolve, syncs that keep failing, alerts nobody wired up.

| Check | Status | File | Details |
|-------|--------|------|---------|
| Open findings in PostHog | `pass` | — | 4 open findings from PostHog. |
| Error alerts not wired | `suggestion` | — | No alert is wired for error-tracking-issue-created, error-tracking-issue-reopened, or error-tracking-issue-spiking. Set them up in Error tracking → Alerts. |
| Issue summaries disabled | `suggestion` | — | PostHog reports that error-tracking issue summaries are disabled; review this recommendation in Error Tracking. |
| Rate limits not configured | `suggestion` | — | No ingestion rate limit is set for project or per-issue scope. Set them in Error tracking → Settings. |
| No live pageview events | `error` | — | Check whether any events are landing, verify the project key and initialization, and ensure pageview autocapture is enabled; the issue resolves once events arrive. |

#### Assumptions and blind spots

These findings reflect what PostHog observed in the recent lookback window, so a project that has just started sending data, or one whose findings haven't been recomputed yet, can show a clean area without being clean. The no-live-events issue may reflect low site traffic, a recent deployment, the wrong production project, blocked ingestion, disabled pageview capture, or failed initialization. Verify with a deliberate production page load and inspect Activity → Live events.

## About this audit

The PostHog wizard runs this audit in stages: SDK installation → init correctness → identification → event capture → live data → this report. The early stages resolve checks against the project's source tree. The live-data stage reads what PostHog already computed from your ingested data — things no source scan can see, like whether stack frames actually resolve. Every result, pass or otherwise, is recorded in the ledger this report was generated from.

- `error` items break correctness now (events lost, identity broken). Fix first.
- `warning` items work today but cause subtle data-quality bugs. Fix when convenient.
- `suggestion` items are best-practice improvements with measurable upside.

Re-run `posthog-wizard audit` after applying fixes to refresh the ledger.
