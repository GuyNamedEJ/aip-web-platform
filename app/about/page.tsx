import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, Users, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bsu-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              About the Technology Transfer and Innovation Office
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Supporting innovation, protecting intellectual property, and fostering partnerships at Bowie State
              University
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Technology Transfer and Innovation Office (TTIO) at Bowie State University serves as the primary
                resource for faculty, staff, and students seeking to protect and commercialize their intellectual
                property. We facilitate the transfer of university research and innovations to the marketplace, creating
                economic and social impact while generating revenue for the university and inventors.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our office provides comprehensive support throughout the entire commercialization process, from initial
                invention disclosure through patent prosecution, licensing, and startup formation.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To establish Bowie State University as a recognized leader in technology transfer and innovation,
                fostering a culture of entrepreneurship and creating meaningful partnerships between academia and
                industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a thriving ecosystem where university research translates into real-world solutions that
                benefit society, drive economic development, and enhance the reputation of Bowie State University as a
                hub for innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">Invention Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Receive and evaluate invention disclosures, assess commercial potential, and develop IP protection
                  strategies
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Scale className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">IP Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Manage patent applications, copyright registrations, and other forms of intellectual property
                  protection
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">Licensing & Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Negotiate licensing agreements and facilitate partnerships between university researchers and industry
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-lg">Startup Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Assist faculty and students in forming startups based on university technologies and research
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Work With TTIO?</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bsu-gold text-black mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Our experienced team provides expert guidance throughout the entire commercialization process, from
                disclosure to market
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bsu-gold text-black mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Connections</h3>
              <p className="text-gray-600">
                Access our extensive network of industry partners, investors, and potential licensees to accelerate your
                innovation's path to market
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bsu-gold text-black mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Revenue Sharing</h3>
              <p className="text-gray-600">
                Benefit from fair revenue sharing agreements that reward inventors while supporting continued research
                and innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Organization */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Part of Research Excellence</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              TTIO operates under the Office of Research and Sponsored Programs
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              The Technology Transfer and Innovation Office is part of the{" "}
              <strong>Office of Research and Sponsored Programs (ORSP)</strong> within the Division of Research and
              Innovation at Bowie State University. ORSP provides comprehensive support for research administration,
              grant management, and compliance oversight.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Working in coordination with ORSP, TTIO ensures that research outputs are properly protected,
              commercialized, and managed in compliance with university policies and federal regulations.
            </p>
            <Link
              href="https://www.bowiestate.edu/about/administration-and-governance/division-of-research-and-innovation/office-of-research-and-sponsored-programs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                Learn More About ORSP
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bsu-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Protect Your Innovation?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl">
            Contact us today to discuss how we can help you commercialize your research
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
