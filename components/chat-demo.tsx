"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function ChatDemo() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm the Apna Coding AI Agent. How can I help you today? You can ask me about coding problems, career advice, or upcoming tech events.",
    },
  ])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }])

    // Simulate AI response based on input
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("hackathon")) {
        response =
          "There are several hackathons coming up! HackTech 2025 is next month, focusing on AI solutions. DevFest is in two weeks with a web3 theme. Would you like me to help you prepare for these events?"
      } else if (input.toLowerCase().includes("learn") || input.toLowerCase().includes("course")) {
        response =
          "For learning programming, I recommend starting with our structured paths. We have courses for Python, JavaScript, and Data Science. Based on your profile, I'd suggest our 'Web Development Bootcamp' which covers HTML, CSS, JavaScript, and React."
      } else if (input.toLowerCase().includes("job") || input.toLowerCase().includes("internship")) {
        response =
          "I found 5 new internship opportunities in software development! Google has an SDE internship open until next week, and there's a remote ML Engineer position at Microsoft. Would you like me to help with your application?"
      } else if (input.toLowerCase().includes("resume") || input.toLowerCase().includes("cv")) {
        response =
          "I'd be happy to help with your resume! Make sure to highlight your projects, technical skills, and any hackathon experiences. Would you like me to review your current resume or provide a template?"
      } else {
        response =
          "Thanks for your question! I can help with coding problems, career advice, learning resources, and finding tech events or job opportunities. Could you provide more details about what you're looking for?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    }, 1000)

    setInput("")
  }

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-blue-100 dark:border-blue-900 overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-800 dark:to-green-800 text-white">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
            <Image src="/images/icon.png" alt="Apna Coding" width={20} height={20} />
          </div>
          <div>
            <h3 className="font-bold">Apna Coding AI Assistant</h3>
            <p className="text-xs text-blue-100">Powered by Microsoft Azure</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 h-80 overflow-y-auto">
        <AnimatePresence initial={false}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                variants={messageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md"
                  }`}
                >
                  {message.content}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <div className="flex w-full gap-2">
          <Input
            placeholder="Ask about coding, career advice, or tech events..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 border-blue-200 dark:border-blue-800"
          />
          <Button
            onClick={handleSend}
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
