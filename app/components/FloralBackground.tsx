import Image from 'next/image'

const flowers = [
  { id: 1, x: '5%', y: '10%', size: 120, rotation: 15, opacity: 0.15, animation: 'animate-float-gentle', delay: '0s' },
  { id: 2, x: '85%', y: '15%', size: 100, rotation: -20, opacity: 0.2, animation: 'animate-bloom', delay: '1s' },
  { id: 3, x: '15%', y: '25%', size: 80, rotation: 45, opacity: 0.1, animation: 'animate-float-bloom', delay: '2s' },
  { id: 4, x: '75%', y: '35%', size: 110, rotation: -10, opacity: 0.18, animation: 'animate-float-gentle', delay: '0.5s' },
  { id: 5, x: '45%', y: '20%', size: 90, rotation: 30, opacity: 0.12, animation: 'animate-bloom', delay: '1.5s' },
  { id: 6, x: '92%', y: '50%', size: 95, rotation: -35, opacity: 0.16, animation: 'animate-float-bloom', delay: '2.5s' },
  { id: 7, x: '8%', y: '60%', size: 105, rotation: 20, opacity: 0.14, animation: 'animate-float-gentle', delay: '1s' },
  { id: 8, x: '60%', y: '65%', size: 85, rotation: -15, opacity: 0.2, animation: 'animate-bloom', delay: '0s' },
  { id: 9, x: '25%', y: '75%', size: 115, rotation: 50, opacity: 0.13, animation: 'animate-float-bloom', delay: '2s' },
  { id: 10, x: '80%', y: '80%', size: 95, rotation: -25, opacity: 0.17, animation: 'animate-float-gentle', delay: '1.5s' },
  { id: 11, x: '40%', y: '85%', size: 100, rotation: 10, opacity: 0.15, animation: 'animate-bloom', delay: '0.5s' },
  { id: 12, x: '10%', y: '90%', size: 90, rotation: -40, opacity: 0.19, animation: 'animate-float-bloom', delay: '2.5s' },
]

export default function FloralBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className={flower.animation}
          style={{
            position: 'absolute',
            left: flower.x,
            top: flower.y,
            width: flower.size,
            height: flower.size,
            opacity: flower.opacity,
            transform: `rotate(${flower.rotation}deg)`,
            animationDelay: flower.delay,
            filter: 'blur(0.5px)',
          }}
        >
          <Image
            src={`/pics/flowers/flower_${String(flower.id).padStart(2, '0')}.png`}
            alt=""
            width={flower.size}
            height={flower.size}
            className="w-full h-full object-contain"
            priority={false}
          />
        </div>
      ))}
    </div>
  )
}
