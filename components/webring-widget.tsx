"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

export function WebringWidget() {
  return (
    <div className="fixed bottom-4 left-4 z-40">
      <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-3">
          {/* Webring Title */}
          <Link 
            href="https://github.com/4shub/ringdt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-semibold text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            WEBRING
            <ExternalLink className="h-3 w-3" />
          </Link>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-1">
            <Link
              href="https://ringdt.rapid.workers.dev/prev?from=https://www.reesekoppel.com"
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              title="Previous site"
            >
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </Link>

            <Link
              href="https://ringdt.rapid.workers.dev/next?from=https://www.reesekoppel.com"
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              title="Next site"
            >
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
