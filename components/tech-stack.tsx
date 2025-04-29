"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Bot, Search, Server, Shield, Code, Cloud, FileCode } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function TechStack() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">
            Powered by Advanced Technology
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-6 max-w-2xl mx-auto">
            Built on Microsoft Azure AI and OpenAI models to deliver intelligent, responsive assistance
          </p>

          <div className="flex justify-center mb-8">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <Image
                src="/images/microsoft-azure-logo.png"
                alt="Microsoft Azure"
                width={200}
                height={70}
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeIn}>
            <TechCard
              icon={<Bot className="h-8 w-8 text-blue-500" />}
              title="Azure OpenAI Service"
              description="For advanced conversational abilities and natural language understanding"
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <TechCard
              icon={<Search className="h-8 w-8 text-blue-500" />}
              title="Azure Cognitive Search"
              description="To efficiently search and retrieve relevant Apna Coding resources"
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <TechCard
              icon={<Bot className="h-8 w-8 text-blue-500" />}
              title="Azure Bot Service"
              description="Powers conversation flow with Microsoft Bot Framework Composer"
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <TechCard
              icon={<Server className="h-8 w-8 text-blue-500" />}
              title="Azure App Service"
              description="For reliable web deployment and scaling capabilities"
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <TechCard
              icon={<Database className="h-8 w-8 text-blue-500" />}
              title="Azure Machine Learning"
              description="For recommending personalized learning paths based on user profiles"
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <TechCard
              icon={<Shield className="h-8 w-8 text-blue-500" />}
              title="Azure Monitor"
              description="To track AI agent performance and gather user feedback"
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <TechCard
              icon={<Code className="h-8 w-8 text-blue-500" />}
              title="Microsoft 365 DSC"
              description="For secure configuration and management of Microsoft 365 resources"
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <TechCard
              icon={<Cloud className="h-8 w-8 text-blue-500" />}
              title="Azure Functions"
              description="Serverless compute service for event-driven applications"
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <TechCard
              icon={<FileCode className="h-8 w-8 text-blue-500" />}
              title="Microsoft Authentication Library"
              description="Secure authentication for applications using Microsoft identity platform"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface TechCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function TechCard({ icon, title, description }: TechCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="border border-blue-100 dark:border-blue-900 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full">
        <CardContent className="pt-6">
          <div className="flex items-start">
            <div className="mr-4 mt-1 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-full">{icon}</div>
            <div>
              <h3 className="font-bold mb-2 text-blue-600 dark:text-blue-400">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
