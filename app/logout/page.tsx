"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { clearUser } from "@/lib/auth-service"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // Clear user data on component mount
    clearUser()
  }, [])

  const handleGoHome = () => {
    router.push("/")
  }

  const handleGoToLogin = () => {
    router.push("/login")
  }

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-red-50 to-blue-50 dark:from-red-950 dark:to-blue-950">
      <Navbar />

      <section className="flex-grow flex items-center justify-center py-12">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
              <CardHeader className="space-y-1 text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/apna-coding-logo.png"
                    alt="Apna Coding AI Agent"
                    width={120}
                    height={120}
                    priority
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">Logged Out</CardTitle>
                <CardDescription>You have been successfully logged out</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for using Apna Coding AI Agent. We hope to see you again soon!
                </p>
              </CardContent>
              <CardFooter className="flex justify-center space-x-4">
                <Button
                  onClick={handleGoHome}
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                >
                  Go to Home
                </Button>
                <Button
                  onClick={handleGoToLogin}
                  variant="outline"
                  className="border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700"
                >
                  Log In Again
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
