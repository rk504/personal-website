"use client"

import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - consistent across all screen sizes */}
          <Link href="/" className="text-2xl font-serif text-gray-800">
            Reese Koppel
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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
                  <Link href="/personal/projects" className="w-full">Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="uppercase text-sm">
                  <Link href="/personal/learning" className="w-full">Learning</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="uppercase text-sm">
                  <Link href="/personal/bridge" className="w-full">Bridge</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/professional" className="text-sm tracking-wide hover:text-gray-600 transition-colors uppercase">
              Professional
            </Link>
            <Link
              href="https://calendly.com/reesekoppel/15min?back=1"
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6"  />
            ) : (
              <Menu className="h-6 w-6 hover:bg-gray-100 rounded-md" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden fixed inset-0 top-20 bg-white z-400 transition-transform duration-300 ease-in-out  ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="container px-4 py-6 space-y-6 lg:flex items-center space-x-8 bg-blue-500 p-4">
          <Link 
            href="/" 
            className="block text-lg font-medium hover:text-gray-600 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <button
            onClick={() => {
              scrollToAbout()
              setIsMobileMenuOpen(false)
            }}
            className="block w-full text-left text-lg font-medium hover:text-gray-600 py-2"
          >
            About Me
          </button>
          
          {/* Personal Section */}
          <div className="space-y-3">
            <div className="text-lg font-medium text-gray-400">Personal</div>
            <div className="space-y-2 pl-4">
              <Link 
                href="/personal/projects" 
                className="block text-lg hover:text-gray-600 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/personal/learning" 
                className="block text-lg hover:text-gray-600 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Learning
              </Link>
              <Link 
                href="/personal/bridge" 
                className="block text-lg hover:text-gray-600 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bridge
              </Link>
            </div>
          </div>

          <Link 
            href="/professional" 
            className="block text-lg font-medium hover:text-gray-600 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Professional
          </Link>

          <div className="space-y-4 pt-4">
            <Link
              href="https://calendly.com/reesekoppel/15min?back=1"
              className="block text-center text-lg font-medium bg-gray-100 hover:bg-gray-200 py-3 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule Meeting
            </Link>
            <button
              onClick={() => {
                openEmailDraft()
                setIsMobileMenuOpen(false)
              }}
              className="block w-full text-center text-lg font-medium bg-gray-100 hover:bg-gray-200 py-3 rounded-lg"
            >
              Email Me
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  )
}
