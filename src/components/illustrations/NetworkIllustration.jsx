export function NetworkIllustration() {
  const nodes = ['Web Dev', 'AI & ML', 'Design', 'Security', 'Training', 'Solar']
  return (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-2xl">
      <defs>
        <linearGradient id="nbg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="100%" stopColor="#0d2255" />
        </linearGradient>
        <filter id="nblur"><feGaussianBlur stdDeviation="14" /></filter>
      </defs>
      <rect width="500" height="400" rx="20" fill="url(#nbg)" />
      <circle cx="250" cy="200" r="148" fill="#1e6fbc" opacity="0.06" filter="url(#nblur)" />
      {/* Hub */}
      <circle cx="250" cy="200" r="62" fill="#0d2255" stroke="#1e6fbc" strokeWidth="2" />
      <circle cx="250" cy="200" r="52" fill="none" stroke="#00d4ff" strokeWidth="0.9" strokeDasharray="6 4" opacity="0.45" />
      <text x="250" y="196" textAnchor="middle" fill="#48b9f7" fontSize="20" fontWeight="bold">AS</text>
      <text x="250" y="214" textAnchor="middle" fill="#00d4ff" fontSize="8" opacity="0.8" letterSpacing="1">TECH HUB</text>
      {/* Orbit ring */}
      <circle cx="250" cy="200" r="148" fill="none" stroke="#1e6fbc" strokeWidth="0.7" opacity="0.25" />
      {/* Nodes */}
      {nodes.map((label, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2
        const cx = 250 + Math.cos(angle) * 148
        const cy = 200 + Math.sin(angle) * 148
        return (
          <g key={i}>
            <line x1="250" y1="200" x2={cx} y2={cy} stroke="#1e6fbc" strokeWidth="0.7" opacity="0.28" strokeDasharray="4 4" />
            <circle cx={cx} cy={cy} r="30" fill="#0d2255" stroke="#48b9f7" strokeWidth="1.4" />
            <text x={cx} y={cy + 4} textAnchor="middle" fill="#48b9f7" fontSize="8" fontWeight="700">{label}</text>
          </g>
        )
      })}
      {/* Pulse */}
      <circle cx="250" cy="200" r="78" fill="none" stroke="#00d4ff" strokeWidth="0.9" opacity="0.2">
        <animate attributeName="r" values="78;92;78" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.04;0.2" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="28" y="28" fill="#1e6fbc" fontSize="9" opacity="0.5" fontFamily="monospace">ALLSMART TECH HUB</text>
      <text x="28" y="386" fill="#1e6fbc" fontSize="9" opacity="0.5" fontFamily="monospace">LAGOS, NIGERIA</text>
    </svg>
  )
}
