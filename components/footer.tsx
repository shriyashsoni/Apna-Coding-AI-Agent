import Link from "next/link"
import Image from "next/image"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="relative h-12 w-48">
              <Image
                src="/images/apna-coding-logo.png"
                alt="Apna Coding AI Agent"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Your intelligent virtual assistant for coding, career guidance, and tech opportunities.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/shriyash-soni"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/sonishriyash?igsh=MXgyb3djamYxZ3RwbQ=="
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.facebook.com/share/1AJJHgBhri/"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://x.com/shriyash_soni?t=8Mh_W6fG5hfabPzJNTW3lg&s=09"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com/shriyashsoni"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/build-agent"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm"
                >
                  Build AI Agent
                </Link>
              </li>
              <li>
                <Link
                  href="/chat"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm"
                >
                  AI Chat
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/tax-info"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 text-sm"
                >
                  Tax Information
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300 text-sm">Email: sonishriyash@gmail.com</li>
              <li className="text-gray-600 dark:text-gray-300 text-sm">Phone: +91 8989976690</li>
            </ul>
            <div className="mt-4">
              <Link href="http://vht.bot" target="_blank" rel="noopener noreferrer">
                <div className="bg-white dark:bg-gray-800 p-2 rounded-md inline-block">
                  <Image
                    src="/images/microsoft-azure-logo.png"
                    alt="Powered by Microsoft Azure"
                    width={150}
                    height={50}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Apna Coding AI Agent. All rights reserved.</p>
          <p className="mt-1">Created by Shriyash Soni</p>
        </div>
      </div>
    </footer>
  )
}
