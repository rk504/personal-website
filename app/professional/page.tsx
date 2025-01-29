import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, GraduationCap, Trophy, Briefcase } from "lucide-react"

export default function Professional() {
  return (
    <>
      <Header />
      <main className="container py-24 space-y-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-serif mb-4">Reese Koppel</h1>
          <p className="text-lg text-muted-foreground">
            Entrepreneur with expertise in product, data analysis, and finance.
          </p>
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
                    <span className="text-xl font-semibold">Software Engineer</span>
                    <p className="text-sm text-muted-foreground">Avalanche VC</p>
                  </div>
                  <Badge>2023 - Present</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Leading technical initiatives and development of internal tools.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">AWS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <span className="text-xl font-semibold">Software Engineer</span>
                    <p className="text-sm text-muted-foreground">Meta</p>
                  </div>
                  <Badge>2022 - 2023</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Worked on distributed systems and infrastructure for Facebook's messaging platform.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Distributed Systems</Badge>
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
                  <p className="text-sm text-muted-foreground">B.S. Computer Science</p>
                </div>
                <Badge>2018 - 2022</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Focused on distributed systems and software engineering.</p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-serif flex items-center gap-2">
            <Trophy className="h-6 w-6" />
            Projects & Achievements
          </h2>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="text-xl font-semibold">Technical Leadership</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Led development of multiple successful projects and mentored junior engineers.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Team Leadership</Badge>
                  <Badge variant="secondary">Project Management</Badge>
                  <Badge variant="secondary">Mentoring</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-serif flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            Skills
          </h2>

          <div className="grid gap-4">
            <div>
              <h3 className="font-medium mb-2">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">C++</Badge>
                <Badge variant="secondary">Java</Badge>
                <Badge variant="secondary">SQL</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Git</Badge>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

