"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const categories = [
  { name: "Tactical Flashlights", image: "/tactical-flashlight-military-style.jpg" },
  { name: "Compact / Pocket", image: "/compact-pocket-flashlight.jpg" },
  { name: "USB Rechargeable", image: "/usb-rechargeable-flashlight.jpg" },
  { name: "Bicycle / Camping", image: "/camping-bicycle-flashlight.jpg" },
  { name: "UV & Headlamps", image: "/uv-headlamp-flashlight.jpg" },
]

export function ProductCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative py-24 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Product Categories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Light flash effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FFD600]/0 to-[#00C2FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at center, rgba(255, 214, 0, 0.3) 0%, transparent 70%)",
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-2xl font-bold text-balance group-hover:text-[#FFD600] transition-colors duration-300">
                  {category.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
