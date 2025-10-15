"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, MapPin } from "lucide-react"

export function ContactSupport() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  return (
    <section ref={ref} className="relative py-24 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact & Support
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div className="relative">
                <Input
                  placeholder="Name"
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="bg-[#1E1E1E] border-[#00C2FF]/30 focus:border-[#00C2FF] text-white placeholder:text-gray-500"
                />
                {focusedField === "name" && (
                  <motion.div
                    className="absolute inset-0 border-2 border-[#00C2FF] rounded-md pointer-events-none"
                    layoutId="focus-border"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>

              <div className="relative">
                <Input
                  type="email"
                  placeholder="Email"
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="bg-[#1E1E1E] border-[#00C2FF]/30 focus:border-[#00C2FF] text-white placeholder:text-gray-500"
                />
                {focusedField === "email" && (
                  <motion.div
                    className="absolute inset-0 border-2 border-[#00C2FF] rounded-md pointer-events-none"
                    layoutId="focus-border"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>

              <div className="relative">
                <Textarea
                  placeholder="Message"
                  rows={5}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="bg-[#1E1E1E] border-[#00C2FF]/30 focus:border-[#00C2FF] text-white placeholder:text-gray-500 resize-none"
                />
                {focusedField === "message" && (
                  <motion.div
                    className="absolute inset-0 border-2 border-[#00C2FF] rounded-md pointer-events-none"
                    layoutId="focus-border"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-[#00C2FF] hover:bg-[#FFD600] text-black font-bold rounded-md shadow-[0_0_20px_rgba(0,194,255,0.5)] hover:shadow-[0_0_30px_rgba(255,214,0,0.8)] transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-4 group">
              <motion.div
                className="w-12 h-12 rounded-full bg-[#1E1E1E] border border-[#00C2FF]/30 flex items-center justify-center group-hover:border-[#FFD600] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="w-6 h-6 text-[#00C2FF] group-hover:text-[#FFD600] transition-colors duration-300" />
              </motion.div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-gray-400">support@flashprox.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <motion.div
                className="w-12 h-12 rounded-full bg-[#1E1E1E] border border-[#00C2FF]/30 flex items-center justify-center group-hover:border-[#FFD600] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <MessageSquare className="w-6 h-6 text-[#00C2FF] group-hover:text-[#FFD600] transition-colors duration-300" />
              </motion.div>
              <div>
                <h3 className="font-bold text-lg mb-1">Live Chat</h3>
                <p className="text-gray-400">Available 24/7</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <motion.div
                className="w-12 h-12 rounded-full bg-[#1E1E1E] border border-[#00C2FF]/30 flex items-center justify-center group-hover:border-[#FFD600] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <MapPin className="w-6 h-6 text-[#00C2FF] group-hover:text-[#FFD600] transition-colors duration-300" />
              </motion.div>
              <div>
                <h3 className="font-bold text-lg mb-1">Address</h3>
                <p className="text-gray-400">Moscow, Russia</p>
              </div>
            </div>

            {/* Social media icons with pulsing light */}
            <div className="pt-8">
              <h3 className="font-bold text-lg mb-4">Social Media</h3>
              <div className="flex gap-4">
                {["Facebook", "Instagram", "YouTube"].map((social, index) => (
                  <motion.div
                    key={social}
                    className="w-12 h-12 rounded-full bg-[#1E1E1E] border border-[#00C2FF]/30 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1, borderColor: "#FFD600" }}
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(0, 194, 255, 0)",
                        "0 0 20px rgba(0, 194, 255, 0.5)",
                        "0 0 0px rgba(0, 194, 255, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.3,
                    }}
                  >
                    <span className="text-sm font-bold text-[#00C2FF]">{social[0]}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
