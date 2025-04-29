"use client"

import { useState, useRef, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Send, Bot, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function ChatPage() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm the Apna Coding AI Assistant powered by Microsoft Azure. How can I help you today? You can ask me about coding problems, career advice, or upcoming tech events.",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [model, setModel] = useState("gpt-35-turbo")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }])
    setIsLoading(true)

    try {
      // Prepare the API call
      const prompt = input
      const apiUrl = `/api/chat?prompt=${encodeURIComponent(prompt)}&model=${encodeURIComponent(model)}`

      // Make the API call
      const response = await fetch(apiUrl)
      const data = await response.json()

      if (data.error) {
        setMessages((prev) => [...prev, { role: "assistant", content: `Error: ${data.error}` }])
      } else {
        let responseMessage = data.response || "Sorry, I couldn't process that request."

        // Add a note if this is a fallback response
        if (data.fallback) {
          responseMessage += "\n\n(Note: I'm currently using a fallback mode due to Azure API connectivity issues.)"
        }

        setMessages((prev) => [...prev, { role: "assistant", content: responseMessage }])
      }
    } catch (error) {
      console.error("Error calling API:", error)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, there was an error processing your request. Please try again later." },
      ])
    } finally {
      setIsLoading(false)
      setInput("")
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const messageAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  }

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
      <Navbar />

      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">AI Chat Assistant</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Powered by Microsoft Azure OpenAI. Ask me anything about coding, career advice, or tech events!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="chat" className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="chat">
                <Card className="shadow-lg border-blue-100 dark:border-blue-900 overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-800 dark:to-green-800 text-white rounded-t-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3 shadow-md">
                        <img src="/images/icon.png" alt="Apna Coding" className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="font-bold">Apna Coding AI Assistant</h3>
                        <p className="text-xs text-blue-100">Powered by Microsoft Azure</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 h-[500px] overflow-y-auto bg-white/90 dark:bg-gray-800/90">
                    <AnimatePresence initial={false}>
                      <div className="space-y-4">
                        {messages.map((message, index) => (
                          <motion.div
                            key={index}
                            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                            variants={messageAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                          >
                            <div className="flex items-start max-w-[80%] space-x-2">
                              {message.role === "assistant" && (
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                                  <Bot className="h-4 w-4 text-white" />
                                </div>
                              )}
                              <div
                                className={`rounded-lg p-3 ${
                                  message.role === "user"
                                    ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-md"
                                    : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md"
                                }`}
                              >
                                {message.content}
                              </div>
                              {message.role === "user" && (
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                                  <User className="h-4 w-4 text-white" />
                                </div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                        {isLoading && (
                          <motion.div
                            className="flex justify-start"
                            variants={messageAnimation}
                            initial="initial"
                            animate="animate"
                          >
                            <div className="flex items-start max-w-[80%] space-x-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                                <Bot className="h-4 w-4 text-white" />
                              </div>
                              <div className="rounded-lg p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md">
                                <div className="flex space-x-2">
                                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce"></div>
                                  <div
                                    className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                  ></div>
                                  <div
                                    className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.4s" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>
                    </AnimatePresence>
                  </CardContent>
                  <CardFooter className="p-4 border-t bg-white/90 dark:bg-gray-900/90">
                    <div className="flex w-full gap-2">
                      <Input
                        placeholder="Ask about coding, career advice, or tech events..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                        className="flex-1 border-blue-200 dark:border-blue-800 focus-visible:ring-blue-500"
                      />
                      <Button
                        onClick={handleSend}
                        className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-md transition-all duration-300 hover:shadow-lg"
                        disabled={isLoading || !input.trim()}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="settings">
                <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-blue-100 dark:border-blue-900">
                  <CardHeader>
                    <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">Chat Settings</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Select value={model} onValueChange={setModel}>
                        <SelectTrigger id="model" className="border-blue-200 dark:border-blue-800">
                          <SelectValue placeholder="Select model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gpt-35-turbo">Azure GPT-3.5 Turbo</SelectItem>
                          <SelectItem value="gpt-4">Azure GPT-4</SelectItem>
                          <SelectItem value="gpt-4-32k">Azure GPT-4 32k</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Select the Azure OpenAI model you want to use for chat.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This chat interface uses Microsoft Azure OpenAI. Your conversations are not stored permanently.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                <a
                  href="http://vht.bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Powered by VHt.bot
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
