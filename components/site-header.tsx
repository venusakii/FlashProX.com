"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Search, Menu, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#00C2FF]/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div className="flex items-center gap-2 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-[#00C2FF] rounded-full blur-lg opacity-50" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-[#00C2FF] to-[#FFD600] rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-black" fill="currentColor" />
                </div>
              </div>
              <span className="text-2xl font-bold font-heading text-white">
                Flash<span className="text-[#00C2FF]">Pro</span>X
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-[#00C2FF] transition-colors">
              Home
            </Link>
            <Link href="/reviews" className="text-gray-300 hover:text-[#00C2FF] transition-colors">
              Reviews
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-[#00C2FF] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#00C2FF] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300 hover:text-[#00C2FF] hover:bg-[#00C2FF]/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-[#00C2FF]/20"
          >
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-[#00C2FF] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/reviews"
                className="text-gray-300 hover:text-[#00C2FF] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-[#00C2FF] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-[#00C2FF] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
