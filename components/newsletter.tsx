"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [email, setEmail] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  return (
    <section ref={ref} className="relative py-24 px-4 z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="relative bg-gradient-to-br from-[#1E1E1E] to-[#0A0A0A] border border-[#00C2FF]/30 rounded-2xl p-8 md:p-12 text-center overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Scanning laser effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00C2FF] to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join the Light Movement
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 mb-8 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Subscribe for exclusive offers
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative flex-1">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="bg-[#1E1E1E] border-[#00C2FF]/50 focus:border-[#FFD600] text-white placeholder:text-gray-500 h-12"
              />
              {/* Scanning effect on focus */}
              {isFocused && (
                <motion.div
                  className="absolute inset-0 border-2 border-[#00C2FF] rounded-md pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </div>
            <Button
              size="lg"
              className="bg-[#00C2FF] hover:bg-[#FFD600] text-black font-bold rounded-md shadow-[0_0_20px_rgba(0,194,255,0.5)] hover:shadow-[0_0_30px_rgba(255,214,0,0.8)] transition-all duration-300 h-12"
            >
              Join the Light
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
