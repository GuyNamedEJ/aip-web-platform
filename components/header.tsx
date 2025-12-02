"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    submenu: [
      { name: "About TTIO", href: "/about" },
      { name: "Staff Directory", href: "/staff" },
      {
        name: "ORSP",
        href: "https://www.bowiestate.edu/about/administration-and-governance/division-of-research-and-innovation/office-of-research-and-sponsored-programs/",
        external: true,
      },
    ],
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Technology Transfer", href: "/services/technology-transfer" },
      { name: "IP Protection", href: "/services/ip-protection" },
      { name: "Licensing", href: "/services/licensing" },
      { name: "Startup Support", href: "/services/startup-support" },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    submenu: [
      { name: "Innovation Catalog", href: "/tech-catalog" },
      { name: "Forms & Documents", href: "/resources/forms" },
      { name: "Invention Disclosure", href: "/resources/disclosure" },
      { name: "Request Services", href: "/resources/request" },
    ],
  },
  {
    name: "Research Centers",
    href: "/research-centers",
  },
  { name: "Economic Development", href: "/economic-development" },
  { name: "Events & Research", href: "/events" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Bowie State University TTIO</span>
            <div className="flex items-center gap-2">
              <Image src="/bsu-anniversary-logo.png" width={40} height={40} alt="BSU Logo" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-bsu-gold">BSU TTIO</span>
                <span className="text-xs font-medium text-gray-600">Technology Transfer</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) =>
            item.submenu ? (
              <div key={item.name} className="relative group">
                <button className="flex items-center gap-1 text-sm font-semibold leading-6 text-gray-900 hover:text-bsu-gold transition-colors">
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.name}
                      href={subitem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-bsu-gold"
                      target={subitem.external ? "_blank" : undefined}
                      rel={subitem.external ? "noopener noreferrer" : undefined}
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 text-gray-900 hover:text-bsu-gold transition-colors",
                  pathname === item.href && "text-bsu-gold font-bold",
                )}
              >
                {item.name}
              </Link>
            ),
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link href="/login">
            <Button variant="outline" className="text-sm font-semibold leading-6 bg-transparent">
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="text-sm font-semibold leading-6 bg-bsu-gold text-black hover:bg-bsu-flame-orange">
              Sign up
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}>
        <div className="fixed inset-0 bg-black/20" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Bowie State University TTIO</span>
              <div className="flex items-center gap-2">
                <Image src="/bsu-anniversary-logo.png" width={40} height={40} alt="BSU Logo" className="h-10 w-auto" />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-bsu-gold">BSU TTIO</span>
                  <span className="text-xs font-medium text-gray-600">Technology Transfer</span>
                </div>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                        pathname === item.href && "bg-gray-50 text-bsu-gold",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                            target={subitem.external ? "_blank" : undefined}
                            rel={subitem.external ? "noopener noreferrer" : undefined}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6 space-y-3">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="-mx-3 block rounded-lg bg-bsu-gold px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-bsu-flame-orange"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
