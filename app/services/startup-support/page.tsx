import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Lightbulb, Users, TrendingUp, GraduationCap } from "lucide-react"

export default function StartupSupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bsu-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Startup Formation Support</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Transforming university research into successful startups and new business ventures
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">From Lab to Launch</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              If creating a new business startup has been chosen as the optimal commercialization path, BSU's Technology
              Transfer and Innovation Office will assist in planning, creating, and funding the startup company.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              We provide comprehensive support for faculty, staff, and students who wish to form startup companies based
              on university technologies. Our services guide you through every stage of the startup journey, from
              initial concept to launch and beyond.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The startup formation process integrates with our technology transfer workflow, ensuring proper IP
              protection and licensing agreements while providing the resources and connections needed for
              entrepreneurial success.
            </p>
          </div>
        </div>
      </section>

      {/* Why Form a Startup */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Why Form a Startup?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Startup formation may be the best path when your innovation requires significant additional development
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Rocket className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">Rapid Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Move quickly from research to market without the constraints of larger organizational structures and
                  decision-making processes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">Direct Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Maintain control over technology direction, company culture, and strategic decisions as the founding
                  team
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">Higher Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Potential for greater financial returns through equity ownership compared to traditional licensing
                  royalties
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">Technology Fit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Best path when existing companies lack interest or capability to develop early-stage technologies
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">Student Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Create valuable learning experiences and career opportunities for students through real-world business
                  building
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">Economic Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Contribute to regional economic development through job creation and innovation ecosystem growth
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Startup Services */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Our Startup Support Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources to help you succeed at every stage
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-bsu-gold">
              <CardHeader>
                <CardTitle className="text-xl">Business Planning & Strategy</CardTitle>
                <CardDescription>Develop a solid foundation for your venture</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Business model development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Market analysis and customer discovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Competitive landscape assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Business plan creation and refinement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-bsu-gold">
              <CardHeader>
                <CardTitle className="text-xl">Legal & IP Strategy</CardTitle>
                <CardDescription>Protect your innovations and structure properly</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Company formation (LLC, C-Corp, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>License agreement negotiation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>IP strategy and patent portfolio management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Founder agreements and equity splits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-bsu-gold">
              <CardHeader>
                <CardTitle className="text-xl">Funding & Investment</CardTitle>
                <CardDescription>Connect with capital sources and investors</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Grant opportunity identification (SBIR/STTR)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Pitch deck development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Investor introductions and networking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Financial modeling and projections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-bsu-gold">
              <CardHeader>
                <CardTitle className="text-xl">Mentorship & Networks</CardTitle>
                <CardDescription>Access experienced entrepreneurs and advisors</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Entrepreneur-in-residence programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Advisory board development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Industry expert connections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Peer networking events and workshops</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-bsu-gold">
              <CardHeader>
                <CardTitle className="text-xl">Facilities & Resources</CardTitle>
                <CardDescription>Access to infrastructure and support services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Co-working and office space</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Lab space and equipment access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Administrative and business support services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Student talent recruitment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Startup Process */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Startup Formation Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach to launching your university-based venture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Assessment",
                description:
                  "Evaluate technology readiness, market opportunity, and entrepreneurial team capability for startup formation.",
              },
              {
                step: "2",
                title: "Planning",
                description:
                  "Develop business plan, license terms, and initial funding strategy with TTIO guidance and support.",
              },
              {
                step: "3",
                title: "Formation",
                description:
                  "Establish legal entity, execute licensing agreement, secure initial funding, and build founding team.",
              },
              {
                step: "4",
                title: "Launch & Growth",
                description:
                  "Execute business plan, achieve key milestones, and access ongoing support for scaling the venture.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-t-4 border-t-bsu-gold">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-bsu-gold text-black font-bold text-xl flex items-center justify-center mb-3">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conflict of Interest */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conflict of Interest Management</h2>
            <p className="text-gray-600 mb-4">
              Faculty and staff forming startups based on university technology must comply with conflict of interest
              policies and obtain necessary approvals.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-bsu-gold mr-2">•</span>
                <span>Disclosure of financial interests and company involvement</span>
              </li>
              <li className="flex items-start">
                <span className="text-bsu-gold mr-2">•</span>
                <span>Management plans for balancing university and company roles</span>
              </li>
              <li className="flex items-start">
                <span className="text-bsu-gold mr-2">•</span>
                <span>Compliance with time commitment and outside activity policies</span>
              </li>
              <li className="flex items-start">
                <span className="text-bsu-gold mr-2">•</span>
                <span>Protection of student and postdoc interests</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              TTIO works with you to navigate these requirements and develop appropriate management strategies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bsu-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Launch Your Startup?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our startup support team to explore the possibilities for your innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/resources/request">
              <Button size="lg" className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                Request Consultation
              </Button>
            </Link>
            <Link href="/resources/forms">
              <Button
                size="lg"
                variant="outline"
                className="border-bsu-gold text-bsu-gold hover:bg-bsu-gold/10 bg-transparent"
              >
                View Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
