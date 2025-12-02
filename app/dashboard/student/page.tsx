"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  Mail,
  Newspaper,
  Bell,
  BookOpen,
  GraduationCap,
  Clock,
  MapPin,
  ChevronRight,
  LogOut,
  FileText,
  Users,
  Lightbulb,
} from "lucide-react"
import { getUserFromStorage, clearUserFromStorage, type User } from "@/lib/auth"

export default function StudentDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const storedUser = getUserFromStorage()
    if (!storedUser || storedUser.role !== "student") {
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

  // Sample data for student dashboard
  const registeredEvents = [
    {
      id: 1,
      title: "Innovation Symposium 2025",
      date: "May 15-16, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Student Center",
      status: "confirmed",
    },
    {
      id: 2,
      title: "Research Showcase",
      date: "July 22, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Fine Arts Center",
      status: "pending",
    },
    {
      id: 3,
      title: "Grant Writing Workshop",
      date: "June 8, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Science Building, Room 205",
      status: "confirmed",
    },
  ]

  const messages = [
    {
      id: 1,
      from: "Dr. Sarah Williams",
      subject: "Research Assistant Position",
      preview: "I'm looking for a research assistant for the upcoming AI project...",
      date: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      from: "TTIO Office",
      subject: "Event Registration Confirmed",
      preview: "Your registration for Innovation Symposium 2025 has been confirmed...",
      date: "Yesterday",
      unread: true,
    },
    {
      id: 3,
      from: "Career Services",
      subject: "Internship Opportunities",
      preview: "New internship opportunities are now available in the STEM fields...",
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
      title: "Student Research Spotlight",
      description: "Highlighting outstanding student research projects and achievements.",
      date: "April 15, 2025",
    },
  ]

  const quickLinks = [
    { title: "Research Opportunities", href: "/resources/request-service", icon: BookOpen },
    { title: "Events Calendar", href: "/events", icon: Calendar },
    { title: "Faculty Directory", href: "/dashboard", icon: Users },
    { title: "Innovation Resources", href: "/services/technology-transfer", icon: Lightbulb },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-bsu-dark text-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-bsu-gold">
                <AvatarImage src="/student-avatar.png" />
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
                  <GraduationCap className="h-4 w-4" />
                  Student - {user?.department}
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
          {/* Left Column - Events and Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            {/* Registered Events */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-bsu-gold" />
                    My Registered Events
                  </CardTitle>
                  <CardDescription>Upcoming events you're registered for</CardDescription>
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

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
                <CardDescription>Access frequently used resources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickLinks.map((link) => (
                    <Link key={link.title} href={link.href}>
                      <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-white hover:bg-bsu-gold/10 hover:border-bsu-gold transition-colors text-center">
                        <link.icon className="h-8 w-8 text-bsu-gold" />
                        <span className="text-sm font-medium">{link.title}</span>
                      </div>
                    </Link>
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
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-bsu-gold/10 border border-bsu-gold/30">
                    <div className="h-2 w-2 rounded-full bg-bsu-gold"></div>
                    <p className="text-sm">Event registration confirmed for Innovation Symposium</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border">
                    <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                    <p className="text-sm">New research opportunity available</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border">
                    <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                    <p className="text-sm">Newsletter published - May 2025</p>
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

            {/* Student Resources Card */}
            <Card className="bg-bsu-dark text-white">
              <CardHeader>
                <CardTitle>Student Resources</CardTitle>
                <CardDescription className="text-gray-300">
                  Access tools and support for your academic journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link
                  href="/resources/request-service"
                  className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <p className="font-medium">Request Research Support</p>
                  <p className="text-sm text-gray-300">Get help with your research projects</p>
                </Link>
                <Link
                  href="/services/startup-support"
                  className="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <p className="font-medium">Entrepreneurship Resources</p>
                  <p className="text-sm text-gray-300">Start your own venture</p>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
