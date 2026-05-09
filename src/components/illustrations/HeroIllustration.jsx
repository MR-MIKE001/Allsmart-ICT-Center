export function HeroIllustration() {
  return (
    <svg viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="hbg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a1e42" />
          <stop offset="100%" stopColor="#0d2d6b" />
        </linearGradient>
        <linearGradient id="hscreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0d2d6b" />
          <stop offset="100%" stopColor="#06112a" />
        </linearGradient>
        <filter id="hblur"><feGaussianBlur stdDeviation="10" /></filter>
        <filter id="hglow2"><feGaussianBlur stdDeviation="3" /></filter>
      </defs>

      <rect width="520" height="420" rx="20" fill="url(#hbg)" />

      {/* Grid lines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 47} y1="0" x2={i * 47} y2="420" stroke="#1e6fbc" strokeWidth="0.4" strokeOpacity="0.25" />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 46} x2="520" y2={i * 46} stroke="#1e6fbc" strokeWidth="0.4" strokeOpacity="0.25" />
      ))}

      {/* Glow blobs */}
      <circle cx="370" cy="130" r="110" fill="#1e6fbc" opacity="0.1" filter="url(#hblur)" />
      <circle cx="150" cy="300" r="80" fill="#00d4ff" opacity="0.07" filter="url(#hblur)" />

      {/* Laptop body */}
      <rect x="110" y="90" width="300" height="185" rx="12" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1.5" />
      <rect x="122" y="102" width="276" height="157" rx="6" fill="url(#hscreen)" />

      {/* Code lines on screen */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
        <rect key={i} x={132 + (i % 2) * 10} y={112 + i * 17} width={[120, 90, 110, 70, 130, 80, 100, 95][i]} height="5" rx="2.5"
          fill={i === 0 ? '#00d4ff' : i === 2 ? '#48b9f7' : i === 4 ? '#7ee8fa' : '#1e6fbc'}
          opacity={i === 0 ? 0.9 : i === 2 ? 0.7 : 0.4}
        />
      ))}

      {/* Bar chart on screen */}
      {[38, 62, 42, 78, 52, 88, 68].map((h, i) => (
        <rect key={i} x={258 + i * 14} y={220 - h * 0.58} width="10" height={h * 0.58} rx="3"
          fill={i === 5 ? '#00d4ff' : '#1e6fbc'} opacity={i === 5 ? 1 : 0.6}
        />
      ))}

      {/* Laptop base */}
      <path d="M82 278 L438 278 L418 296 L102 296 Z" fill="#0a1e42" stroke="#1e6fbc" strokeWidth="1" />
      <rect x="232" y="274" width="56" height="4" rx="2" fill="#1e6fbc" opacity="0.45" />

      {/* Left floating card */}
      <rect x="28" y="128" width="102" height="68" rx="10" fill="#0d2255" stroke="#00d4ff" strokeWidth="1" opacity="0.92" />
      <circle cx="52" cy="153" r="11" fill="#00d4ff" opacity="0.25" />
      <path d="M48 149 L56 149 L56 151 L54 151 L54 157 L50 157 L50 151 L48 151 Z" fill="#00d4ff" />
      <rect x="40" y="165" width="72" height="4" rx="2" fill="#1e6fbc" opacity="0.4" />
      <rect x="46" y="173" width="58" height="3" rx="1.5" fill="#1e6fbc" opacity="0.25" />

      {/* Right floating card */}
      <rect x="390" y="108" width="102" height="68" rx="10" fill="#0d2255" stroke="#48b9f7" strokeWidth="1" opacity="0.92" />
      <text x="441" y="143" textAnchor="middle" fill="#48b9f7" fontSize="17" fontWeight="bold">96%</text>
      <rect x="402" y="153" width="72" height="4" rx="2" fill="#1e6fbc" opacity="0.4" />
      <rect x="408" y="161" width="58" height="3" rx="1.5" fill="#1e6fbc" opacity="0.25" />

      {/* Bottom stat pills */}
      {[['500+', 'Clients'], ['10+', 'Services'], ['Lagos', 'Nigeria']].map(([n, l], i) => (
        <g key={i} transform={`translate(${96 + i * 116}, 316)`}>
          <rect x="0" y="0" width="96" height="38" rx="8" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1" />
          <text x="48" y="16" textAnchor="middle" fill="#00d4ff" fontSize="11" fontWeight="bold">{n}</text>
          <text x="48" y="29" textAnchor="middle" fill="#48b9f7" fontSize="8" opacity="0.7">{l}</text>
        </g>
      ))}

      {/* Animated pulse dots */}
      {[[58, 78], [462, 196], [48, 356], [482, 346], [260, 28]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#00d4ff" opacity="0.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <line x1="58" y1="78" x2="110" y2="90" stroke="#00d4ff" strokeWidth="0.7" opacity="0.3" />
      <line x1="462" y1="196" x2="412" y2="178" stroke="#48b9f7" strokeWidth="0.7" opacity="0.3" />
    </svg>
  )
}
