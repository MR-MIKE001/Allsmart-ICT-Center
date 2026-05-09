const MEMBERS = [
  { name: 'Emmanuel A.', role: 'CEO & Founder', color: '#00d4ff' },
  { name: 'Sarah O.', role: 'Lead Developer', color: '#48b9f7' },
  { name: 'David K.', role: 'AI Engineer', color: '#7ee8fa' },
  { name: 'Amaka C.', role: 'Digital Marketer', color: '#48b9f7' },
  { name: 'Peter M.', role: 'Cybersecurity', color: '#00d4ff' },
  { name: 'Grace I.', role: 'Graphic Designer', color: '#7ee8fa' },
]

export function TeamIllustration() {
  return (
    <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-2xl">
      <defs>
        <linearGradient id="tmbg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="100%" stopColor="#0d2255" />
        </linearGradient>
      </defs>
      <rect width="500" height="380" rx="16" fill="url(#tmbg)" />
      <circle cx="500" cy="0" r="140" fill="#1e6fbc" opacity="0.04" />
      <circle cx="0" cy="380" r="110" fill="#00d4ff" opacity="0.03" />
      <text x="250" y="34" textAnchor="middle" fill="#48b9f7" fontSize="12" fontWeight="700" letterSpacing="2">OUR TEAM</text>
      <line x1="90" y1="44" x2="410" y2="44" stroke="#1e6fbc" strokeWidth="0.7" opacity="0.45" />
      {MEMBERS.map((m, i) => {
        const col = i % 3
        const row = Math.floor(i / 3)
        const x = 38 + col * 148
        const y = 62 + row * 150
        return (
          <g key={i}>
            <rect x={x} y={y} width="128" height="128" rx="12" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1" />
            <circle cx={x + 64} cy={y + 48} r="30" fill="#0a1628" stroke={m.color} strokeWidth="2" />
            <circle cx={x + 64} cy={y + 40} r="13" fill={m.color} opacity="0.6" />
            <path d={`M${x + 40} ${y + 78} Q${x + 64} ${y + 64} ${x + 88} ${y + 78} L${x + 88} ${y + 86} Q${x + 64} ${y + 74} ${x + 40} ${y + 86} Z`} fill={m.color} opacity="0.4" />
            <text x={x + 64} y={y + 100} textAnchor="middle" fill="#e8f4fd" fontSize="9" fontWeight="700">{m.name}</text>
            <rect x={x + 18} y={y + 106} width="92" height="4.5" rx="2" fill={m.color} opacity="0.28" />
            <text x={x + 64} y={y + 119} textAnchor="middle" fill="#48b9f7" fontSize="7.5" opacity="0.75">{m.role}</text>
          </g>
        )
      })}
      <text x="250" y="368" textAnchor="middle" fill="#1e6fbc" fontSize="8.5" opacity="0.5" letterSpacing="1">PASSIONATE PROFESSIONALS • REAL RESULTS</text>
    </svg>
  )
}
