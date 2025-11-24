'use client'

import Image from 'next/image'
import { useEffect, useRef } from "react"

export default function HeroImage() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY
        // Parallax effect: image moves slower than scroll (0.5 = half speed)
        imageRef.current.style.transform = `translateY(${scrollY * 0.5}px)`

        // Fade out effect: image fades as you scroll down
        // Start fading immediately, fully transparent by 100px scroll
        const opacity = Math.max(0, 1 - scrollY / 600)
        imageRef.current.style.setProperty("opacity", opacity.toString(), "important")
      }
    }

    // Set initial opacity
    if (imageRef.current) {
      imageRef.current.style.setProperty("opacity", "1", "important")
    }

    // Call once on mount to set initial state
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative w-full overflow-hidden pb-12">
      {/* Hero Image Container */}
      <div className="hero-image-container relative w-full h-[100vw] sm:h-[580px] pb-12">
        {/* Background with gradient mask */}
        <div
          ref={imageRef}
          className="hero-fade-animation absolute inset-0 w-full h-full will-change-transform"
          style={{
            mask: "radial-gradient(110.26% 96% at 50% 0%, #000 50%, rgba(0, 0, 0, 0.99) 54.68%, rgba(0, 0, 0, 0.97) 58.79%, rgba(0, 0, 0, 0.94) 62.4%, rgba(0, 0, 0, 0.90) 65.61%, rgba(0, 0, 0, 0.85) 68.52%, rgba(0, 0, 0, 0.79) 71.2%, rgba(0, 0, 0, 0.72) 73.75%, rgba(0, 0, 0, 0.65) 76.25%, rgba(0, 0, 0, 0.57) 78.8%, rgba(0, 0, 0, 0.48) 81.48%, rgba(0, 0, 0, 0.39) 84.39%, rgba(0, 0, 0, 0.30) 87.6%, rgba(0, 0, 0, 0.20) 91.21%, rgba(0, 0, 0, 0.10) 95.32%, rgba(0, 0, 0, 0.00) 100%)",
            WebkitMask:
              "radial-gradient(110.26% 96% at 50% 0%, #000 50%, rgba(0, 0, 0, 0.99) 54.68%, rgba(0, 0, 0, 0.97) 58.79%, rgba(0, 0, 0, 0.94) 62.4%, rgba(0, 0, 0, 0.90) 65.61%, rgba(0, 0, 0, 0.85) 68.52%, rgba(0, 0, 0, 0.79) 71.2%, rgba(0, 0, 0, 0.72) 73.75%, rgba(0, 0, 0, 0.65) 76.25%, rgba(0, 0, 0, 0.57) 78.8%, rgba(0, 0, 0, 0.48) 81.48%, rgba(0, 0, 0, 0.39) 84.39%, rgba(0, 0, 0, 0.30) 87.6%, rgba(0, 0, 0, 0.20) 91.21%, rgba(0, 0, 0, 0.10) 95.32%, rgba(0, 0, 0, 0.00) 100%)",
            backgroundColor: "var(--background)",
          }}
        >
          <Image src="/pics/IMG_6397.png" alt="Sara and Gray" fill className="object-cover" priority />

          {/* Blur overlay for bottom fade */}
          <div
            className="hero-fade-animation-inner absolute inset-0 pointer-events-none"
            style={{
              mask: "radial-gradient(110.26% 96% at 50% 0%, rgba(0, 0, 0, 0.00) 60%, rgba(0, 0, 0, 0.01) 64.72%, rgba(0, 0, 0, 0.03) 68.55%, rgba(0, 0, 0, 0.07) 71.65%, rgba(0, 0, 0, 0.12) 74.13%, rgba(0, 0, 0, 0.18) 76.15%, rgba(0, 0, 0, 0.25) 77.82%, rgba(0, 0, 0, 0.33) 79.3%, rgba(0, 0, 0, 0.41) 80.7%, rgba(0, 0, 0, 0.50) 82.18%, rgba(0, 0, 0, 0.59) 83.85%, rgba(0, 0, 0, 0.67) 85.87%, rgba(0, 0, 0, 0.76) 88.35%, rgba(0, 0, 0, 0.85) 91.45%, rgba(0, 0, 0, 0.93) 95.28%, #000 100%)",
              WebkitMask:
                "radial-gradient(110.26% 96% at 50% 0%, rgba(0, 0, 0, 0.00) 60%, rgba(0, 0, 0, 0.01) 64.72%, rgba(0, 0, 0, 0.03) 68.55%, rgba(0, 0, 0, 0.07) 71.65%, rgba(0, 0, 0, 0.12) 74.13%, rgba(0, 0, 0, 0.18) 76.15%, rgba(0, 0, 0, 0.25) 77.82%, rgba(0, 0, 0, 0.33) 79.3%, rgba(0, 0, 0, 0.41) 80.7%, rgba(0, 0, 0, 0.50) 82.18%, rgba(0, 0, 0, 0.59) 83.85%, rgba(0, 0, 0, 0.67) 85.87%, rgba(0, 0, 0, 0.76) 88.35%, rgba(0, 0, 0, 0.85) 91.45%, rgba(0, 0, 0, 0.93) 95.28%, #000 100%)",
            }}
          />
        </div>
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 -mt-32 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-normal mb-6" style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}>
          Sara & Gray
        </h1>
        <p className="text-xl md:text-3xl" style={{ fontFamily: "var(--font-sahitya)", color: "#42250E" }}>
          are inviting you to celebrate their love on Saturday, April 11th, 2026
        </p>
      </div>
    </section>
  )
}
