import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope, Cpu, Leaf, Brain, Globe, Building } from "lucide-react"

export default function ResearchCentersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bsu-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Research Centers & Institutes</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Advancing innovation through specialized research centers and collaborative partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
              Centers of Excellence and Innovation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Bowie State University is home to several specialized research centers and institutes that drive
              innovation across multiple disciplines. These centers bring together faculty, students, and industry
              partners to address critical challenges and advance knowledge in their respective fields.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              The Technology Transfer and Innovation Office works closely with these research centers to identify
              commercialization opportunities, protect intellectual property, and facilitate partnerships with industry
              and government agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Research Centers */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Our Research Centers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our centers of research excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="border-l-4 border-l-bsu-gold">
              <CardHeader>
                <Cpu className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Center for Cybersecurity Research</CardTitle>
                <CardDescription>Advancing security in the digital age</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Our cybersecurity center focuses on developing innovative solutions to protect critical
                  infrastructure, secure networks, and defend against emerging cyber threats. Research areas include
                  threat detection, cryptography, and security policy.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <h4 className="font-semibold text-gray-900">Key Research Areas:</h4>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Network security and intrusion detection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Cryptographic protocols and blockchain</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>IoT and embedded systems security</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Cybersecurity education and workforce development</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-bsu-gold">
              <CardHeader>
                <Brain className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Center for Artificial Intelligence & Data Science</CardTitle>
                <CardDescription>Transforming data into insights and solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  This center develops cutting-edge AI and machine learning technologies for applications in healthcare,
                  education, finance, and smart cities. Our researchers work on deep learning, natural language
                  processing, and predictive analytics.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <h4 className="font-semibold text-gray-900">Key Research Areas:</h4>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Machine learning and deep learning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Natural language processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Computer vision and image analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Big data analytics and visualization</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-bsu-gold">
              <CardHeader>
                <Leaf className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Center for Environmental Science & Sustainability</CardTitle>
                <CardDescription>Protecting our planet for future generations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Focused on environmental research and sustainable development, this center addresses climate change,
                  renewable energy, water resources, and ecosystem conservation through interdisciplinary research and
                  community engagement.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <h4 className="font-semibold text-gray-900">Key Research Areas:</h4>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Climate change modeling and adaptation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Renewable energy systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Water quality and conservation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Urban sustainability and green infrastructure</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-bsu-gold">
              <CardHeader>
                <Microscope className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Center for Biomedical Research & Health Innovation</CardTitle>
                <CardDescription>Advancing health through scientific discovery</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  This center conducts innovative biomedical research to improve human health, focusing on disease
                  prevention, diagnostic tools, therapeutic interventions, and health disparities in underserved
                  communities.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <h4 className="font-semibold text-gray-900">Key Research Areas:</h4>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Cancer biology and therapeutics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Infectious disease research</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Health disparities and community health</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Biomedical device development</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-bsu-gold">
              <CardHeader>
                <Building className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Entrepreneurship & Innovation Center</CardTitle>
                <CardDescription>Fostering the next generation of entrepreneurs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  The Entrepreneurship & Innovation Center provides education, mentorship, and resources to help
                  students, faculty, and community members launch and grow successful businesses based on innovative
                  ideas and technologies.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <h4 className="font-semibold text-gray-900">Key Focus Areas:</h4>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Startup incubation and acceleration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Business model development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Pitch competitions and investor connections</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Entrepreneurship education programs</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-bsu-gold">
              <CardHeader>
                <Globe className="h-10 w-10 text-bsu-gold mb-3" />
                <CardTitle className="text-xl">Center for Urban Studies & Community Development</CardTitle>
                <CardDescription>Building stronger, more resilient communities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  This center conducts research and implements programs that address urban challenges including economic
                  development, housing, education, and social equity in metropolitan areas, particularly in the
                  Baltimore-Washington region.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <h4 className="font-semibold text-gray-900">Key Research Areas:</h4>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Urban economic development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Affordable housing and gentrification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Community engagement and empowerment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-bsu-gold mr-2">•</span>
                      <span>Social justice and equity research</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Collaborate with our research centers to advance innovation and address real-world challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bsu-gold text-black mb-4">
                <Microscope className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research Collaboration</h3>
              <p className="text-gray-600">
                Partner with our centers on joint research projects, sponsored research agreements, and collaborative
                grants
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bsu-gold text-black mb-4">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Partnerships</h3>
              <p className="text-gray-600">
                Access cutting-edge research, student talent, and specialized equipment through industry partnership
                programs
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bsu-gold text-black mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Technology Licensing</h3>
              <p className="text-gray-600">
                License innovative technologies developed by our research centers for commercial applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bsu-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Interested in Partnering with Our Research Centers?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact the Technology Transfer and Innovation Office to explore collaboration opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/resources/request">
              <Button size="lg" className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                Request Information
              </Button>
            </Link>
            <Link href="/tech-catalog">
              <Button
                size="lg"
                variant="outline"
                className="border-bsu-gold text-bsu-gold hover:bg-bsu-gold/10 bg-transparent"
              >
                View Available Technologies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
