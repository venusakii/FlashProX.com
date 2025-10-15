"use client"

import { HeroSection } from "@/components/hero-section"
import { WhyFlashProX } from "@/components/why-flashprox"
import { ProductCategories } from "@/components/product-categories"
import { FeaturedProduct } from "@/components/featured-product"
import { TechnologyShowcase } from "@/components/technology-showcase"
import { CustomerReviews } from "@/components/customer-reviews"
import { ModelComparison } from "@/components/model-comparison"
import { BlogGuide } from "@/components/blog-guide"
import { VideoReviews } from "@/components/video-reviews"
import { Newsletter } from "@/components/newsletter"
import { ContactSupport } from "@/components/contact-support"
import { CookieBanner } from "@/components/cookie-banner"
import { LightBeamCursor } from "@/components/light-beam-cursor"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <AnimatedBackground />
      <LightBeamCursor />

      <HeroSection />
      <WhyFlashProX />
      <ProductCategories />
      <FeaturedProduct />
      <TechnologyShowcase />
      <CustomerReviews />
      <ModelComparison />
      <BlogGuide />
      <VideoReviews />
      <Newsletter />
      <ContactSupport />

      <CookieBanner />
    </main>
  )
}
