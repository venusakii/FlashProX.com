"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="relative bg-[#1E1E1E] border border-[#00C2FF]/50 rounded-lg p-6 shadow-[0_0_30px_rgba(0,194,255,0.3)]"
              animate={{
                boxShadow: [
                  "0 0 30px rgba(0, 194, 255, 0.3)",
                  "0 0 40px rgba(255, 214, 0, 0.4)",
                  "0 0 30px rgba(0, 194, 255, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pr-8">
                <div className="flex-1">
                  <p className="text-sm md:text-base text-gray-300 text-pretty">
                    This website uses cookies to improve your experience and analyze site usage. By continuing, you
                    consent to the use of cookies.
                  </p>
                </div>
                <Button
                  onClick={handleAccept}
                  className="bg-[#00C2FF] hover:bg-[#FFD600] text-black font-bold rounded-md shadow-[0_0_20px_rgba(0,194,255,0.5)] hover:shadow-[0_0_30px_rgba(255,214,0,0.8)] transition-all duration-300 whitespace-nowrap"
                >
                  Accept
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
