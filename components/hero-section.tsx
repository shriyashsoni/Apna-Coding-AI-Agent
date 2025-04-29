"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-800 dark:to-green-800 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M0 40L40 0M20 40L40 20M0 20L20 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Apna Coding AI Agent</h1>
            <p className="text-xl mb-8 text-blue-100">
              Your intelligent virtual assistant for coding, career guidance, and tech opportunities. Available 24/7 to
              help you excel in your tech journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try It Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute -top-6 -left-6 w-20 h-20 bg-blue-500 rounded-full opacity-20"
              ></motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -2, 0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-green-500 rounded-full opacity-20"
              ></motion.div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                    <Image src="/images/icon.png" alt="Apna Coding" width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="font-bold">Apna Coding Assistant</h3>
                    <p className="text-sm text-blue-200">Online</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="bg-white/5 p-3 rounded-lg"
                  >
                    <p className="text-sm">How can I prepare for my first hackathon?</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="bg-blue-600/30 p-3 rounded-lg"
                  >
                    <p className="text-sm">
                      I'd recommend starting with these steps:
                      <br />
                      1. Choose the right hackathon for your skill level
                      <br />
                      2. Form a balanced team with diverse skills
                      <br />
                      3. Practice with mini-projects beforehand
                      <br />
                      4. Learn version control with Git
                      <br />
                      5. Check out these beginner-friendly hackathons coming up next month...
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
