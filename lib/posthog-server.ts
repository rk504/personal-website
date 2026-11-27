import { PostHog } from 'posthog-node'

let posthogServer: PostHog | null = null

export function getPostHogServer() {
  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

  if (!token || !host) {
    return null
  }

  posthogServer ??= new PostHog(token, {
    host,
    flushAt: 1,
    flushInterval: 0,
    enableExceptionAutocapture: process.env.NEXT_RUNTIME === 'nodejs',
  })

  return posthogServer
}
