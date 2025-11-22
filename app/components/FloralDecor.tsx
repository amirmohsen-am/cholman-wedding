export function FloralCorner({ position = 'top-left', className = '' }: { position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right', className?: string }) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180'
  }

  return (
    <div className={`absolute ${positionClasses[position]} w-48 md:w-64 h-48 md:h-64 opacity-30 ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        {/* Large flower */}
        <circle cx="50" cy="50" r="20" fill="#d97706" opacity="0.6"/>
        <circle cx="70" cy="45" r="18" fill="#dc2626" opacity="0.5"/>
        <circle cx="65" cy="65" r="18" fill="#059669" opacity="0.5"/>
        <circle cx="45" cy="70" r="18" fill="#ea580c" opacity="0.5"/>
        <circle cx="35" cy="50" r="18" fill="#84cc16" opacity="0.5"/>
        <circle cx="50" cy="35" r="18" fill="#fbbf24" opacity="0.5"/>
        <circle cx="50" cy="50" r="12" fill="#78350f" opacity="0.7"/>

        {/* Medium flowers */}
        <circle cx="100" cy="30" r="15" fill="#d97706" opacity="0.5"/>
        <circle cx="115" cy="28" r="12" fill="#dc2626" opacity="0.4"/>
        <circle cx="110" cy="42" r="12" fill="#059669" opacity="0.4"/>
        <circle cx="92" cy="42" r="12" fill="#ea580c" opacity="0.4"/>
        <circle cx="88" cy="30" r="12" fill="#84cc16" opacity="0.4"/>
        <circle cx="100" cy="22" r="12" fill="#fbbf24" opacity="0.4"/>

        {/* Small flowers scattered */}
        <circle cx="140" cy="60" r="10" fill="#d97706" opacity="0.4"/>
        <circle cx="145" cy="70" r="8" fill="#dc2626" opacity="0.3"/>
        <circle cx="30" cy="100" r="10" fill="#059669" opacity="0.4"/>
        <circle cx="25" cy="110" r="8" fill="#ea580c" opacity="0.3"/>

        {/* Leaves/stems */}
        <ellipse cx="75" cy="80" rx="5" ry="25" fill="#059669" opacity="0.4" transform="rotate(-30 75 80)"/>
        <ellipse cx="120" cy="50" rx="5" ry="20" fill="#84cc16" opacity="0.3" transform="rotate(45 120 50)"/>
        <ellipse cx="50" cy="120" rx="4" ry="18" fill="#16a34a" opacity="0.3" transform="rotate(-60 50 120)"/>
      </svg>
    </div>
  )
}

export function FloralBorder({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full h-16 opacity-40 ${className}`}>
      <svg viewBox="0 0 800 80" className="w-full h-full" fill="none" preserveAspectRatio="none">
        <g>
          {[...Array(8)].map((_, i) => (
            <g key={i} transform={`translate(${i * 100}, 0)`}>
              <circle cx="50" cy="40" r="12" fill="#d97706" opacity="0.6"/>
              <circle cx="62" cy="37" r="10" fill="#dc2626" opacity="0.5"/>
              <circle cx="60" cy="48" r="10" fill="#059669" opacity="0.5"/>
              <circle cx="42" cy="48" r="10" fill="#ea580c" opacity="0.5"/>
              <circle cx="38" cy="40" r="10" fill="#84cc16" opacity="0.5"/>
              <circle cx="50" cy="32" r="10" fill="#fbbf24" opacity="0.5"/>
              <ellipse cx="50" cy="55" rx="3" ry="15" fill="#059669" opacity="0.4"/>
              <ellipse cx="65" cy="55" rx="3" ry="12" fill="#16a34a" opacity="0.3"/>
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}
