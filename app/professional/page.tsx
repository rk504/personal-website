import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UtterancesComments } from "@/components/utterances-comments"
import { Building2, GraduationCap, Briefcase, ExternalLink } from "lucide-react"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"

export default function Professional() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col">
        <div className="container flex-grow flex flex-col py-24 space-y-8">
          <div className="max-w-2xl" id="about">
            <h1 className="text-4xl font-serif mb-6">CV</h1>
            
            <div className="space-y-4 text-lg text-muted-foreground italic">
              <p>
                I lead corp dev at&nbsp; 
                <a 
                  href="https://www.copado.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline hover:text-primary"
                >
                  Copado
                </a>, the intelligent AgentOps platform for Salesforce.
                
              </p>
              
              <p>
                Previously, I navigated tight deadlines into the AMs on a 9-person, $2B AUM team at Partners; coached 100+ students while managing Ace Bridge's 8 teachers, finances, and brand; and built solutions to maximize retention for Tricky Bridge's 1M users learning 4M lessons.
              </p>

              <p>
              I like to&nbsp;
                <a
                  href="/personal/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary"
                >
                  build web apps
                </a>, play bridge, jam on the melodica/sax/piano, cycle (Strava&nbsp;
                <a
                  href="https://www.strava.com/athletes/122197702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary"
                >
                 here
                </a>), read David Foster Wallace, cook (4 Hour Chef), watch tennis (Goff, Pegula, FAA, Shelton), and listen to&nbsp;
                <a
                  href="https://open.spotify.com/playlist/5a3Y1aUxAVX7EUnVq9ezYd?si=3c374ac258414659"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary"
                >
                New Orleans brass music
                </a>
                &nbsp;. I'm top 10 in New Orleans on Beli. I hate how the Saints/Pelicans are&nbsp;
                <a
                  href="https://www.youtube.com/watch?v=fVU833yKiUc&ab_channel=ESPN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary"
                >
                  dumpster&nbsp;fires
                </a>.
              </p>  
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              Experience
            </h2>

            <div className="grid gap-6">
            <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <span className="text-xl font-semibold">Corp Dev Lead</span>
                      <p className="text-sm text-muted-foreground">
                        <Link 
                          href="https://www.copado.com/"
                          className="hover:text-primary flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Copado
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </p>
                    </div>
                    <Badge>March 2025 - Present</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-4 space-y-1">
                  <li>Own inorganic growth strategy and KPI/revenue calculations for internal and external parties.</li>
                  <li>Lead end-to-end M&A diligence: market sizing, financial modeling, and competitive analysis.</li>
                  <li>Prepare reverse due diligence materials to assist investors (Insight, SoftBank, etc.) for portfolio company analyses.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">M&A</Badge>
                    <Badge variant="secondary">Revenue Operations</Badge>
                    <Badge variant="secondary">Due Diligence</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <span className="text-xl font-semibold">Investment Analyst</span>
                      <p className="text-sm text-muted-foreground">
                        <Link 
                          href="https://truenorthinstitute.com/resource/clean-hydrogen-investment-framework/"
                          className="hover:text-primary flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Partners Capital
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </p>
                    </div>
                    <Badge>July 2023 - January 2025</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Secured a $110M top-up for an existing HNW client, the largest of 2024, by developing a customized illiquid commitment model that optimized portfolio risk-return balance tailored to the client's liquidity constraints.</li>
                    <li>Won the office's first new client in two years ($200M endowment) by leading pitch development, creating 38% of the materials, and driving the client onboarding process.</li>
                    <li>Increased team efficiency by implementing SharePoint as the office's central hub, saving the team 10+ hours per week and eliminating fears of losing files.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Analytical Skills</Badge>
                    <Badge variant="secondary">Financial Modeling</Badge>
                    <Badge variant="secondary">Due Diligence</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <span className="text-xl font-semibold">Founder, CEO</span>
                      <p className="text-sm text-muted-foreground">
                        <Link 
                          href="https://www.acebridge.org/"
                          className="hover:text-primary flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ace Bridge
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </p>
                    </div>
                    <Badge>March 2020 - Present</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Built a tutoring businessby managing 100+ client relationships and eight contractors.</li>
                    <li>Produced 5+ YouTube tutorials, boosting visibility and securing 18 glowing customer testimonials.</li>
                    <li>Managed finances while teaching bridge lessons, learning to prioritize customer needs and explain complicated concepts.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Business Development</Badge>
                    <Badge variant="secondary">Content Creation</Badge>
                    <Badge variant="secondary">Customer Relations</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <span className="text-xl font-semibold">Product Intern</span>
                      <p className="text-sm text-muted-foreground">
                        <Link 
                          href="https://www.trickybridge.com/"
                          className="hover:text-primary flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Forklift Studios, Tricky Bridge
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </p>
                    </div>
                    <Badge>June 2020 - September 2021</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Co-led product management for Tricky Bridge, an iOS app recognized as Apple's #1 "Indie Games We Love" at launch, achieving 1M downloads and 4M lesson targets.</li>
                    <li>Improved user retention by 20% through data-driven insights derived from Amplitude cohort analyses and actionable roadmap updates.</li>
                    <li>Enhanced app quality through rigorous UX reviews, recommending key improvements to the AI play engine, and prioritizing development goals.</li>
                    <li>Produced video content that grew the app's YouTube channel to 1,000+ subscribers, amplifying engagement and broadening its audience reach.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Product Management</Badge>
                    <Badge variant="secondary">Analytics</Badge>
                    <Badge variant="secondary">UX Research</Badge>
                    <Badge variant="secondary">Content Strategy</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Education
            </h2>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <span className="text-xl font-semibold">Yale University</span>
                    <p className="text-sm text-muted-foreground">B.S. Cognitive Science, Data Science Certificate</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Activities: Bridge Club (Founder), Whaling Crew, Title IX Advisory Board, Entrepreneurial Society, Chess Club, Peer Wellness Cultivator, LEO</p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Skills
            </h2>

            <div className="grid gap-4">
              <div>
                <h3 className="font-medium mb-2">Technical Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">R</Badge>
                  <Badge variant="secondary">Excel</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Product Management</Badge>
                  <Badge variant="secondary">Data Analytics</Badge>
                  <Badge variant="secondary">Financial Analysis</Badge>
                </div>
              </div>
            </div>
          </section>

          <UtterancesComments />
        </div>
        
        <SocialLinks />
      </main>
    </>
  )
}

