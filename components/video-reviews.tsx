"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Play } from "lucide-react"

const videos = [
  { title: "Mountain Test", thumbnail: "/flashlight-test-mountains-night.jpg" },
  { title: "Waterproof Test", thumbnail: "/flashlight-underwater-test.jpg" },
  { title: "Extreme Conditions", thumbnail: "/flashlight-extreme-weather.jpg" },
]

export function VideoReviews() {
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
          Video Reviews
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />

                {/* Play button with flash effect */}
                <motion.div className="absolute inset-0 flex items-center justify-center" whileHover={{ scale: 1.1 }}>
                  <div className="w-16 h-16 rounded-full bg-[#00C2FF] flex items-center justify-center shadow-[0_0_30px_rgba(0,194,255,0.8)]">
                    <Play className="w-8 h-8 text-black fill-black ml-1" />
                  </div>
                </motion.div>
              </div>
              <h3 className="text-lg font-bold mt-4 text-center">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
