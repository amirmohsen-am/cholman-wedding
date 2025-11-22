// Beautiful Floral SVG Components

export function DelicateFlower({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* 5-petal flower */}
      <g>
        {/* Petals */}
        <path d="M50 30 Q45 40, 50 50 Q55 40, 50 30" fill="#dc2626" opacity="0.7"/>
        <path d="M70 50 Q60 45, 50 50 Q60 55, 70 50" fill="#ea580c" opacity="0.7"/>
        <path d="M50 70 Q55 60, 50 50 Q45 60, 50 70" fill="#d97706" opacity="0.7"/>
        <path d="M30 50 Q40 55, 50 50 Q40 45, 30 50" fill="#fbbf24" opacity="0.7"/>
        <path d="M35 35 Q42 42, 50 50 Q42 42, 35 35" fill="#f59e0b" opacity="0.7"/>
        {/* Center */}
        <circle cx="50" cy="50" r="8" fill="#78350f" opacity="0.8"/>
        <circle cx="50" cy="50" r="5" fill="#fbbf24" opacity="0.6"/>
      </g>
    </svg>
  )
}

export function LayeredBloom({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Layered flower with leaves */}
      <g>
        {/* Outer petals */}
        <ellipse cx="50" cy="30" rx="12" ry="20" fill="#dc2626" opacity="0.6" transform="rotate(0 50 50)"/>
        <ellipse cx="50" cy="30" rx="12" ry="20" fill="#dc2626" opacity="0.6" transform="rotate(72 50 50)"/>
        <ellipse cx="50" cy="30" rx="12" ry="20" fill="#ea580c" opacity="0.6" transform="rotate(144 50 50)"/>
        <ellipse cx="50" cy="30" rx="12" ry="20" fill="#f59e0b" opacity="0.6" transform="rotate(216 50 50)"/>
        <ellipse cx="50" cy="30" rx="12" ry="20" fill="#fbbf24" opacity="0.6" transform="rotate(288 50 50)"/>
        {/* Inner petals */}
        <ellipse cx="50" cy="35" rx="8" ry="15" fill="#d97706" opacity="0.7" transform="rotate(36 50 50)"/>
        <ellipse cx="50" cy="35" rx="8" ry="15" fill="#ea580c" opacity="0.7" transform="rotate(108 50 50)"/>
        <ellipse cx="50" cy="35" rx="8" ry="15" fill="#f59e0b" opacity="0.7" transform="rotate(180 50 50)"/>
        <ellipse cx="50" cy="35" rx="8" ry="15" fill="#fbbf24" opacity="0.7" transform="rotate(252 50 50)"/>
        <ellipse cx="50" cy="35" rx="8" ry="15" fill="#fbbf24" opacity="0.7" transform="rotate(324 50 50)"/>
        {/* Center */}
        <circle cx="50" cy="50" r="10" fill="#78350f" opacity="0.8"/>
        {/* Leaves */}
        <ellipse cx="30" cy="60" rx="6" ry="15" fill="#059669" opacity="0.6" transform="rotate(-30 30 60)"/>
        <ellipse cx="70" cy="60" rx="6" ry="15" fill="#16a34a" opacity="0.6" transform="rotate(30 70 60)"/>
      </g>
    </svg>
  )
}

export function BotanicalBranch({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Branch with multiple small flowers */}
      <g>
        {/* Main stem */}
        <path d="M20 80 Q30 60, 40 40 Q50 20, 60 10" stroke="#059669" strokeWidth="2" fill="none" opacity="0.7"/>

        {/* Small flowers along branch */}
        <g transform="translate(25, 70)">
          <circle cx="0" cy="0" r="4" fill="#dc2626" opacity="0.7"/>
          <circle cx="-3" cy="-2" r="3" fill="#ea580c" opacity="0.6"/>
          <circle cx="3" cy="-2" r="3" fill="#f59e0b" opacity="0.6"/>
          <circle cx="0" cy="-4" r="3" fill="#fbbf24" opacity="0.6"/>
          <circle cx="0" cy="0" r="2" fill="#78350f" opacity="0.8"/>
        </g>

        <g transform="translate(35, 50)">
          <circle cx="0" cy="0" r="5" fill="#ea580c" opacity="0.7"/>
          <circle cx="-4" cy="-2" r="3.5" fill="#f59e0b" opacity="0.6"/>
          <circle cx="4" cy="-2" r="3.5" fill="#fbbf24" opacity="0.6"/>
          <circle cx="0" cy="-5" r="3.5" fill="#dc2626" opacity="0.6"/>
          <circle cx="0" cy="0" r="2.5" fill="#78350f" opacity="0.8"/>
        </g>

        <g transform="translate(48, 28)">
          <circle cx="0" cy="0" r="4" fill="#f59e0b" opacity="0.7"/>
          <circle cx="-3" cy="-2" r="3" fill="#fbbf24" opacity="0.6"/>
          <circle cx="3" cy="-2" r="3" fill="#dc2626" opacity="0.6"/>
          <circle cx="0" cy="-4" r="3" fill="#ea580c" opacity="0.6"/>
          <circle cx="0" cy="0" r="2" fill="#78350f" opacity="0.8"/>
        </g>

        {/* Leaves */}
        <ellipse cx="28" cy="65" rx="3" ry="8" fill="#059669" opacity="0.5" transform="rotate(-45 28 65)"/>
        <ellipse cx="38" cy="45" rx="3" ry="8" fill="#16a34a" opacity="0.5" transform="rotate(-30 38 45)"/>
        <ellipse cx="52" cy="25" rx="3" ry="8" fill="#059669" opacity="0.5" transform="rotate(-20 52 25)"/>
      </g>
    </svg>
  )
}

export function FloralCluster({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      {/* Decorative cluster of flowers */}
      <g>
        {/* Center large flower */}
        <g transform="translate(50, 50)">
          <circle cx="0" cy="0" r="15" fill="#dc2626" opacity="0.6"/>
          <circle cx="0" cy="-15" r="12" fill="#ea580c" opacity="0.6"/>
          <circle cx="13" cy="-8" r="12" fill="#f59e0b" opacity="0.6"/>
          <circle cx="13" cy="8" r="12" fill="#fbbf24" opacity="0.6"/>
          <circle cx="0" cy="15" r="12" fill="#f59e0b" opacity="0.6"/>
          <circle cx="-13" cy="8" r="12" fill="#ea580c" opacity="0.6"/>
          <circle cx="-13" cy="-8" r="12" fill="#dc2626" opacity="0.6"/>
          <circle cx="0" cy="0" r="8" fill="#78350f" opacity="0.8"/>
        </g>

        {/* Smaller surrounding flowers */}
        <g transform="translate(25, 30)">
          <circle cx="0" cy="0" r="8" fill="#fbbf24" opacity="0.6"/>
          <circle cx="0" cy="-7" r="6" fill="#f59e0b" opacity="0.5"/>
          <circle cx="6" cy="-3" r="6" fill="#ea580c" opacity="0.5"/>
          <circle cx="0" cy="0" r="4" fill="#78350f" opacity="0.7"/>
        </g>

        <g transform="translate(75, 35)">
          <circle cx="0" cy="0" r="7" fill="#ea580c" opacity="0.6"/>
          <circle cx="0" cy="-6" r="5" fill="#dc2626" opacity="0.5"/>
          <circle cx="5" cy="-3" r="5" fill="#f59e0b" opacity="0.5"/>
          <circle cx="0" cy="0" r="3.5" fill="#78350f" opacity="0.7"/>
        </g>

        {/* Leaves scattered */}
        <ellipse cx="35" cy="65" rx="4" ry="12" fill="#059669" opacity="0.5" transform="rotate(-40 35 65)"/>
        <ellipse cx="65" cy="68" rx="4" ry="12" fill="#16a34a" opacity="0.5" transform="rotate(40 65 68)"/>
        <ellipse cx="20" cy="45" rx="3" ry="10" fill="#059669" opacity="0.4" transform="rotate(-60 20 45)"/>
      </g>
    </svg>
  )
}
