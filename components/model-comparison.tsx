"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const models = [
  { brand: "Fenix", lumens: 1600, runtime: "115h", waterproof: "IP68", price: "$89", best: true },
  { brand: "Olight", lumens: 1200, runtime: "90h", waterproof: "IP68", price: "$79", best: false },
  { brand: "Nitecore", lumens: 1800, runtime: "100h", waterproof: "IP67", price: "$95", best: false },
  { brand: "ThruNite", lumens: 1100, runtime: "120h", waterproof: "IP68", price: "$69", best: false },
]

export function ModelComparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative py-24 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Model Comparison
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#00C2FF]/30">
                <th className="text-left p-4 font-bold text-lg">Brand</th>
                <th className="text-left p-4 font-bold text-lg">Lumens</th>
                <th className="text-left p-4 font-bold text-lg">Runtime</th>
                <th className="text-left p-4 font-bold text-lg">Protection</th>
                <th className="text-left p-4 font-bold text-lg">Price</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model, index) => (
                <motion.tr
                  key={index}
                  className={`border-b border-[#1E1E1E] transition-all duration-300 ${
                    model.best ? "bg-[#00C2FF]/10" : ""
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredRow(index)}
                  onHoverEnd={() => setHoveredRow(null)}
                >
                  <td className="p-4 font-bold relative">
                    {hoveredRow === index && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#FFD600]/20 to-transparent"
                        layoutId="laser"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span className="relative z-10">
                      {model.brand}
                      {model.best && (
                        <span className="ml-2 text-xs bg-[#FFD600] text-black px-2 py-1 rounded-full">Best Choice</span>
                      )}
                    </span>
                  </td>
                  <td className="p-4 relative">
                    <span className="relative z-10">{model.lumens}</span>
                  </td>
                  <td className="p-4 relative">
                    <span className="relative z-10">{model.runtime}</span>
                  </td>
                  <td className="p-4 relative">
                    <span className="relative z-10">{model.waterproof}</span>
                  </td>
                  <td className="p-4 font-bold text-[#00C2FF] relative">
                    <span className="relative z-10">{model.price}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
