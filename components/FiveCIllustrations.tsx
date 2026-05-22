"use client";

/* ─────────────────────────────────────────────────────────────────────────────
 * Five cohesive SVG illustrations for the 5C strategy panels.
 * Style: thin line-art (~0.9px), soft radial glows, minimal geometry.
 * Each renders into a 96×96 square; scale via className / style as needed.
 * ───────────────────────────────────────────────────────────────────────────── */

const OR = "#F26522";   // brand orange
const BL = "#93C5FD";   // cool blue
const WH = "rgba(255,255,255,0.72)";
const DIM = "rgba(255,255,255,0.22)";

/* shared filter ids — unique per illustration to avoid collision */
const glow = (id: string) => (
  <filter id={id} x="-60%" y="-60%" width="220%" height="220%">
    <feGaussianBlur stdDeviation="2.4" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
);
const softGlow = (id: string) => (
  <filter id={id} x="-80%" y="-80%" width="260%" height="260%">
    <feGaussianBlur stdDeviation="4" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
);

/* ── 1. CURIOSITY ────────────────────────────────────────────────────────── */
export function CuriosityIllustration({ size = 96 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
      <defs>
        {glow("cur-glow")}
        {softGlow("cur-sg")}
        <radialGradient id="cur-iris" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={OR}  stopOpacity="0.9"/>
          <stop offset="60%"  stopColor={OR}  stopOpacity="0.3"/>
          <stop offset="100%" stopColor={OR}  stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="cur-lens" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={BL}  stopOpacity="0.55"/>
          <stop offset="100%" stopColor={BL}  stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Expanding cosmic rings */}
      {[38, 46, 54].map((r, i) => (
        <circle key={r} cx="48" cy="42" r={r}
          stroke={OR} strokeOpacity={0.08 - i * 0.02} strokeWidth="0.6" fill="none"/>
      ))}

      {/* Telescope barrel */}
      <rect x="18" y="50" width="42" height="9" rx="2"
        stroke={WH} strokeWidth="0.85" fill="rgba(255,255,255,0.04)"/>
      {/* Lens flare end */}
      <rect x="13" y="48" width="8" height="13" rx="1.5"
        stroke={WH} strokeWidth="0.75" fill="rgba(255,255,255,0.05)"/>
      {/* Eyepiece end */}
      <rect x="60" y="52" width="14" height="5" rx="1"
        stroke={WH} strokeWidth="0.75" fill="rgba(255,255,255,0.03)"/>
      {/* Tripod legs */}
      <line x1="30" y1="59" x2="22" y2="78" stroke={DIM} strokeWidth="0.7"/>
      <line x1="50" y1="59" x2="50" y2="78" stroke={DIM} strokeWidth="0.7"/>
      <line x1="40" y1="59" x2="60" y2="78" stroke={DIM} strokeWidth="0.5"/>
      {/* tripod foot */}
      <line x1="18" y1="78" x2="62" y2="78" stroke={DIM} strokeWidth="0.6"/>

      {/* Glowing eye / lens circle */}
      <circle cx="17" cy="54" r="9" fill="url(#cur-lens)" filter="url(#cur-sg)"/>
      <circle cx="17" cy="54" r="5.5"
        stroke={BL} strokeWidth="0.8" fill="rgba(147,197,253,0.07)"/>
      <circle cx="17" cy="54" r="2.2" fill={BL} opacity="0.75"/>

      {/* Star cluster above telescope */}
      {[[38,18],[55,12],[65,24],[72,14],[48,8]].map(([sx,sy],i) => (
        <g key={i} filter="url(#cur-glow)">
          <circle cx={sx} cy={sy} r={i%2===0?1.4:0.9}
            fill={i%2===0?OR:BL} opacity={0.8-i*0.1}/>
        </g>
      ))}

      {/* Direction ray from lens */}
      <line x1="9" y1="48" x2="3" y2="38"
        stroke={OR} strokeWidth="0.6" strokeOpacity="0.5" strokeDasharray="2 2"/>
      <line x1="9" y1="54" x2="2" y2="54"
        stroke={OR} strokeWidth="0.6" strokeOpacity="0.3" strokeDasharray="2 3"/>

      {/* Orbit arc */}
      <path d="M 30 20 Q 55 5 72 28"
        stroke={BL} strokeWidth="0.6" strokeOpacity="0.35" fill="none" strokeDasharray="3 3"/>
      <circle cx="72" cy="28" r="2" fill={BL} opacity="0.65" filter="url(#cur-glow)"/>
    </svg>
  );
}

/* ── 2. COURAGE ─────────────────────────────────────────────────────────── */
export function CourageIllustration({ size = 96 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
      <defs>
        {glow("cou-glow")}
        {softGlow("cou-sg")}
        <linearGradient id="cou-flame" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%"   stopColor={OR}  stopOpacity="1"/>
          <stop offset="60%"  stopColor="#FFCC44" stopOpacity="0.85"/>
          <stop offset="100%" stopColor="#fff"    stopOpacity="0.3"/>
        </linearGradient>
        <radialGradient id="cou-grd" cx="50%" cy="80%" r="60%">
          <stop offset="0%"   stopColor={OR}  stopOpacity="0.10"/>
          <stop offset="100%" stopColor={OR}  stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Ground glow */}
      <ellipse cx="48" cy="82" rx="22" ry="5" fill="url(#cou-grd)"/>

      {/* Mountain / cliff path */}
      <path d="M 8 82 L 38 46 L 52 60 L 70 30 L 88 82 Z"
        fill="rgba(255,255,255,0.03)" stroke={DIM} strokeWidth="0.7"/>
      {/* Ridge highlight */}
      <path d="M 38 46 L 70 30"
        stroke={WH} strokeWidth="0.8" strokeOpacity="0.35"/>

      {/* Figure body — minimal abstract human ascending */}
      {/* legs */}
      <line x1="68" y1="52" x2="63" y2="62" stroke={WH} strokeWidth="1.1" strokeLinecap="round"/>
      <line x1="63" y1="62" x2="58" y2="56" stroke={WH} strokeWidth="1.1" strokeLinecap="round"/>
      {/* torso */}
      <line x1="63" y1="62" x2="64" y2="50" stroke={WH} strokeWidth="1.1" strokeLinecap="round"/>
      {/* arm reaching up */}
      <line x1="64" y1="50" x2="69" y2="40" stroke={WH} strokeWidth="1.0" strokeLinecap="round"/>
      {/* other arm */}
      <line x1="64" y1="50" x2="57" y2="44" stroke={WH} strokeWidth="0.85" strokeLinecap="round"/>
      {/* head */}
      <circle cx="64.5" cy="46" r="3.8"
        stroke={WH} strokeWidth="0.85" fill="rgba(255,255,255,0.06)"/>

      {/* Flame held aloft */}
      <path d="M 69 36 Q 67 28 70 22 Q 73 28 76 26 Q 74 32 71 38 Z"
        fill="url(#cou-flame)" filter="url(#cou-sg)" opacity="0.9"/>
      {/* flame inner */}
      <path d="M 70 34 Q 69 29 71 25 Q 73 29 72 34 Z"
        fill="#FFE88A" opacity="0.6"/>

      {/* Wind lines — diagonal streaks */}
      {[[14,38,28,32],[10,48,22,44],[12,58,20,56]].map(([x1,y1,x2,y2],i)=>(
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={BL} strokeWidth="0.55" strokeOpacity={0.35-i*0.08} strokeDasharray="3 2"/>
      ))}

      {/* Ascending sparkles around flame */}
      {[[74,18],[78,24],[65,19],[71,14]].map(([sx,sy],i)=>(
        <circle key={i} cx={sx} cy={sy} r={i%2===0?1.0:0.7}
          fill={OR} opacity={0.7-i*0.12} filter="url(#cou-glow)"/>
      ))}

      {/* Step marks on cliff */}
      <line x1="52" y1="60" x2="58" y2="56" stroke={WH} strokeWidth="0.5" strokeOpacity="0.3"/>
      <line x1="56" y1="64" x2="62" y2="60" stroke={WH} strokeWidth="0.5" strokeOpacity="0.2"/>
    </svg>
  );
}

/* ── 3. CREATIVITY ──────────────────────────────────────────────────────── */
export function CreativityIllustration({ size = 96 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
      <defs>
        {glow("cre-glow")}
        {softGlow("cre-sg")}
        <radialGradient id="cre-burst" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={OR} stopOpacity="0.55"/>
          <stop offset="100%" stopColor={OR} stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="cre-edge1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor={OR} stopOpacity="0.6"/>
          <stop offset="100%" stopColor={BL} stopOpacity="0.6"/>
        </linearGradient>
        <linearGradient id="cre-edge2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor={BL} stopOpacity="0.5"/>
          <stop offset="100%" stopColor={OR} stopOpacity="0.4"/>
        </linearGradient>
      </defs>

      {/* Central burst glow */}
      <circle cx="48" cy="48" r="18" fill="url(#cre-burst)" filter="url(#cre-sg)"/>

      {/* Flowing curved connector paths */}
      <path d="M 20 26 Q 48 10 76 26" stroke="url(#cre-edge1)" strokeWidth="0.75" fill="none"/>
      <path d="M 14 56 Q 32 78 48 68" stroke="url(#cre-edge2)" strokeWidth="0.7" fill="none"/>
      <path d="M 48 68 Q 64 78 82 56" stroke="url(#cre-edge1)" strokeWidth="0.7" fill="none"/>
      <path d="M 20 26 Q 12 48 14 56" stroke="url(#cre-edge2)" strokeWidth="0.65" fill="none"/>
      <path d="M 76 26 Q 84 48 82 56" stroke="url(#cre-edge1)" strokeWidth="0.65" fill="none"/>

      {/* Inner cross-connections — dynamic web */}
      <path d="M 20 26 Q 34 48 48 48" stroke={OR} strokeWidth="0.6" strokeOpacity="0.4" fill="none"/>
      <path d="M 76 26 Q 62 48 48 48" stroke={BL} strokeWidth="0.6" strokeOpacity="0.4" fill="none"/>
      <path d="M 14 56 Q 32 52 48 48" stroke={BL} strokeWidth="0.55" strokeOpacity="0.35" fill="none"/>
      <path d="M 82 56 Q 64 52 48 48" stroke={OR} strokeWidth="0.55" strokeOpacity="0.35" fill="none"/>
      <path d="M 48 68 Q 48 58 48 48" stroke={WH} strokeWidth="0.55" strokeOpacity="0.3" fill="none"/>

      {/* Outer nodes */}
      {[
        [20,26,OR],[76,26,BL],[14,56,BL],[82,56,OR],[48,68,OR]
      ].map(([nx,ny,nc],i)=>(
        <g key={i} filter="url(#cre-glow)">
          <circle cx={nx as number} cy={ny as number} r="5.5"
            fill="rgba(8,18,38,0.85)" stroke={nc as string} strokeWidth="0.8"/>
          <circle cx={nx as number} cy={ny as number} r="2.2" fill={nc as string} opacity="0.8"/>
        </g>
      ))}

      {/* Central hub */}
      <circle cx="48" cy="48" r="8"
        fill="rgba(8,18,38,0.9)" stroke={OR} strokeWidth="0.9"/>
      <circle cx="48" cy="48" r="3.5" fill={OR} opacity="0.85" filter="url(#cre-glow)"/>

      {/* Sparks shooting outward */}
      {[[-40],[8],[130],[200],[290]].map(([deg],i)=>{
        const rad = (deg * Math.PI)/180;
        const x1 = 48 + 10*Math.cos(rad), y1 = 48 + 10*Math.sin(rad);
        const x2 = 48 + 20*Math.cos(rad), y2 = 48 + 20*Math.sin(rad);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={i%2===0?OR:BL} strokeWidth="0.5"
            strokeOpacity={0.55} strokeLinecap="round"/>
        );
      })}

      {/* Small floating particles */}
      {[[36,18,OR],[62,14,BL],[84,38,OR],[16,70,BL],[72,78,OR]].map(([px,py,pc],i)=>(
        <circle key={i} cx={px as number} cy={py as number} r="1.2"
          fill={pc as string} opacity={0.65} filter="url(#cre-glow)"/>
      ))}
    </svg>
  );
}

/* ── 4. COMMUNICATION ───────────────────────────────────────────────────── */
export function CommunicationIllustration({ size = 96 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
      <defs>
        {glow("com-glow")}
        {softGlow("com-sg")}
        <radialGradient id="com-wave" cx="30%" cy="65%" r="55%">
          <stop offset="0%"   stopColor={BL} stopOpacity="0.20"/>
          <stop offset="100%" stopColor={BL} stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="com-wave2" cx="70%" cy="40%" r="55%">
          <stop offset="0%"   stopColor={OR} stopOpacity="0.12"/>
          <stop offset="100%" stopColor={OR} stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Background wave fills */}
      <ellipse cx="28" cy="62" rx="28" ry="22" fill="url(#com-wave)"/>
      <ellipse cx="68" cy="38" rx="26" ry="20" fill="url(#com-wave2)"/>

      {/* Left figure — abstract person */}
      <circle cx="22" cy="30" r="6"
        stroke={BL} strokeWidth="0.85" fill="rgba(147,197,253,0.07)"/>
      <circle cx="22" cy="30" r="2.5" fill={BL} opacity="0.65"/>
      <line x1="22" y1="36" x2="22" y2="52" stroke={BL} strokeWidth="0.85" strokeLinecap="round"/>
      <line x1="22" y1="42" x2="16" y2="48" stroke={BL} strokeWidth="0.75" strokeLinecap="round"/>
      <line x1="22" y1="42" x2="28" y2="48" stroke={BL} strokeWidth="0.75" strokeLinecap="round"/>
      <line x1="22" y1="52" x2="17" y2="62" stroke={BL} strokeWidth="0.75" strokeLinecap="round"/>
      <line x1="22" y1="52" x2="27" y2="62" stroke={BL} strokeWidth="0.75" strokeLinecap="round"/>

      {/* Right figure */}
      <circle cx="74" cy="30" r="6"
        stroke={OR} strokeWidth="0.85" fill="rgba(242,101,34,0.07)"/>
      <circle cx="74" cy="30" r="2.5" fill={OR} opacity="0.65"/>
      <line x1="74" y1="36" x2="74" y2="52" stroke={OR} strokeWidth="0.85" strokeLinecap="round"/>
      <line x1="74" y1="42" x2="68" y2="48" stroke={OR} strokeWidth="0.75" strokeLinecap="round"/>
      <line x1="74" y1="42" x2="80" y2="48" stroke={OR} strokeWidth="0.75" strokeLinecap="round"/>
      <line x1="74" y1="52" x2="69" y2="62" stroke={OR} strokeWidth="0.75" strokeLinecap="round"/>
      <line x1="74" y1="52" x2="79" y2="62" stroke={OR} strokeWidth="0.75" strokeLinecap="round"/>

      {/* Signal waves from left figure */}
      {[8,14,20].map((dr,i)=>(
        <path key={`wl-${i}`}
          d={`M ${28+dr} ${22} Q ${30+dr} ${30} ${28+dr} ${38}`}
          stroke={BL} strokeWidth="0.65" strokeOpacity={0.55-i*0.12} fill="none"/>
      ))}

      {/* Signal waves from right figure */}
      {[8,14,20].map((dr,i)=>(
        <path key={`wr-${i}`}
          d={`M ${68-dr} ${22} Q ${66-dr} ${30} ${68-dr} ${38}`}
          stroke={OR} strokeWidth="0.65" strokeOpacity={0.55-i*0.12} fill="none"/>
      ))}

      {/* Central data exchange nodes */}
      <circle cx="48" cy="24" r="5"
        stroke={WH} strokeWidth="0.75" fill="rgba(255,255,255,0.05)" filter="url(#com-glow)"/>
      <circle cx="48" cy="24" r="2" fill={WH} opacity="0.6"/>

      {/* Connection lines to centre */}
      <line x1="28" y1="28" x2="43" y2="24" stroke={BL} strokeWidth="0.6" strokeOpacity="0.45" strokeDasharray="2.5 2"/>
      <line x1="68" y1="28" x2="53" y2="24" stroke={OR} strokeWidth="0.6" strokeOpacity="0.45" strokeDasharray="2.5 2"/>

      {/* Network relay nodes at bottom */}
      {[[38,72,BL],[48,78,WH],[58,72,OR]].map(([nx,ny,nc],i)=>(
        <g key={i}>
          <circle cx={nx as number} cy={ny as number} r="4"
            stroke={nc as string} strokeWidth="0.7"
            fill="rgba(8,18,38,0.8)" filter="url(#com-glow)"/>
          <circle cx={nx as number} cy={ny as number} r="1.5" fill={nc as string} opacity="0.7"/>
        </g>
      ))}
      <line x1="42" y1="72" x2="44" y2="78" stroke={WH} strokeWidth="0.5" strokeOpacity="0.35"/>
      <line x1="54" y1="78" x2="54" y2="72" stroke={WH} strokeWidth="0.5" strokeOpacity="0.35"/>
      <line x1="22" y1="52" x2="38" y2="70" stroke={BL} strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 2"/>
      <line x1="74" y1="52" x2="58" y2="70" stroke={OR} strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 2"/>
    </svg>
  );
}

/* ── 5. COMPASSION ──────────────────────────────────────────────────────── */
export function CompassionIllustration({ size = 96 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
      <defs>
        {glow("cmp-glow")}
        {softGlow("cmp-sg")}
        <radialGradient id="cmp-warm" cx="50%" cy="60%" r="55%">
          <stop offset="0%"   stopColor={OR} stopOpacity="0.18"/>
          <stop offset="100%" stopColor={OR} stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="cmp-cool" cx="50%" cy="40%" r="50%">
          <stop offset="0%"   stopColor={BL} stopOpacity="0.10"/>
          <stop offset="100%" stopColor={BL} stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="cmp-hand" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor={OR} stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#FFCC88" stopOpacity="0.35"/>
        </linearGradient>
      </defs>

      {/* Warm glow pools */}
      <ellipse cx="48" cy="66" rx="30" ry="16" fill="url(#cmp-warm)" filter="url(#cmp-sg)"/>
      <circle cx="48" cy="36" r="22" fill="url(#cmp-cool)"/>

      {/* Protective outer rings — nested circles */}
      {[32, 40, 48].map((r,i)=>(
        <circle key={r} cx="48" cy="48" r={r}
          stroke={OR} strokeWidth="0.6"
          strokeOpacity={0.12 - i*0.03} fill="none"/>
      ))}

      {/* Left hand */}
      <path
        d="M 18 66 Q 14 58 16 50 Q 18 44 24 44 L 26 44
           L 26 50 Q 26 48 29 48 L 29 44 Q 29 42 32 42 L 32 46
           Q 32 44 35 44 L 35 56 Q 42 54 44 62 L 44 72
           Q 36 74 30 72 Q 22 70 18 66 Z"
        stroke="url(#cmp-hand)" strokeWidth="0.85"
        fill="rgba(242,101,34,0.07)"/>
      {/* finger detail lines */}
      <line x1="26" y1="48" x2="26" y2="56" stroke={OR} strokeWidth="0.5" strokeOpacity="0.3"/>
      <line x1="29" y1="48" x2="29" y2="56" stroke={OR} strokeWidth="0.5" strokeOpacity="0.3"/>
      <line x1="32" y1="46" x2="32" y2="56" stroke={OR} strokeWidth="0.5" strokeOpacity="0.3"/>

      {/* Right hand (mirrored) */}
      <path
        d="M 78 66 Q 82 58 80 50 Q 78 44 72 44 L 70 44
           L 70 50 Q 70 48 67 48 L 67 44 Q 67 42 64 42 L 64 46
           Q 64 44 61 44 L 61 56 Q 54 54 52 62 L 52 72
           Q 60 74 66 72 Q 74 70 78 66 Z"
        stroke="url(#cmp-hand)" strokeWidth="0.85"
        fill="rgba(242,101,34,0.07)"/>
      <line x1="70" y1="48" x2="70" y2="56" stroke={OR} strokeWidth="0.5" strokeOpacity="0.3"/>
      <line x1="67" y1="48" x2="67" y2="56" stroke={OR} strokeWidth="0.5" strokeOpacity="0.3"/>
      <line x1="64" y1="46" x2="64" y2="56" stroke={OR} strokeWidth="0.5" strokeOpacity="0.3"/>

      {/* Heart / protected element — glowing orb held between hands */}
      <circle cx="48" cy="52" r="10"
        fill="rgba(242,101,34,0.10)" stroke={OR} strokeWidth="0.8"
        filter="url(#cmp-sg)"/>
      <circle cx="48" cy="52" r="5.5"
        fill="rgba(242,101,34,0.18)" stroke={OR} strokeWidth="0.7"/>
      <circle cx="48" cy="52" r="2.5" fill={OR} opacity="0.8" filter="url(#cmp-glow)"/>

      {/* Subtle heart silhouette */}
      <path d="M 48 54 Q 44 50 44 47 Q 44 44 47 44 Q 48 44 48 46
               Q 48 44 49 44 Q 52 44 52 47 Q 52 50 48 54 Z"
        fill={OR} opacity="0.55"/>

      {/* Radiating warmth lines */}
      {[[-70],[-50],[-30],[210],[230],[250]].map(([deg],i)=>{
        const rad = (deg * Math.PI)/180;
        const x1 = 48 + 12*Math.cos(rad), y1 = 52 + 12*Math.sin(rad);
        const x2 = 48 + 22*Math.cos(rad), y2 = 52 + 22*Math.sin(rad);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={OR} strokeWidth="0.5" strokeOpacity="0.3" strokeLinecap="round"/>
        );
      })}

      {/* Floating connection dots — top arc */}
      {[[34,18,BL],[48,12,WH],[62,18,BL]].map(([px,py,pc],i)=>(
        <g key={i} filter="url(#cmp-glow)">
          <circle cx={px as number} cy={py as number} r="2"
            fill={pc as string} opacity={0.55}/>
        </g>
      ))}
      <path d="M 34 18 Q 48 14 62 18"
        stroke={BL} strokeWidth="0.5" strokeOpacity="0.3" fill="none" strokeDasharray="2 2"/>
    </svg>
  );
}
