import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar } from "lucide-react"

export default function EventsAndResearch() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bsu-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Events & Research</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Stay updated on upcoming innovation events and explore published research from Bowie State University
            </p>
          </div>
        </div>
      </section>

      {/* Events and Research Content */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="events" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
              <TabsTrigger value="research">Published Research</TabsTrigger>
            </TabsList>

            {/* Events Tab */}
            <TabsContent value="events">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Innovation Symposium 2025",
                    date: "May 15-16, 2025",
                    description:
                      "A two-day event showcasing research innovations and fostering collaboration between academia and industry.",
                    location: "Student Center, Bowie State University",
                  },
                  {
                    title: "Grant Writing Workshop",
                    date: "June 8, 2025",
                    description:
                      "Learn effective strategies for writing competitive research grant proposals from experienced professionals.",
                    location: "Science Building, Room 205",
                  },
                  {
                    title: "Research Showcase",
                    date: "July 22, 2025",
                    description:
                      "Student and faculty researchers present their work to the university community and industry partners.",
                    location: "Fine and Performing Arts Center",
                  },
                  {
                    title: "Technology Transfer Seminar",
                    date: "August 10, 2025",
                    description:
                      "Learn about the process of commercializing research and protecting intellectual property.",
                    location: "Business Building, Room 120",
                  },
                  {
                    title: "Industry Partnership Forum",
                    date: "September 5, 2025",
                    description:
                      "Connect with industry representatives interested in collaborating on research and development projects.",
                    location: "Student Center Ballroom",
                  },
                  {
                    title: "Annual Research Conference",
                    date: "October 18-20, 2025",
                    description:
                      "A comprehensive conference featuring keynote speakers, panel discussions, and research presentations.",
                    location: "Multiple Venues, Bowie State University",
                  },
                ].map((event, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center mt-1">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{event.date}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-2">{event.description}</p>
                      <p className="text-sm text-gray-500">
                        <strong>Location:</strong> {event.location}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/events/${i}`}>
                        <Button variant="outline">View Details</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                  View All Events
                </Button>
              </div>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="flex flex-col md:flex-row overflow-hidden">
                    <div className="relative h-48 w-full md:w-1/3 md:h-auto">
                      <Image
                        src="/placeholder.svg?height=300&width=200"
                        alt={`Research publication ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Research Publication Title {i}</h3>
                      <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                      <div className="flex flex-col space-y-1 text-sm text-gray-500 mb-4">
                        <div>
                          <strong>Authors:</strong> Dr. Jane Doe, Dr. John Smith
                        </div>
                        <div>
                          <strong>Journal:</strong> Journal of Innovation Studies
                        </div>
                        <div>
                          <strong>Published:</strong> January 2025
                        </div>
                      </div>
                      <Link
                        href={`/research/${i}`}
                        className="text-bsu-gold font-medium flex items-center hover:underline"
                      >
                        Read Abstract <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                  View All Publications
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Event Calendar</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Plan ahead with our comprehensive event calendar
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-center p-12 border-2 border-dashed border-gray-300 rounded-lg">
              <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Calendar View Coming Soon</h3>
              <p className="mt-2 text-gray-500">
                Our interactive event calendar is under development. Check back soon!
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/newsletter">
              <Button className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                Subscribe for Event Updates
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
