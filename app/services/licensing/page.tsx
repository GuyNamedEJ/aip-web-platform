import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, TrendingUp, Users, Handshake, DollarSign, Scale } from "lucide-react"

export default function LicensingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bsu-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Technology Licensing Services</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Connecting university innovations with industry partners through strategic licensing agreements
            </p>
          </div>
        </div>
      </section>

      {/* What is Licensing */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">What is Technology Licensing?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              A license agreement is a contract between Bowie State University and a third party in which BSU's rights
              to technology are licensed (without relinquishing ownership) for financial and other benefits.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Technology licensing represents a powerful opportunity for collaboration and innovation. It creates a
              partnership between established companies or new startups to meet specific performance requirements and
              make financial contributions that support further research and education.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This partnership allows for sharing knowledge and resources, fostering an environment where new ideas can
              flourish and benefit society.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Licenses */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Types of License Agreements</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer various licensing arrangements to meet different commercialization needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle>Exclusive License</CardTitle>
                <CardDescription>Single licensee rights</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Grants one licensee the sole rights to use, develop, and commercialize the technology in specified
                  fields and territories.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Maximum development commitment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Strongest market position</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Performance milestones required</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Handshake className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle>Non-Exclusive License</CardTitle>
                <CardDescription>Multiple licensee rights</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Allows multiple companies to license the same technology, promoting broader dissemination and
                  application.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Wider market reach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Lower initial fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Faster commercialization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle>Option Agreement</CardTitle>
                <CardDescription>Evaluation period</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Provides a limited time for a potential licensee to evaluate the technology before committing to a
                  full license.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Due diligence period</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Technology assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Market validation time</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Licensing Process */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">The Licensing Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial interest to executed agreement: our collaborative approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-t-4 border-t-bsu-gold">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-bsu-gold text-black font-bold text-xl flex items-center justify-center mb-3">
                  1
                </div>
                <CardTitle className="text-lg">Initial Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Potential licensees contact TTIO to express interest in specific technologies or explore available
                  innovations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-bsu-gold">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-bsu-gold text-black font-bold text-xl flex items-center justify-center mb-3">
                  2
                </div>
                <CardTitle className="text-lg">Technology Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  TTIO provides detailed technical information, including patents, research data, and inventor
                  consultations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-bsu-gold">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-bsu-gold text-black font-bold text-xl flex items-center justify-center mb-3">
                  3
                </div>
                <CardTitle className="text-lg">Term Negotiation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Parties negotiate license terms including fees, royalties, milestones, territory, and field of use.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-bsu-gold">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-bsu-gold text-black font-bold text-xl flex items-center justify-center mb-3">
                  4
                </div>
                <CardTitle className="text-lg">Agreement Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Final agreement is executed, and licensee begins commercialization activities with ongoing TTIO
                  support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* License Terms */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key License Terms</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <DollarSign className="h-6 w-6 text-bsu-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Financial Terms</h3>
                    <p className="text-sm text-gray-600">
                      Upfront fees, annual maintenance fees, milestone payments, and royalties on sales or sublicensing
                      revenue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-bsu-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Performance Milestones</h3>
                    <p className="text-sm text-gray-600">
                      Specific development and commercialization targets with timelines to ensure diligent pursuit of
                      the technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Scale className="h-6 w-6 text-bsu-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Field of Use</h3>
                    <p className="text-sm text-gray-600">
                      Defines specific applications, markets, or industries where the licensee may use the technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-6 w-6 text-bsu-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Territory</h3>
                    <p className="text-sm text-gray-600">
                      Geographic regions where the licensee has rights, ranging from local to worldwide coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Licensee Qualifications</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-gray-600 mb-4">
                  We seek licensees who demonstrate the capability to successfully commercialize university
                  technologies:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2 font-bold">✓</span>
                    <span>
                      <strong>Technical Expertise:</strong> Understanding of the technology and ability to further
                      develop it
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2 font-bold">✓</span>
                    <span>
                      <strong>Business Capability:</strong> Proven track record in bringing products to market
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2 font-bold">✓</span>
                    <span>
                      <strong>Financial Resources:</strong> Adequate funding to support development and
                      commercialization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2 font-bold">✓</span>
                    <span>
                      <strong>Market Access:</strong> Established channels for reaching target customers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2 font-bold">✓</span>
                    <span>
                      <strong>Commitment:</strong> Dedication to diligent commercialization with clear milestones
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Benefits of Licensing from BSU</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bsu-gold text-black mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cutting-Edge Research</h3>
              <p className="text-gray-600">
                Access to innovative technologies developed by leading researchers in various fields of science and
                engineering
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bsu-gold text-black mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inventor Collaboration</h3>
              <p className="text-gray-600">
                Direct access to inventors for technical support, consulting, and collaborative development
                opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bsu-gold text-black mb-4">
                <Handshake className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Partnership</h3>
              <p className="text-gray-600">
                Opportunity to build long-term relationships with BSU for future innovations and talent recruitment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bsu-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Interested in Licensing BSU Technology?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our innovation catalog or contact us to discuss licensing opportunities for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tech-catalog">
              <Button size="lg" className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                Browse Technologies
              </Button>
            </Link>
            <Link href="/resources/request">
              <Button
                size="lg"
                variant="outline"
                className="border-bsu-gold text-bsu-gold hover:bg-bsu-gold/10 bg-transparent"
              >
                Request Information
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
