"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { motion } from "framer-motion"
import { Bot, Code, Brain, Zap, Check, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function BuildAgentPage() {
  const [step, setStep] = useState(1)
  const [agentName, setAgentName] = useState("")
  const [agentDescription, setAgentDescription] = useState("")
  const [agentType, setAgentType] = useState("coding")
  const [agentModel, setAgentModel] = useState("gpt-35-turbo")
  const [useAzure, setUseAzure] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
    }, 2000)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-red-50 to-blue-50 dark:from-red-950 dark:to-blue-950">
      <Navbar />

      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">Build Your AI Agent</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Create your own customized AI agent powered by Microsoft Azure. Tailor it to your specific needs for
              coding, learning, or career guidance.
            </p>
          </motion.div>

          {isComplete ? (
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-md mx-auto">
              <Card className="border-2 border-green-200 dark:border-green-800 shadow-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                <CardHeader className="space-y-1 text-center">
                  <div className="flex justify-center mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="bg-green-100 dark:bg-green-900/30 rounded-full p-3"
                    >
                      <Check className="h-12 w-12 text-green-600 dark:text-green-400" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-green-600 dark:text-green-400">
                    Agent Created Successfully!
                  </CardTitle>
                  <CardDescription>Your AI agent "{agentName}" has been created and is ready to use.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    You can now access your agent from your dashboard or share it with others.
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
                <CardFooter className="flex justify-center space-x-4">
                  <Button
                    onClick={() => (window.location.href = "/dashboard")}
                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                  >
                    Go to Dashboard
                  </Button>
                  <Button
                    onClick={() => {
                      setIsComplete(false)
                      setStep(1)
                      setAgentName("")
                      setAgentDescription("")
                      setAgentType("coding")
                      setAgentModel("gpt-35-turbo")
                    }}
                    variant="outline"
                    className="border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700"
                  >
                    Create Another Agent
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ) : (
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto">
              <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            i === step
                              ? "bg-blue-600 text-white"
                              : i < step
                                ? "bg-green-600 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          {i < step ? <Check className="h-4 w-4" /> : i}
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Step {step} of 4</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {step === 1 && "Basic Information"}
                    {step === 2 && "Agent Type"}
                    {step === 3 && "Model Selection"}
                    {step === 4 && "Review & Create"}
                  </CardTitle>
                  <CardDescription>
                    {step === 1 && "Provide basic details about your AI agent"}
                    {step === 2 && "Select the type of agent you want to create"}
                    {step === 3 && "Choose the AI model and settings"}
                    {step === 4 && "Review your agent configuration and create"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {step === 1 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="agent-name">Agent Name</Label>
                        <Input
                          id="agent-name"
                          placeholder="My Coding Assistant"
                          value={agentName}
                          onChange={(e) => setAgentName(e.target.value)}
                          className="border-blue-200 dark:border-blue-800"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="agent-description">Description</Label>
                        <Textarea
                          id="agent-description"
                          placeholder="Describe what your agent will do..."
                          value={agentDescription}
                          onChange={(e) => setAgentDescription(e.target.value)}
                          className="min-h-[100px] border-blue-200 dark:border-blue-800"
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card
                          className={`border cursor-pointer transition-all ${
                            agentType === "coding"
                              ? "border-blue-500 dark:border-blue-400 shadow-md"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                          onClick={() => setAgentType("coding")}
                        >
                          <CardHeader className="pb-2">
                            <div className="mb-2 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                              <Code className="h-6 w-6 text-blue-500" />
                            </div>
                            <CardTitle className="text-lg">Coding Assistant</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Helps with code debugging, optimization, and learning programming languages.
                            </p>
                          </CardContent>
                        </Card>

                        <Card
                          className={`border cursor-pointer transition-all ${
                            agentType === "learning"
                              ? "border-blue-500 dark:border-blue-400 shadow-md"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                          onClick={() => setAgentType("learning")}
                        >
                          <CardHeader className="pb-2">
                            <div className="mb-2 bg-green-50 dark:bg-green-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                              <Brain className="h-6 w-6 text-green-500" />
                            </div>
                            <CardTitle className="text-lg">Learning Path</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Creates personalized learning paths and educational content.
                            </p>
                          </CardContent>
                        </Card>

                        <Card
                          className={`border cursor-pointer transition-all ${
                            agentType === "career"
                              ? "border-blue-500 dark:border-blue-400 shadow-md"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                          onClick={() => setAgentType("career")}
                        >
                          <CardHeader className="pb-2">
                            <div className="mb-2 bg-red-50 dark:bg-red-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                              <Zap className="h-6 w-6 text-red-500" />
                            </div>
                            <CardTitle className="text-lg">Career Guide</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Provides career advice, resume tips, and job search assistance.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="model">AI Model</Label>
                        <Select value={agentModel} onValueChange={setAgentModel}>
                          <SelectTrigger id="model" className="border-blue-200 dark:border-blue-800">
                            <SelectValue placeholder="Select model" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gpt-35-turbo">Azure GPT-3.5 Turbo</SelectItem>
                            <SelectItem value="gpt-4">Azure GPT-4</SelectItem>
                            <SelectItem value="gpt-4-32k">Azure GPT-4 32k</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-gray-500 mt-1">Select the AI model that will power your agent.</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="azure-integration">Microsoft Azure Integration</Label>
                          <Switch id="azure-integration" checked={useAzure} onCheckedChange={setUseAzure} />
                        </div>
                        <p className="text-xs text-gray-500">
                          Enable integration with Microsoft Azure services for enhanced capabilities.
                        </p>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h3 className="font-medium text-blue-700 dark:text-blue-300 flex items-center">
                          <Bot className="h-4 w-4 mr-2" />
                          Model Information
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          {agentModel === "gpt-35-turbo" &&
                            "GPT-3.5 Turbo is a fast and cost-effective model suitable for most tasks."}
                          {agentModel === "gpt-4" &&
                            "GPT-4 offers advanced reasoning and higher accuracy for complex tasks."}
                          {agentModel === "gpt-4-32k" &&
                            "GPT-4 32k provides extended context length for processing larger documents."}
                        </p>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-6">
                      <h3 className="font-medium text-lg text-blue-600 dark:text-blue-400">
                        Agent Configuration Summary
                      </h3>

                      <div className="space-y-4">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Agent Name</h4>
                              <p className="font-medium">{agentName || "Unnamed Agent"}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Agent Type</h4>
                              <p className="font-medium capitalize">{agentType}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">AI Model</h4>
                              <p className="font-medium">{agentModel}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                Azure Integration
                              </h4>
                              <p className="font-medium">{useAzure ? "Enabled" : "Disabled"}</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Description</h4>
                          <p className="mt-1">{agentDescription || "No description provided."}</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h3 className="font-medium text-blue-700 dark:text-blue-300 flex items-center">
                          <Bot className="h-4 w-4 mr-2" />
                          Ready to Create
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          Your agent will be created with the settings above. You can modify these settings later from
                          your dashboard.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={step === 1 && (!agentName || !agentDescription)}
                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                        Creating...
                      </div>
                    ) : step < 4 ? (
                      <div className="flex items-center">
                        Next <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    ) : (
                      "Create Agent"
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
