"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, LogIn, LogOut, User } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { getStoredUser } from "@/lib/auth-service"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Check if user is logged in
    const storedUser = getStoredUser()
    setUser(storedUser)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-40">
            <Image
              src="/images/apna-coding-logo.png"
              alt="Apna Coding AI Agent"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/features" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="/build-agent" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Build AI Agent
          </Link>
          <Link href="/chat" className="text-sm font-medium hover:text-blue-600 transition-colors">
            AI Chat
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Contact
          </Link>
          <ThemeToggle />

          {user?.isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full w-10 h-10 p-0">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/dashboard" className="flex w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/profile" className="flex w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings" className="flex w-full">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/logout" className="flex w-full">
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
              <Link href="/login" className="flex items-center">
                <LogIn className="mr-2 h-4 w-4" /> Login
              </Link>
            </Button>
          )}
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link
              href="/"
              className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/build-agent"
              className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Build AI Agent
            </Link>
            <Link
              href="/chat"
              className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              AI Chat
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            {user?.isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/logout"
                  className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Logout
                </Link>
              </>
            ) : (
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white w-full">
                <Link href="/login" className="flex items-center justify-center w-full">
                  <LogIn className="mr-2 h-4 w-4" /> Login
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </header>
  )
}
