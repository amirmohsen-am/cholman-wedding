'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const flowers = [
  // Always-visible static flowers (background - one of each type)
  { id: 1, x: '44%', y: '75%', size: 90, rotation: -21, opacity: 0.44, type: 'static', animation: 'animate-sway-gentle', delay: '0s', scrollTrigger: 0, imageNum: 1 },
  { id: 2, x: '39%', y: '24%', size: 90, rotation: -7, opacity: 0.6, type: 'static', animation: 'animate-sway', delay: '1s', scrollTrigger: 0, imageNum: 2 },
  { id: 3, x: '30%', y: '38%', size: 92, rotation: 28, opacity: 0.55, type: 'static', animation: 'animate-sway-gentle', delay: '2s', scrollTrigger: 0, imageNum: 3 },
  { id: 4, x: '8%', y: '26%', size: 94, rotation: -9, opacity: 0.52, type: 'static', animation: 'animate-sway-gentle', delay: '3s', scrollTrigger: 0, imageNum: 4 },
  { id: 5, x: '43%', y: '12%', size: 104, rotation: 1, opacity: 0.46, type: 'static', animation: 'animate-sway-gentle', delay: '4s', scrollTrigger: 0, imageNum: 5 },
  { id: 6, x: '11%', y: '63%', size: 99, rotation: 10, opacity: 0.59, type: 'static', animation: 'animate-sway-gentle', delay: '5s', scrollTrigger: 0, imageNum: 6 },
  { id: 7, x: '87%', y: '12%', size: 107, rotation: -38, opacity: 0.52, type: 'static', animation: 'animate-sway-gentle', delay: '6s', scrollTrigger: 0, imageNum: 7 },
  { id: 8, x: '83%', y: '90%', size: 110, rotation: 36, opacity: 0.57, type: 'static', animation: 'animate-sway-gentle', delay: '7s', scrollTrigger: 0, imageNum: 8 },
  { id: 9, x: '76%', y: '91%', size: 104, rotation: -10, opacity: 0.51, type: 'static', animation: 'animate-sway-gentle', delay: '0s', scrollTrigger: 0, imageNum: 9 },
  { id: 10, x: '88%', y: '29%', size: 96, rotation: 1, opacity: 0.41, type: 'static', animation: 'animate-sway-gentle', delay: '1s', scrollTrigger: 0, imageNum: 10 },
  { id: 11, x: '60%', y: '83%', size: 105, rotation: -30, opacity: 0.48, type: 'static', animation: 'animate-float-subtle', delay: '2s', scrollTrigger: 0, imageNum: 11 },
  { id: 12, x: '13%', y: '7%', size: 93, rotation: 1, opacity: 0.48, type: 'static', animation: 'animate-float-subtle', delay: '3s', scrollTrigger: 0, imageNum: 12 },

  // Scroll-triggered grow flowers (foreground - one of each type)
  { id: 13, x: '87%', y: '72%', size: 134, rotation: -3, opacity: 0.66, type: 'grow', animation: 'animate-sway-gentle', delay: '0s', scrollTrigger: 10, imageNum: 1 },
  { id: 14, x: '37%', y: '54%', size: 148, rotation: -34, opacity: 0.5, type: 'grow', animation: 'animate-sway', delay: '0.2s', scrollTrigger: 13, imageNum: 2 },
  { id: 15, x: '22%', y: '87%', size: 140, rotation: -42, opacity: 0.6, type: 'grow', animation: 'animate-sway', delay: '0.3s', scrollTrigger: 16, imageNum: 3 },
  { id: 16, x: '63%', y: '40%', size: 121, rotation: 14, opacity: 0.61, type: 'grow', animation: 'animate-sway', delay: '0.4s', scrollTrigger: 19, imageNum: 4 },
  { id: 17, x: '76%', y: '39%', size: 120, rotation: -35, opacity: 0.63, type: 'grow', animation: 'animate-sway-gentle', delay: '0.5s', scrollTrigger: 22, imageNum: 5 },
  { id: 18, x: '37%', y: '48%', size: 120, rotation: 29, opacity: 0.7, type: 'grow', animation: 'animate-sway', delay: '0.6s', scrollTrigger: 25, imageNum: 6 },
  { id: 19, x: '10%', y: '70%', size: 150, rotation: -25, opacity: 0.54, type: 'grow', animation: 'animate-sway', delay: '0.7s', scrollTrigger: 28, imageNum: 7 },
  { id: 20, x: '93%', y: '45%', size: 149, rotation: 7, opacity: 0.58, type: 'grow', animation: 'animate-sway', delay: '0s', scrollTrigger: 31, imageNum: 8 },
  { id: 21, x: '70%', y: '77%', size: 141, rotation: 43, opacity: 0.6, type: 'grow', animation: 'animate-float-subtle', delay: '0.2s', scrollTrigger: 34, imageNum: 9 },
  { id: 22, x: '73%', y: '53%', size: 126, rotation: -27, opacity: 0.67, type: 'grow', animation: 'animate-float-subtle', delay: '0.3s', scrollTrigger: 37, imageNum: 10 },
  { id: 23, x: '57%', y: '53%', size: 138, rotation: -17, opacity: 0.64, type: 'grow', animation: 'animate-sway-gentle', delay: '0.4s', scrollTrigger: 40, imageNum: 11 },
  { id: 24, x: '84%', y: '56%', size: 144, rotation: -8, opacity: 0.51, type: 'grow', animation: 'animate-sway-gentle', delay: '0.5s', scrollTrigger: 43, imageNum: 12 },
  { id: 25, x: '11%', y: '41%', size: 145, rotation: 0, opacity: 0.58, type: 'grow', animation: 'animate-float-subtle', delay: '0.6s', scrollTrigger: 47, imageNum: 1 },
  { id: 26, x: '28%', y: '73%', size: 144, rotation: 26, opacity: 0.51, type: 'grow', animation: 'animate-sway', delay: '0.7s', scrollTrigger: 50, imageNum: 2 },
  { id: 27, x: '33%', y: '10%', size: 141, rotation: -44, opacity: 0.62, type: 'grow', animation: 'animate-sway-gentle', delay: '0s', scrollTrigger: 53, imageNum: 3 },
  { id: 28, x: '28%', y: '62%', size: 138, rotation: 13, opacity: 0.62, type: 'grow', animation: 'animate-sway-gentle', delay: '0.2s', scrollTrigger: 56, imageNum: 4 },
  { id: 29, x: '68%', y: '15%', size: 127, rotation: 22, opacity: 0.61, type: 'grow', animation: 'animate-float-subtle', delay: '0.3s', scrollTrigger: 59, imageNum: 5 },
  { id: 30, x: '70%', y: '24%', size: 138, rotation: -6, opacity: 0.7, type: 'grow', animation: 'animate-sway-gentle', delay: '0.4s', scrollTrigger: 62, imageNum: 6 },
  { id: 31, x: '56%', y: '30%', size: 128, rotation: 44, opacity: 0.58, type: 'grow', animation: 'animate-sway', delay: '0.5s', scrollTrigger: 65, imageNum: 7 },
  { id: 32, x: '57%', y: '11%', size: 127, rotation: -13, opacity: 0.64, type: 'grow', animation: 'animate-float-subtle', delay: '0.6s', scrollTrigger: 68, imageNum: 8 },
  { id: 33, x: '24%', y: '23%', size: 141, rotation: 13, opacity: 0.56, type: 'grow', animation: 'animate-sway', delay: '0.7s', scrollTrigger: 71, imageNum: 9 },
  { id: 34, x: '53%', y: '72%', size: 140, rotation: 37, opacity: 0.57, type: 'grow', animation: 'animate-sway-gentle', delay: '0s', scrollTrigger: 74, imageNum: 10 },
  { id: 35, x: '16%', y: '88%', size: 132, rotation: -39, opacity: 0.59, type: 'grow', animation: 'animate-sway-gentle', delay: '0.2s', scrollTrigger: 77, imageNum: 11 },
  { id: 36, x: '41%', y: '93%', size: 143, rotation: 19, opacity: 0.59, type: 'grow', animation: 'animate-float-subtle', delay: '0.3s', scrollTrigger: 80, imageNum: 12 },
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
