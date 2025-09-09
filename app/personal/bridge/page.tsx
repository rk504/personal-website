import { Header } from "@/components/header"
import { SocialLinks } from "@/components/social-links"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Spade } from "lucide-react"

export default function Bridge() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col">
        <div className="container flex-grow flex flex-col py-24 space-y-8">
          <h1 className="text-4xl font-serif text-center mb-4">Bridge</h1>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Media</h2>
            <ul className="space-y-4">
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="http://youth.worldbridge.org/acbl-koppels-kingdom-by-sue-munday/" target="_blank" rel="noopener noreferrer">
                        King of Bridge Award <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Recognized for efforts to promote bridge.</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://www.nytimes.com/2020/10/30/sports/online-bridge-championship-bob-hamman.html" target="_blank" rel="noopener noreferrer">
                        ‘It’s Like Playing With Kobe’: An Unlikely Intergenerational Bridge Team <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>NYT feature</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://www.listennotes.com/podcasts/the-setting-trick/27-scott-hoffer-worlds-best-zE31DYBaiyr/?t=3046" target="_blank" rel="noopener noreferrer">
                        The Setting Trick Podcast <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>My favorite bridge podcast.</p>
                  </CardContent>
                </Card>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <ul className="space-y-4">
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://www.trickybridge.com/" target="_blank" rel="noopener noreferrer">
                        Tricky Bridge <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>The best way to learn bridge.</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://apps.apple.com/us/app/tricky-bridge-learn-play/id1437652160?platform=iphone" target="_blank" rel="noopener noreferrer">
                        Tricky Bridge App Store Link <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Download the app on the App Store.</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://www.acebridge.org/" target="_blank" rel="noopener noreferrer">
                        Ace Bridge <Spade className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>My bridge tutoring business.</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://www.youtube.com/channel/UCGpqgSoiMqMyhWcXxg-yHZA" target="_blank" rel="noopener noreferrer">
                        Ace Bridge YouTube Channel <Spade className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>I made some educational videos during COVID.</p>
                  </CardContent>
                </Card>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Educational Organizations</h2>
            <ul className="space-y-4">
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://www.acbleducationalfoundation.org/" target="_blank" rel="noopener noreferrer">
                        Ed Foundation <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>ACBLEF is committed to introducing, encouraging, and sustaining bridge players through online and in-person opportunities which promote the great game of bridge. Through our grantmaking and programming, we support duplicate, casual and stepping-stone game-playing for all age groups and all walks of life.</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://www.center4bridge.com/" target="_blank" rel="noopener noreferrer">
                        Center for Bridge Education <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Teaching Bay Area kids bridge.</p>
                  </CardContent>
                </Card>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Movies I'm (allegedly) in</h2>
            <ul className="space-y-4">
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://www.imdb.com/title/tt12164558/" target="_blank" rel="noopener noreferrer">
                        Last Hand (2026) <ExternalLink className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">
                      <strong>Role:</strong> Hot Guy #2 (I was Hot Guy #1 and got demoted)
                    </p>
                    <p className="mb-2">
                      <strong>Plot:</strong> Legendary bridge player Lilith Fudent leads a team of misfits to the world bridge championships to save her sister's New Orleans bridge club.
                    </p>
                    <p className="mb-2">
                      <strong>Stars:</strong> Beverly D'Angelo (Lilith Fudent), Joanna Cassidy, Mimi Kennedy
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Release:</strong> Expected 2026 • Drama • Directed by Nate Dushku
                    </p>
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