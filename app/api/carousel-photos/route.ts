import { readdirSync } from 'fs'
import { join } from 'path'
import { NextResponse } from 'next/server'
import { loggerProvider, posthogLog } from '@/instrumentation'

export async function GET() {
  posthogLog?.emit({
    body: 'Carousel photo list requested',
    severityNumber: 9,
    attributes: { route: '/api/carousel-photos' },
  })

  try {
    const carouselDir = join(process.cwd(), 'public/images/carousel')
    const files = readdirSync(carouselDir)
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => `/images/carousel/${file}`)

    posthogLog?.emit({
      body: 'Carousel photo list served',
      severityNumber: 9,
      attributes: {
        route: '/api/carousel-photos',
        photo_count: files.length,
      },
    })

    await loggerProvider?.forceFlush().catch(() => {})

    return NextResponse.json({ photos: files })
  } catch {
    posthogLog?.emit({
      body: 'Carousel photo list failed',
      severityNumber: 17,
      attributes: { route: '/api/carousel-photos' },
    })

    await loggerProvider?.forceFlush().catch(() => {})

    return NextResponse.json({ error: 'Unable to load carousel photos' }, { status: 500 })
  }
} 