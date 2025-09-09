import { Header } from "@/components/header"
import { SocialLinks } from "@/components/social-links"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col">
        <div className="container flex-grow flex flex-col py-24 space-y-8">
          <h1 className="text-4xl font-serif text-center mb-4">Projects</h1>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Technical</h2>
            <ul className="space-y-4">
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://our-third-place.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Our Third Place <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                    I built a self-hosted MVP covering the full user journey: signup/login + password reset, linked backend, Stripe payments, member portal, and linked RSVP-ready events + waitlists for a 1,700-member rollout and migration off Wix. This is the parent company of the 1700-member <a href="https://www.themediadinnerclub.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Media Dinner Club</a>.
                    </p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://seepg.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Seepg <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>WIP for promo code efficiency + LTV/ROI calculations.</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://easyvol.netlify.app/" target="_blank" rel="noopener noreferrer">
                        EasyVol <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Two-sided marketplace to connect volunteers with volunteer opportunities, a fun side project that didn't take off.</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://github.com/rk504" target="_blank" rel="noopener noreferrer">
                        GitHub <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Building data visualizations and dabbling in web dev</p>
                  </CardContent>
                </Card>
              </li>
              
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Creative</h2>
            <ul className="space-y-4">
              {/* <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://substack.com/@workstories" target="_blank" rel="noopener noreferrer">
                        Work Stories <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Weekly Newsletter on interview prep, turning work stories into interview-friendly answers. Excuse the pseudonym based on the world's two best bars.</p>
                  </CardContent>
                </Card>
              </li> */}
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://bsky.app/profile/pels504.bsky.social" target="_blank" rel="noopener noreferrer">
                        NBA Data Analysis <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Creating NBA data visualizations</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://open.spotify.com/show/7lZeZrEoBKmlsjUAe8qTh8" target="_blank" rel="noopener noreferrer">
                        Read Receipts <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Jeffrey and I made a podcast that is NOT a book club. Not worth your time, but still send me book recs.</p>
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