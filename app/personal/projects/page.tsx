import { Header } from "@/components/header"
import { SocialLinks } from "@/components/social-links"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col py-12">
        <div className="container flex-grow space-y-12">
          <h1 className="text-4xl font-serif text-center">PROJECTS</h1>

          <section>
            <h2 className="text-2xl font-semibold">TECHNICAL</h2>
            <ul className="space-y-4">
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://easyvol.netlify.app/" target="_blank" rel="noopener noreferrer">
                        EasyVol
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Two-sided marketplace to connect volunteers and volunteer opportunities</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://github.com/rk504" target="_blank" rel="noopener noreferrer">
                        Github
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Building data visualizations and dabbling in web dev</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://bsky.app/profile/pels504.bsky.social" target="_blank" rel="noopener noreferrer">
                        NBA Data Analysis
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Creating NBA data visualizations</p>
                  </CardContent>
                </Card>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">CREATIVE</h2>
            <ul className="space-y-4">
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://reesekoppel.substack.com/" target="_blank" rel="noopener noreferrer">
                        Reesently Read
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Weekly Newsletter (3 Things I Learned This Week)</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://open.spotify.com/show/7lZeZrEoBKmlsjUAe8qTh8" target="_blank" rel="noopener noreferrer">
                        Read Receipts
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We discuss books (pretentious, don’t listen)</p>
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