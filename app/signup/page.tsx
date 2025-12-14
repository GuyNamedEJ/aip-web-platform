"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would register the user
    console.log("Signup form submitted")
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Create an Account</h1>
            <p className="mt-2 text-gray-600">Sign up to access TTIO resources and services</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>Enter your information to create an account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">
                    Password <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" required />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Password must be at least 8 characters long and include a mix of letters, numbers, and symbols.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">
                    Role <span className="text-red-500">*</span>
                  </Label>
                  <Select required>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="faculty">Faculty</SelectItem>
                      <SelectItem value="researcher">Researcher</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="staff">Staff</SelectItem>
                      <SelectItem value="industry">Industry Partner</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Areas of Interest</Label>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-research" />
                      <Label htmlFor="interest-research">Research</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-innovation" />
                      <Label htmlFor="interest-innovation">Innovation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-tech" />
                      <Label htmlFor="interest-tech">Technology Transfer</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-funding" />
                      <Label htmlFor="interest-funding">Funding Opportunities</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-events" />
                      <Label htmlFor="interest-events">Events & Workshops</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interest-partnerships" />
                      <Label htmlFor="interest-partnerships">Partnerships</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Newsletter Preferences</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" defaultChecked />
                    <Label htmlFor="newsletter">Subscribe to the TTIO newsletter</Label>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" required />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="terms" className="text-sm text-gray-500">
                      I agree to the{" "}
                      <Link href="/terms" className="text-bsu-gold hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-bsu-gold hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white"
                >
                  Create Account
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                <span className="text-gray-500">Already have an account?</span>{" "}
                <Link href="/login" className="font-medium text-bsu-gold hover:underline">
                  Sign in
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full bg-transparent">
                  Google
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Microsoft
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}