import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http"
import { resourceFromAttributes } from "@opentelemetry/resources"
import { BatchLogRecordProcessor, LoggerProvider } from "@opentelemetry/sdk-logs"

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

function warnForMissingConfiguration(variableName: string) {
  if (process.env.NODE_ENV !== "production") {
    console.warn(
      `${variableName} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${variableName} is configured`,
    )
  }
}

if (!token) {
  warnForMissingConfiguration("NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN")
}

if (!host) {
  warnForMissingConfiguration("NEXT_PUBLIC_POSTHOG_HOST")
}

export const posthogLoggerProvider =
  token && host
    ? new LoggerProvider({
        resource: resourceFromAttributes({
          "service.name": "personal-website",
        }),
        processors: [
          new BatchLogRecordProcessor({
            exporter: new OTLPLogExporter({
              url: `${host}/i/v1/logs`,
              timeoutMillis: 2000,
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }),
          }),
        ],
      })
    : null

export function register() {
  // The route handler obtains its logger directly from this provider so only
  // purpose-written PostHog logs are exported.
}
