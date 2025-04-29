"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, BookOpen, Calendar, Briefcase, Brain, Users } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import HeroSection from "@/components/hero-section"
import TechStack from "@/components/tech-stack"
import ChatDemo from "@/components/chat-demo"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function Home() {
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
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
        <div className="container px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">Key Features</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Empowering coders with AI-driven guidance, opportunities, and resources
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn}>
              <FeatureCard
                icon={<Code className="h-8 w-8 text-blue-500" />}
                title="Code Help"
                description="Get instant debugging assistance and code improvement suggestions from our AI assistant."
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <FeatureCard
                icon={<BookOpen className="h-8 w-8 text-blue-500" />}
                title="Learning Paths"
                description="Receive customized learning plans for skills like AI/ML, web development, app development, and more."
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <FeatureCard
                icon={<Calendar className="h-8 w-8 text-blue-500" />}
                title="Event Updates"
                description="Stay informed about upcoming hackathons, coding contests, and workshops relevant to your interests."
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <FeatureCard
                icon={<Briefcase className="h-8 w-8 text-blue-500" />}
                title="Career Advice"
                description="Get personalized guidance for your coding career, including resume tips and interview preparation."
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <FeatureCard
                icon={<Brain className="h-8 w-8 text-blue-500" />}
                title="AI Project Guidance"
                description="Receive expert guidance on AI/ML projects, from concept to implementation."
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <FeatureCard
                icon={<Users className="h-8 w-8 text-blue-500" />}
                title="Community Connect"
                description="Join Apna Coding's Discord, communities, and internship programs with ease."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Chat Demo Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">
              Experience the AI Agent
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              See how our AI agent can help you with coding questions, career advice, and more
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <ChatDemo />
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-800 dark:to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M0 40L40 0M20 40L40 20M0 20L20 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeOpacity="0.1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Coding Journey?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are leveraging the power of AI to enhance their coding skills and career
              opportunities.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
