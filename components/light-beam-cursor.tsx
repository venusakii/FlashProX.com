"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function LightBeamCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      className="fixed w-8 h-8 rounded-full bg-[#00C2FF]/30 blur-md pointer-events-none z-50 mix-blend-screen"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
      }}
    />
  )
}
