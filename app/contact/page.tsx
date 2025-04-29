"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Facebook, Github, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Contact() {
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

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4 text-purple-700">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you! Reach out with any questions, feedback, or partnership opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <h2 className="text-xl font-bold mb-6 text-purple-600">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
              </form>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <h2 className="text-xl font-bold mb-6 text-purple-600">Contact Information</h2>

              <div className="space-y-6">
                <motion.div variants={fadeIn}>
                  <Card className="p-4 flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:sonishriyash@gmail.com" className="text-purple-600 hover:underline">
                        sonishriyash@gmail.com
                      </a>
                    </div>
                  </Card>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Card className="p-4 flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone/WhatsApp</h3>
                      <a href="tel:+918989976690" className="text-purple-600 hover:underline">
                        +91 8989976690
                      </a>
                    </div>
                  </Card>
                </motion.div>

                <h3 className="font-bold text-lg mt-8 mb-4">Connect With Us</h3>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div variants={fadeIn}>
                    <Link
                      href="https://www.linkedin.com/in/shriyash-soni"
                      className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Link
                      href="https://www.instagram.com/sonishriyash?igsh=MXgyb3djamYxZ3RwbQ=="
                      className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
                    >
                      <Instagram className="h-5 w-5" />
                      <span>Instagram</span>
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Link
                      href="https://www.facebook.com/share/1AJJHgBhri/"
                      className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
                    >
                      <Facebook className="h-5 w-5" />
                      <span>Facebook</span>
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Link
                      href="https://x.com/shriyash_soni?t=8Mh_W6fG5hfabPzJNTW3lg&s=09"
                      className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
                    >
                      <Twitter className="h-5 w-5" />
                      <span>Twitter/X</span>
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <Link
                      href="https://github.com/shriyashsoni"
                      className="flex items-center space-x-2 text-gray-700 hover:text-purple-600"
                    >
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
