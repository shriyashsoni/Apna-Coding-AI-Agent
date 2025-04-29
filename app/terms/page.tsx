"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function TermsAndConditions() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md"
          >
            <h1 className="text-3xl font-bold mb-6 text-purple-700">Terms and Conditions</h1>
            <p className="text-gray-600 mb-4 font-medium">Effective Date: April 26, 2025</p>

            <div className="prose max-w-none">
              <p className="mb-6">
                Welcome to <strong>Apna Coding AI Agent</strong>. By using our platform, you agree to the following
                terms:
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-purple-600">1. User Responsibility</h2>
              <p className="mb-6">
                You are responsible for the security of your account and all activities conducted through it.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-purple-600">2. Acceptable Use</h2>
              <p className="mb-6">
                Do not use our services for unlawful purposes, abuse the AI, or post harmful content.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-purple-600">3. Intellectual Property</h2>
              <p className="mb-6">
                All content, coding tools, and materials on this platform are owned by Apna Coding unless stated
                otherwise.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-purple-600">4. Service Modifications</h2>
              <p className="mb-6">We may update or modify services to improve your experience.</p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-purple-600">5. Disclaimers</h2>
              <p className="mb-6">
                We provide information "as is" without any guarantees. We are not liable for any job losses, coding
                errors, or misinterpretations.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-purple-600">6. Termination</h2>
              <p className="mb-6">We may suspend or terminate accounts that violate these terms.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
