"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    name: "Alex M.",
    rating: 5,
    text: "Best flashlight I've ever owned! The brightness is incredible, and the build quality is top-notch.",
  },
  {
    name: "Maria K.",
    rating: 5,
    text: "I've been using it on hikes for six months. The waterproofing really works, tested in the rain!",
  },
  {
    name: "Dmitry P.",
    rating: 5,
    text: "Professional tool. The battery lasts for several days of active use.",
  },
]

export function CustomerReviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section ref={ref} className="relative py-24 px-4 z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Customer Reviews
        </motion.h2>

        <div className="relative">
          <motion.div
            key={currentIndex}
            className="bg-[#1E1E1E]/50 border border-[#00C2FF]/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {/* Neon quotation marks */}
            <div className="text-6xl text-[#FFD600] mb-4 leading-none">"</div>

            <p className="text-xl md:text-2xl text-gray-300 mb-6 text-pretty">{reviews[currentIndex].text}</p>

            <div className="flex items-center gap-2 mb-4">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-[#FFD600] text-2xl">
                  ★
                </span>
              ))}
            </div>

            <p className="text-lg font-bold text-[#00C2FF]">{reviews[currentIndex].name}</p>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevReview}
              variant="outline"
              size="icon"
              className="rounded-full border-[#00C2FF] hover:bg-[#00C2FF] hover:text-black transition-all duration-300 bg-transparent"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextReview}
              variant="outline"
              size="icon"
              className="rounded-full border-[#00C2FF] hover:bg-[#00C2FF] hover:text-black transition-all duration-300 bg-transparent"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
