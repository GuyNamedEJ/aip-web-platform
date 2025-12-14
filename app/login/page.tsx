
"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { EyeIcon, EyeOffIcon, GraduationCap, Users, AlertCircle } from "lucide-react"
import { authenticateUser, setUserToStorage } from "@/lib/auth"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const user = authenticateUser(email, password)
    if (user) {
      setUserToStorage(user)
      // Redirect based on role
      if (user.role === "student") {
        router.push("/dashboard/student")
      } else {
        router.push("/dashboard/professor")
      }
    } else {
      setError("Invalid email or password. Please try again.")
    }
    setIsLoading(false)
  }

  const fillDemoCredentials = (type: "student" | "professor") => {
    if (type === "student") {
      setEmail("student@bowiestate.edu")
      setPassword("student123")
    } else {
      setEmail("professor@bowiestate.edu")
      setPassword("professor123")
    }
    setError("")
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome Back</h1>
            <p className="mt-2 text-gray-600">Sign in to access your TTIO account</p>
          </div>

          {/* Demo Login Quick Access */}
          <Card className="mb-6 border-bsu-gold">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Demo Login Credentials</CardTitle>
              <CardDescription>Click to auto-fill demo credentials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex flex-col items-center gap-2 h-auto py-4 border-bsu-gold hover:bg-bsu-gold/10 bg-transparent"
                  onClick={() => fillDemoCredentials("student")}
                >
                  <GraduationCap className="h-6 w-6 text-bsu-gold" />
                  <span className="font-medium">Student Login</span>
                  <span className="text-xs text-gray-500">student@bowiestate.edu</span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex flex-col items-center gap-2 h-auto py-4 border-bsu-gold hover:bg-bsu-gold/10 bg-transparent"
                  onClick={() => fillDemoCredentials("professor")}
                >
                  <Users className="h-6 w-6 text-bsu-gold" />
                  <span className="font-medium">Professor Login</span>
                  <span className="text-xs text-gray-500">professor@bowiestate.edu</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@bowiestate.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm">
                      Remember me
                    </Label>
                  </div>
                  <Link href="/forgot-password" className="text-sm font-medium text-bsu-gold hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-bsu-gold text-black hover:bg-bsu-gold/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                <span className="text-gray-500">Don't have an account?</span>{" "}
                <Link href="/signup" className="font-medium text-bsu-gold hover:underline">
                  Sign up
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
