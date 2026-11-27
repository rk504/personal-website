import { SeverityNumber } from '@opentelemetry/api-logs'
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http'
import { resourceFromAttributes } from '@opentelemetry/resources'
import { BatchLogRecordProcessor, LoggerProvider } from '@opentelemetry/sdk-logs'
import { createOnRequestError } from '@posthog/next'
import { getPostHogServer } from '@/lib/posthog-server'

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST
const missingVariable = token
  ? 'NEXT_PUBLIC_POSTHOG_HOST'
  : 'NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN'

if ((!token || !host) && process.env.NODE_ENV !== 'production') {
  console.warn(
    `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
  )
}

export const loggerProvider = token && host
  ? new LoggerProvider({
      resource: resourceFromAttributes({ 'service.name': 'personal-website' }),
      processors: [
        new BatchLogRecordProcessor({
          exporter: new OTLPLogExporter({
            url: `${host}/i/v1/logs`,
            timeoutMillis: 2000,
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }),
        }),
      ],
    })
  : undefined

// Do not register this provider globally: only logs emitted through this logger leave the app.
export const posthogLog = loggerProvider?.getLogger('posthog-exporter')

export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    getPostHogServer()
    posthogLog?.emit({
      body: 'PostHog log exporter initialized',
      severityNumber: SeverityNumber.INFO,
      attributes: { runtime: 'nodejs' },
    })
  }
}

export const onRequestError = token && host
  ? createOnRequestError({ apiKey: token, host })
  : async () => {}
