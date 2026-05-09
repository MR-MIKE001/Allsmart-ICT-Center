export function TrainingIllustration() {
  return (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-2xl">
      <defs>
        <linearGradient id="trbg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="100%" stopColor="#0f2a52" />
        </linearGradient>
        <filter id="trglow"><feGaussianBlur stdDeviation="6" /></filter>
      </defs>
      <rect width="500" height="400" rx="16" fill="url(#trbg)" />
      <circle cx="250" cy="200" r="120" fill="#00d4ff" opacity="0.03" filter="url(#trglow)" />
      {/* Monitor */}
      <rect x="60" y="38" width="380" height="216" rx="12" fill="#0d2255" stroke="#1e6fbc" strokeWidth="2" />
      <rect x="72" y="50" width="356" height="190" rx="7" fill="#060f24" />
      {/* Code */}
      <text x="88" y="78" fill="#00d4ff" fontSize="10.5" fontFamily="monospace">function buildFuture() {'{'}</text>
      <text x="98" y="96" fill="#48b9f7" fontSize="10.5" fontFamily="monospace">  const skills = ['Web','AI','Data'];</text>
      <text x="98" y="114" fill="#7ee8fa" fontSize="10.5" fontFamily="monospace">  skills.forEach(skill =&gt; {'{'}</text>
      <text x="108" y="132" fill="#48b9f7" fontSize="10.5" fontFamily="monospace">    learn(skill); // 🚀</text>
      <text x="108" y="150" fill="#48b9f7" fontSize="10.5" fontFamily="monospace">    build(skill);</text>
      <text x="98" y="168" fill="#7ee8fa" fontSize="10.5" fontFamily="monospace">  {'}'});</text>
      <text x="98" y="186" fill="#1e6fbc" fontSize="10.5" fontFamily="monospace">  return success; ✓</text>
      <text x="88" y="204" fill="#00d4ff" fontSize="10.5" fontFamily="monospace">{'}'}</text>
      {/* Cursor */}
      <rect x="108" y="208" width="8" height="11" rx="1" fill="#00d4ff" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0;0.9" dur="1.2s" repeatCount="indefinite" />
      </rect>
      {/* Stand */}
      <rect x="228" y="256" width="44" height="18" rx="4" fill="#0a1628" stroke="#1e6fbc" strokeWidth="1" />
      <rect x="198" y="272" width="104" height="7" rx="3.5" fill="#0a1628" stroke="#1e6fbc" strokeWidth="1" />
      {/* Student laptops */}
      {[0, 1, 2, 3].map(i => (
        <g key={i} transform={`translate(${28 + i * 115}, 298)`}>
          <rect x="0" y="0" width="90" height="54" rx="6" fill="#0d2255" stroke="#1e6fbc" strokeWidth="0.8" />
          <rect x="7" y="7" width="76" height="36" rx="3" fill="#060f24" />
          {[0, 1, 2, 3, 4].map(j => (
            <rect key={j} x={11 + j * 13} y={37 - [14, 21, 11, 27, 17][j]} width="9" height={[14, 21, 11, 27, 17][j]} rx="2"
              fill={j === 3 ? '#00d4ff' : '#1e6fbc'} opacity={j === 3 ? 0.9 : 0.5} />
          ))}
          <rect x="0" y="55" width="90" height="6" rx="3" fill="#0a1628" stroke="#1e6fbc" strokeWidth="0.5" />
          <rect x="30" y="52" width="30" height="4" rx="2" fill="#1e6fbc" opacity="0.25" />
          <circle cx="77" cy="11" r="3.5" fill={i === 1 ? '#00d4ff' : i === 3 ? '#48b9f7' : '#1e6fbc'} opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur={`${1 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
      {/* Progress bar */}
      <rect x="60" y="370" width="380" height="12" rx="6" fill="#0d2255" stroke="#1e6fbc" strokeWidth="0.8" />
      <rect x="60" y="370" width="266" height="12" rx="6" fill="#00d4ff" opacity="0.55">
        <animate attributeName="width" values="200;266;200" dur="4s" repeatCount="indefinite" />
      </rect>
      <text x="338" y="380" fill="#48b9f7" fontSize="8.5" fontWeight="bold">70% Complete</text>
    </svg>
  )
}
