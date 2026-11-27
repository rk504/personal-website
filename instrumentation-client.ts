// instrumentation-client.ts  
import posthog from 'posthog-js'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {  
 api_host: '/ingest',  
  ui_host: 'https://us.posthog.com', // or eu.posthog.com  
  defaults: '2026-08-30',
 capture_exceptions: true,
})  