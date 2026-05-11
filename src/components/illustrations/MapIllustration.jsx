export function MapIllustration() {
  return (
    <svg viewBox="0 0 440 310" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-xl">
      <defs>
        <linearGradient id="mbg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#060f24" />
          <stop offset="100%" stopColor="#0a1e42" />
        </linearGradient>
        <filter id="mblur"><feGaussianBlur stdDeviation="9" /></filter>
      </defs>
      <rect width="440" height="310" rx="14" fill="url(#mbg)" />
      {/* Grid */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 55} y1="0" x2={i * 55} y2="310" stroke="#1e6fbc" strokeWidth="0.3" opacity="0.18" />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 52} x2="440" y2={i * 52} stroke="#1e6fbc" strokeWidth="0.3" opacity="0.18" />
      ))}
      <circle cx="220" cy="155" r="98" fill="#1e6fbc" opacity="0.08" filter="url(#mblur)" />
      {/* Nigeria simplified outline */}
      <path d="M178 76 Q198 66 238 71 Q268 74 288 86 Q308 101 313 126 Q318 151 303 171 Q288 191 268 201 Q248 211 228 206 Q208 201 193 186 Q173 171 168 151 Q161 126 168 106 Q173 91 178 76 Z"
        fill="#1e6fbc" opacity="0.13" stroke="#1e6fbc" strokeWidth="1.4" strokeOpacity="0.45" />
      {/* Abia pin pulse */}
      <circle cx="213" cy="166" r="13" fill="#00d4ff" opacity="0.22">
        <animate attributeName="r" values="13;22;13" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.22;0.04;0.22" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="213" cy="166" r="7" fill="#00d4ff" opacity="0.65" />
      <circle cx="213" cy="166" r="3.5" fill="#fff" />
      <path d="M213 158 Q218 152 213 148 Q208 152 213 158" fill="#00d4ff" />
      {/* Label */}
      <rect x="192" y="138" width="68" height="20" rx="6" fill="#0d2255" stroke="#00d4ff" strokeWidth="1" />
      <text x="226" y="153" textAnchor="middle" fill="#00d4ff" fontSize="8.5" fontWeight="bold">ABIA, NG</text>
      {/* Info cards */}
      <rect x="18" y="26" width="108" height="58" rx="9" fill="#0d2255" stroke="#48b9f7" strokeWidth="1" />
      <text x="72" y="48" textAnchor="middle" fill="#48b9f7" fontSize="7.5" fontWeight="600">📧 Email</text>
      <rect x="32" y="54" width="78" height="4.5" rx="2" fill="#1e6fbc" opacity="0.45" />
      <rect x="36" y="63" width="68" height="3.5" rx="2" fill="#1e6fbc" opacity="0.28" />

      <rect x="314" y="26" width="108" height="58" rx="9" fill="#0d2255" stroke="#48b9f7" strokeWidth="1" />
      <text x="368" y="48" textAnchor="middle" fill="#48b9f7" fontSize="7.5" fontWeight="600">📞 Phone</text>
      <rect x="328" y="54" width="78" height="4.5" rx="2" fill="#1e6fbc" opacity="0.45" />
      <rect x="332" y="63" width="68" height="3.5" rx="2" fill="#1e6fbc" opacity="0.28" />

      <rect x="18" y="218" width="108" height="58" rx="9" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1" />
      <text x="72" y="238" textAnchor="middle" fill="#48b9f7" fontSize="7.5" fontWeight="600">🕒 Hours</text>
      <text x="72" y="252" textAnchor="middle" fill="#1e6fbc" fontSize="7">Mon–Fri: 8am–6pm</text>
      <text x="72" y="264" textAnchor="middle" fill="#1e6fbc" fontSize="7">Sat: 9am–4pm</text>

      <rect x="314" y="218" width="108" height="58" rx="9" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1" />
      <text x="368" y="238" textAnchor="middle" fill="#48b9f7" fontSize="7.5" fontWeight="600">📍 Address</text>
      <text x="368" y="253" textAnchor="middle" fill="#1e6fbc" fontSize="7">ABIA, Nigeria</text>

      {/* Connection lines */}
      <line x1="126" y1="55" x2="192" y2="160" stroke="#48b9f7" strokeWidth="0.7" strokeDasharray="5 4" opacity="0.35" />
      <line x1="314" y1="55" x2="234" y2="160" stroke="#48b9f7" strokeWidth="0.7" strokeDasharray="5 4" opacity="0.35" />
      <line x1="126" y1="247" x2="192" y2="172" stroke="#1e6fbc" strokeWidth="0.7" strokeDasharray="5 4" opacity="0.35" />
      <line x1="314" y1="247" x2="234" y2="172" stroke="#1e6fbc" strokeWidth="0.7" strokeDasharray="5 4" opacity="0.35" />
    </svg>
  )
}
