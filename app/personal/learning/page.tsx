import { Header } from "@/components/header"
import { SocialLinks } from "@/components/social-links"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function Learning() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col py-12 pt-24 pb-24">
        <div className="container flex-grow space-y-12">
          <h1 className="text-4xl font-serif text-center mb-4">Learning</h1>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Reading</h2>
            <ul className="space-y-4">
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://www.goodreads.com/user/show/79282113-reese" target="_blank" rel="noopener noreferrer">
                        Goodreads <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Track my reading progress and reviews.</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://reesentlyread.blogspot.com/" target="_blank" rel="noopener noreferrer">
                        The Covers of the Books I've Read <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Visual representation of my reading journey.</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://x.com/howwethinkbooks" target="_blank" rel="noopener noreferrer">
                        How We Think Books <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Summaries of books I liked.</p>
                  </CardContent>
                </Card>
              </li>
            </ul>
          </section>
        </div>
        <SocialLinks />
      </main>
    </>
  )
}
