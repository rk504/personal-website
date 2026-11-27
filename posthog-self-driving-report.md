# PostHog Self-driving setup report

## Summary

PostHog Self-driving is configured for this Next.js personal website. Session Replay and Error Tracking were already enabled; Support was enabled in this run; the Support responder was added; the scout troop was tuned; and Replay Vision monitors now feed confirmed breakage and frustration findings into the inbox.

New findings begin appearing in the Self-driving inbox within about 30 minutes as the coordinator picks up the new scouts and matching recordings complete.

## AI data processing

Approved.

## GitHub

GitHub is already connected through the PostHog GitHub App. GitHub Issues was not selected as an inbox source during this run.

## Products enabled

| Product | Status | Notes |
| --- | --- | --- |
| Session Replay | already enabled | This is a web app and the browser initialization has no session-recording opt-out. Existing recordings confirm data is arriving. |
| Error Tracking | already enabled | Browser initialization enables exception capture; no disabling override was found. |
| Support (Conversations) | enabled | Tickets will reach the inbox after an inbound email, inbox, or Slack channel is connected in PostHog. |

## Signal sources

| Signal source | Action | Notes |
| --- | --- | --- |
| `signals_scout` / `cross_source_issue` | already enabled | Scout findings can enter the inbox. |
| `health_checks` / `health_issue` | already enabled | Keeps integration-health findings actionable. |
| `error_tracking` / `issue_created` | already enabled | Kept enabled. |
| `error_tracking` / `issue_reopened` | already enabled | Kept enabled. |
| `error_tracking` / `issue_spiking` | already enabled | Kept enabled. |
| `conversations` / `ticket` | enabled | Created in this run (config `01a21f18-bd58-75ca-8658-daaad268ad92`). It stays idle until a Support channel is connected. |
| `logs` / `alert_state_change` | skipped | Logs are not in active use for this project. |
| `endpoints` / `endpoint_execution_failed` and `endpoint_breakdown_limit_exceeded` | skipped | Endpoint usage could not be checked with the current connection permissions. |

## Connected tools

No connected-tool responder was selected. There are no warehouse sources configured for this project.

| Tool | Status |
| --- | --- |
| GitHub Issues | not used as an inbox source |
| Linear | not used |
| Jira | not used |
| Sentry | not used |
| Zendesk | not used |

## Scout troop

### Kept on

| Scout | What it watches |
| --- | --- |
| General | Cross-product patterns and surfaces without a dedicated specialist. |
| Anomaly detection | Unusual movements in saved insight time series. |
| Product analytics | Key site behavior and conversion-flow changes. |
| Web analytics | Traffic, attribution, landing-page health, bounce, and 404 shifts. |
| Replay Vision | Scanner health, observation trends, and recurring themes. |

`Inbox validation` remains enabled as an operational scout. It runs report follow-up checks and is outside the troop ceiling.

### Capacity

- Verified run budget: **100 runs/day**; **2** had been used when checked, leaving **98**.
- Enabled-scout cap: **250**.
- Step 6 counted **249** free specialist/custom slots after reserving the enabled operational scout; the custom scout below now uses one of those slots.
- No announcement banner was present.

### Disabled built-in specialists

The remaining built-ins stay disabled to keep the recurring troop selective: AI observability, APM, billing, conversations, CSP violations, customer analytics, data pipelines, data warehouse, experiments, feature flags, insight alerts, logs, MCP tool calls, observability gaps, PR follow-up, revenue analytics, skills-store hygiene, surveys, tasks, unused features, web vitals, and workflows do not have evidence of active use here. The one-time first-report scout also remains off.

`Error tracking` remains disabled as a scout because the native Error Tracking responder covers that surface. `Session replay` remains disabled as a scout because Replay Vision monitors cover that surface.

## Custom scouts

### Created: Portfolio discovery health

- **Surface:** outbound portfolio links from `app/projects/page.tsx`.
- **Watches:** `project_link_opened` alongside traffic to the Projects page.
- **Discriminator:** a sharp drop in traffic-normalized portfolio-link engagement, especially a drop to zero while Projects-page traffic remains steady.
- **Why it is custom:** the product and web analytics scouts partially cover behavior and traffic, but neither specifically catches a portfolio-link entry-volume collapse while page reach remains normal.

The proposed contact-pathway health scout was declined. If the portfolio scout is noisy, set `emit: false` on its config in PostHog to switch it to dry-run without stopping its scheduled analysis.

## Replay Vision scanners

A scanner is an LLM that watches individual session recordings on a schedule and writes observations. The two monitors below send confirmed defects to Self-driving; scanner findings arrive at half weight and need corroboration before becoming an inbox report. Replay Vision scanners are the only component in this setup that consumes Replay Vision quota.

| Brief | Status | Scope | Sampling | Sizing |
| --- | --- | --- | --- | --- |
| Breakage monitor — **Personal website problems** | updated from an earlier scanner | Recordings containing a page view whose URL includes `/projects`. The project page is the site’s portfolio-discovery path, where visitors follow project destinations; there is no in-app conversion completion flow to classify. | 100% | Pre-update estimate: 15 observations/month, 75 credits/month at 5 credits per observation. The saved scanner currently projects 0 from the sparse recent window. Free credits only. |
| Frustration monitor — **Personal website frustration monitor** | created | Recordings containing `$rageclick`, across the site. It focuses on visible unresponsive interactions in the carousel, navigation, links, and contact actions. | 100% | Pre-create estimate: 15 observations/month, 75 credits/month at 5 credits per observation. The saved scanner currently projects 0 from the sparse recent window. Free credits only. |

The existing session-summary scanner remains enabled for Replay Vision observations but no longer emits into Self-driving, preventing it from duplicating/corroborating the monitor findings. The organization had 2,460 Replay Vision credits remaining when checked, so the bounded monitor estimates were safe to apply without a spend confirmation.

## Follow-ups

- [ ] Connect an inbound Support channel (email, inbox, or Slack) in PostHog before Support tickets can arrive.
- [ ] Configure `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` in each deployed environment. The repository code expects them, while the local environment check found them only documented in the template.
- [ ] If this project uses PostHog Endpoints, grant the MCP connection endpoint-read access and enable the two endpoint responders.
- [ ] The monitors have little recent matching traffic. They are armed and will observe future matching recordings; rate early Replay Vision observations with thumbs up/down and add a short note to improve them.

## What happens next

The scout coordinator normally picks up fresh configs within about 30 minutes. Scout runs draw from the verified daily budget and their findings cluster into reports in the Self-driving inbox; immediately actionable reports can begin coding tasks. Self-driving work is billed to the PostHog organization and is constrained by the organization’s Self-driving billing limit.

## Project files

No application code was changed. This run created `posthog-self-driving-report.md` only.
