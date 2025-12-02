"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Mail,
  Newspaper,
  Bell,
  Lightbulb,
  Users,
  Clock,
  MapPin,
  ChevronRight,
  LogOut,
  FileText,
  Plus,
  Eye,
  CheckCircle,
  AlertCircle,
  HourglassIcon,
} from "lucide-react"
import { getUserFromStorage, clearUserFromStorage, type User } from "@/lib/auth"

export default function ProfessorDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const storedUser = getUserFromStorage()
    if (!storedUser || storedUser.role !== "professor") {
      router.push("/login")
    } else {
      setUser(storedUser)
      setIsLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    clearUserFromStorage()
    router.push("/login")
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bsu-gold"></div>
      </div>
    )
  }

  // Sample data for professor dashboard
  const registeredEvents = [
    {
      id: 1,
      title: "Innovation Symposium 2025",
      date: "May 15-16, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Student Center",
      role: "Presenter",
      status: "confirmed",
    },
    {
      id: 2,
      title: "Faculty Research Workshop",
      date: "June 1, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "Science Building, Room 101",
      role: "Attendee",
      status: "confirmed",
    },
    {
      id: 3,
      title: "Industry Partnership Forum",
      date: "September 5, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Student Center Ballroom",
      role: "Panelist",
      status: "pending",
    },
  ]

  const messages = [
    {
      id: 1,
      from: "TTIO Office",
      subject: "Invention Disclosure Status Update",
      preview: "Your invention disclosure #2024-015 has been reviewed and approved for patent filing...",
      date: "1 hour ago",
      unread: true,
    },
    {
      id: 2,
      from: "Dr. Michael Chen",
      subject: "Collaboration Opportunity",
      preview: "I'm interested in collaborating on your AI research project. Would you be available...",
      date: "3 hours ago",
      unread: true,
    },
    {
      id: 3,
      from: "Research Administration",
      subject: "Grant Application Deadline Reminder",
      preview: "This is a reminder that the NSF grant application deadline is approaching...",
      date: "Yesterday",
      unread: false,
    },
    {
      id: 4,
      from: "Student Alex Johnson",
      subject: "Research Assistant Application",
      preview: "I am writing to express my interest in the research assistant position...",
      date: "2 days ago",
      unread: false,
    },
  ]

  const newsletters = [
    {
      id: 1,
      title: "TTIO Monthly Newsletter - May 2025",
      description: "Updates on research initiatives, funding opportunities, and upcoming events.",
      date: "May 1, 2025",
    },
    {
      id: 2,
      title: "Faculty Research Digest",
      description: "Highlighting recent faculty publications and research achievements.",
      date: "April 20, 2025",
    },
  ]

  const inventionDisclosures = [
    {
      id: "2024-015",
      title: "AI-Powered Educational Assessment System",
      submittedDate: "March 15, 2024",
      status: "approved",
      statusText: "Approved for Patent Filing",
    },
    {
      id: "2024-022",
      title: "Novel Machine Learning Algorithm for Data Analysis",
      submittedDate: "April 10, 2024",
      status: "review",
      statusText: "Under Review",
    },
    {
      id: "2023-089",
      title: "Sustainable Energy Storage Solution",
      submittedDate: "November 5, 2023",
      status: "licensed",
      statusText: "Licensed to Industry Partner",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "review":
        return <HourglassIcon className="h-5 w-5 text-yellow-500" />
      case "licensed":
        return <CheckCircle className="h-5 w-5 text-blue-500" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "review":
        return <Badge className="bg-yellow-500">Under Review</Badge>
      case "licensed":
        return <Badge className="bg-blue-500">Licensed</Badge>
      default:
        return <Badge variant="secondary">Pending</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-bsu-dark text-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-bsu-gold">
                <AvatarImage src="/professor-avatar-female.jpg" />
                <AvatarFallback className="bg-bsu-gold text-black text-xl">
                  {user?.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
                <p className="text-gray-300 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Professor - {user?.department}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Events and Invention Disclosures */}
          <div className="lg:col-span-2 space-y-6">
            {/* Invention Disclosures Section */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-bsu-gold" />
                    Invention Disclosures
                  </CardTitle>
                  <CardDescription>Manage your intellectual property submissions</CardDescription>
                </div>
                <Link href="/dashboard/professor/submit-disclosure">
                  <Button className="bg-bsu-gold text-black hover:bg-bsu-gold/90">
                    <Plus className="h-4 w-4 mr-2" />
                    Submit New Disclosure
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="all">All ({inventionDisclosures.length})</TabsTrigger>
                    <TabsTrigger value="review">Under Review (1)</TabsTrigger>
                    <TabsTrigger value="approved">Approved (1)</TabsTrigger>
                    <TabsTrigger value="licensed">Licensed (1)</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all">
                    <div className="space-y-4">
                      {inventionDisclosures.map((disclosure) => (
                        <div
                          key={disclosure.id}
                          className="flex items-start justify-between p-4 rounded-lg border bg-white hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            {getStatusIcon(disclosure.status)}
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-gray-900">{disclosure.title}</h4>
                                {getStatusBadge(disclosure.status)}
                              </div>
                              <p className="text-sm text-gray-500">ID: {disclosure.id}</p>
                              <p className="text-sm text-gray-500">Submitted: {disclosure.submittedDate}</p>
                              <p className="text-sm text-bsu-gold mt-1">{disclosure.statusText}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="review">
                    <div className="space-y-4">
                      {inventionDisclosures
                        .filter((d) => d.status === "review")
                        .map((disclosure) => (
                          <div
                            key={disclosure.id}
                            className="flex items-start justify-between p-4 rounded-lg border bg-white hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-start gap-4">
                              {getStatusIcon(disclosure.status)}
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-semibold text-gray-900">{disclosure.title}</h4>
                                  {getStatusBadge(disclosure.status)}
                                </div>
                                <p className="text-sm text-gray-500">ID: {disclosure.id}</p>
                                <p className="text-sm text-gray-500">Submitted: {disclosure.submittedDate}</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="approved">
                    <div className="space-y-4">
                      {inventionDisclosures
                        .filter((d) => d.status === "approved")
                        .map((disclosure) => (
                          <div
                            key={disclosure.id}
                            className="flex items-start justify-between p-4 rounded-lg border bg-white hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-start gap-4">
                              {getStatusIcon(disclosure.status)}
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-semibold text-gray-900">{disclosure.title}</h4>
                                  {getStatusBadge(disclosure.status)}
                                </div>
                                <p className="text-sm text-gray-500">ID: {disclosure.id}</p>
                                <p className="text-sm text-gray-500">Submitted: {disclosure.submittedDate}</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="licensed">
                    <div className="space-y-4">
                      {inventionDisclosures
                        .filter((d) => d.status === "licensed")
                        .map((disclosure) => (
                          <div
                            key={disclosure.id}
                            className="flex items-start justify-between p-4 rounded-lg border bg-white hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-start gap-4">
                              {getStatusIcon(disclosure.status)}
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-semibold text-gray-900">{disclosure.title}</h4>
                                  {getStatusBadge(disclosure.status)}
                                </div>
                                <p className="text-sm text-gray-500">ID: {disclosure.id}</p>
                                <p className="text-sm text-gray-500">Submitted: {disclosure.submittedDate}</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Registered Events */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-bsu-gold" />
                    My Registered Events
                  </CardTitle>
                  <CardDescription>Upcoming events and presentations</CardDescription>
                </div>
                <Link href="/events">
                  <Button variant="ghost" size="sm" className="text-bsu-gold">
                    View All <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {registeredEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-start justify-between p-4 rounded-lg border bg-white hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{event.title}</h4>
                          <Badge variant="outline">{event.role}</Badge>
                          <Badge
                            variant={event.status === "confirmed" ? "default" : "secondary"}
                            className={event.status === "confirmed" ? "bg-green-500" : ""}
                          >
                            {event.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-500 space-y-1">
                          <p className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </p>
                          <p className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </p>
                          <p className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletters */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Newspaper className="h-5 w-5 text-bsu-gold" />
                    Newsletters
                  </CardTitle>
                  <CardDescription>Latest updates from TTIO</CardDescription>
                </div>
                <Link href="/newsletter">
                  <Button variant="ghost" size="sm" className="text-bsu-gold">
                    Subscribe <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newsletters.map((newsletter) => (
                    <div
                      key={newsletter.id}
                      className="flex items-start gap-4 p-4 rounded-lg border bg-white hover:bg-gray-50 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-bsu-gold/10">
                        <FileText className="h-6 w-6 text-bsu-gold" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{newsletter.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{newsletter.description}</p>
                        <p className="text-xs text-gray-400 mt-2">{newsletter.date}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Read
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Messages and Notifications */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-bsu-gold" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p className="text-sm">Invention disclosure #2024-015 approved!</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-bsu-gold/10 border border-bsu-gold/30">
                    <div className="h-2 w-2 rounded-full bg-bsu-gold"></div>
                    <p className="text-sm">New collaboration request received</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border">
                    <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                    <p className="text-sm">Grant deadline approaching - NSF</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Messages */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-bsu-gold" />
                  Messages
                  <Badge className="bg-bsu-gold text-black ml-2">2</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        message.unread ? "bg-bsu-gold/5 border-bsu-gold/30" : "bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{message.from}</span>
                        <span className="text-xs text-gray-400">{message.date}</span>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{message.subject}</p>
                      <p className="text-xs text-gray-500 mt-1 truncate">{message.preview}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-transparent">
                  View All Messages
                </Button>
              </CardFooter>
            </Card>

            {/* Quick Actions Card */}
            <Card className="bg-bsu-dark text-white">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription className="text-gray-300">Frequently used tools and resources</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/dashboard/professor/submit-disclosure"
                  className="block p-3 rounded-lg bg-bsu-gold text-black hover:bg-bsu-gold/90 transition-colors"
                >
                  <p className="font-medium flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Submit New Invention Disclosure
                  </p>
                </Link>
                <Link
                  href="/services/ip-protection"
                  className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <p className="font-medium">IP Protection Resources</p>
                  <p className="text-sm text-gray-300">Learn about protecting your inventions</p>
                </Link>
                <Link
                  href="/services/licensing"
                  className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <p className="font-medium">Licensing Opportunities</p>
                  <p className="text-sm text-gray-300">Commercialize your research</p>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
