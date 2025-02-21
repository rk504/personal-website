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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

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
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden fixed inset-y-0 right-0 w-1/2 max-w-md bg-white/95 backdrop-blur-md shadow-2xl z-40 
          transition-all duration-500 ease-in-out transform
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="h-full flex flex-col justify-between px-8 py-12 overflow-y-auto">
          <div className="flex flex-col items-end space-y-8">
            <Link 
              href="/" 
              className="text-right text-xl font-medium text-gray-800 hover:text-gray-600 py-2 
                transition-colors relative after:absolute after:bottom-0 after:right-0 after:h-0.5 
                after:w-0 after:bg-gray-800 after:transition-all hover:after:w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <button
              onClick={() => {
                scrollToAbout()
                setIsMobileMenuOpen(false)
              }}
              className="text-right text-xl font-medium text-gray-800 hover:text-gray-600 py-2 
                transition-colors relative after:absolute after:bottom-0 after:right-0 after:h-0.5 
                after:w-0 after:bg-gray-800 after:transition-all hover:after:w-full"
            >
              About Me
            </button>
            
            <div className="w-full space-y-3">
              <div className="text-right text-xl font-medium text-gray-400">
                Personal
              </div>
              <div className="flex flex-col items-end space-y-4">
                {['Projects', 'Learning', 'Bridge'].map((item) => (
                  <Link 
                    key={item}
                    href={`/personal/${item.toLowerCase()}`}
                    className="text-lg text-gray-800 hover:text-gray-600 py-2 
                      transition-colors relative after:absolute after:bottom-0 after:right-0 
                      after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all hover:after:w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full space-y-4 mt-8">
            <Link
              href="https://calendly.com/reesekoppel/15min?back=1"
              className="block text-right text-lg font-medium bg-gray-900 text-white 
                hover:bg-gray-800 py-4 px-8 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule Meeting
            </Link>
            <button
              onClick={() => {
                openEmailDraft()
                setIsMobileMenuOpen(false)
              }}
              className="w-full text-right text-lg font-medium border-2 border-gray-900 
                text-gray-900 hover:bg-gray-100 py-4 px-8 rounded-lg transition-colors"
            >
              Email Me
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30
          transition-all duration-500 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </header>
  )
}
