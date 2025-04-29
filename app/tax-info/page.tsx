"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function TaxInfo() {
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
            <h1 className="text-3xl font-bold mb-6 text-purple-700">Tax Information</h1>

            <div className="prose max-w-none">
              <div className="bg-purple-50 p-6 rounded-lg mb-8 border-l-4 border-purple-500">
                <h2 className="text-xl font-bold mb-4 text-purple-600">Note</h2>
                <p>
                  Apna Coding AI Agent is an early-stage project. Any transactions related to subscriptions,
                  mentorships, or job platforms will comply with Indian tax laws (GST registration pending based on
                  growth stage).
                </p>
              </div>

              <p className="mb-6">
                Users are responsible for reporting their earnings (internships, jobs) independently to tax authorities.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-purple-600">For Indian Users</h2>
              <p className="mb-6">
                If you are using our platform for professional services or earning income through opportunities found on
                our platform:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>You may need to register for GST if your turnover exceeds the threshold limit.</li>
                <li>
                  Income earned through freelance opportunities should be reported under "Income from Business or
                  Profession" in your tax returns.
                </li>
                <li>TDS may be applicable on certain payments received through our platform.</li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4 text-purple-600">For International Users</h2>
              <p className="mb-6">
                Tax regulations vary by country. Please consult with a tax professional in your jurisdiction to
                understand your tax obligations related to income earned through opportunities found on our platform.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4 text-purple-600">Disclaimer</h2>
              <p className="mb-6">
                This information is provided for general guidance only and does not constitute tax advice. For specific
                tax-related questions, please consult with a qualified tax professional.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
