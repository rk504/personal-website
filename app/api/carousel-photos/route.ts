import { readdirSync } from 'fs'
import { join } from 'path'
import { SeverityNumber } from '@opentelemetry/api-logs'
import { NextResponse } from 'next/server'
import { posthogLoggerProvider } from '@/instrumentation'

const posthogLog = posthogLoggerProvider?.getLogger('personal-website.posthog')

export async function GET() {
  posthogLog?.emit({
    body: 'carousel_photo_catalog_requested',
    severityNumber: SeverityNumber.INFO,
    attributes: { route: '/api/carousel-photos' },
  })

  try {
    const carouselDir = join(process.cwd(), 'public/images/carousel')
    const files = readdirSync(carouselDir)
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => `/images/carousel/${file}`)

    posthogLog?.emit({
      body: 'carousel_photo_catalog_returned',
      severityNumber: SeverityNumber.INFO,
      attributes: { photo_count: files.length },
    })

    await posthogLoggerProvider?.forceFlush().catch(() => {})
    return NextResponse.json({ photos: files })
  } catch {
    posthogLog?.emit({
      body: 'carousel_photo_catalog_unavailable',
      severityNumber: SeverityNumber.ERROR,
    })

    await posthogLoggerProvider?.forceFlush().catch(() => {})
    return NextResponse.json({ error: 'Unable to load carousel photos' }, { status: 500 })
  }
} 