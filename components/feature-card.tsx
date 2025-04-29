"use client"

import type { ReactNode } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full">
        <CardHeader className="pb-2">
          <div className="mb-2 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-full w-12 h-12 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
