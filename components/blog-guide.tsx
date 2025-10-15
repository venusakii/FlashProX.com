"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const articles = [
  {
    title: "How to Choose the Perfect Flashlight for Hiking?",
    image: "/hiking-flashlight-mountains.jpg",
  },
  {
    title: "Tactical Flashlights vs Regular: What's the Difference?",
    image: "/tactical-vs-regular-flashlight.jpg",
  },
  {
    title: "Top 5 USB Flashlights of 2025",
    image: "/usb-flashlight-charging.jpg",
  },
]

export function BlogGuide() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative py-24 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Blog / Buying Guide
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Directional light effect */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-[#FFD600]/0 via-[#FFD600]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-bold text-balance group-hover:text-[#00C2FF] transition-colors duration-300">
                {article.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
