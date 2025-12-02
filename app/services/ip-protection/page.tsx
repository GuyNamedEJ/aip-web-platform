import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText, Copyright, Award, Scale, BookOpen } from "lucide-react"

export default function IPProtectionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bsu-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Intellectual Property Protection
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Comprehensive protection and management of intellectual property created at Bowie State University
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Protecting Your Innovations</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              The Technology Transfer and Innovation Office at Bowie State University provides comprehensive support for
              protecting intellectual property created by faculty, staff, and students. We guide you through the entire
              process of securing legal protection for your innovations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our services ensure that your discoveries are properly documented, protected, and positioned for
              successful commercialization while complying with the University System of Maryland Intellectual Property
              Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Types of IP Protection */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Types of IP Protection</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide support for various forms of intellectual property protection
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Patents</CardTitle>
                <CardDescription>Protecting inventions and discoveries</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Patent protection provides the right to exclude others from making, using, offering for sale, or
                  selling the invention. We assist with:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>U.S. patent applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>International patent protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Patent prosecution and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Patent portfolio management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Copyright className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Copyrights</CardTitle>
                <CardDescription>Protecting creative works</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Copyright protection covers original works of authorship fixed in a tangible form. We provide guidance
                  on:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Software and computer programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Literary and educational materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Artistic and musical works</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Technology-mediated instructional materials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Trademarks</CardTitle>
                <CardDescription>Protecting brands and identities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Trademarks protect distinctive words or symbols identifying the source of goods and services:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Trademark registration and filing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Service marks for services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Trade dress protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Brand identity management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Tangible Research Property</CardTitle>
                <CardDescription>Protecting physical embodiments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Protection for physical embodiments of intellectual effort:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Research models and prototypes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Biological materials and chemicals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Devices and apparatus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Research records and data</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Plant Varieties & Mask Works</CardTitle>
                <CardDescription>Specialized protection types</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Additional forms of intellectual property protection:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Plant variety protection certificates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Mask work registration for semiconductors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Trade secret protection strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Scale className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Legal Support</CardTitle>
                <CardDescription>Comprehensive legal guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Our office provides comprehensive legal support for IP protection:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>IP strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Freedom to operate analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>IP portfolio management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bsu-gold mr-2">•</span>
                    <span>Infringement defense</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* IP Ownership */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">University Ownership</h2>
              <p className="text-gray-600 mb-4">
                Under the University System of Maryland Intellectual Property Policy, the University owns intellectual
                property created:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2 font-bold">•</span>
                  <span>
                    <strong>Within Scope of Employment:</strong> By personnel within their scope of employment or
                    faculty scholarly work
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2 font-bold">•</span>
                  <span>
                    <strong>Using University Resources:</strong> With the use of university resources beyond those
                    usually and customarily provided
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2 font-bold">•</span>
                  <span>
                    <strong>Under Sponsored Agreements:</strong> Through sponsored research agreements with external
                    funding
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2 font-bold">•</span>
                  <span>
                    <strong>By Written Agreement:</strong> As stated in signed agreements between the university and
                    creators
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Creator Ownership</h2>
              <p className="text-gray-600 mb-4">Creators retain ownership of intellectual property when:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2 font-bold">•</span>
                  <span>
                    <strong>Outside Scope:</strong> Created outside the scope of employment and without university
                    resources
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2 font-bold">•</span>
                  <span>
                    <strong>Student Work:</strong> Undergraduate and non-degree students own their creations unless
                    subject to other provisions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2 font-bold">•</span>
                  <span>
                    <strong>Traditional Scholarly Works:</strong> Faculty retain copyright for traditional academic
                    publications and scholarly works
                  </span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> When uncertain about ownership rights, personnel and students should disclose
                  their innovations to the TTIO for evaluation and guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Process */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">The Protection Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our step-by-step approach to securing intellectual property protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-bsu-gold text-black font-bold text-xl flex items-center justify-center mb-3">
                  1
                </div>
                <CardTitle className="text-lg">Disclosure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Submit your invention disclosure form to TTIO. Provide complete details about your innovation,
                  conception date, and development status.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-bsu-gold text-black font-bold text-xl flex items-center justify-center mb-3">
                  2
                </div>
                <CardTitle className="text-lg">Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  TTIO conducts patent searches, market analysis, and assesses commercial potential to determine the
                  best protection strategy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-bsu-gold text-black font-bold text-xl flex items-center justify-center mb-3">
                  3
                </div>
                <CardTitle className="text-lg">Filing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  File patent applications, copyright registrations, or trademark applications with appropriate agencies
                  (USPTO, Copyright Office, etc.).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-bsu-gold text-black font-bold text-xl flex items-center justify-center mb-3">
                  4
                </div>
                <CardTitle className="text-lg">Prosecution & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Manage the prosecution process, respond to office actions, and maintain granted IP rights through
                  timely fee payments and renewals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bsu-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Protect Your Innovation Today</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our IP protection team to discuss the best strategy for safeguarding your intellectual property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/resources/disclosure">
              <Button size="lg" className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                Submit Disclosure
              </Button>
            </Link>
            <Link href="/resources/forms">
              <Button
                size="lg"
                variant="outline"
                className="border-bsu-gold text-bsu-gold hover:bg-bsu-gold/10 bg-transparent"
              >
                View IP Forms
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
