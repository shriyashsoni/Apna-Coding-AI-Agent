"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { storeUser } from "@/lib/auth-service"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"

export default function LoginSuccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const provider = searchParams.get("provider") || "email"
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    // Create a mock user based on the provider
    const mockUser = {
      id: `user-${Math.random().toString(36).substring(2, 15)}`,
      name: provider === "microsoft" ? "Microsoft User" : provider === "discord" ? "Discord User" : "Demo User",
      email: `${provider}user@example.com`,
      isLoggedIn: true,
    }

    // Store the user in localStorage
    storeUser(mockUser)

    // Redirect to dashboard after 5 seconds
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push("/dashboard")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [provider, router])

  const handleContinue = () => {
    router.push("/dashboard")
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
            <Card className="border-2 border-green-200 dark:border-green-800 shadow-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
              <CardHeader className="space-y-1 text-center">
                <div className="flex justify-center mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </motion.div>
                </div>
                <CardTitle className="text-2xl font-bold text-green-600 dark:text-green-400">
                  Login Successful!
                </CardTitle>
                <CardDescription>
                  You have successfully logged in with {provider.charAt(0).toUpperCase() + provider.slice(1)}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  You will be redirected to your dashboard in {countdown} seconds...
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/images/apna-coding-logo.png"
                    alt="Apna Coding AI Agent"
                    width={120}
                    height={120}
                    className="animate-float"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  onClick={handleContinue}
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                >
                  Continue to Dashboard
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
