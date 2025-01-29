import Link from "next/link"
import { Linkedin, Book, Globe } from "lucide-react"

export function SocialLinks() {
  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="container flex justify-center space-x-8">
        <Link
          href="https://www.linkedin.com/in/reese-k1/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <Linkedin size={24} />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
          href="https://www.acebridge.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <Globe size={24} />
          <span className="sr-only">Ace Bridge</span>
        </Link>
        <Link
          href="https://www.goodreads.com/user/show/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <Book size={24} />
          <span className="sr-only">Goodreads</span>
        </Link>
      </div>
    </footer>
  )
}

