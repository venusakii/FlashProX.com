"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  { icon: "💪", title: "Durable Construction", description: "Aviation Aluminum body" },
  { icon: "🔋", title: "Long Battery Life", description: "Up to 115 hours runtime" },
  { icon: "🌧️", title: "Waterproof", description: "IP68 protection" },
  { icon: "🔦", title: "Professional Light Output", description: "Up to 1600 lumens" },
]

export function WhyFlashProX() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="relative py-24 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Why <span className="text-[#00C2FF]">FlashProX</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-lg bg-[#1E1E1E]/50 border border-[#00C2FF]/20 backdrop-blur-sm group hover:border-[#FFD600] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/0 to-[#FFD600]/0 group-hover:from-[#00C2FF]/10 group-hover:to-[#FFD600]/10 rounded-lg transition-all duration-300" />
              <div className="relative z-10">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
