"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getStoredUser, type User } from "@/lib/auth-service"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Code, BookOpen, Calendar, Briefcase, Brain, Users, Settings, LogOut } from "lucide-react"

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const storedUser = getStoredUser()
    if (!storedUser?.isLoggedIn) {
      router.push("/login")
      return
    }

    setUser(storedUser)
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    router.push("/logout")
  }

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col bg-gradient-to-br from-red-50 to-blue-50 dark:from-red-950 dark:to-blue-950">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-red-50 to-blue-50 dark:from-red-950 dark:to-blue-950">
      <Navbar />

      <section className="flex-grow py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-64"
            >
              <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-600 dark:text-blue-400">Dashboard</CardTitle>
                  <CardDescription>Welcome back, {user?.name}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1 px-2 py-3">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <Code className="mr-2 h-4 w-4" />
                      My Projects
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Learning Path
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Events
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <Briefcase className="mr-2 h-4 w-4" />
                      Job Board
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <Brain className="mr-2 h-4 w-4" />
                      AI Projects
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Community
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </nav>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-red-200 hover:border-red-300 hover:bg-red-50 dark:border-red-800 dark:hover:border-red-700 dark:hover:bg-red-900/20"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1"
            >
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="learning">Learning</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-blue-600 dark:text-blue-400">Welcome to Your Dashboard</CardTitle>
                      <CardDescription>Here's an overview of your activities and recommendations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="border border-blue-100 dark:border-blue-900">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Recent Activity</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              <li className="text-sm">Completed Python Basics course</li>
                              <li className="text-sm">Started React project</li>
                              <li className="text-sm">Joined Web Development community</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card className="border border-green-100 dark:border-green-900">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Recommendations</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              <li className="text-sm">Advanced JavaScript Course</li>
                              <li className="text-sm">Upcoming Hackathon: CodeFest 2025</li>
                              <li className="text-sm">Join the AI/ML discussion group</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="projects">
                  <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-blue-600 dark:text-blue-400">Your Projects</CardTitle>
                      <CardDescription>Track and manage your coding projects</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Card className="border border-blue-100 dark:border-blue-900">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Personal Portfolio</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              A responsive portfolio website built with React and Tailwind CSS.
                            </p>
                            <div className="mt-2 flex items-center text-xs text-gray-500">
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
                              <span className="ml-2">Last updated: 3 days ago</span>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="border border-blue-100 dark:border-blue-900">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">AI Chat Application</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              A chat application using Azure OpenAI API and Next.js.
                            </p>
                            <div className="mt-2 flex items-center text-xs text-gray-500">
                              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                                In Progress
                              </span>
                              <span className="ml-2">Last updated: 1 week ago</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
                        Create New Project
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="learning">
                  <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-blue-600 dark:text-blue-400">Learning Path</CardTitle>
                      <CardDescription>Track your progress and find new courses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Card className="border border-blue-100 dark:border-blue-900">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Web Development Path</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="mb-2">
                              <div className="h-2 w-full bg-gray-200 rounded-full">
                                <div className="h-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-full w-[65%]"></div>
                              </div>
                              <p className="text-right text-xs text-gray-500 mt-1">65% Complete</p>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Next up: Advanced React Hooks and State Management
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border border-blue-100 dark:border-blue-900">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Machine Learning Basics</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="mb-2">
                              <div className="h-2 w-full bg-gray-200 rounded-full">
                                <div className="h-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-full w-[30%]"></div>
                              </div>
                              <p className="text-right text-xs text-gray-500 mt-1">30% Complete</p>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Next up: Introduction to Neural Networks
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
                        Explore More Courses
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
