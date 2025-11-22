import { DelicateFlower, LayeredBloom, BotanicalBranch, FloralCluster } from './FloralSVGs'

export function FloralCorner({ position = 'top-left', className = '' }: { position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right', className?: string }) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180'
  }

  return (
    <div className={`absolute ${positionClasses[position]} w-48 md:w-64 h-48 md:h-64 opacity-40 ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        {/* Large flower cluster - top left area */}
        <g transform="translate(10, 10)" className="animate-bloom delay-1">
          <FloralCluster className="w-24 h-24" />
        </g>

        {/* Layered bloom - middle */}
        <g transform="translate(85, 55)" className="animate-float-bloom delay-3">
          <LayeredBloom className="w-20 h-20" />
        </g>

        {/* Delicate flower - smaller accent */}
        <g transform="translate(130, 20)" className="animate-float delay-2">
          <DelicateFlower className="w-16 h-16" />
        </g>

        {/* Botanical branch - flowing across */}
        <g transform="translate(30, 80) rotate(-20)" className="animate-float delay-4">
          <BotanicalBranch className="w-28 h-28" />
        </g>

        {/* Additional delicate flowers scattered */}
        <g transform="translate(140, 100)" className="animate-bloom delay-5">
          <DelicateFlower className="w-14 h-14" />
        </g>

        <g transform="translate(155, 135)" className="animate-float-bloom delay-2">
          <DelicateFlower className="w-12 h-12" />
        </g>
      </svg>
    </div>
  )
}

export function FloralBorder({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full h-20 opacity-50 ${className}`}>
      <svg viewBox="0 0 800 100" className="w-full h-full" fill="none" preserveAspectRatio="none">
        <g>
          {[...Array(6)].map((_, i) => {
            const delays = ['delay-1', 'delay-2', 'delay-3', 'delay-4', 'delay-5', 'delay-1'];
            const animations = ['animate-bloom', 'animate-float', 'animate-float-bloom'];
            const flowers = [DelicateFlower, LayeredBloom, FloralCluster, DelicateFlower, BotanicalBranch, LayeredBloom];
            const FlowerComponent = flowers[i];

            return (
              <g key={i} transform={`translate(${i * 133 + 50}, 50) scale(0.8)`} className={`${animations[i % 3]} ${delays[i]}`}>
                <g transform="translate(-50, -50)">
                  <FlowerComponent className="w-24 h-24" />
                </g>
              </g>
            )
          })}
        </g>
      </svg>
    </div>
  )
}
