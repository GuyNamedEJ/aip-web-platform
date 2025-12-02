"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, CheckCircle, Lightbulb, Upload } from "lucide-react"
import { getUserFromStorage, type User } from "@/lib/auth"

export default function SubmitDisclosure() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    setSubmitted(true)
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bsu-gold"></div>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-10">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Disclosure Submitted Successfully!</h2>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  Your invention disclosure has been submitted and will be reviewed by the TTIO team. You will receive a
                  confirmation email with your disclosure ID.
                </p>
                <p className="text-sm text-gray-500 mb-6">Expected review time: 2-4 weeks</p>
                <div className="flex gap-4 justify-center">
                  <Link href="/dashboard/professor">
                    <Button className="bg-bsu-gold text-black hover:bg-bsu-gold/90">Return to Dashboard</Button>
                  </Link>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Submit Another
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-bsu-dark text-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/dashboard/professor"
            className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          <div className="flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-bsu-gold" />
            <div>
              <h1 className="text-2xl font-bold">Submit New Invention Disclosure</h1>
              <p className="text-gray-300">Protect your intellectual property through the TTIO</p>
            </div>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Invention Disclosure Form</CardTitle>
            <CardDescription>
              Please provide detailed information about your invention. All fields marked with * are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Inventor Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Inventor Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="inventorName">
                      Primary Inventor Name <span className="text-red-500">*</span>
                    </Label>
                    <Input id="inventorName" defaultValue={user?.name} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">
                      Department <span className="text-red-500">*</span>
                    </Label>
                    <Input id="department" defaultValue={user?.department} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input id="email" type="email" defaultValue={user?.email} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(301) 555-0100" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coInventors">Co-Inventors (if any)</Label>
                  <Textarea
                    id="coInventors"
                    placeholder="List all co-inventors with their names, departments, and email addresses"
                    rows={3}
                  />
                </div>
              </div>

              {/* Invention Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Invention Details</h3>
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Invention Title <span className="text-red-500">*</span>
                  </Label>
                  <Input id="title" placeholder="Provide a descriptive title for your invention" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    Detailed Description <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your invention in detail, including how it works and what problem it solves"
                    rows={6}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="novelty">
                    Novel Aspects <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="novelty"
                    placeholder="What makes your invention new or different from existing solutions?"
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="applications">Potential Applications</Label>
                  <Textarea
                    id="applications"
                    placeholder="Describe potential commercial applications or industries that could benefit"
                    rows={3}
                  />
                </div>
              </div>

              {/* Development Status */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Development Status</h3>
                <div className="space-y-2">
                  <Label>
                    Current Stage <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup defaultValue="concept" required>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="concept" id="concept" />
                      <Label htmlFor="concept">Concept/Idea Stage</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="prototype" id="prototype" />
                      <Label htmlFor="prototype">Working Prototype</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tested" id="tested" />
                      <Label htmlFor="tested">Tested/Validated</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="published" id="published" />
                      <Label htmlFor="published">Published/Presented</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Has the invention been publicly disclosed?</Label>
                  <RadioGroup defaultValue="no">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="disclosed-no" />
                      <Label htmlFor="disclosed-no">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="disclosed-yes" />
                      <Label htmlFor="disclosed-yes">Yes</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Funding Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Funding Information</h3>
                <div className="space-y-2">
                  <Label>Was this invention developed with external funding?</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="federal" />
                      <Label htmlFor="federal">Federal Government (NIH, NSF, DOE, etc.)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="state" />
                      <Label htmlFor="state">State Government</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="industry" />
                      <Label htmlFor="industry">Industry/Corporate Sponsor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="internal" />
                      <Label htmlFor="internal">University Internal Funds</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grantNumber">Grant/Contract Number (if applicable)</Label>
                  <Input id="grantNumber" placeholder="e.g., NSF-2024-12345" />
                </div>
              </div>

              {/* Supporting Documents */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Supporting Documents</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 mb-2">Upload supporting documents (optional)</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Diagrams, research papers, prototype images, etc. (PDF, DOC, JPG, PNG - Max 10MB each)
                  </p>
                  <Button type="button" variant="outline">
                    Choose Files
                  </Button>
                </div>
              </div>

              {/* Agreement */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="agreement" required />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="agreement" className="text-sm">
                      I certify that the information provided is accurate and complete to the best of my knowledge. I
                      understand that this disclosure will be reviewed by the TTIO for patentability and
                      commercialization potential. <span className="text-red-500">*</span>
                    </Label>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex gap-4">
                <Button type="submit" className="bg-bsu-gold text-black hover:bg-bsu-gold/90">
                  Submit Disclosure
                </Button>
                <Button type="button" variant="outline">
                  Save as Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
