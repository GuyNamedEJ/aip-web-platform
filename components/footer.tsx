import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-bsu-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">Technology Transfer and Innovation Office</h3>
            <p className="text-gray-300 text-sm">
              Bowie State University
              <br />
              14000 Jericho Park Road
              <br />
              Bowie, MD 20715
            </p>
            <div className="mt-4">
              <p className="text-gray-300 text-sm">
                <span className="font-medium">Phone:</span> (301) 860-3500
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-medium">Email:</span> researchandsponsored@bowiestate.edu
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors">
                  Faculty Dashboard
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Events & Research
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-white transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:researchandsponsored@bowiestate.edu"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
              <Link href="/newsletter" className="text-sm text-gray-300 underline hover:text-white transition-colors">
                Sign up for updates
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Bowie State University. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6">
            <Link href="#" className="text-xs text-gray-400 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-400 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-gray-400 hover:text-gray-300 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
