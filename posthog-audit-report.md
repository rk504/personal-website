# PostHog Audit Report

## Summary

The Next.js integration covers both browser and server runtimes and is broadly healthy: configuration is environment-sourced, initialization is not duplicated, identity hand-off is consistent, and all 11 custom event names are static. Two warnings remain—an outdated `posthog-node` minor line and direct browser ingest without a verified first-party proxy—along with two PostHog-side suggestions.

No application source files were changed during this read-only audit. `posthog-audit-report.md` is the only project file updated.

**Counts**

- **Errors**: 0 (must fix)
- **Warnings**: 2 (should fix)
- **Suggestions**: 2 (nice to have)
- **Passes**: 10

**Problematic items**

| Severity | Area | Check | File | Details |
|----------|------|-------|------|---------|
| `warning` | Installation | SDK version up to date | `package.json:26` | `posthog-node` uses `~6.0` while 6.2.0 is current; the other detected PostHog packages are on their current release lines. |
| `warning` | Event Capture | Captures route through a reverse proxy | `instrumentation-client.ts:4` | Browser ingest uses the configured PostHog host rather than a verified first-party reverse proxy, so blockers may drop captures. |
| `suggestion` | Live Data | Error alerts not wired | — | No alert is wired for error-tracking issue-created, issue-reopened, or issue-spiking triggers. |
| `suggestion` | Live Data | Rate limits not configured | — | No project or per-issue error ingestion rate limit is configured. |

## Recommended actions

1. **Installation · SDK version up to date** — `posthog-node` is constrained to the 6.0 minor line while 6.2.0 is current. _Why it matters:_ Missing current server SDK fixes can make server captures and exception handling diverge from supported behavior. _Fix:_ Update the dependency at `package.json:26` to the current compatible minor line and verify the build. See [Node.js SDK docs](https://posthog.com/docs/libraries/node).

2. **Event Capture · Captures route through a reverse proxy** — Browser events use the direct configured PostHog ingest host rather than a verified first-party proxy. _Why it matters:_ Tracking blockers can selectively drop events, biasing traffic, funnel, replay, and experiment data toward visitors without blockers. _Fix:_ Configure a same-origin Next.js proxy and point `api_host` at it from `instrumentation-client.ts:4`. See [reverse proxy docs](https://posthog.com/docs/advanced/proxy/nextjs-middleware).

3. **Live Data · Error alerts not wired** — No alert is configured for error-tracking issue-created, issue-reopened, or issue-spiking triggers. _Why it matters:_ Recorded errors can remain unnoticed, increasing detection and response time even though events are captured correctly. _Fix:_ Configure the appropriate error-tracking alerts and destinations in PostHog. See [error tracking alert docs](https://posthog.com/docs/error-tracking/alerts).

4. **Live Data · Rate limits not configured** — Neither project nor per-issue ingestion limits are configured. _Why it matters:_ A noisy error can consume unexpected event volume and cost without a guardrail. _Fix:_ Configure project and per-issue limits in Error tracking → Settings. See [error tracking settings docs](https://posthog.com/docs/error-tracking).

## Full audit

### Installation

Whether the PostHog SDK is present, current, and initialized the way the framework expects. Everything downstream depends on this: a missing or stale SDK silently changes which events exist and which config options are honoured.

| Check | Status | File | Details |
|-------|--------|------|---------|
| PostHog SDK installed | `pass` | `package.json:14` | `@posthog/next@^0.11.1`, `@posthog/nextjs-config@^1.12.2`, `posthog-js@1`, `posthog-node@~6.0` |
| SDK version up to date | `warning` | `package.json:26` | `@posthog/next` 0.11.1/latest 0.11.1; `@posthog/nextjs-config` 1.12.2/latest 1.12.2; `posthog-js` 1/latest 1.455.4; `posthog-node` ~6.0/latest 6.2.0 |
| Initialization is correct | `pass` | `instrumentation-client.ts:4` | Browser init is top-level in the canonical Next.js 15.3+ entry point; server client is env-sourced and both token/host keys are configured. |
| One initialization per runtime | `pass` | `instrumentation-client.ts:4` | One browser init and one lazily-created server singleton; no duplicate initialization within either runtime. |

#### Assumptions and blind spots

Static inspection cannot prove that every deployment injects the configured environment values or that network delivery succeeds in production. Manifest ranges also do not prove which exact versions a deployment resolved. Verify the deployed versions and confirm representative browser and server events in PostHog Live events after updating `posthog-node`.

### Identification

Whether the same human maps to one stable `distinct_id` across sessions, runtimes, and logins. Identity defects are the most expensive kind to fix after the fact, because they corrupt person counts, funnels, and retention retroactively rather than going forward.

| Check | Status | File | Details |
|-------|--------|------|---------|
| Stable distinct_id (not session UUID) | `pass` | — | No `posthog.identify()` calls or authenticated-user flow were found. |
| identify() called before captures / flag evals | `pass` | — | No authenticated-user or identify flow exists, so identify timing is not applicable. |
| Same distinct_id across client and server | `pass` | `instrumentation.ts:55` | Both runtimes use PostHog; server request-error captures resolve the client distinct_id from PostHog tracing headers or its persistence cookie. |
| reset() called on logout / account switch | `pass` | — | No logout/account-switch flow found. |

#### Assumptions and blind spots

_No findings to qualify; the standard checks for this area passed cleanly._

### Event Capture

Whether events are named consistently, reach PostHog reliably, and cover the moments the business actually reasons about. Gaps here don't break anything visibly; they just leave the questions you want to ask unanswerable.

| Check | Status | File | Details |
|-------|--------|------|---------|
| Event names are static and consistent | `pass` | `components/photo-carousel.tsx:34` | All 11 explicit capture calls use static string literals as event names. |
| Captures route through a reverse proxy | `warning` | `instrumentation-client.ts:4` | Browser `api_host` resolves to the configured PostHog ingest host rather than a verified first-party reverse proxy, so blockers may drop captures. |
| Key activation events captured | `pass` | `app/projects/page.tsx:36` | No auth or billing paths detected; growth-funnel signup and purchase checks are not applicable. |

#### Assumptions and blind spots

The audit checked explicit capture calls and likely growth surfaces but cannot fully represent autocaptured interactions or externally loaded scripts. Direct ingest can work for visitors without blockers while silently losing a different visitor segment. Compare delivery with blockers enabled and disabled, and verify representative custom events in Live events.

### Live Data

What PostHog itself has already flagged for this project, read from its recommendations and health checks. These come from ingested data rather than source code, so they catch problems no static scan can see — stack frames that never resolve, syncs that keep failing, alerts nobody wired up.

| Check | Status | File | Details |
|-------|--------|------|---------|
| Open findings in PostHog | `pass` | — | 2 open findings from PostHog |
| Error alerts not wired | `suggestion` | — | No alert is wired for: error-tracking-issue-created, error-tracking-issue-reopened, error-tracking-issue-spiking. Set them up in Error tracking → Alerts. |
| Rate limits not configured | `suggestion` | — | No ingestion rate limit set for: project, per_issue. Set them in Error tracking → Settings. |

#### Assumptions and blind spots

These findings reflect what PostHog has observed in the recent lookback window, so a project that has just started sending data, or one whose findings have not been recomputed yet, can show a clean area without being clean. The sweep returned no active health issues, but recommendations can change as more error data arrives. Recheck after normal production traffic and error volume accumulate.

### Write report

Whether the local markdown audit report was created from the complete ledger.

| Check | Status | File | Details |
|-------|--------|------|---------|
| Create posthog-audit-report.md | `pending` | — | — |

#### Assumptions and blind spots

This workflow row is pending in the ledger snapshot used to generate the report and is resolved immediately after the file exists.

### Upload notebook

Whether the completed local report was mirrored into a shareable PostHog notebook.

| Check | Status | File | Details |
|-------|--------|------|---------|
| Write the report into a PostHog notebook | `pending` | — | — |

#### Assumptions and blind spots

This workflow row remains pending until the notebook is created, all sections are appended, and the cloud copy is read back. The local markdown report remains the source of truth if notebook creation or verification fails.

## About this audit

The PostHog wizard runs this audit in stages: SDK installation → init correctness → identification → event capture → live data → this report. The early stages resolve checks against the project's source tree. The live-data stage reads what PostHog already computed from your ingested data — things no source scan can see, like whether stack frames actually resolve. Every result, pass or otherwise, is recorded in the ledger this report was generated from.

- `error` items break correctness now (events lost, identity broken). Fix first.
- `warning` items work today but cause subtle data-quality bugs. Fix when convenient.
- `suggestion` items are best-practice improvements with measurable upside.

Re-run `posthog-wizard audit` after applying fixes to refresh the ledger.
