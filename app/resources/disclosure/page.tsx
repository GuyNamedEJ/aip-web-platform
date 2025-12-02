"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function InventionDisclosure() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to your backend/database
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <section className="bg-bsu-dark text-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Invention Disclosure</h1>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 flex-1 flex items-center justify-center">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-10">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Disclosure Submitted Successfully!</h2>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    Thank you for submitting your invention disclosure. Our Technology Transfer team will review your
                    submission and contact you within 5-7 business days.
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    A confirmation email has been sent to your registered email address with your disclosure reference
                    number.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Submit Another Disclosure
                    </Button>
                    <Button
                      onClick={() => (window.location.href = "/")}
                      className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white"
                    >
                      Return to Home
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bsu-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Invention Disclosure Form</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Submit your innovation for evaluation and intellectual property protection
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex gap-3">
            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <p className="font-semibold mb-1">Before You Begin</p>
              <p>
                Please ensure you have all necessary information about your invention, including technical descriptions,
                potential applications, and any prior disclosures. All fields marked with * are required.
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Invention Information</CardTitle>
              <CardDescription>Provide details about your innovation or discovery</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inventor Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Inventor Information</h3>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone <span className="text-red-500">*</span>
                      </Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">
                      Department/School <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select your department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="natural-sciences">Natural Sciences</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Invention Details */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-semibold text-gray-900">Invention Details</h3>

                  <div className="space-y-2">
                    <Label htmlFor="inventionTitle">
                      Invention Title <span className="text-red-500">*</span>
                    </Label>
                    <Input id="inventionTitle" placeholder="Brief descriptive title" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inventionCategory">
                      Category <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger id="inventionCategory">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="software">Software/Algorithm</SelectItem>
                        <SelectItem value="hardware">Hardware/Device</SelectItem>
                        <SelectItem value="process">Process/Method</SelectItem>
                        <SelectItem value="composition">Composition/Material</SelectItem>
                        <SelectItem value="biotechnology">Biotechnology</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">
                      Technical Description <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="description"
                      rows={6}
                      placeholder="Provide a detailed technical description of your invention, including how it works and what makes it novel..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="advantages">
                      Advantages & Benefits <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="advantages"
                      rows={4}
                      placeholder="Describe the advantages of your invention over existing solutions..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="applications">Potential Applications</Label>
                    <Textarea
                      id="applications"
                      rows={4}
                      placeholder="List potential commercial or research applications..."
                    />
                  </div>
                </div>

                {/* Prior Disclosure */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-semibold text-gray-900">Prior Disclosure & Funding</h3>

                  <div className="space-y-2">
                    <Label>
                      Has this invention been publicly disclosed? <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup defaultValue="no" required>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="disclosed-yes" />
                        <Label htmlFor="disclosed-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="disclosed-no" />
                        <Label htmlFor="disclosed-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="funding">Funding Source</Label>
                    <Input id="funding" placeholder="List any grants, contracts, or funding sources (if applicable)" />
                  </div>
                </div>

                {/* Co-Inventors */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-semibold text-gray-900">Co-Inventors (if applicable)</h3>

                  <div className="space-y-2">
                    <Label htmlFor="coinventors">Co-Inventor Names & Contact Information</Label>
                    <Textarea
                      id="coinventors"
                      rows={3}
                      placeholder="List any co-inventors with their names, departments, and email addresses..."
                    />
                  </div>
                </div>

                {/* Agreements */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-semibold text-gray-900">Acknowledgements</h3>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="accuracy" required />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="accuracy" className="text-sm">
                        I certify that the information provided is accurate and complete to the best of my knowledge.{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="policy" required />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="policy" className="text-sm">
                        I have read and agree to Bowie State University's Intellectual Property Policy.{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="cooperation" required />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="cooperation" className="text-sm">
                        I agree to cooperate with the Technology Transfer Office in evaluating and protecting this
                        invention. <span className="text-red-500">*</span>
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Button
                    type="submit"
                    className="w-full bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white"
                    size="lg"
                  >
                    Submit Disclosure
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting this form, you acknowledge that your invention will be reviewed by the TTIO team for
                    commercial potential and IP protection strategy.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
