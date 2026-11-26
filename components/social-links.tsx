"use client"

import Link from "next/link"
import { Linkedin, Spade, Bike, LibraryBig } from "lucide-react"
import posthog from "posthog-js"

export function SocialLinks() {
  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="container flex justify-center space-x-8">
        <Link
          href="https://www.linkedin.com/in/reese-k1/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
          onClick={() => posthog.capture("social_profile_opened", { destination: "linkedin" })}
        >
          <Linkedin size={24} />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
      //    href="https://reesentlyread.blogspot.com/"
           href="https://www.goodreads.com/user/show/79282113-reese"
           target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
          onClick={() => posthog.capture("social_profile_opened", { destination: "goodreads" })}
        >
          <LibraryBig size={24} />
          <span className="sr-only">Books</span>
        </Link>
        <Link
          href="https://www.acebridge.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
          onClick={() => posthog.capture("social_profile_opened", { destination: "ace_bridge" })}
        >
          <Spade size={24} />
          <span className="sr-only">Ace Bridge</span>
        </Link>
        <Link
          href="https://www.strava.com/athletes/122197702"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
          onClick={() => posthog.capture("social_profile_opened", { destination: "strava" })}
        >
          <Bike size={24} />
          <span className="sr-only">Strava</span>
        </Link>
  {/*       <Link
          href="https://workstories.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <PenLine size={24} />
          <span className="sr-only">Substack</span>
        </Link> */}
      </div>
    </footer>
  )
}

