"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated light beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#00C2FF]/20 to-transparent"
        animate={{
          x: [0, 100, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-[#FFD600]/20 to-transparent"
        animate={{
          x: [0, -80, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Radial gradient spots */}
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-[#00C2FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD600]/10 rounded-full blur-3xl" />
    </div>
  )
}
