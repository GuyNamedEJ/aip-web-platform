import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Lightbulb, TrendingUp } from "lucide-react"

export default function TechnologyTransferPage() {
  const processSteps = [
    {
      step: "1",
      title: "Research",
      description:
        "Observations and experiments during research activities lead to discoveries and inventions. An invention is any useful process, machine, composition of matter, or any new or useful improvement.",
    },
    {
      step: "2",
      title: "Pre-Disclosure",
      description:
        "Contact BSU tech transfer personnel early to discuss your invention and receive guidance concerning the disclosure, evaluation, and protection processes.",
    },
    {
      step: "3",
      title: "Invention Disclosure",
      description:
        "Submit written notice of invention to the BSU Tech Transfer and Innovation Office. This begins the formal technology transfer process and remains confidential.",
    },
    {
      step: "4",
      title: "Assessment",
      description:
        "Review the invention disclosure, conduct patent searches, and analyze the market and competitive landscape to determine commercialization potential.",
    },
    {
      step: "5",
      title: "Protection",
      description:
        "Pursue protection through patent applications filed with the U.S. Patent Office and, when appropriate, foreign patent offices to encourage third-party interest.",
    },
    {
      step: "6",
      title: "Marketing",
      description:
        "Identify candidate companies with expertise and resources to bring the technology to market, or explore forming a startup company.",
    },
    {
      step: "7",
      title: "Licensing",
      description:
        "Execute license agreement between BSU and a third party, granting rights to the technology for financial and other benefits while retaining ownership.",
    },
    {
      step: "8",
      title: "Commercialization",
      description:
        "Licensee advances the technology through development, regulatory approvals, sales, marketing, and other business activities to bring products to market.",
    },
    {
      step: "9",
      title: "Revenue Distribution",
      description:
        "Revenues received from licensees are distributed to inventors, BSU, and partner institutions to fund additional research and education.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bsu-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Technology Transfer Services</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Facilitating the authorized transfer of university research and innovations to external entities for
              commercialization and societal benefit
            </p>
          </div>
        </div>
      </section>

      {/* What is Tech Transfer */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">What is Technology Transfer?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Technology transfer pertains to the authorized transfer of technology to external entities, overseen by
              the technology transfer office and facilitated by professionals specializing in licensing, business
              development, and intellectual property.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              These experts boast extensive proficiency in the advancement and commercialization of technologies within
              the domains of life sciences, physical sciences, and engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Why Participate in Technology Transfer?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Researchers are motivated by a variety of factors that are specific to everyone
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">Societal Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Make a positive impact on society by bringing your research discoveries to market where they can
                  benefit the public
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">Financial & Recognition Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Receive financial compensation and professional recognition for your innovations and contributions to
                  your field
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">Additional Funding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Secure additional funding for your lab or department and attract research sponsors for future projects
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">Personal Fulfillment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Experience the personal satisfaction of seeing your research translate into real-world applications
                  and products
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">Student Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Create educational opportunities for students and facilitate connections between students and future
                  job opportunities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">Fulfill Obligations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Meet obligations related to research funding or employment requirements while advancing your field
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Transfer Process */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">The Technology Transfer Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From discovery to commercialization: A comprehensive journey of bringing innovations to market
            </p>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-bsu-gold">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-bsu-gold text-black font-bold text-xl flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <CardDescription className="text-base mt-2">{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long Does the Process Take?</h2>
            <p className="text-gray-600 mb-4">
              Protecting the technology and finding the right licensing partner may take months—or even years—to
              complete. The amount of time will depend on several factors:
            </p>
            <ul className="space-y-2 text-gray-600 ml-6">
              <li className="flex items-start">
                <span className="text-bsu-gold mr-2">•</span>
                <span>The development stage of the technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-bsu-gold mr-2">•</span>
                <span>The market for the technology and competing technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-bsu-gold mr-2">•</span>
                <span>The amount of work needed to bring a new concept to market-ready status</span>
              </li>
              <li className="flex items-start">
                <span className="text-bsu-gold mr-2">•</span>
                <span>The resources and willingness of the licensees and inventors</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bayh-Dole Act */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">The Bayh-Dole Act</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              The U.S. Bayh-Dole Act of 1980 empowers universities and non-profit institutions to claim ownership rights
              to discoveries from federally funded research, provided they fulfill certain obligations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              The Act encourages interest in tech transfer activities by promoting efforts to protect and commercialize
              such discoveries and sharing resulting revenues with the inventors.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              It contributes to increased research, commercialization, educational opportunities, and economic
              development.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bsu-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Begin the Tech Transfer Process?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team early in your discovery process to discuss your invention and receive guidance on the next
            steps
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/resources/disclosure">
              <Button size="lg" className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                Submit Invention Disclosure
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-bsu-gold text-bsu-gold hover:bg-bsu-gold/10 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
