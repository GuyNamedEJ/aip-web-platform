import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Download, FileText } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bsu-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Faculty & Researcher Dashboard
              </h1>
              <p className="mt-4 text-lg">
                Access resources, explore research projects, and connect with colleagues at Bowie State University
              </p>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Researchers collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="projects">Research Projects</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="faculty">Faculty Directory</TabsTrigger>
            </TabsList>

            {/* Research Projects Tab */}
            <TabsContent value="projects">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle>Research Project {i}</CardTitle>
                      <CardDescription>Department of Computer Science</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="font-medium">Dr. John Smith</span>
                        <span className="mx-2">•</span>
                        <span>2023-2025</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/projects/${i}`}
                        className="text-bsu-gold font-medium flex items-center hover:underline"
                      >
                        View details <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                  Load More Projects
                </Button>
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <FileText className="h-8 w-8 text-bsu-gold mb-2" />
                    <CardTitle>Grant Opportunities</CardTitle>
                    <CardDescription>Current funding opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Access information about available grants, deadlines, and application requirements for research
                      funding.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/resources/grants">
                      <Button variant="outline" className="flex items-center bg-transparent">
                        <Download className="mr-2 h-4 w-4" /> Download Guide
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <FileText className="h-8 w-8 text-bsu-gold mb-2" />
                    <CardTitle>Research Equipment</CardTitle>
                    <CardDescription>Available technology and facilities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Browse our catalog of specialized research equipment and facilities available for faculty and
                      researchers.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/resources/equipment">
                      <Button variant="outline">View Catalog</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <FileText className="h-8 w-8 text-bsu-gold mb-2" />
                    <CardTitle>Publication Support</CardTitle>
                    <CardDescription>Resources for academic publishing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Get assistance with manuscript preparation, journal selection, and open access publishing options.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/resources/publications">
                      <Button variant="outline">Learn More</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <FileText className="h-8 w-8 text-bsu-gold mb-2" />
                    <CardTitle>Collaboration Networks</CardTitle>
                    <CardDescription>Connect with potential partners</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Find potential collaborators within BSU and at partner institutions for interdisciplinary research
                      projects.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/resources/collaborations">
                      <Button variant="outline">Explore Networks</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <FileText className="h-8 w-8 text-bsu-gold mb-2" />
                    <CardTitle>Professional Development</CardTitle>
                    <CardDescription>Training and workshops</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Access workshops, seminars, and training opportunities to enhance your research and teaching
                      skills.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/resources/development">
                      <Button variant="outline">View Calendar</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <FileText className="h-8 w-8 text-bsu-gold mb-2" />
                    <CardTitle>Technology Transfer</CardTitle>
                    <CardDescription>Commercialization support</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Get guidance on patents, licensing, and commercializing your research innovations and discoveries.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/resources/tech-transfer">
                      <Button variant="outline">Get Started</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Faculty Directory Tab */}
            <TabsContent value="faculty">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt={`Faculty member ${i}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle>Dr. Jane Doe {i}</CardTitle>
                        <CardDescription>Professor of Computer Science</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-2">
                        Research Focus: Artificial Intelligence, Machine Learning, Data Science
                      </p>
                      <div className="text-sm text-gray-500">
                        <p>Email: faculty{i}@bowiestate.edu</p>
                        <p>Office: Science Building, Room {100 + i}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Link href={`/faculty/${i}`}>
                        <Button variant="outline" className="w-full bg-transparent">
                          View Profile
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                  View All Faculty
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
