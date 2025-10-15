"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Moving light beam effect */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, #FFD600 0%, transparent 50%)",
        }}
        animate={{
          x: ["-50%", "50%", "-50%"],
          y: ["-20%", "20%", "-20%"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-sans text-6xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#00C2FF] via-[#FFD600] to-[#00C2FF] bg-clip-text text-transparent">
              FlashProX
            </span>
          </h1>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4 text-balance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Illuminate the Darkness. Master the Light.
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-8 text-balance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Premium tactical and multifunctional flashlights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Button
            size="lg"
            className="bg-[#00C2FF] hover:bg-[#FEC13A] text-black font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(0,194,255,0.5)] hover:shadow-[0_0_50px_rgba(254,193,58,0.8)]"
            asChild
          >
            <Link href="/reviews">View Collection</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
