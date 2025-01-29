"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const photos = [
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  // Add more photo URLs here
]

export function PhotoCarousel() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }, 5000) // Change photo every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="container">
        <h2 className="text-3xl font-serif mb-8 text-center">Photo Gallery</h2>
        <div className="relative aspect-[16/9] max-w-3xl mx-auto">
          <Image
            src={photos[currentPhotoIndex] || "/placeholder.svg"}
            alt={`Photo ${currentPhotoIndex + 1}`}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

