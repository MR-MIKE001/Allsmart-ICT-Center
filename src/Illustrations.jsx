// All SVG illustrations generated for Allsmart Tech Hub
// Color palette: Navy #0a1628, Blue #1e6fbc, Sky #48b9f7, Cyan #00d4ff

export function HeroIllustration() {
  return (
    <svg viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      <defs>
        <linearGradient id="hbg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a1e42"/>
          <stop offset="100%" stopColor="#0d2d6b"/>
        </linearGradient>
        <linearGradient id="hscreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0d2d6b"/>
          <stop offset="100%" stopColor="#06112a"/>
        </linearGradient>
        <linearGradient id="hglow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#1e6fbc" stopOpacity="0"/>
        </linearGradient>
        <filter id="hblur"><feGaussianBlur stdDeviation="8"/></filter>
        <filter id="hglow2"><feGaussianBlur stdDeviation="3"/></filter>
      </defs>

      {/* Background */}
      <rect width="520" height="420" rx="20" fill="url(#hbg)"/>

      {/* Grid pattern */}
      {Array.from({length:12}).map((_,i)=>(
        <line key={`hv${i}`} x1={i*47} y1="0" x2={i*47} y2="420" stroke="#1e6fbc" strokeWidth="0.4" strokeOpacity="0.3"/>
      ))}
      {Array.from({length:10}).map((_,i)=>(
        <line key={`hh${i}`} x1="0" y1={i*46} x2="520" y2={i*46} stroke="#1e6fbc" strokeWidth="0.4" strokeOpacity="0.3"/>
      ))}

      {/* Glow blobs */}
      <circle cx="380" cy="120" r="100" fill="#1e6fbc" opacity="0.12" filter="url(#hblur)"/>
      <circle cx="140" cy="300" r="80" fill="#00d4ff" opacity="0.08" filter="url(#hblur)"/>

      {/* Main laptop */}
      <rect x="110" y="90" width="300" height="190" rx="12" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1.5"/>
      <rect x="122" y="102" width="276" height="162" rx="6" fill="url(#hscreen)"/>

      {/* Screen content - code lines */}
      {[0,1,2,3,4,5,6,7].map((i)=>(
        <rect key={i} x={132+((i%2)*10)} y={112+(i*18)} width={[120,90,110,70,130,80,100,95][i]} height="6" rx="3"
          fill={i===0?"#00d4ff":i===2?"#48b9f7":i===4?"#7ee8fa":"#1e6fbc"}
          opacity={i===0?0.9:i===2?0.7:0.45}
        />
      ))}

      {/* Chart bars on screen */}
      {[40,65,45,80,55,90,70].map((h,i)=>(
        <rect key={i} x={258+(i*15)} y={218-h*0.6} width="10" height={h*0.6} rx="3"
          fill={i===5?"#00d4ff":"#1e6fbc"}
          opacity={i===5?1:0.7}
        />
      ))}

      {/* Laptop base */}
      <path d="M80 282 L440 282 L420 300 L100 300 Z" fill="#0a1e42" stroke="#1e6fbc" strokeWidth="1"/>
      <rect x="230" y="278" width="60" height="4" rx="2" fill="#1e6fbc" opacity="0.5"/>

      {/* Floating cards */}
      <rect x="30" y="130" width="100" height="70" rx="10" fill="#0d2255" stroke="#00d4ff" strokeWidth="1" opacity="0.9"/>
      <circle cx="55" cy="155" r="12" fill="#00d4ff" opacity="0.3"/>
      <path d="M51 151 L59 151 L59 153 L57 153 L57 159 L53 159 L53 153 L51 153 Z" fill="#00d4ff"/>
      <rect x="43" y="168" width="74" height="5" rx="2.5" fill="#1e6fbc" opacity="0.5"/>
      <rect x="50" y="178" width="60" height="4" rx="2" fill="#1e6fbc" opacity="0.3"/>

      <rect x="390" y="110" width="100" height="70" rx="10" fill="#0d2255" stroke="#48b9f7" strokeWidth="1" opacity="0.9"/>
      <text x="440" y="145" textAnchor="middle" fill="#48b9f7" fontSize="18" fontWeight="bold">96%</text>
      <rect x="403" y="155" width="74" height="5" rx="2.5" fill="#1e6fbc" opacity="0.5"/>
      <rect x="410" y="165" width="60" height="4" rx="2" fill="#1e6fbc" opacity="0.3"/>

      {/* Bottom pill stats */}
      {[["500+","Clients"],["10+","Services"],["ABIA","Nigeria"]].map(([n,l],i)=>(
        <g key={i} transform={`translate(${95+i*120},320)`}>
          <rect x="0" y="0" width="100" height="40" rx="8" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1"/>
          <text x="50" y="16" textAnchor="middle" fill="#00d4ff" fontSize="12" fontWeight="bold">{n}</text>
          <text x="50" y="30" textAnchor="middle" fill="#48b9f7" fontSize="9" opacity="0.7">{l}</text>
        </g>
      ))}

      {/* Circuit dots */}
      {[[60,80],[460,200],[50,360],[480,350],[260,30]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="4" fill="#00d4ff" opacity="0.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur={`${1.5+i*0.4}s`} repeatCount="indefinite"/>
        </circle>
      ))}

      {/* Connecting lines between dots */}
      <line x1="60" y1="80" x2="110" y2="90" stroke="#00d4ff" strokeWidth="0.7" opacity="0.3"/>
      <line x1="460" y1="200" x2="410" y2="180" stroke="#48b9f7" strokeWidth="0.7" opacity="0.3"/>
    </svg>
  );
}

export function AboutIllustration() {
  return (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      <defs>
        <linearGradient id="abg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a1e42"/>
          <stop offset="100%" stopColor="#0f2d5e"/>
        </linearGradient>
        <filter id="ablur"><feGaussianBlur stdDeviation="15"/></filter>
      </defs>

      <rect width="500" height="400" rx="20" fill="url(#abg)"/>

      {/* Background glow */}
      <circle cx="250" cy="200" r="150" fill="#1e6fbc" opacity="0.08" filter="url(#ablur)"/>

      {/* Central hub circle */}
      <circle cx="250" cy="200" r="65" fill="#0d2255" stroke="#1e6fbc" strokeWidth="2"/>
      <circle cx="250" cy="200" r="55" fill="none" stroke="#00d4ff" strokeWidth="1" strokeDasharray="6 4" opacity="0.5"/>

      {/* Logo letters */}
      <text x="250" y="196" textAnchor="middle" fill="#48b9f7" fontSize="22" fontWeight="bold">AS</text>
      <text x="250" y="215" textAnchor="middle" fill="#00d4ff" fontSize="9" opacity="0.8">TECH HUB</text>

      {/* Orbit dots */}
      {["Web Dev","AI & ML","Design","Security","Training","Solar"].map((label,i)=>{
        const angle = (i/6)*Math.PI*2 - Math.PI/2;
        const r = 150;
        const cx = 250 + Math.cos(angle)*r;
        const cy = 200 + Math.sin(angle)*r;
        return (
          <g key={i}>
            <line x1="250" y1="200" x2={cx} y2={cy} stroke="#1e6fbc" strokeWidth="0.8" opacity="0.3" strokeDasharray="4 4"/>
            <circle cx={cx} cy={cy} r="30" fill="#0d2255" stroke="#48b9f7" strokeWidth="1.5"/>
            <text x={cx} y={cy+4} textAnchor="middle" fill="#48b9f7" fontSize="7.5" fontWeight="600">{label}</text>
          </g>
        );
      })}

      {/* Ring */}
      <circle cx="250" cy="200" r="115" fill="none" stroke="#1e6fbc" strokeWidth="0.8" opacity="0.3"/>

      {/* Pulse rings */}
      <circle cx="250" cy="200" r="80" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.2">
        <animate attributeName="r" values="80;90;80" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" repeatCount="indefinite"/>
      </circle>

      {/* Corner labels */}
      <text x="30" y="30" fill="#1e6fbc" fontSize="10" opacity="0.6" fontFamily="monospace">ALLSMART TECH HUB</text>
      <text x="30" y="385" fill="#1e6fbc" fontSize="10" opacity="0.6" fontFamily="monospace">ABIA, NIGERIA</text>
    </svg>
  );
}

export function ServicesIllustration() {
  return (
    <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      <defs>
        <linearGradient id="sbg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#060f24"/>
          <stop offset="100%" stopColor="#0a1e42"/>
        </linearGradient>
      </defs>
      <rect width="500" height="380" rx="16" fill="url(#sbg)"/>

      {/* Grid */}
      {Array.from({length:10}).map((_,i)=>(
        <line key={i} x1={i*55} y1="0" x2={i*55} y2="380" stroke="#1e6fbc" strokeWidth="0.3" strokeOpacity="0.25"/>
      ))}

      {/* Isometric-style tech dashboard */}
      {/* Top bar */}
      <rect x="20" y="20" width="460" height="40" rx="8" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1"/>
      <circle cx="45" cy="40" r="7" fill="#00d4ff" opacity="0.8"/>
      <circle cx="65" cy="40" r="7" fill="#48b9f7" opacity="0.5"/>
      <circle cx="85" cy="40" r="7" fill="#1e6fbc" opacity="0.5"/>
      <rect x="105" y="34" width="120" height="12" rx="4" fill="#1e6fbc" opacity="0.4"/>
      <rect x="350" y="34" width="110" height="12" rx="4" fill="#1e6fbc" opacity="0.3"/>

      {/* Main content area */}
      {/* Left panel */}
      <rect x="20" y="74" width="145" height="220" rx="10" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1"/>
      {[0,1,2,3,4,5].map((i)=>(
        <g key={i}>
          <rect x="30" y={88+i*33} width="125" height="26" rx="6" fill={i===2?"#1e6fbc":"#0a1628"} stroke="#1e6fbc" strokeWidth={i===2?0:0.5} strokeOpacity="0.4"/>
          <circle cx="46" cy={101+i*33} r="7" fill={i===2?"#00d4ff":"#1e6fbc"} opacity={i===2?0.9:0.4}/>
          <rect x="60" y={97+i*33} width={[70,55,65,50,60,45][i]} height="4" rx="2" fill={i===2?"#48b9f7":"#1e6fbc"} opacity={i===2?0.9:0.4}/>
          <rect x="60" y={104+i*33} width={[50,40,50,35,45,35][i]} height="3" rx="1.5" fill="#1e6fbc" opacity="0.3"/>
        </g>
      ))}

      {/* Center panel */}
      <rect x="178" y="74" width="200" height="105" rx="10" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1"/>
      {/* Bar chart */}
      {[55,80,45,95,65,85,50].map((h,i)=>(
        <rect key={i} x={190+i*25} y={168-h*0.75} width="18" height={h*0.75} rx="4"
          fill={i===3||i===5?"#00d4ff":"#1e6fbc"}
          opacity={i===3||i===5?0.9:0.5}
        />
      ))}
      <text x="278" y="92" textAnchor="middle" fill="#48b9f7" fontSize="10" fontWeight="600">Performance</text>

      <rect x="178" y="190" width="200" height="104" rx="10" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1"/>
      {/* Donut chart */}
      <circle cx="218" cy="242" r="35" fill="none" stroke="#0a1628" strokeWidth="18"/>
      <circle cx="218" cy="242" r="35" fill="none" stroke="#00d4ff" strokeWidth="18" strokeDasharray="88 132" strokeDashoffset="0" transform="rotate(-90 218 242)"/>
      <circle cx="218" cy="242" r="35" fill="none" stroke="#1e6fbc" strokeWidth="18" strokeDasharray="55 132" strokeDashoffset="-88" transform="rotate(-90 218 242)"/>
      <circle cx="218" cy="242" r="35" fill="none" stroke="#48b9f7" strokeWidth="18" strokeDasharray="44 132" strokeDashoffset="-143" transform="rotate(-90 218 242)"/>
      <circle cx="218" cy="242" r="22" fill="#0d2255"/>
      <text x="218" y="247" textAnchor="middle" fill="#00d4ff" fontSize="11" fontWeight="bold">67%</text>
      {/* Legend */}
      {[["#00d4ff","Web"],["#1e6fbc","AI"],["#48b9f7","Sec"]].map(([c,l],i)=>(
        <g key={i}>
          <rect x="270" y={215+i*18} width="10" height="10" rx="2" fill={c}/>
          <text x="285" y={224+i*18} fill="#48b9f7" fontSize="9">{l}</text>
        </g>
      ))}

      {/* Right panel */}
      <rect x="392" y="74" width="88" height="220" rx="10" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1"/>
      {/* Vertical bars */}
      {[60,85,40,95,70].map((h,i)=>(
        <rect key={i} x={400+i*14} y={284-h*1.5} width="10" height={h*1.5} rx="3"
          fill={i===3?"#00d4ff":"#1e6fbc"} opacity={i===3?1:0.5}
        />
      ))}
      <text x="436" y="92" textAnchor="middle" fill="#48b9f7" fontSize="8">Growth</text>

      {/* Bottom row */}
      {[0,1,2].map((i)=>(
        <g key={i}>
          <rect x={20+i*164} y="308" width="150" height="50" rx="8" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1"/>
          <circle cx={48+i*164} cy="333" r="12" fill="#1e6fbc" opacity="0.4"/>
          <rect x={65+i*164} y="327" width="90" height="5" rx="2.5" fill="#48b9f7" opacity="0.5"/>
          <rect x={65+i*164} y="337" width="70" height="4" rx="2" fill="#1e6fbc" opacity="0.3"/>
        </g>
      ))}

      {/* Sparkle dots */}
      {[[480,20],[490,360],[10,350],[10,70]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="3" fill="#00d4ff" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur={`${1+i*0.5}s`} repeatCount="indefinite"/>
        </circle>
      ))}
    </svg>
  );
}

export function TrainingIllustration() {
  return (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      <defs>
        <linearGradient id="tbg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a1628"/>
          <stop offset="100%" stopColor="#0f2a52"/>
        </linearGradient>
        <filter id="tglow"><feGaussianBlur stdDeviation="6"/></filter>
      </defs>
      <rect width="500" height="400" rx="16" fill="url(#tbg)"/>

      {/* Glow */}
      <circle cx="250" cy="200" r="120" fill="#00d4ff" opacity="0.04" filter="url(#tglow)"/>

      {/* Classroom / Learning environment */}
      {/* Big monitor / whiteboard */}
      <rect x="60" y="40" width="380" height="220" rx="14" fill="#0d2255" stroke="#1e6fbc" strokeWidth="2"/>
      <rect x="74" y="54" width="352" height="192" rx="8" fill="#060f24"/>

      {/* Code on screen */}
      <text x="90" y="80" fill="#00d4ff" fontSize="11" fontFamily="monospace">function buildFuture() {'{'}</text>
      <text x="100" y="98" fill="#48b9f7" fontSize="11" fontFamily="monospace">  const skills = ['Web','AI','Data'];</text>
      <text x="100" y="116" fill="#7ee8fa" fontSize="11" fontFamily="monospace">  skills.forEach(skill => {'{'}</text>
      <text x="110" y="134" fill="#48b9f7" fontSize="11" fontFamily="monospace">    learn(skill); // 🚀</text>
      <text x="110" y="152" fill="#48b9f7" fontSize="11" fontFamily="monospace">    build(skill);</text>
      <text x="100" y="170" fill="#7ee8fa" fontSize="11" fontFamily="monospace">  {'}'});</text>
      <text x="100" y="188" fill="#1e6fbc" fontSize="11" fontFamily="monospace">  return success; ✓</text>
      <text x="90" y="206" fill="#00d4ff" fontSize="11" fontFamily="monospace">{'}'}</text>
      {/* Cursor blink */}
      <rect x="109" y="209" width="8" height="12" rx="1" fill="#00d4ff" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0;0.9" dur="1.2s" repeatCount="indefinite"/>
      </rect>

      {/* Monitor stand */}
      <rect x="230" y="262" width="40" height="20" rx="4" fill="#0a1628" stroke="#1e6fbc" strokeWidth="1"/>
      <rect x="200" y="280" width="100" height="8" rx="4" fill="#0a1628" stroke="#1e6fbc" strokeWidth="1"/>

      {/* Student laptops */}
      {[0,1,2,3].map((i)=>(
        <g key={i} transform={`translate(${30+i*115},320)`}>
          <rect x="0" y="0" width="90" height="55" rx="6" fill="#0d2255" stroke="#1e6fbc" strokeWidth="0.8"/>
          <rect x="7" y="7" width="76" height="38" rx="3" fill="#060f24"/>
          {/* mini bars */}
          {[0,1,2,3,4].map((j)=>(
            <rect key={j} x={11+j*13} y={38-[15,22,12,28,18][j]} width="9" height={[15,22,12,28,18][j]} rx="2"
              fill={j===3?"#00d4ff":"#1e6fbc"} opacity={j===3?0.9:0.5}/>
          ))}
          <rect x="0" y="56" width="90" height="6" rx="3" fill="#0a1628" stroke="#1e6fbc" strokeWidth="0.5"/>
          <rect x="30" y="53" width="30" height="4" rx="2" fill="#1e6fbc" opacity="0.3"/>
          {/* Status dot */}
          <circle cx={i===1||i===3?78:78} cy="12" r="4" fill={i===1?"#00d4ff":i===3?"#48b9f7":"#1e6fbc"} opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur={`${1+i*0.3}s`} repeatCount="indefinite"/>
          </circle>
        </g>
      ))}

      {/* Progress bar bottom */}
      <rect x="60" y="376" width="380" height="14" rx="7" fill="#0d2255" stroke="#1e6fbc" strokeWidth="0.8"/>
      <rect x="60" y="376" width="265" height="14" rx="7" fill="url(#tbg)" stroke="none"/>
      <rect x="60" y="376" width="265" height="14" rx="7">
        <animate attributeName="width" values="200;265;200" dur="4s" repeatCount="indefinite"/>
      </rect>
      <rect x="60" y="376" width="265" height="14" rx="7" fill="#00d4ff" opacity="0.6"/>
      <text x="335" y="387" fill="#48b9f7" fontSize="9" fontWeight="bold">70% Complete</text>
    </svg>
  );
}

export function ContactIllustration() {
  return (
    <svg viewBox="0 0 440 320" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      <defs>
        <linearGradient id="cbg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#060f24"/>
          <stop offset="100%" stopColor="#0a1e42"/>
        </linearGradient>
        <filter id="cblur"><feGaussianBlur stdDeviation="10"/></filter>
      </defs>
      <rect width="440" height="320" rx="16" fill="url(#cbg)"/>

      {/* Glow */}
      <circle cx="220" cy="160" r="100" fill="#1e6fbc" opacity="0.1" filter="url(#cblur)"/>

      {/* Map-like grid */}
      {Array.from({length:9}).map((_,i)=>(
        <line key={`v${i}`} x1={i*55} y1="0" x2={i*55} y2="320" stroke="#1e6fbc" strokeWidth="0.3" opacity="0.2"/>
      ))}
      {Array.from({length:7}).map((_,i)=>(
        <line key={`h${i}`} x1="0" y1={i*53} x2="440" y2={i*53} stroke="#1e6fbc" strokeWidth="0.3" opacity="0.2"/>
      ))}

      {/* Nigeria map outline (simplified) */}
      <path d="M180 80 Q200 70 240 75 Q270 78 290 90 Q310 105 315 130 Q320 155 305 175 Q290 195 270 205 Q250 215 230 210 Q210 205 195 190 Q175 175 170 155 Q163 130 170 110 Q175 95 180 80 Z"
        fill="#1e6fbc" opacity="0.15" stroke="#1e6fbc" strokeWidth="1.5" strokeOpacity="0.5"/>

      {/* Abia pin */}
      <circle cx="215" cy="170" r="14" fill="#00d4ff" opacity="0.25">
        <animate attributeName="r" values="14;22;14" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.25;0.05;0.25" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="215" cy="170" r="8" fill="#00d4ff" opacity="0.6"/>
      <circle cx="215" cy="170" r="4" fill="#fff"/>
      {/* Pin top */}
      <path d="M215 162 Q220 156 215 152 Q210 156 215 162" fill="#00d4ff"/>

      {/* Label */}
      <rect x="195" y="142" width="70" height="22" rx="6" fill="#0d2255" stroke="#00d4ff" strokeWidth="1"/>
      <text x="230" y="157" textAnchor="middle" fill="#00d4ff" fontSize="9" fontWeight="bold">ABIA, NG</text>

      {/* Contact cards */}
      <rect x="20" y="30" width="110" height="60" rx="10" fill="#0d2255" stroke="#48b9f7" strokeWidth="1"/>
      <text x="75" y="52" textAnchor="middle" fill="#48b9f7" fontSize="8" fontWeight="600">📧 Email</text>
      <rect x="35" y="58" width="80" height="5" rx="2.5" fill="#1e6fbc" opacity="0.5"/>
      <rect x="40" y="67" width="70" height="4" rx="2" fill="#1e6fbc" opacity="0.3"/>

      <rect x="310" y="30" width="110" height="60" rx="10" fill="#0d2255" stroke="#48b9f7" strokeWidth="1"/>
      <text x="365" y="52" textAnchor="middle" fill="#48b9f7" fontSize="8" fontWeight="600">📞 Phone</text>
      <rect x="325" y="58" width="80" height="5" rx="2.5" fill="#1e6fbc" opacity="0.5"/>
      <rect x="330" y="67" width="70" height="4" rx="2" fill="#1e6fbc" opacity="0.3"/>

      <rect x="20" y="220" width="110" height="60" rx="10" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1"/>
      <text x="75" y="242" textAnchor="middle" fill="#48b9f7" fontSize="8" fontWeight="600">🕒 Hours</text>
      <text x="75" y="256" textAnchor="middle" fill="#1e6fbc" fontSize="7.5">Mon–Fri: 8am–6pm</text>
      <text x="75" y="268" textAnchor="middle" fill="#1e6fbc" fontSize="7.5">Sat: 9am–4pm</text>

      <rect x="310" y="220" width="110" height="60" rx="10" fill="#0d2255" stroke="#1e6fbc" strokeWidth="1"/>
      <text x="365" y="242" textAnchor="middle" fill="#48b9f7" fontSize="8" fontWeight="600">📍 Address</text>
      <text x="365" y="257" textAnchor="middle" fill="#1e6fbc" fontSize="7.5">ABIA, Nigeria</text>

      {/* Connection lines */}
      <line x1="130" y1="60" x2="195" y2="165" stroke="#48b9f7" strokeWidth="0.8" strokeDasharray="5 4" opacity="0.4"/>
      <line x1="310" y1="60" x2="235" y2="165" stroke="#48b9f7" strokeWidth="0.8" strokeDasharray="5 4" opacity="0.4"/>
      <line x1="130" y1="250" x2="195" y2="175" stroke="#1e6fbc" strokeWidth="0.8" strokeDasharray="5 4" opacity="0.4"/>
      <line x1="310" y1="250" x2="235" y2="175" stroke="#1e6fbc" strokeWidth="0.8" strokeDasharray="5 4" opacity="0.4"/>
    </svg>
  );
}

export function TeamIllustration() {
  return (
    <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      <defs>
        <linearGradient id="tmbg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a1628"/>
          <stop offset="100%" stopColor="#0d2255"/>
        </linearGradient>
        <linearGradient id="tmcard" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0f2d5e"/>
          <stop offset="100%" stopColor="#0a1e42"/>
        </linearGradient>
      </defs>
      <rect width="500" height="380" rx="16" fill="url(#tmbg)"/>

      {/* Background pattern */}
      <circle cx="500" cy="0" r="150" fill="#1e6fbc" opacity="0.05"/>
      <circle cx="0" cy="380" r="120" fill="#00d4ff" opacity="0.04"/>

      {/* Header */}
      <text x="250" y="35" textAnchor="middle" fill="#48b9f7" fontSize="13" fontWeight="700" letterSpacing="2">OUR TEAM</text>
      <line x1="100" y1="45" x2="400" y2="45" stroke="#1e6fbc" strokeWidth="0.8" opacity="0.5"/>

      {/* Team cards - row 1 */}
      {[
        {x:40,y:65,name:"Emmanuel A.",role:"CEO & Founder",color:"#00d4ff"},
        {x:195,y:65,name:"Sarah O.",role:"Lead Developer",color:"#48b9f7"},
        {x:350,y:65,name:"David K.",role:"AI Engineer",color:"#7ee8fa"},
      ].map((m,i)=>(
        <g key={i}>
          <rect x={m.x} y={m.y} width="130" height="130" rx="12" fill="url(#tmcard)" stroke="#1e6fbc" strokeWidth="1"/>
          {/* Avatar circle */}
          <circle cx={m.x+65} cy={m.y+50} r="32" fill="#0a1628" stroke={m.color} strokeWidth="2"/>
          {/* Head */}
          <circle cx={m.x+65} cy={m.y+42} r="14" fill={m.color} opacity="0.6"/>
          {/* Body */}
          <path d={`M${m.x+40} ${m.y+82} Q${m.x+65} ${m.y+68} ${m.x+90} ${m.y+82} L${m.x+90} ${m.y+90} Q${m.x+65} ${m.y+78} ${m.x+40} ${m.y+90} Z`} fill={m.color} opacity="0.4"/>
          {/* Name */}
          <text x={m.x+65} y={m.y+105} textAnchor="middle" fill="#e8f4fd" fontSize="9.5" fontWeight="700">{m.name}</text>
          <rect x={m.x+20} y={m.y+111} width="90" height="5" rx="2.5" fill={m.color} opacity="0.3"/>
          <text x={m.x+65} y={m.y+123} textAnchor="middle" fill="#48b9f7" fontSize="8" opacity="0.8">{m.role}</text>
        </g>
      ))}

      {/* Row 2 */}
      {[
        {x:40,y:215,name:"Amaka C.",role:"Digital Marketer",color:"#48b9f7"},
        {x:195,y:215,name:"Peter M.",role:"Cybersecurity",color:"#00d4ff"},
        {x:350,y:215,name:"Grace I.",role:"Graphic Designer",color:"#7ee8fa"},
      ].map((m,i)=>(
        <g key={i}>
          <rect x={m.x} y={m.y} width="130" height="130" rx="12" fill="url(#tmcard)" stroke="#1e6fbc" strokeWidth="1"/>
          <circle cx={m.x+65} cy={m.y+50} r="32" fill="#0a1628" stroke={m.color} strokeWidth="2"/>
          <circle cx={m.x+65} cy={m.y+42} r="14" fill={m.color} opacity="0.6"/>
          <path d={`M${m.x+40} ${m.y+82} Q${m.x+65} ${m.y+68} ${m.x+90} ${m.y+82} L${m.x+90} ${m.y+90} Q${m.x+65} ${m.y+78} ${m.x+40} ${m.y+90} Z`} fill={m.color} opacity="0.4"/>
          <text x={m.x+65} y={m.y+105} textAnchor="middle" fill="#e8f4fd" fontSize="9.5" fontWeight="700">{m.name}</text>
          <rect x={m.x+20} y={m.y+111} width="90" height="5" rx="2.5" fill={m.color} opacity="0.3"/>
          <text x={m.x+65} y={m.y+123} textAnchor="middle" fill="#48b9f7" fontSize="8" opacity="0.8">{m.role}</text>
        </g>
      ))}

      {/* Bottom tagline */}
      <text x="250" y="368" textAnchor="middle" fill="#1e6fbc" fontSize="9" opacity="0.6" letterSpacing="1">PASSIONATE PROFESSIONALS • REAL RESULTS</text>
    </svg>
  );
}

export function WhyChooseIllustration() {
  return (
    <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
      <defs>
        <linearGradient id="wbg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#050d1e"/>
          <stop offset="100%" stopColor="#0a1e42"/>
        </linearGradient>
      </defs>
      <rect width="480" height="360" rx="16" fill="url(#wbg)"/>

      {/* Circuit board aesthetic */}
      {/* Horizontal traces */}
      {[60,120,180,240,300].map((y,i)=>(
        <line key={i} x1="20" y1={y} x2="460" y2={y} stroke="#1e6fbc" strokeWidth="0.5" opacity="0.2"/>
      ))}
      {[60,140,220,300,380].map((x,i)=>(
        <line key={i} x1={x} y1="20" x2={x} y2="340" stroke="#1e6fbc" strokeWidth="0.5" opacity="0.2"/>
      ))}

      {/* Central award badge */}
      <polygon points="240,40 260,70 295,70 268,90 278,125 240,105 202,125 212,90 185,70 220,70" fill="#0d2255" stroke="#00d4ff" strokeWidth="1.5"/>
      <text x="240" y="95" textAnchor="middle" fill="#00d4ff" fontSize="22">✓</text>

      {/* 6 feature nodes arranged around */}
      {[
        ["ICT\nConsultancy","#00d4ff",80,160],
        ["Digital\nTransform","#48b9f7",80,280],
        ["Tech\nTraining","#7ee8fa",240,320],
        ["Expert\nSupport","#48b9f7",400,280],
        ["Modern\nTech","#00d4ff",400,160],
        ["Affordable\nServices","#7ee8fa",240,60],
      ].map(([label,c,x,y],i)=>{
        const lines = label.split('\n');
        return (
          <g key={i}>
            <line x1="240" y1="85" x2={x} y2={y} stroke={c} strokeWidth="0.7" strokeDasharray="5 3" opacity="0.35"/>
            <circle cx={x} cy={y} r="38" fill="#0d2255" stroke={c} strokeWidth="1.5"/>
            <circle cx={x} cy={y} r="30" fill="none" stroke={c} strokeWidth="0.5" opacity="0.4"/>
            {lines.map((l,j)=>(
              <text key={j} x={x} y={y - (lines.length-1)*7 + j*14 + 4} textAnchor="middle" fill={c} fontSize="9" fontWeight="700">{l}</text>
            ))}
          </g>
        );
      })}

      {/* Pulsing center */}
      <circle cx="240" cy="85" r="50" fill="none" stroke="#00d4ff" strokeWidth="0.8" opacity="0.2">
        <animate attributeName="r" values="50;65;50" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" repeatCount="indefinite"/>
      </circle>

      <text x="240" y="352" textAnchor="middle" fill="#1e6fbc" fontSize="9" opacity="0.6">ALLSMART TECH HUB — WHY CHOOSE US</text>
    </svg>
  );
}
