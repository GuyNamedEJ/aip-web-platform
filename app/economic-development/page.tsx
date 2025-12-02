import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, TrendingUp, Briefcase, GraduationCap, MapPin } from "lucide-react"

export default function EconomicDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bsu-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Economic Development</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Driving regional economic growth through innovation, workforce development, and strategic partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
              Catalyzing Economic Growth in Maryland
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Bowie State University plays a vital role in the economic development of Prince George's County, the
              Baltimore-Washington metropolitan region, and the State of Maryland. Through the Technology Transfer and
              Innovation Office and the Economic Development Office, we work to translate university research into
              economic opportunities.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Our economic development initiatives focus on technology commercialization, startup formation, workforce
              development, and building strategic partnerships between the university, industry, and government to
              create jobs, attract investment, and foster innovation-driven economic growth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As Maryland's oldest Historically Black College/University (HBCU), BSU is uniquely positioned to address
              economic disparities and create pathways to prosperity for underserved communities throughout the region.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Our Economic Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              BSU contributes to regional prosperity through multiple channels
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Technology Commercialization</CardTitle>
                <CardDescription>From lab to market</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  We facilitate the transfer of university innovations to the marketplace through licensing, startup
                  formation, and industry partnerships, creating new businesses and job opportunities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Patent portfolio and licensing revenue</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>University-based startup companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Industry-sponsored research projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Workforce Development</CardTitle>
                <CardDescription>Building tomorrow's talent</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  BSU educates and trains the next generation of innovators, entrepreneurs, and skilled professionals to
                  meet the evolving needs of Maryland's economy.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>STEM education and research training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Entrepreneurship and business programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Industry partnerships and internships</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Community Engagement</CardTitle>
                <CardDescription>Serving our region</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  We partner with local businesses, government agencies, and community organizations to address economic
                  challenges and create inclusive growth opportunities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Small business development support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Community education programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Economic inclusion initiatives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Briefcase className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Industry Partnerships</CardTitle>
                <CardDescription>Collaborative innovation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Strategic partnerships with industry leaders create research opportunities, provide student
                  experiences, and drive technological advancement in key sectors.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Sponsored research agreements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Technology development contracts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Collaborative research facilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Innovation Ecosystem</CardTitle>
                <CardDescription>Fostering entrepreneurship</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  We cultivate an entrepreneurial ecosystem that supports innovation, startup formation, and business
                  growth through mentorship, resources, and connections.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Business incubation services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Investor and mentor networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Entrepreneurship competitions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Regional Development</CardTitle>
                <CardDescription>Strengthening Maryland</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  BSU contributes to the economic vitality of Prince George's County and the broader
                  Baltimore-Washington region through direct spending, employment, and regional initiatives.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Local employment and procurement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Regional economic partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Infrastructure and development projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Strategic Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Programs driving economic development and innovation
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-bsu-gold">
              <CardHeader>
                <CardTitle className="text-xl">Maryland Innovation Initiative (MII)</CardTitle>
                <CardDescription>Accelerating commercialization of university research</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  The Maryland Innovation Initiative provides funding to support the development and commercialization
                  of promising technologies emerging from Maryland universities. BSU researchers can access these
                  resources to advance their innovations toward market readiness.
                </p>
                <p className="text-sm text-gray-600">
                  Through MII, we help bridge the gap between early-stage research and commercial viability, enabling
                  technologies to attract investment and create economic impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-bsu-gold">
              <CardHeader>
                <CardTitle className="text-xl">HBCU Entrepreneurship Initiative</CardTitle>
                <CardDescription>Building diverse entrepreneurial ecosystems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  This initiative provides resources, mentorship, and support specifically designed to help HBCU
                  students and faculty launch and grow successful businesses. We focus on addressing systemic barriers
                  to entrepreneurship and creating pathways to economic opportunity.
                </p>
                <p className="text-sm text-gray-600">
                  Through partnerships with corporations, government agencies, and community organizations, we provide
                  access to capital, expertise, and networks that enable entrepreneurial success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-bsu-gold">
              <CardHeader>
                <CardTitle className="text-xl">Tech Transfer Accelerator Program</CardTitle>
                <CardDescription>Fast-tracking university innovations to market</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Our accelerator program provides intensive support for promising technologies with high commercial
                  potential. Selected projects receive dedicated resources, expert mentorship, and connections to
                  industry partners and investors.
                </p>
                <p className="text-sm text-gray-600">
                  The program includes workshops on business development, IP strategy, fundraising, and market entry,
                  preparing innovations for successful commercialization.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-bsu-gold">
              <CardHeader>
                <CardTitle className="text-xl">Industry Research Partnership Program</CardTitle>
                <CardDescription>Collaborative solutions to industry challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  This program matches BSU researchers with industry partners seeking innovative solutions to technical
                  challenges. Companies gain access to cutting-edge research capabilities and talent, while researchers
                  secure funding and real-world applications for their work.
                </p>
                <p className="text-sm text-gray-600">
                  Partnerships can range from short-term consulting to multi-year collaborative research agreements,
                  creating sustained economic value for all parties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Economic Impact by the Numbers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              BSU's contribution to regional economic development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-bsu-gold mb-2">$500M+</div>
              <p className="text-gray-600">Annual Regional Economic Impact</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bsu-gold mb-2">5,000+</div>
              <p className="text-gray-600">Graduates Entering Workforce Annually</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bsu-gold mb-2">$50M+</div>
              <p className="text-gray-600">Annual Research Expenditures</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bsu-gold mb-2">100+</div>
              <p className="text-gray-600">Active Industry Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bsu-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Partner with BSU for Economic Growth</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in driving innovation, creating jobs, and building a more prosperous Maryland
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/resources/request">
              <Button size="lg" className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                Explore Partnership Opportunities
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-bsu-gold text-bsu-gold hover:bg-bsu-gold/10 bg-transparent"
              >
                Contact Economic Development Office
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
