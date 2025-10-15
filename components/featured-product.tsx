"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeaturedProduct() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="relative py-24 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1E1E1E] to-[#0A0A0A] border border-[#00C2FF]/30 p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Moving light rays background */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: "radial-gradient(circle at 30% 50%, #FFD600 0%, transparent 60%)",
            }}
            animate={{
              x: ["0%", "20%", "0%"],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                className="inline-block px-4 py-2 bg-[#FFD600] text-black font-bold rounded-full mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Top Product of the Week
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4 text-balance"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Fenix PD36R Rechargeable Flashlight
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 mb-6 text-pretty"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                1600 lumens. 115 hours runtime. One click — and night turns into day.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00C2FF] hover:bg-[#FEC13A] text-black font-bold rounded-full shadow-[0_0_20px_rgba(0,194,255,0.5)] hover:shadow-[0_0_30px_rgba(254,193,58,0.8)] transition-all duration-300"
                >
                  <Link href="/reviews">Read Review</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="/fenix-pd36r-tactical-flashlight-closeup.jpg"
                alt="Fenix PD36R"
                className="w-full h-auto rounded-lg"
              />
              {/* Lens flare effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#FFD600] rounded-full blur-3xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
