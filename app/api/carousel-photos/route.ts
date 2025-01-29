import { readdirSync } from 'fs'
import { join } from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  const carouselDir = join(process.cwd(), 'public/images/carousel')
  const files = readdirSync(carouselDir)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map(file => `/images/carousel/${file}`)

  return NextResponse.json({ photos: files })
} 