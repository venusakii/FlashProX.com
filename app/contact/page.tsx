import { ContactSupport } from "@/components/contact-support"
import { AnimatedBackground } from "@/components/animated-background"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      <AnimatedBackground />
      <div className="pt-32 pb-16">
        <ContactSupport />
      </div>
    </main>
  )
}
