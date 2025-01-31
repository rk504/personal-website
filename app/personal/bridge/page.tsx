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
                    <p>Recognized for excellence in bridge.</p>
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
                    <p>Featured in The New York Times.</p>
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
                    <p>Discussing bridge strategies and insights.</p>
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
                    <p>This app is the simplest and most fun way to learn bridge.</p>
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
                    <p>The bridge tutoring company I started over COVID.</p>
                  </CardContent>
                </Card>
              </li>
              <li>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <a href="https://www.youtube.com/channel/UCGpqgSoiMqMyhWcXxg-yHZA" target="_blank" rel="noopener noreferrer">
                        Ace Bridge YouTube Channel<Spade className="inline h-4 w-4" />
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Some videos I made during COVID.</p>
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
                    <p>Supporting bridge education initiatives.</p>
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
        </div>
        <SocialLinks />
      </main>
    </>
  )
}