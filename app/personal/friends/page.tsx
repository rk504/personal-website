import { Header } from "@/components/header"
import { SocialLinks } from "@/components/social-links"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UtterancesComments } from "@/components/utterances-comments"
import { ExternalLink, Heart } from "lucide-react"
import { CleoLogo } from "@/components/logos/cleo-logo"
import { LettaLogo } from "@/components/logos/letta-logo"
import { BNBCalcLogo } from "@/components/logos/bnbcalc-logo"

export default function Friends() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col">
        <div className="container flex-grow flex flex-col py-24 space-y-8">
          <h1 className="text-4xl font-serif text-center mb-4">My Friends</h1>

          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-500" />
              Cool shit my friends are doing
            </h2>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
              {/* Cleo Health */}
              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <CleoLogo className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">
                      <a 
                        href="https://www.cleohealth.io/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        Cleo Health
                        <ExternalLink className="inline h-4 w-4 ml-1" />
                      </a>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Industry-leading Ambient AI documentation system for Acute Care. 
                    Frees EM, Hospitalist, and Urgent Care providers to focus on patient care 
                    while creating complete patient records.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">AI</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Healthcare</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">HIPAA Compliant</span>
                  </div>
                </CardContent>
              </Card>

              {/* Letta */}
              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <LettaLogo className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">
                      <a 
                        href="https://www.letta.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-orange-600 transition-colors"
                      >
                        Letta
                        <ExternalLink className="inline h-4 w-4 ml-1" />
                      </a>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    The platform for stateful AI agents. Create agents with advanced memory 
                    that can learn and improve over time. Open source AI, built for developers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">AI Agents</span>
                    <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">Memory</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Open Source</span>
                  </div>
                </CardContent>
              </Card>

              {/* BNBCalc */}
              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <BNBCalcLogo className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">
                      <a 
                        href="https://www.bnbcalc.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-green-600 transition-colors"
                      >
                        BNBCalc
                        <ExternalLink className="inline h-4 w-4 ml-1" />
                      </a>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Airbnb calculator that reveals your property's rental profitability. 
                    Get instant revenue projections, comps, and financial analysis for 
                    short-term rental investments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Real Estate</span>
                    <span className="px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded-full">Airbnb</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Analytics</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">My boys wicked smaht</h2>
            {/* <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                These incredible people are building the future across healthcare, AI, and real estate. 
                Each one is solving real problems with innovative technology - from saving doctors time 
                with AI documentation, to creating stateful AI agents that can actually remember and learn, 
                to making real estate investing more accessible with data-driven insights.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                What I love most is how they're all using technology to make complex things simpler 
                and more accessible. They're not just building cool tech - they're building tools 
                that actually help people do their jobs better and make better decisions.
              </p>
            </div> */}
          </section>

          <UtterancesComments />
        </div>
        <SocialLinks />
      </main>
    </>
  )
}
