"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, FileText, Users, Lightbulb, Scale } from "lucide-react"
import Link from "next/link"

export default function RequestServicePage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <section className="bg-bsu-dark text-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Request TTIO Services</h1>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 flex-1 flex items-center justify-center">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-10">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted Successfully!</h2>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    Thank you for your service request. A member of our Technology Transfer and Innovation Office team
                    will contact you within 2-3 business days to discuss your needs.
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    A confirmation email has been sent to your registered email address with your request reference
                    number.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Submit Another Request
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
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Request TTIO Services</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Connect with our team for technology transfer, licensing, IP protection, and startup support services
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our office provides comprehensive support for all aspects of technology transfer and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <Card>
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-base">Technology Transfer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Guidance on commercializing research and bringing innovations to market
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Scale className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-base">IP Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Patent filing, copyright registration, and trademark protection</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-base">Licensing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Negotiation and management of technology licensing agreements</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-bsu-gold mb-2" />
                <CardTitle className="text-base">Startup Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Business planning and support for university-based startups</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle>Service Request Form</CardTitle>
              <CardDescription>
                Tell us about your needs and our team will get back to you promptly. Fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>

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
                    <Label htmlFor="affiliation">
                      Affiliation <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger id="affiliation">
                        <SelectValue placeholder="Select your affiliation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="faculty">Faculty</SelectItem>
                        <SelectItem value="researcher">Researcher</SelectItem>
                        <SelectItem value="postdoc">Postdoctoral Fellow</SelectItem>
                        <SelectItem value="grad-student">Graduate Student</SelectItem>
                        <SelectItem value="undergrad">Undergraduate Student</SelectItem>
                        <SelectItem value="staff">Staff</SelectItem>
                        <SelectItem value="industry">Industry Partner</SelectItem>
                        <SelectItem value="external">External Organization</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department/Organization</Label>
                    <Input id="department" placeholder="Enter your department or organization" />
                  </div>
                </div>

                {/* Service Request Details */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-semibold text-gray-900">Service Request Details</h3>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType">
                      Type of Service Requested <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger id="serviceType">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="invention-disclosure">Invention Disclosure Consultation</SelectItem>
                        <SelectItem value="patent">Patent Application Support</SelectItem>
                        <SelectItem value="copyright">Copyright Registration</SelectItem>
                        <SelectItem value="trademark">Trademark Protection</SelectItem>
                        <SelectItem value="licensing-in">Technology Licensing (In-licensing)</SelectItem>
                        <SelectItem value="licensing-out">Technology Licensing (Out-licensing)</SelectItem>
                        <SelectItem value="startup">Startup Formation Support</SelectItem>
                        <SelectItem value="mta">Material Transfer Agreement</SelectItem>
                        <SelectItem value="nda">Non-Disclosure Agreement</SelectItem>
                        <SelectItem value="partnership">Industry Partnership Inquiry</SelectItem>
                        <SelectItem value="general">General Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectTitle">
                      Project/Innovation Title <span className="text-red-500">*</span>
                    </Label>
                    <Input id="projectTitle" placeholder="Brief descriptive title" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">
                      Description of Request <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="description"
                      rows={6}
                      placeholder="Please provide a detailed description of your service request, including any relevant background information, current status, and specific assistance needed..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Desired Timeline</Label>
                    <Select>
                      <SelectTrigger id="timeline">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (within 1 week)</SelectItem>
                        <SelectItem value="soon">Soon (within 2-4 weeks)</SelectItem>
                        <SelectItem value="flexible">Flexible (1-3 months)</SelectItem>
                        <SelectItem value="long-term">Long-term (3+ months)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fundingSource">Funding Source (if applicable)</Label>
                    <Input id="fundingSource" placeholder="Grant name, agency, or funding source" />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>

                  <div className="space-y-2">
                    <Label>Have you previously worked with TTIO?</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="previous-engagement" />
                      <Label htmlFor="previous-engagement" className="font-normal">
                        Yes, I have worked with TTIO before
                      </Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="referral">How did you hear about our services?</Label>
                    <Select>
                      <SelectTrigger id="referral">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="colleague">Colleague/Faculty Referral</SelectItem>
                        <SelectItem value="website">BSU Website</SelectItem>
                        <SelectItem value="event">Workshop/Event</SelectItem>
                        <SelectItem value="email">Email Newsletter</SelectItem>
                        <SelectItem value="orsp">Office of Research & Sponsored Programs</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalComments">Additional Comments or Questions</Label>
                    <Textarea
                      id="additionalComments"
                      rows={4}
                      placeholder="Any other information you'd like to share..."
                    />
                  </div>
                </div>

                {/* Preferred Contact */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-semibold text-gray-900">Preferred Contact Method</h3>

                  <div className="space-y-2">
                    <Label>How would you prefer to be contacted? (Select all that apply)</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="contact-email" defaultChecked />
                        <Label htmlFor="contact-email" className="font-normal">
                          Email
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="contact-phone" />
                        <Label htmlFor="contact-phone" className="font-normal">
                          Phone
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="contact-meeting" />
                        <Label htmlFor="contact-meeting" className="font-normal">
                          In-person meeting
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="contact-zoom" />
                        <Label htmlFor="contact-zoom" className="font-normal">
                          Virtual meeting (Zoom/Teams)
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Agreement */}
                <div className="pt-6 border-t">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="consent" required />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="consent" className="text-sm">
                        I understand that this request will be reviewed by the TTIO team and I may be contacted for
                        additional information. I consent to TTIO storing and using this information for the purpose of
                        providing technology transfer services. <span className="text-red-500">*</span>
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
                    Submit Service Request
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Our team will respond to your request within 2-3 business days. For urgent matters, please call
                    (301) 860-3500.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-bsu-dark text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Prefer to Contact Us Directly?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-300 text-sm">
                  <a href="mailto:BSUTTIO@bowiestate.edu" className="hover:text-bsu-gold">
                    BSUTTIO@bowiestate.edu
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-300 text-sm">
                  <a href="tel:301-860-3500" className="hover:text-bsu-gold">
                    (301) 860-3500
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-300 text-sm">
                  Tuesday: 1-3 PM
                  <br />
                  Wednesday: 9-11 AM
                  <br />
                  (By appointment preferred)
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="https://forms.gle/your-ttio-inquiry-survey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white">
                  Take TTIO Inquiry Survey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
