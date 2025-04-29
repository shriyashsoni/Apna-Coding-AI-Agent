"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaMicrosoft, FaDiscord } from "react-icons/fa"
import { motion } from "framer-motion"
import { getMicrosoftLoginUrl, getDiscordLoginUrl } from "@/lib/auth-service"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      // This is a mock registration - in a real app, you would call your API
      // Simulate successful registration
      setTimeout(() => {
        // Mock successful registration
        router.push("/login?registered=true")
      }, 1500)
    } catch (err) {
      setError("An error occurred during registration")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleMicrosoftLogin = () => {
    window.location.href = getMicrosoftLoginUrl()
  }

  const handleDiscordLogin = () => {
    window.location.href = getDiscordLoginUrl()
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
                <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">Create an account</CardTitle>
                <CardDescription>Enter your information to create an account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="border-blue-200 dark:border-blue-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-blue-200 dark:border-blue-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="border-blue-200 dark:border-blue-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="border-blue-200 dark:border-blue-800"
                    />
                  </div>
                  {error && <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create account"}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300 dark:border-gray-700"></span>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="bg-white hover:bg-gray-50 text-black border-blue-200 hover:border-blue-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:border-blue-800"
                    onClick={handleMicrosoftLogin}
                  >
                    <FaMicrosoft className="mr-2 h-4 w-4 text-blue-600" />
                    Microsoft
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white hover:bg-gray-50 text-black border-blue-200 hover:border-blue-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:border-blue-800"
                    onClick={handleDiscordLogin}
                  >
                    <FaDiscord className="mr-2 h-4 w-4 text-indigo-600" />
                    Discord
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-600 hover:underline dark:text-blue-400">
                    Sign in
                  </a>
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
