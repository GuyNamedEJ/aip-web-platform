"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample technology catalog data
const technologies = [
  {
    id: 1,
    title: "Advanced Cybersecurity Framework",
    category: "Computer Science",
    status: "Available for Licensing",
    description:
      "Novel framework for protecting critical infrastructure from emerging cyber threats using AI-powered threat detection.",
    tags: ["Cybersecurity", "AI", "Infrastructure"],
    availableDate: "2024",
  },
  {
    id: 2,
    title: "Sustainable Energy Storage System",
    category: "Engineering",
    status: "Patent Pending",
    description:
      "Innovative battery technology for renewable energy storage with improved efficiency and reduced environmental impact.",
    tags: ["Energy", "Sustainability", "Battery Tech"],
    availableDate: "2024",
  },
  {
    id: 3,
    title: "AI-Powered Educational Platform",
    category: "Education Technology",
    status: "Available for Licensing",
    description:
      "Adaptive learning platform that personalizes education content based on student performance and learning style.",
    tags: ["EdTech", "AI", "Machine Learning"],
    availableDate: "2023",
  },
  {
    id: 4,
    title: "Biomedical Imaging Enhancement",
    category: "Healthcare",
    status: "Patent Pending",
    description:
      "Advanced imaging technique for early disease detection with higher accuracy and lower radiation exposure.",
    tags: ["Healthcare", "Imaging", "Diagnostics"],
    availableDate: "2024",
  },
  {
    id: 5,
    title: "Smart City IoT Management System",
    category: "Computer Science",
    status: "Available for Licensing",
    description: "Comprehensive IoT platform for managing smart city infrastructure, traffic, and public services.",
    tags: ["IoT", "Smart City", "Infrastructure"],
    availableDate: "2023",
  },
  {
    id: 6,
    title: "Quantum Computing Algorithm Suite",
    category: "Computer Science",
    status: "Patent Pending",
    description: "Collection of optimized algorithms for quantum computers solving complex computational problems.",
    tags: ["Quantum Computing", "Algorithms", "Computing"],
    availableDate: "2024",
  },
]

const categories = ["All", "Computer Science", "Engineering", "Education Technology", "Healthcare"]
const statuses = ["All", "Available for Licensing", "Patent Pending"]

export default function TechCatalog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")

  const filteredTechnologies = technologies.filter((tech) => {
    const matchesSearch =
      tech.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || tech.category === selectedCategory
    const matchesStatus = selectedStatus === "All" || tech.status === selectedStatus
    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bsu-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Innovation Catalog</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Explore available technologies and innovations from Bowie State University researchers
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search technologies, keywords, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredTechnologies.length} of {technologies.length} innovations
            </p>
            <Button variant="outline" size="sm" className="bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredTechnologies.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTechnologies.map((tech) => (
                <Card key={tech.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant={tech.status === "Available for Licensing" ? "default" : "secondary"}>
                        {tech.status}
                      </Badge>
                      <span className="text-xs text-gray-500">{tech.availableDate}</span>
                    </div>
                    <CardTitle className="text-lg">{tech.title}</CardTitle>
                    <CardDescription>{tech.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{tech.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/tech-catalog/${tech.id}`} className="w-full">
                      <Button variant="outline" className="w-full bg-transparent">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No technologies found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                  setSelectedStatus("All")
                }}
                className="mt-4 bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-bsu-dark text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in Licensing a Technology?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact our Technology Transfer team to discuss licensing opportunities, partnership options, or to learn
              more about any of our innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                  Contact Us
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
        </div>
      </section>
    </div>
  )
}
