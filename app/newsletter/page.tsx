"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, CheckCircle } from "lucide-react"

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the form data to a server
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-bsu-dark text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Newsletter Subscription</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Stay updated with the latest research news, events, and opportunities from the Technology Transfer and
              Innovation Office
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <Card>
              <CardHeader>
                <CardTitle>Subscribe to Our Newsletter</CardTitle>
                <CardDescription>
                  Receive updates on innovation initiatives, research opportunities, and upcoming events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label>
                      Affiliation <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup defaultValue="faculty" required>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="faculty" id="faculty" />
                        <Label htmlFor="faculty">Faculty</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="student" id="student" />
                        <Label htmlFor="student">Student</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="staff" id="staff" />
                        <Label htmlFor="staff">Staff</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="external" id="external" />
                        <Label htmlFor="external">External Partner/Industry</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label>Areas of Interest (Select all that apply)</Label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="research" />
                        <Label htmlFor="research">Research Opportunities</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="funding" />
                        <Label htmlFor="funding">Funding & Grants</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="events" />
                        <Label htmlFor="events">Events & Conferences</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="partnerships" />
                        <Label htmlFor="partnerships">Industry Partnerships</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="innovation" />
                        <Label htmlFor="innovation">Innovation & Entrepreneurship</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="tech" />
                        <Label htmlFor="tech">Technology Transfer</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Newsletter Frequency</Label>
                    <RadioGroup defaultValue="monthly">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weekly" id="weekly" />
                        <Label htmlFor="weekly">Weekly Updates</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly">Monthly Digest</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="quarterly" id="quarterly" />
                        <Label htmlFor="quarterly">Quarterly Summary</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <div className="grid gap-1.5 leading-none">
                      <Label htmlFor="terms" className="text-sm text-gray-500">
                        I agree to receive email communications from the Technology Transfer and Innovation Office at
                        Bowie State University. <span className="text-red-500">*</span>
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white"
                  >
                    <Mail className="mr-2 h-4 w-4" /> Subscribe to Newsletter
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    You can unsubscribe at any time by clicking the link in the footer of our emails.
                    <br />
                    For information about our privacy practices, please visit our Privacy Policy page.
                  </p>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-10">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You for Subscribing!</h2>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    You have successfully subscribed to the TTIO newsletter. You will start receiving updates based on
                    your preferences.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Return to Form
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Benefits of Our Newsletter</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Why you should subscribe to the TTIO newsletter
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Stay Informed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get the latest updates on research initiatives, funding opportunities, and innovation activities at
                  Bowie State University.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Event Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Receive timely notifications about upcoming workshops, conferences, seminars, and networking events.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Discover groundbreaking research and innovations from faculty, researchers, and students at Bowie
                  State University.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
