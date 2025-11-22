'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

// FLOWER CONFIGURATION - Easy to modify
const FLOWER_CONFIG = {
  STATIC_FLOWER_COUNT: 12,           // Number of always-visible flowers
  GROW_FLOWER_COUNT: 12,             // Number of scroll-triggered flowers
  STATIC_SIZE_RANGE: { min: 85, max: 110 },    // Size range for static flowers
  GROW_SIZE_RANGE: { min: 120, max: 150 },     // Size range for grow flowers
  STATIC_OPACITY_RANGE: { min: 0.25, max: 0.35 },  // Opacity for static flowers
  GROW_OPACITY_RANGE: { min: 0.40, max: 0.60 },    // Opacity for grow flowers
  SCROLL_TRIGGER_START: 10,          // Scroll % when first grow flower appears
  SCROLL_TRIGGER_END: 95,            // Scroll % when last grow flower appears
}

const flowers = [
  // Always-visible static flowers (background - one of each type)
  { id: 1, x: '15%', y: '33%', size: 110, rotation: 27, opacity: 0.35, type: 'static', animation: 'animate-float-subtle', delay: '0s', scrollTrigger: 0, imageNum: 1 },
  { id: 2, x: '73%', y: '39%', size: 104, rotation: 9, opacity: 0.28, type: 'static', animation: 'animate-float-subtle', delay: '1s', scrollTrigger: 0, imageNum: 2 },
  { id: 3, x: '44%', y: '13%', size: 93, rotation: -34, opacity: 0.26, type: 'static', animation: 'animate-float-subtle', delay: '2s', scrollTrigger: 0, imageNum: 3 },
  { id: 4, x: '10%', y: '72%', size: 105, rotation: -20, opacity: 0.26, type: 'static', animation: 'animate-float-subtle', delay: '3s', scrollTrigger: 0, imageNum: 4 },
  { id: 5, x: '53%', y: '32%', size: 100, rotation: -18, opacity: 0.3, type: 'static', animation: 'animate-float-subtle', delay: '4s', scrollTrigger: 0, imageNum: 5 },
  { id: 6, x: '59%', y: '54%', size: 97, rotation: 29, opacity: 0.34, type: 'static', animation: 'animate-float-subtle', delay: '5s', scrollTrigger: 0, imageNum: 6 },
  { id: 7, x: '29%', y: '85%', size: 101, rotation: 38, opacity: 0.25, type: 'static', animation: 'animate-float-subtle', delay: '6s', scrollTrigger: 0, imageNum: 7 },
  { id: 8, x: '71%', y: '30%', size: 101, rotation: -4, opacity: 0.3, type: 'static', animation: 'animate-float-subtle', delay: '7s', scrollTrigger: 0, imageNum: 8 },
  { id: 9, x: '10%', y: '19%', size: 99, rotation: 7, opacity: 0.33, type: 'static', animation: 'animate-float-subtle', delay: '0s', scrollTrigger: 0, imageNum: 9 },
  { id: 10, x: '33%', y: '49%', size: 106, rotation: 29, opacity: 0.35, type: 'static', animation: 'animate-float-subtle', delay: '1s', scrollTrigger: 0, imageNum: 10 },
  { id: 11, x: '78%', y: '95%', size: 90, rotation: 12, opacity: 0.3, type: 'static', animation: 'animate-float-subtle', delay: '2s', scrollTrigger: 0, imageNum: 11 },
  { id: 12, x: '45%', y: '65%', size: 91, rotation: 40, opacity: 0.27, type: 'static', animation: 'animate-float-subtle', delay: '3s', scrollTrigger: 0, imageNum: 12 },

  // Scroll-triggered grow flowers (foreground - one of each type)
  { id: 13, x: '85%', y: '72%', size: 146, rotation: -10, opacity: 0.53, type: 'grow', animation: '', delay: '0s', scrollTrigger: 10, imageNum: 1 },
  { id: 14, x: '92%', y: '46%', size: 134, rotation: -1, opacity: 0.44, type: 'grow', animation: '', delay: '0.2s', scrollTrigger: 12, imageNum: 2 },
  { id: 15, x: '63%', y: '32%', size: 142, rotation: -4, opacity: 0.54, type: 'grow', animation: '', delay: '0.3s', scrollTrigger: 13, imageNum: 3 },
  { id: 16, x: '18%', y: '13%', size: 134, rotation: 8, opacity: 0.58, type: 'grow', animation: '', delay: '0.4s', scrollTrigger: 15, imageNum: 4 },
  { id: 17, x: '17%', y: '67%', size: 141, rotation: 2, opacity: 0.53, type: 'grow', animation: '', delay: '0.5s', scrollTrigger: 17, imageNum: 5 },
  { id: 18, x: '20%', y: '5%', size: 147, rotation: 5, opacity: 0.44, type: 'grow', animation: '', delay: '0.6s', scrollTrigger: 19, imageNum: 6 },
  { id: 19, x: '17%', y: '47%', size: 144, rotation: -22, opacity: 0.47, type: 'grow', animation: '', delay: '0.7s', scrollTrigger: 20, imageNum: 7 },
  { id: 20, x: '53%', y: '7%', size: 145, rotation: -35, opacity: 0.43, type: 'grow', animation: '', delay: '0s', scrollTrigger: 22, imageNum: 8 },
  { id: 21, x: '83%', y: '53%', size: 131, rotation: -16, opacity: 0.4, type: 'grow', animation: '', delay: '0.2s', scrollTrigger: 24, imageNum: 9 },
  { id: 22, x: '63%', y: '74%', size: 142, rotation: -42, opacity: 0.45, type: 'grow', animation: '', delay: '0.3s', scrollTrigger: 26, imageNum: 10 },
  { id: 23, x: '88%', y: '23%', size: 148, rotation: 18, opacity: 0.45, type: 'grow', animation: '', delay: '0.4s', scrollTrigger: 27, imageNum: 11 },
  { id: 24, x: '65%', y: '10%', size: 122, rotation: -15, opacity: 0.52, type: 'grow', animation: '', delay: '0.5s', scrollTrigger: 29, imageNum: 12 },
  { id: 25, x: '33%', y: '62%', size: 140, rotation: -15, opacity: 0.56, type: 'grow', animation: '', delay: '0.6s', scrollTrigger: 31, imageNum: 1 },
  { id: 26, x: '79%', y: '32%', size: 142, rotation: -11, opacity: 0.56, type: 'grow', animation: '', delay: '0.7s', scrollTrigger: 33, imageNum: 2 },
  { id: 27, x: '84%', y: '5%', size: 141, rotation: 15, opacity: 0.49, type: 'grow', animation: '', delay: '0s', scrollTrigger: 34, imageNum: 3 },
  { id: 28, x: '90%', y: '15%', size: 148, rotation: 3, opacity: 0.44, type: 'grow', animation: '', delay: '0.2s', scrollTrigger: 36, imageNum: 4 },
  { id: 29, x: '47%', y: '49%', size: 128, rotation: 12, opacity: 0.51, type: 'grow', animation: '', delay: '0.3s', scrollTrigger: 38, imageNum: 5 },
  { id: 30, x: '84%', y: '83%', size: 120, rotation: 33, opacity: 0.43, type: 'grow', animation: '', delay: '0.4s', scrollTrigger: 40, imageNum: 6 },
  { id: 31, x: '33%', y: '27%', size: 147, rotation: 36, opacity: 0.57, type: 'grow', animation: '', delay: '0.5s', scrollTrigger: 41, imageNum: 7 },
  { id: 32, x: '26%', y: '69%', size: 147, rotation: -34, opacity: 0.45, type: 'grow', animation: '', delay: '0.6s', scrollTrigger: 43, imageNum: 8 },
  { id: 33, x: '49%', y: '94%', size: 149, rotation: -28, opacity: 0.48, type: 'grow', animation: '', delay: '0.7s', scrollTrigger: 45, imageNum: 9 },
  { id: 34, x: '25%', y: '61%', size: 121, rotation: -13, opacity: 0.6, type: 'grow', animation: '', delay: '0s', scrollTrigger: 47, imageNum: 10 },
  { id: 35, x: '15%', y: '84%', size: 123, rotation: -41, opacity: 0.56, type: 'grow', animation: '', delay: '0.2s', scrollTrigger: 48, imageNum: 11 },
  { id: 36, x: '52%', y: '40%', size: 137, rotation: -26, opacity: 0.47, type: 'grow', animation: '', delay: '0.3s', scrollTrigger: 50, imageNum: 12 },
]

export default function FloralBackground() {
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollableHeight = documentHeight - windowHeight
      const percent = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0
      setScrollPercent(percent)
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {flowers.map((flower) => {
        const isStaticFlower = flower.type === 'static'
        const isGrowFlower = flower.type === 'grow'
        const shouldBeVisible = isStaticFlower || (isGrowFlower && scrollPercent >= flower.scrollTrigger)

        return (
          <div
            key={flower.id}
            className={flower.animation}
            style={{
              position: 'absolute',
              left: flower.x,
              top: flower.y,
              width: flower.size,
              height: flower.size,
              opacity: shouldBeVisible ? flower.opacity : 0,
              transform: `rotate(${flower.rotation}deg) scale(${shouldBeVisible ? 1 : 0})`,
              animationDelay: flower.delay,
              filter: isStaticFlower ? 'blur(0.5px)' : 'none',
              zIndex: isStaticFlower ? 0 : 10,
              transition: isStaticFlower ? 'none' : 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease-out',
              transitionDelay: shouldBeVisible && isGrowFlower ? flower.delay : '0s',
            }}
          >
            <Image
              src={`/pics/flowers/flower_${String(flower.imageNum).padStart(2, '0')}.png`}
              alt=""
              width={flower.size}
              height={flower.size}
              className="w-full h-full object-contain"
              priority={false}
            />
          </div>
        )
      })}
    </div>
  )
}
