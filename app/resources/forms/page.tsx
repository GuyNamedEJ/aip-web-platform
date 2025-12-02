import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, ExternalLink } from "lucide-react"

const forms = [
  {
    title: "Invention Disclosure Form",
    description: "Submit your invention or innovation for evaluation and IP protection consideration.",
    category: "Disclosure",
    fileType: "PDF",
    required: true,
  },
  {
    title: "Material Transfer Agreement (MTA)",
    description: "Request form for transferring research materials between institutions.",
    category: "Agreements",
    fileType: "PDF",
  },
  {
    title: "Non-Disclosure Agreement (NDA)",
    description: "Confidentiality agreement for sharing sensitive research information.",
    category: "Agreements",
    fileType: "PDF",
  },
  {
    title: "License Agreement Request",
    description: "Initiate the licensing process for university technologies.",
    category: "Licensing",
    fileType: "PDF",
  },
  {
    title: "Startup Formation Consultation Request",
    description: "Request guidance for forming a startup based on university research.",
    category: "Entrepreneurship",
    fileType: "PDF",
  },
  {
    title: "Industry Partnership Inquiry",
    description: "Express interest in partnering with BSU for research collaboration.",
    category: "Partnerships",
    fileType: "PDF",
  },
  {
    title: "Patent Application Checklist",
    description: "Comprehensive checklist for preparing patent application materials.",
    category: "IP Protection",
    fileType: "PDF",
  },
  {
    title: "Copyright Registration Form",
    description: "Register software, creative works, or educational materials.",
    category: "IP Protection",
    fileType: "PDF",
  },
]

const guidelines = [
  {
    title: "Intellectual Property Policy",
    description: "BSU policy on ownership and management of intellectual property.",
    link: "#",
  },
  {
    title: "Technology Transfer Guidelines",
    description: "Step-by-step guide to the technology transfer process at BSU.",
    link: "#",
  },
  {
    title: "Licensing Best Practices",
    description: "Best practices for negotiating and managing licensing agreements.",
    link: "#",
  },
  {
    title: "Startup Formation Guide",
    description: "Comprehensive guide for faculty and students launching startups.",
    link: "#",
  },
]

export default function FormsAndDocuments() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bsu-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Forms & Documents</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Access forms, templates, and guidelines for technology transfer and intellectual property management
            </p>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Forms & Templates</h2>
            <p className="text-gray-600">
              Download the necessary forms for disclosure, licensing, and partnership requests
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {forms.map((form, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <FileText className="h-8 w-8 text-bsu-gold" />
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{form.fileType}</span>
                  </div>
                  <CardTitle className="text-lg mt-4">{form.title}</CardTitle>
                  <CardDescription>{form.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{form.category}</span>
                    {form.required && (
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Required</span>
                    )}
                  </div>
                  <Button className="w-full mt-4 bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download Form
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Guidelines & Policies</h2>
            <p className="text-gray-600">
              Review important policies and guidelines for intellectual property and technology transfer
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {guidelines.map((guide, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    {guide.title}
                    <ExternalLink className="h-5 w-5 text-bsu-gold" />
                  </CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={guide.link}>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Document
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-bsu-dark text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help with Forms?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team is here to assist you with completing forms, understanding requirements, or answering any
              questions about the process.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
