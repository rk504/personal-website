"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function PhotoCarousel() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [photos, setPhotos] = useState<string[]>([])

  useEffect(() => {
    // Fetch the list of photos from the API route
    fetch('/api/carousel-photos')
      .then(res => res.json())
      .then(data => setPhotos(data.photos))
  }, [])

  useEffect(() => {
    if (photos.length === 0) return

    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }, 5000) // Change photo every 5 seconds

    return () => clearInterval(interval)
  }, [photos])

  if (photos.length === 0) {
    return null // Or a loading state
  }

  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="container">
        <h2 className="text-3xl font-serif mb-8 text-center">Photo Gallery</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={photos[currentPhotoIndex]}
              alt={`Photo ${currentPhotoIndex + 1}`}
              width={800}
              height={600}
              className="object-contain max-h-[600px] rounded-lg"
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

