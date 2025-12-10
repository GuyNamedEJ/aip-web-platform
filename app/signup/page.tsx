"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { supabase } from "@/lib/supabaseClient";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function SignupPage() {
  const router = useRouter();
  const [interests, setInterests] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    console.log("✅ handleSubmit fired");

    const formData = new FormData(e.currentTarget);

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const newsletter = formData.get("newsletter") === "on";
    const termsAccepted = formData.get("terms") === "on";

    if (!termsAccepted) {
      setErrorMsg("You must accept the Terms of Service and Privacy Policy.");
      return;
    }

    if (!role) {
      setErrorMsg("Please select a role.");
      return;
    }

    setIsSubmitting(true);

    // 🔐 Supabase sign up
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          role,
          newsletter,
        },
      },
    });

    if (error) {
      console.error("Supabase signUp error:", error);
      setErrorMsg(error.message);
      setIsSubmitting(false);
      return;
    }

    console.log("👤 User created:", data.user);

     const { error: studentError } = await supabase.from("student").insert({
    // match these to your actual column names
    first_name: firstName,
    last_name: lastName,
    email_address: email,
    password: password,
    role: role,
    interests: interests.toString(),
    reg_date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
  });

  if (studentError) {
    console.error("Student insert error:", studentError);
    setErrorMsg("Account created, but failed to create student record.");
    setIsSubmitting(false);
    return;
  }

  console.log("🎓 Student row created");

    // Redirect after signup
    router.push("/login");
  };

    const toggleInterest = (value: string) => {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Create an Account
            </h1>
            <p className="mt-2 text-gray-600">
              Sign up to access TTIO resources and services
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              {errorMsg && (
                <p className="mb-4 text-sm text-red-600">{errorMsg}</p>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">
                    Password <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">
                    Role <span className="text-red-500">*</span>
                  </Label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="faculty">Faculty</SelectItem>
                      <SelectItem value="researcher">Researcher</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="staff">Staff</SelectItem>
                      <SelectItem value="industry">
                        Industry Partner
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Areas of Interest</Label>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="interest-research"
                        checked={interests.includes("research")}
                        onCheckedChange={() => toggleInterest("research")}
                      />
                      <Label htmlFor="interest-research">Research</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="interest-innovation"
                        checked={interests.includes("innovation")}
                        onCheckedChange={() => toggleInterest("innovation")}
                      />
                      <Label htmlFor="interest-innovation">Innovation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="interest-tech"
                        checked={interests.includes("tech-transfer")}
                        onCheckedChange={() => toggleInterest("tech-transfer")}
                      />
                      <Label htmlFor="interest-tech">
                        Technology Transfer
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="interest-funding"
                        checked={interests.includes("funding")}
                        onCheckedChange={() => toggleInterest("funding")}
                      />
                      <Label htmlFor="interest-funding">
                        Funding Opportunities
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="interest-events"
                        checked={interests.includes("events")}
                        onCheckedChange={() => toggleInterest("events")}
                      />
                      <Label htmlFor="interest-events">
                        Events & Workshops
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="interest-partnerships"
                        checked={interests.includes("partnerships")}
                        onCheckedChange={() => toggleInterest("partnerships")}
                      />
                      <Label htmlFor="interest-partnerships">
                        Partnerships
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Newsletter Preferences</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" name="newsletter" defaultChecked />
                    <Label htmlFor="newsletter">
                      Subscribe to the TTIO newsletter
                    </Label>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" name="terms" required />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="terms" className="text-sm text-gray-500">
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="text-bsu-gold hover:underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-bsu-gold hover:underline"
                      >
                        Privacy Policy
                      </Link>{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-bsu-gold text-black hover:bg-bsu-flame-orange hover:text-white"
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                <span className="text-gray-500">Already have an account?</span>{" "}
                <Link
                  href="/login"
                  className="font-medium text-bsu-gold hover:underline"
                >
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
