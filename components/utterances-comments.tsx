"use client"

import { useEffect, useRef, useState } from "react"

export function UtterancesComments() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      try {
        const script = document.createElement("script")
        script.src = "https://utteranc.es/client.js"
        script.setAttribute("repo", "rk504/rk-website-comments")
        script.setAttribute("issue-term", "pathname")
        script.setAttribute("theme", "github-light")
        script.setAttribute("crossorigin", "anonymous")
        script.async = true

        // Clear any existing content first
        if (containerRef.current) {
          containerRef.current.innerHTML = ''
          containerRef.current.appendChild(script)
          setIsLoaded(true)
        }
      } catch (error) {
        console.error('Failed to load Utterances:', error)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      // Cleanup
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className="mt-8">
      <div ref={containerRef} className="utterances-container" />
      {!isLoaded && (
        <div className="text-center text-sm text-gray-500 py-4">
          Loading comments...
        </div>
      )}
    </div>
  )
}
