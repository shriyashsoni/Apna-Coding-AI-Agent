"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function PrivacyPolicy() {
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
            <h1 className="text-3xl font-bold mb-6 text-purple-700">Privacy Policy</h1>
            <p className="text-gray-600 mb-4 font-medium">Effective Date: April 26, 2025</p>

            <div className="prose max-w-none">
              <p className="mb-6">
                Welcome to Apna Coding AI Agent! We respect your privacy and are committed to protecting it.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-purple-600">What We Collect</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Your name, email address, phone number, social media handles.</li>
                <li>Interaction data (messages, queries, usage behavior).</li>
                <li>Device information (browser, IP address).</li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4 text-purple-600">How We Use Your Data</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>To personalize your experience.</li>
                <li>To provide coding assistance, career opportunities, and event updates.</li>
                <li>To improve our services and security.</li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4 text-purple-600">Data Protection</h2>
              <p className="mb-6">
                We use Microsoft Azure services that are GDPR and CCPA compliant to store and secure your information.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-purple-600">Third-Party Sharing</h2>
              <p className="mb-6">
                We do not sell your data. We only share it with trusted partners when necessary for service delivery.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-purple-600">Cookies</h2>
              <p className="mb-6">Our platform uses cookies for performance tracking and user personalization.</p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-purple-600">Your Rights</h2>
              <p className="mb-6">
                You can request to access, update, or delete your data anytime by emailing us at{" "}
                <a href="mailto:sonishriyash@gmail.com" className="text-purple-600 hover:underline">
                  sonishriyash@gmail.com
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
