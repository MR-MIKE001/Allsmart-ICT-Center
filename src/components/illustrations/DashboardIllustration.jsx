export function DashboardIllustration() {
  return (
    <svg viewBox="0 0 500 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-2xl">
      <defs>
        <linearGradient id="dbg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#060f24" />
          <stop offset="100%" stopColor="#0a1e42" />
        </linearGradient>
      </defs>
      <rect width="500" height="360" rx="16" fill="url(#dbg)" />
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={i} x1={i * 55} y1="0" x2={i * 55} y2="360" stroke="#1e6fbc" strokeWidth="0.3" strokeOpacity="0.2" />
      ))}
      {/* Top bar */}
      <rect x="18" y="18" width="464" height="38" rx="8" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1" />
      <circle cx="42" cy="37" r="7" fill="#00d4ff" opacity="0.8" />
      <circle cx="62" cy="37" r="7" fill="#48b9f7" opacity="0.5" />
      <circle cx="82" cy="37" r="7" fill="#1e6fbc" opacity="0.5" />
      <rect x="102" y="31" width="110" height="11" rx="4" fill="#1e6fbc" opacity="0.35" />
      <rect x="344" y="31" width="118" height="11" rx="4" fill="#1e6fbc" opacity="0.25" />
      {/* Left panel */}
      <rect x="18" y="70" width="142" height="214" rx="10" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1" />
      {[0, 1, 2, 3, 4, 5].map(i => (
        <g key={i}>
          <rect x="28" y={84 + i * 32} width="122" height="24" rx="6"
            fill={i === 2 ? '#1e6fbc' : '#0a1628'} stroke="#1e6fbc"
            strokeWidth={i === 2 ? 0 : 0.5} strokeOpacity="0.35" />
          <circle cx="44" cy={96 + i * 32} r="7" fill={i === 2 ? '#00d4ff' : '#1e6fbc'} opacity={i === 2 ? 0.9 : 0.4} />
          <rect x="58" y={92 + i * 32} width={[68, 52, 62, 48, 58, 42][i]} height="4" rx="2"
            fill={i === 2 ? '#48b9f7' : '#1e6fbc'} opacity={i === 2 ? 0.9 : 0.38} />
          <rect x="58" y={100 + i * 32} width={[48, 38, 48, 32, 42, 32][i]} height="3" rx="1.5"
            fill="#1e6fbc" opacity="0.25" />
        </g>
      ))}
      {/* Center top panel */}
      <rect x="174" y="70" width="196" height="100" rx="10" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1" />
      {[52, 76, 42, 92, 62, 82, 48].map((h, i) => (
        <rect key={i} x={186 + i * 24} y={162 - h * 0.72} width="16" height={h * 0.72} rx="3"
          fill={i === 3 || i === 5 ? '#00d4ff' : '#1e6fbc'} opacity={i === 3 || i === 5 ? 0.9 : 0.5} />
      ))}
      <text x="272" y="88" textAnchor="middle" fill="#48b9f7" fontSize="9" fontWeight="600">Performance</text>
      {/* Center bottom panel */}
      <rect x="174" y="184" width="196" height="100" rx="10" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1" />
      <circle cx="214" cy="234" r="32" fill="none" stroke="#0a1628" strokeWidth="16" />
      <circle cx="214" cy="234" r="32" fill="none" stroke="#00d4ff" strokeWidth="16" strokeDasharray="84 120" strokeDashoffset="0" transform="rotate(-90 214 234)" />
      <circle cx="214" cy="234" r="32" fill="none" stroke="#1e6fbc" strokeWidth="16" strokeDasharray="52 120" strokeDashoffset="-84" transform="rotate(-90 214 234)" />
      <circle cx="214" cy="234" r="20" fill="#0d2255" />
      <text x="214" y="238" textAnchor="middle" fill="#00d4ff" fontSize="10" fontWeight="bold">68%</text>
      {[['#00d4ff', 'Web'], ['#1e6fbc', 'AI'], ['#48b9f7', 'Sec']].map(([c, l], i) => (
        <g key={i}>
          <rect x="264" y={210 + i * 18} width="10" height="10" rx="2" fill={c} />
          <text x="279" y={220 + i * 18} fill="#48b9f7" fontSize="9">{l}</text>
        </g>
      ))}
      {/* Right panel */}
      <rect x="384" y="70" width="98" height="214" rx="10" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1" />
      {[58, 82, 38, 94, 68].map((h, i) => (
        <rect key={i} x={394 + i * 14} y={278 - h * 1.46} width="10" height={h * 1.46} rx="3"
          fill={i === 3 ? '#00d4ff' : '#1e6fbc'} opacity={i === 3 ? 1 : 0.5} />
      ))}
      <text x="433" y="88" textAnchor="middle" fill="#48b9f7" fontSize="8">Growth</text>
      {/* Bottom cards */}
      {[0, 1, 2].map(i => (
        <g key={i}>
          <rect x={18 + i * 162} y="296" width="148" height="46" rx="8" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1" />
          <circle cx={44 + i * 162} cy="319" r="11" fill="#1e6fbc" opacity="0.35" />
          <rect x={62 + i * 162} y="313" width="88" height="4.5" rx="2.5" fill="#48b9f7" opacity="0.45" />
          <rect x={62 + i * 162} y="322" width="68" height="3.5" rx="2" fill="#1e6fbc" opacity="0.28" />
        </g>
      ))}
      {/* Corner dots */}
      {[[482, 18], [490, 345], [8, 345], [8, 68]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#00d4ff" opacity="0.55">
          <animate attributeName="opacity" values="0.55;1;0.55" dur={`${1 + i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  )
}
