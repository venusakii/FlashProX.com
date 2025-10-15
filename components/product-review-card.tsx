"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProductReviewCardProps {
  product: {
    slug: string
    name: string
    image: string
    rating: number
    reviewCount: number
    excerpt: string
    price: string
  }
}

export function ProductReviewCard({ product }: ProductReviewCardProps) {
  return (
    <Link href={`/reviews/${product.slug}`}>
      <motion.div
        className="group relative bg-[#1E1E1E] rounded-lg overflow-hidden border border-gray-800 hover:border-[#00C2FF] transition-all duration-300"
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/0 to-[#FFD600]/0 group-hover:from-[#00C2FF]/10 group-hover:to-[#FFD600]/10 transition-all duration-300 pointer-events-none" />

        {/* Image */}
        <div className="relative h-64 bg-[#0A0A0A] overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Price badge */}
          
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-[#00C2FF] transition-colors">{product.name}</h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-[#FFD600] text-[#FFD600]"
                      : i < product.rating
                        ? "fill-[#FFD600]/50 text-[#FFD600]"
                        : "fill-none text-gray-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">({product.reviewCount} reviews)</span>
          </div>

          {/* Excerpt */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{product.excerpt}</p>

          {/* Read more link */}
          <div className="flex items-center gap-2 text-[#00C2FF] text-sm font-semibold group-hover:gap-3 transition-all">
            Read Full Review
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>

        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00C2FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </Link>
  )
}
