"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const techFeatures = [
  { label: "Aviation Aluminum", position: { top: "20%", left: "10%" } },
  { label: "IP68 Protection", position: { top: "50%", right: "15%" } },
  { label: "USB-C Rechargeable", position: { bottom: "25%", left: "20%" } },
]

export function TechnologyShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative py-24 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technology
        </motion.h2>

        <div className="relative aspect-square max-w-2xl mx-auto">
          {/* 3D rotating flashlight */}
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            <motion.img
              src="/tactical-flashlight-3d-render-metallic.jpg"
              alt="Flashlight 3D"
              className="w-full h-full object-contain"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Metallic shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Tech feature labels */}
          {techFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="absolute cursor-pointer"
              style={feature.position}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
            >
              <div className="relative">
                <div className="w-4 h-4 bg-[#00C2FF] rounded-full animate-pulse" />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-[#1E1E1E] border border-[#00C2FF] px-4 py-2 rounded-lg font-bold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredFeature === index ? 1 : 0,
                    scale: hoveredFeature === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.label}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
