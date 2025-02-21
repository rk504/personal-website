"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect } from "react"

export function Header() {
  const scrollToAbout = () => {
    if (window.location.pathname === '/') {
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        const headerHeight = 80
        const elementPosition = aboutSection.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
    } else {
      window.location.href = '/#about'
    }
  }

  // Add this at the top of the component to handle the offset on load
  useEffect(() => {
    if (window.location.hash.includes('offset=')) {
      const offset = parseInt(window.location.hash.split('offset=')[1])
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        const headerHeight = 80
        const elementPosition = aboutSection.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
    }
  }, [])

  const openEmailDraft = () => {
    window.location.href = "mailto:me@reesekoppel.com?subject=Contact from Website"
  }

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-serif text-gray-800">
            Reese Koppel
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm tracking-wide hover:text-gray-600 transition-colors uppercase">
              Home
            </Link>
            <button
              onClick={scrollToAbout}
              className="text-sm tracking-wide hover:text-gray-600 transition-colors uppercase"
            >
              About Me
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm tracking-wide hover:text-gray-600 transition-colors uppercase flex items-center gap-1">
                Personal <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuItem className="uppercase text-sm">
                  <Link href="/personal/projects" className="w-full">
                    Projects
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="uppercase text-sm">
                  <Link href="/personal/learning" className="w-full">
                    Learning
                  </Link>
                </DropdownMenuItem>
{/*                 <DropdownMenuItem className="uppercase text-sm">
                  <Link href="/personal/social" className="w-full">
                    Social
                  </Link>
                </DropdownMenuItem>
 */}                <DropdownMenuItem className="uppercase text-sm">
                  <Link href="/personal/bridge" className="w-full">
                    Bridge
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/professional"
              className="text-sm tracking-wide hover:text-gray-600 transition-colors uppercase"
            >
              Professional
            </Link>
            <Link
              href="https://calendly.com/reesekoppel"
              className="text-sm tracking-wide hover:text-gray-600 transition-colors uppercase border border-gray-300 px-4 py-2 rounded hover:bg-gray-50"
            >
              Calendly
            </Link>
            <button
              onClick={openEmailDraft}
              className="text-sm tracking-wide hover:text-gray-600 transition-colors uppercase border border-gray-300 px-4 py-2 rounded hover:bg-gray-50"
            >
              Email Me
            </button>
          </nav>
          <button
            className="md:hidden p-2"
            onClick={() => document.documentElement.classList.toggle("mobile-menu-open")}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-lg transform transition-transform duration-200 -translate-y-full mobile-menu-open:translate-y-0">
        <nav className="container px-6 py-4 space-y-4">
          <Link href="/" className="block text-sm tracking-wide hover:text-gray-600 uppercase">
            Home
          </Link>
          <button
            onClick={scrollToAbout}
            className="block w-full text-left text-sm tracking-wide hover:text-gray-600 uppercase"
          >
            About Me
          </button>
          <div className="space-y-2 pl-4">
            <Link href="/personal/projects" className="block text-sm tracking-wide hover:text-gray-600 uppercase">
              Projects
            </Link>
            <Link href="/personal/learning" className="block text-sm tracking-wide hover:text-gray-600 uppercase">
              Learning
            </Link>
            <Link href="/personal/social" className="block text-sm tracking-wide hover:text-gray-600 uppercase">
              Social
            </Link>
            <Link href="/personal/bridge" className="block text-sm tracking-wide hover:text-gray-600 uppercase">
              Bridge
            </Link>
          </div>
          <Link href="/professional" className="block text-sm tracking-wide hover:text-gray-600 uppercase">
            Professional
          </Link>
            <Link
              href="https://calendly.com/reesekoppel"
              className="text-sm tracking-wide hover:text-gray-600 transition-colors uppercase border border-gray-300 px-4 py-2 rounded hover:bg-gray-50"
            >
              Calendly
          </Link>
          <button
            onClick={openEmailDraft}
            className="block w-full text-left text-sm tracking-wide hover:text-gray-600 uppercase"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}

