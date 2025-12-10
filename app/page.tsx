import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, FileText, Lightbulb, Scale, Users } from "lucide-react"
import { supabase } from '@/lib/supabaseClient';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-bsu-dark text-white">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Technology Transfer and Innovation Office
          </h1>
          <p className="mt-6 max-w-2xl text-xl">
            Facilitating commercialization of university research and protecting intellectual property at Bowie State
            University
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                Explore Resources
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="lg"
                variant="outline"
                className="border-bsu-gold text-bsu-gold hover:bg-bsu-gold/10 bg-transparent"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
            <div className="mt-6 max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed">
                The Technology Transfer and Innovation Office (TTIO) at Bowie State University is dedicated to
                facilitating the transfer of university research into products and services that benefit society. We
                protect and manage intellectual property, foster innovation, and create opportunities for
                commercialization of research discoveries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Comprehensive support for innovation and technology commercialization
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Scale className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle>Intellectual Property Protection</CardTitle>
                <CardDescription>Patent and copyright management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We assist faculty and researchers in protecting their intellectual property through patents,
                  copyrights, and trademarks. Our team guides you through the entire IP protection process.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/services/ip-protection"
                  className="text-bsu-gold font-medium flex items-center hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle>Technology Commercialization</CardTitle>
                <CardDescription>Bringing innovations to market</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We help transform research discoveries into marketable products and services through licensing,
                  startup formation, and industry partnerships.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/services/commercialization"
                  className="text-bsu-gold font-medium flex items-center hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle>Invention Disclosure</CardTitle>
                <CardDescription>Report your innovations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Submit your invention disclosures through our streamlined process. We evaluate all disclosures for
                  commercial potential and IP protection strategies.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/services/disclosure"
                  className="text-bsu-gold font-medium flex items-center hover:underline"
                >
                  Submit disclosure <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle>Industry Partnerships</CardTitle>
                <CardDescription>Connecting research with industry</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We facilitate partnerships between university researchers and industry partners to accelerate
                  innovation and create real-world impact.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/services/partnerships"
                  className="text-bsu-gold font-medium flex items-center hover:underline"
                >
                  Explore partnerships <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle>Licensing Agreements</CardTitle>
                <CardDescription>Technology licensing support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We negotiate and manage licensing agreements for university technologies, ensuring fair terms and
                  maximizing benefits for all parties.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/services/licensing"
                  className="text-bsu-gold font-medium flex items-center hover:underline"
                >
                  Learn about licensing <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle>Innovation Support</CardTitle>
                <CardDescription>Resources for innovators</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access training, workshops, and consulting services to help develop your innovations and navigate the
                  commercialization process.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/services/support" className="text-bsu-gold font-medium flex items-center hover:underline">
                  Get support <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Key Focus Areas</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Supporting innovation across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Faculty & Researchers</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2">•</span>
                  <span>Patent application support and IP strategy development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2">•</span>
                  <span>Commercialization pathway guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2">•</span>
                  <span>Industry partnership facilitation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2">•</span>
                  <span>Licensing negotiation and agreement management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2">•</span>
                  <span>Startup formation and entrepreneurship support</span>
                </li>
              </ul>
              <Link href="/dashboard" className="mt-6 inline-block">
                <Button variant="outline" className="bg-transparent">
                  Access Resources
                </Button>
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Industry Partners</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2">•</span>
                  <span>Access to cutting-edge university research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2">•</span>
                  <span>Technology licensing opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2">•</span>
                  <span>Collaborative research agreements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2">•</span>
                  <span>Student talent recruitment pipeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bsu-gold mr-2">•</span>
                  <span>Custom research and development solutions</span>
                </li>
              </ul>
              <Link href="/industry" className="mt-6 inline-block">
                <Button variant="outline" className="bg-transparent">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technology Transfer Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              From invention to commercialization in five steps
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {[
              {
                step: "1",
                title: "Invention Disclosure",
                description: "Submit your innovation through our disclosure form",
              },
              {
                step: "2",
                title: "Evaluation",
                description: "TTIO reviews commercial potential and IP strategy",
              },
              {
                step: "3",
                title: "IP Protection",
                description: "File patents or other IP protection as appropriate",
              },
              {
                step: "4",
                title: "Marketing",
                description: "Identify and engage potential licensees or partners",
              },
              {
                step: "5",
                title: "Commercialization",
                description: "License technology or launch startup company",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-bsu-gold/20 hover:border-bsu-gold transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-bsu-gold text-black font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-bsu-gold" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/process">
              <Button className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                Learn About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-bsu-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl">
            Contact the Technology Transfer and Innovation Office to learn how we can help protect and commercialize
            your innovations
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                Contact Us
              </Button>
            </Link>
            <Link href="/newsletter">
              <Button
                size="lg"
                variant="outline"
                className="border-bsu-gold text-bsu-gold hover:bg-bsu-gold/10 bg-transparent"
              >
                Subscribe to Updates
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-left">
              <div>
                <h3 className="font-semibold mb-2">Office Location</h3>
                <p className="text-gray-300 text-sm">
                  Office of Research and Sponsored Programs
                  <br />
                  Bowie State University
                  <br />
                  14000 Jericho Park Road
                  <br />
                  Bowie, MD 20715
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <p className="text-gray-300 text-sm">
                  Phone: (301) 860-3500
                  <br />
                  Email: researchandsponsored@bowiestate.edu
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-300 text-sm">
                  Monday - Friday
                  <br />
                  8:30 AM - 5:00 PM
                  <br />
                  (By appointment preferred)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
