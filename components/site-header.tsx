import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-serif">
          Reese Koppel
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-gray-600">
            HOME
          </Link>
          <Link href="/ventures" className="text-sm font-medium hover:text-gray-600">
            VENTURES
          </Link>
          <Link href="/adventures" className="text-sm font-medium hover:text-gray-600">
            ADVENTURES
          </Link>
          <Link href="/published" className="text-sm font-medium hover:text-gray-600">
            PUBLISHED
          </Link>
          <Link href="/writing" className="text-sm font-medium hover:text-gray-600">
            WRITING
          </Link>
          <Button variant="outline" className="text-sm">
            NEWSLETTER
          </Button>
        </nav>
      </div>
    </header>
  )
}

