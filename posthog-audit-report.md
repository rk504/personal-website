# PostHog Audit Report

## Summary

The Next.js integration covers both browser and server runtimes, uses environment-sourced configuration, avoids duplicate initialization, and keeps custom event names static. The main correctness issue is the outdated `posthog-node` major version; missing configuration guarding, anonymous-only custom captures, direct browser ingest, and two live PostHog recommendations also need attention.

No application source files were changed during this read-only audit. `posthog-audit-report.md` is the only project file created or updated.

**Counts**

- **Errors**: 1 (must fix)
- **Warnings**: 3 (should fix)
- **Suggestions**: 2 (nice to have)
- **Passes**: 8

**Problematic items**

| Severity | Area | Check | File | Details |
|----------|------|-------|------|---------|
| `error` | Installation | SDK version up to date | `package.json:29` | `posthog-node` is on major 5 while 6.2.0 is current; `@posthog/next` is also one patch behind. |
| `warning` | Installation | Initialization is correct | `instrumentation-client.ts:4` | Browser initialization has no missing-configuration guard, so absent environment values can cause failures or silent data loss. |
| `warning` | Identification | identify() called before captures / flag evals | `components/webring-widget.tsx:18` | No `posthog.identify()` call exists, so custom captures remain anonymous. |
| `warning` | Event Capture | Captures route through a reverse proxy | `instrumentation-client.ts:5` | Browser events use the direct PostHog ingest host rather than a verified first-party proxy. |
| `suggestion` | Live Data | Error alerts not wired | — | No alert is wired for issue-created, issue-reopened, or issue-spiking. |
| `suggestion` | Live Data | Rate limits not configured | — | No project or per-issue ingestion rate limit is configured. |

## Recommended actions

1. **Installation · SDK version up to date** — `posthog-node` is one major version behind, and `@posthog/next` is one patch behind. _Why it matters:_ An outdated server SDK can miss current fixes and supported capture behavior, causing server events and exception context to diverge from the browser integration. _Fix:_ Upgrade the PostHog dependencies declared at `package.json:29`, review the `posthog-node` 6 migration, and verify the build. See [Node.js SDK docs](https://posthog.com/docs/libraries/node).

2. **Installation · Initialization is correct** — The canonical browser init uses a non-null assertion and has no missing-configuration guard. _Why it matters:_ Missing deployment variables can make browser analytics fail silently or interrupt initialization, contaminating pageview, replay, and funnel coverage. _Fix:_ Guard the environment values at `instrumentation-client.ts:4`, report the prescribed development-only error, and keep production a no-op when configuration is absent. See [Next.js installation docs](https://posthog.com/docs/libraries/next-js).

3. **Identification · identify() called before captures / flag evals** — The project never calls `posthog.identify()`, so all custom captures remain anonymous. _Why it matters:_ If the site has or later adds authenticated users, anonymous-only tracking fragments person history and weakens person-level funnels and retention. _Fix:_ If authenticated identity exists, call `identify()` with a stable user ID before the captures represented by `components/webring-widget.tsx:18`; otherwise document that anonymous tracking is intentional. See [identify users docs](https://posthog.com/docs/product-analytics/identify).

4. **Event Capture · Captures route through a reverse proxy** — Browser events use the direct PostHog ingest host rather than a verified first-party proxy. _Why it matters:_ Tracking blockers can selectively drop events, biasing traffic, funnel, replay, and experiment data toward visitors without blockers. _Fix:_ Configure a same-origin Next.js proxy and point `api_host` at it from `instrumentation-client.ts:5`. See [reverse proxy docs](https://posthog.com/docs/advanced/proxy/nextjs-middleware).

5. **Live Data · Error alerts not wired** — No alert is configured for issue-created, issue-reopened, or issue-spiking triggers. _Why it matters:_ Recorded errors can remain unnoticed, increasing detection and response time even though the events are captured correctly. _Fix:_ Configure the appropriate error-tracking alerts and destinations in PostHog. See [error tracking alert docs](https://posthog.com/docs/error-tracking/alerts).

6. **Live Data · Rate limits not configured** — Neither project nor per-issue ingestion limits are configured. _Why it matters:_ A noisy error can consume unexpected event volume and cost without a guardrail. _Fix:_ Configure project and per-issue limits in Error tracking → Settings. See [error tracking settings docs](https://posthog.com/docs/error-tracking).

## Full audit

### Installation

Whether the PostHog SDK is present, current, and initialized the way the framework expects. Everything downstream depends on this: a missing or stale SDK silently changes which events exist and which config options are honoured.

| Check | Status | File | Details |
|-------|--------|------|---------|
| PostHog SDK installed | `pass` | `package.json:18` | `@posthog/next@0.11`, `@posthog/nextjs-config@^1.12.2`, `posthog-js@1`, and `posthog-node@5`. |
| SDK version up to date | `error` | `package.json:29` | `posthog-node` is on major 5 while 6.2.0 is current; `@posthog/next` 0.11 is patch-behind 0.11.1; `@posthog/nextjs-config` is current; `posthog-js` uses major range 1. |
| Initialization is correct | `warning` | `instrumentation-client.ts:4` | Canonical browser init and the server singleton use configured env vars, but browser init has no missing-configuration guard. |
| One initialization per runtime | `pass` | `instrumentation-client.ts:4` | One browser init and one server singleton constructor; no duplicate initialization within either runtime. |

#### Assumptions and blind spots

Static inspection cannot prove that every production deployment injects both environment values or that the initialized SDK successfully sends events. The broad manifest ranges also do not prove which exact versions a deployment resolved without checking its build artifact. Verify the deployed SDK versions and a browser/server event in PostHog Live events after upgrading and adding the guard.

### Identification

Whether the same human maps to one stable `distinct_id` across sessions, runtimes, and logins. Identity defects are the most expensive kind to fix after the fact, because they corrupt person counts, funnels, and retention retroactively rather than going forward.

| Check | Status | File | Details |
|-------|--------|------|---------|
| Stable distinct_id (not session UUID) | `pass` | — | No project source files call `posthog.identify()`, so no unstable distinct ID usage was found. |
| identify() called before captures / flag evals | `warning` | `components/webring-widget.tsx:18` | No `posthog.identify()` call exists; custom captures remain anonymous, though no identity-dependent feature flag evaluations were found. |
| Same distinct_id across client and server | `pass` | `instrumentation.ts:54` | Client and server initialize PostHog; server request-error capture uses `@posthog/next`, which links identity via tracing headers or cookie. |
| reset() called on logout / account switch | `pass` | — | No logout/account-switch flow found. |

#### Assumptions and blind spots

The source scan found no authentication, logout, or account-switch flow, so anonymous tracking may be intentional for this public site. Identity might still be established outside the scanned repository or through middleware not matched by the audit patterns. Verify in PostHog Persons whether anonymous-only profiles are expected before treating the absent identify call as a required product change.

### Event Capture

Whether events are named consistently, reach PostHog reliably, and cover the moments the business actually reasons about. Gaps here don't break anything visibly; they just leave the questions you want to ask unanswerable.

| Check | Status | File | Details |
|-------|--------|------|---------|
| Event names are static and consistent | `pass` | `app/projects/page.tsx:12` | All 11 browser `posthog.capture()` calls use static string literal event names. |
| Captures route through a reverse proxy | `warning` | `instrumentation-client.ts:5` | Browser `api_host` comes from `NEXT_PUBLIC_POSTHOG_HOST`, but no first-party proxy is defined in source; the configured value is the direct PostHog ingest host. |
| Key activation events captured | `pass` | — | No auth/billing paths detected; signup/payment references are descriptive prose for an external project, not product surfaces. |

#### Assumptions and blind spots

The audit checked explicit capture calls and likely growth surfaces but cannot fully represent autocaptured DOM interactions or scripts loaded outside the source tree. Direct ingest can work for visitors without tracking blockers while silently losing a different visitor segment. Compare event delivery with blockers enabled and disabled, and verify the 11 custom events in Live events.

### Live Data

What PostHog itself has already flagged for this project, read from its recommendations and health checks. These come from ingested data rather than source code, so they catch problems no static scan can see — stack frames that never resolve, syncs that keep failing, alerts nobody wired up.

| Check | Status | File | Details |
|-------|--------|------|---------|
| Open findings in PostHog | `pass` | — | 2 open findings from PostHog. |
| Error alerts not wired | `suggestion` | — | No alert is wired for: error-tracking-issue-created, error-tracking-issue-reopened, error-tracking-issue-spiking. Set them up in Error tracking → Alerts. |
| Rate limits not configured | `suggestion` | — | No ingestion rate limit set for: project, per_issue. Set them in Error tracking → Settings. |

#### Assumptions and blind spots

These findings reflect what PostHog has observed in the recent lookback window, so a project that has just started sending data, or one whose findings have not been recomputed yet, can show a clean area without being clean. The sweep returned no active health issues, but recommendations can change as more error data arrives. Recheck the recommendations after normal production traffic and error volume accumulate.

### Write report

Whether the local markdown audit report was created from the complete ledger.

| Check | Status | File | Details |
|-------|--------|------|---------|
| Create posthog-audit-report.md | `pending` | — | Report generation was in progress when this ledger snapshot was rendered. |

#### Assumptions and blind spots

This workflow row is necessarily pending in the snapshot used to generate the report and is resolved immediately after the file exists. Verify that `posthog-audit-report.md` opens and contains all top-level sections.

### Upload notebook

Whether the completed local report was mirrored into a shareable PostHog notebook.

| Check | Status | File | Details |
|-------|--------|------|---------|
| Write the report into a PostHog notebook | `pending` | — | Notebook upload had not started when this ledger snapshot was rendered. |

#### Assumptions and blind spots

This workflow row remains pending until the notebook is created, all sections are appended, and the cloud copy is read back. The local markdown report remains the source of truth if notebook creation or verification fails.

## About this audit

The PostHog wizard runs this audit in stages: SDK installation → init correctness → identification → event capture → live data → this report. The early stages resolve checks against the project's source tree. The live-data stage reads what PostHog already computed from your ingested data — things no source scan can see, like whether stack frames actually resolve. Every result, pass or otherwise, is recorded in the ledger this report was generated from.

- `error` items break correctness now (events lost, identity broken). Fix first.
- `warning` items work today but cause subtle data-quality bugs. Fix when convenient.
- `suggestion` items are best-practice improvements with measurable upside.

Re-run `posthog-wizard audit` after applying fixes to refresh the ledger.
