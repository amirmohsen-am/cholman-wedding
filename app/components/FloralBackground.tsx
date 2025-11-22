'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const flowers = [
  // Always-visible static flowers (background - one of each type)
  { id: 1, x: '78%', y: '10%', size: 96, rotation: -4, opacity: 0.44, type: 'static', animation: 'animate-float-subtle', delay: '0s', scrollTrigger: 0, imageNum: 1 },
  { id: 2, x: '63%', y: '70%', size: 97, rotation: 27, opacity: 0.57, type: 'static', animation: 'animate-float-subtle', delay: '1s', scrollTrigger: 0, imageNum: 2 },
  { id: 3, x: '53%', y: '40%', size: 95, rotation: 35, opacity: 0.44, type: 'static', animation: 'animate-float-subtle', delay: '2s', scrollTrigger: 0, imageNum: 3 },
  { id: 4, x: '49%', y: '58%', size: 106, rotation: 28, opacity: 0.43, type: 'static', animation: 'animate-float-subtle', delay: '3s', scrollTrigger: 0, imageNum: 4 },
  { id: 5, x: '10%', y: '68%', size: 100, rotation: -26, opacity: 0.4, type: 'static', animation: 'animate-float-subtle', delay: '4s', scrollTrigger: 0, imageNum: 5 },
  { id: 6, x: '21%', y: '42%', size: 103, rotation: 26, opacity: 0.57, type: 'static', animation: 'animate-float-subtle', delay: '5s', scrollTrigger: 0, imageNum: 6 },
  { id: 7, x: '75%', y: '58%', size: 87, rotation: 40, opacity: 0.49, type: 'static', animation: 'animate-float-subtle', delay: '6s', scrollTrigger: 0, imageNum: 7 },
  { id: 8, x: '18%', y: '14%', size: 106, rotation: 25, opacity: 0.59, type: 'static', animation: 'animate-float-subtle', delay: '7s', scrollTrigger: 0, imageNum: 8 },
  { id: 9, x: '71%', y: '32%', size: 90, rotation: -28, opacity: 0.46, type: 'static', animation: 'animate-float-subtle', delay: '0s', scrollTrigger: 0, imageNum: 9 },
  { id: 10, x: '32%', y: '71%', size: 100, rotation: -13, opacity: 0.59, type: 'static', animation: 'animate-float-subtle', delay: '1s', scrollTrigger: 0, imageNum: 10 },
  { id: 11, x: '64%', y: '91%', size: 96, rotation: -45, opacity: 0.6, type: 'static', animation: 'animate-float-subtle', delay: '2s', scrollTrigger: 0, imageNum: 11 },
  { id: 12, x: '31%', y: '63%', size: 103, rotation: -45, opacity: 0.43, type: 'static', animation: 'animate-float-subtle', delay: '3s', scrollTrigger: 0, imageNum: 12 },

  // Scroll-triggered grow flowers (foreground - one of each type)
  { id: 13, x: '62%', y: '82%', size: 142, rotation: 11, opacity: 0.63, type: 'grow', animation: '', delay: '0s', scrollTrigger: 10, imageNum: 1 },
  { id: 14, x: '71%', y: '49%', size: 134, rotation: 35, opacity: 0.5, type: 'grow', animation: '', delay: '0.2s', scrollTrigger: 12, imageNum: 2 },
  { id: 15, x: '91%', y: '51%', size: 149, rotation: 45, opacity: 0.56, type: 'grow', animation: '', delay: '0.3s', scrollTrigger: 13, imageNum: 3 },
  { id: 16, x: '18%', y: '34%', size: 138, rotation: -36, opacity: 0.53, type: 'grow', animation: '', delay: '0.4s', scrollTrigger: 15, imageNum: 4 },
  { id: 17, x: '88%', y: '22%', size: 141, rotation: -39, opacity: 0.63, type: 'grow', animation: '', delay: '0.5s', scrollTrigger: 17, imageNum: 5 },
  { id: 18, x: '32%', y: '13%', size: 131, rotation: -44, opacity: 0.66, type: 'grow', animation: '', delay: '0.6s', scrollTrigger: 19, imageNum: 6 },
  { id: 19, x: '30%', y: '43%', size: 128, rotation: 22, opacity: 0.63, type: 'grow', animation: '', delay: '0.7s', scrollTrigger: 20, imageNum: 7 },
  { id: 20, x: '69%', y: '6%', size: 125, rotation: -35, opacity: 0.57, type: 'grow', animation: '', delay: '0s', scrollTrigger: 22, imageNum: 8 },
  { id: 21, x: '66%', y: '62%', size: 131, rotation: -6, opacity: 0.58, type: 'grow', animation: '', delay: '0.2s', scrollTrigger: 24, imageNum: 9 },
  { id: 22, x: '39%', y: '22%', size: 134, rotation: -45, opacity: 0.65, type: 'grow', animation: '', delay: '0.3s', scrollTrigger: 26, imageNum: 10 },
  { id: 23, x: '94%', y: '80%', size: 121, rotation: -8, opacity: 0.64, type: 'grow', animation: '', delay: '0.4s', scrollTrigger: 27, imageNum: 11 },
  { id: 24, x: '75%', y: '68%', size: 120, rotation: -29, opacity: 0.59, type: 'grow', animation: '', delay: '0.5s', scrollTrigger: 29, imageNum: 12 },
  { id: 25, x: '15%', y: '76%', size: 125, rotation: 10, opacity: 0.55, type: 'grow', animation: '', delay: '0.6s', scrollTrigger: 31, imageNum: 1 },
  { id: 26, x: '22%', y: '91%', size: 136, rotation: 27, opacity: 0.6, type: 'grow', animation: '', delay: '0.7s', scrollTrigger: 33, imageNum: 2 },
  { id: 27, x: '6%', y: '59%', size: 149, rotation: -31, opacity: 0.66, type: 'grow', animation: '', delay: '0s', scrollTrigger: 34, imageNum: 3 },
  { id: 28, x: '61%', y: '29%', size: 137, rotation: 0, opacity: 0.51, type: 'grow', animation: '', delay: '0.2s', scrollTrigger: 36, imageNum: 4 },
  { id: 29, x: '83%', y: '51%', size: 130, rotation: -33, opacity: 0.64, type: 'grow', animation: '', delay: '0.3s', scrollTrigger: 38, imageNum: 5 },
  { id: 30, x: '53%', y: '82%', size: 125, rotation: -17, opacity: 0.5, type: 'grow', animation: '', delay: '0.4s', scrollTrigger: 40, imageNum: 6 },
  { id: 31, x: '24%', y: '68%', size: 121, rotation: -17, opacity: 0.66, type: 'grow', animation: '', delay: '0.5s', scrollTrigger: 41, imageNum: 7 },
  { id: 32, x: '61%', y: '40%', size: 147, rotation: -31, opacity: 0.61, type: 'grow', animation: '', delay: '0.6s', scrollTrigger: 43, imageNum: 8 },
  { id: 33, x: '68%', y: '16%', size: 139, rotation: -21, opacity: 0.52, type: 'grow', animation: '', delay: '0.7s', scrollTrigger: 45, imageNum: 9 },
  { id: 34, x: '55%', y: '12%', size: 149, rotation: 18, opacity: 0.69, type: 'grow', animation: '', delay: '0s', scrollTrigger: 47, imageNum: 10 },
  { id: 35, x: '30%', y: '32%', size: 148, rotation: 33, opacity: 0.54, type: 'grow', animation: '', delay: '0.2s', scrollTrigger: 48, imageNum: 11 },
  { id: 36, x: '95%', y: '70%', size: 135, rotation: -31, opacity: 0.68, type: 'grow', animation: '', delay: '0.3s', scrollTrigger: 50, imageNum: 12 },
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
