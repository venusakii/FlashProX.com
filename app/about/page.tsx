"use client"

import { AnimatedBackground } from "@/components/animated-background"
import { Shield, Zap, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      <AnimatedBackground />
      <div className="relative z-10 pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 text-balance">
            About <span className="text-[#00C2FF]">FlashProX</span>
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 text-center mb-16 leading-relaxed">
              We are pioneers in tactical lighting technology, dedicated to providing the most reliable and powerful
              flashlights for professionals and enthusiasts worldwide.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-[#1E1E1E] border border-[#00C2FF]/20 rounded-lg p-8">
                <Shield className="w-12 h-12 text-[#00C2FF] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To illuminate the darkness with cutting-edge technology, ensuring safety and reliability in every
                  situation.
                </p>
              </div>

              <div className="bg-[#1E1E1E] border border-[#00C2FF]/20 rounded-lg p-8">
                <Zap className="w-12 h-12 text-[#FFD600] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  We constantly push the boundaries of LED technology to deliver brighter, longer-lasting, and more
                  efficient lighting solutions.
                </p>
              </div>

              <div className="bg-[#1E1E1E] border border-[#00C2FF]/20 rounded-lg p-8">
                <Award className="w-12 h-12 text-[#00C2FF] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Quality</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every FlashProX product undergoes rigorous testing to meet military-grade standards for durability and
                  performance.
                </p>
              </div>

              <div className="bg-[#1E1E1E] border border-[#00C2FF]/20 rounded-lg p-8">
                <Users className="w-12 h-12 text-[#FFD600] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Community</h3>
                <p className="text-gray-300 leading-relaxed">
                  Trusted by law enforcement, military personnel, outdoor enthusiasts, and professionals across 50+
                  countries.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#00C2FF]/10 to-[#FFD600]/10 border border-[#00C2FF]/20 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-4 text-center">Our Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Founded in 2015, FlashProX emerged from a simple observation: professionals needed lighting solutions
                that could withstand extreme conditions while delivering uncompromising performance.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our team of engineers and outdoor enthusiasts combined their expertise to create flashlights that exceed
                industry standards. Today, FlashProX is recognized globally for innovation in tactical lighting
                technology.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From search and rescue operations to everyday carry, our products have become essential tools for those
                who demand the best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
