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

/* ═══════════════════════════════════════════════════════════════════════════
 * SECTOR GROUP COMPONENTS
 * For embedding directly inside a parent <svg>. No wrapping <svg>, no <defs>.
 * Each is centered at (0,0) — place with transform="translate(cx,cy)".
 * Glow via CSS drop-shadow (works without defs). Active/inactive via opacity.
 * ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. Curiosity sector group ──────────────────────────────────────────── */
export function CuriosityGroup({ active = false }: { active?: boolean }) {
  return (
    <g opacity={active ? 0.95 : 0.52} style={{ transition: "opacity 0.3s" }}>
      {/* cosmic ring */}
      <circle r="36" fill="none" stroke={OR} strokeWidth="0.5" strokeOpacity="0.18"/>
      {/* telescope barrel */}
      <rect x="-24" y="-5" width="34" height="10" rx="2"
        stroke={WH} strokeWidth="0.85" fill="rgba(255,255,255,0.05)"/>
      {/* lens cap */}
      <rect x="-30" y="-7" width="8" height="14" rx="1.5"
        stroke={WH} strokeWidth="0.75" fill="rgba(255,255,255,0.05)"/>
      {/* eyepiece */}
      <rect x="10" y="-3" width="12" height="6" rx="1"
        stroke={WH} strokeWidth="0.65" fill="rgba(255,255,255,0.03)"/>
      {/* tripod */}
      <line x1="-10" y1="5" x2="-18" y2="22" stroke={DIM} strokeWidth="0.65"/>
      <line x1="4"  y1="5" x2="4"   y2="22" stroke={DIM} strokeWidth="0.65"/>
      <line x1="-3" y1="5" x2="14"  y2="22" stroke={DIM} strokeWidth="0.5"/>
      <line x1="-20" y1="22" x2="16" y2="22" stroke={DIM} strokeWidth="0.55"/>
      {/* glowing lens */}
      <circle cx="-26" cy="0" r="5.5" stroke={BL} strokeWidth="0.8"
        fill="rgba(147,197,253,0.09)"
        style={{ filter: "drop-shadow(0 0 3px rgba(147,197,253,0.8))" }}/>
      <circle cx="-26" cy="0" r="2.2" fill={BL} opacity="0.75"/>
      {/* stars */}
      {[[-8,-28,OR,1.4],[10,-32,BL,0.9],[22,-22,OR,1.3],[30,-14,BL,0.8],[-2,-36,OR,1.0]].map(([sx,sy,sc,sr],i)=>(
        <circle key={i} cx={sx as number} cy={sy as number} r={sr as number}
          fill={sc as string} opacity={0.75}
          style={i===0?{filter:"drop-shadow(0 0 2px rgba(242,101,34,0.9))"}:undefined}/>
      ))}
      {/* orbit arc */}
      <path d="M -16 -22 Q 12 -35 28 -14"
        stroke={BL} strokeWidth="0.55" strokeOpacity="0.38" fill="none" strokeDasharray="3 3"/>
      <circle cx="28" cy="-14" r="1.8" fill={BL} opacity="0.65"/>
      {/* direction rays from lens */}
      <line x1="-31" y1="-4" x2="-38" y2="-14"
        stroke={OR} strokeWidth="0.5" strokeOpacity="0.45" strokeDasharray="2 2"/>
      <line x1="-31" y1="0" x2="-38" y2="0"
        stroke={OR} strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 3"/>
    </g>
  );
}

/* ── 2. Courage sector group ────────────────────────────────────────────── */
export function CourageGroup({ active = false }: { active?: boolean }) {
  return (
    <g opacity={active ? 0.95 : 0.52} style={{ transition: "opacity 0.3s" }}>
      {/* mountain */}
      <path d="M -36 26 L -10 -8 L 4 6 L 22 -22 L 38 26 Z"
        fill="rgba(255,255,255,0.02)" stroke={DIM} strokeWidth="0.65"/>
      {/* ridge highlight */}
      <path d="M -10 -8 L 22 -22"
        stroke={WH} strokeWidth="0.8" strokeOpacity="0.35"/>
      {/* figure legs */}
      <line x1="20" y1="-4"  x2="15"  y2="8"  stroke={WH} strokeWidth="1.05" strokeLinecap="round"/>
      <line x1="15" y1="8"   x2="10"  y2="2"  stroke={WH} strokeWidth="1.05" strokeLinecap="round"/>
      {/* torso */}
      <line x1="15" y1="8"   x2="16"  y2="-4" stroke={WH} strokeWidth="1.05" strokeLinecap="round"/>
      {/* arm up (flame side) */}
      <line x1="16" y1="-4"  x2="21"  y2="-14" stroke={WH} strokeWidth="0.95" strokeLinecap="round"/>
      {/* arm out */}
      <line x1="16" y1="-4"  x2="10"  y2="-9"  stroke={WH} strokeWidth="0.8"  strokeLinecap="round"/>
      {/* head */}
      <circle cx="16" cy="-8" r="3.8" stroke={WH} strokeWidth="0.85" fill="rgba(255,255,255,0.06)"/>
      {/* flame */}
      <path d="M 21 -19 Q 19 -28 22 -36 Q 25 -28 28 -30 Q 26 -24 23 -18 Z"
        fill={OR} opacity="0.9"
        style={{ filter: "drop-shadow(0 0 5px rgba(242,101,34,1))" }}/>
      <path d="M 22 -22 Q 21 -27 23 -32 Q 24 -27 23 -22 Z" fill="#FFE88A" opacity="0.6"/>
      {/* wind streaks */}
      {[[-28,-14,-16,-18],[-32,-5,-22,-7],[-30,4,-22,2]].map(([x1,y1,x2,y2],i)=>(
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={BL} strokeWidth="0.5" strokeOpacity={0.32-i*0.07} strokeDasharray="2.5 2"/>
      ))}
      {/* sparks above flame */}
      {[[26,-38],[30,-31],[18,-37],[24,-41]].map(([sx,sy],i)=>(
        <circle key={i} cx={sx} cy={sy} r={0.9} fill={OR} opacity={0.65-i*0.1}/>
      ))}
    </g>
  );
}

/* ── 3. Creativity sector group ─────────────────────────────────────────── */
export function CreativityGroup({ active = false }: { active?: boolean }) {
  const nodes:[number,number,string][] = [
    [-28,-24,OR],[28,-24,BL],[-36,8,BL],[36,8,OR],[-20,30,OR],[20,30,BL],
  ];
  return (
    <g opacity={active ? 0.95 : 0.52} style={{ transition: "opacity 0.3s" }}>
      {/* outer polygon edges */}
      <line x1="-28" y1="-24" x2="28"  y2="-24" stroke={OR} strokeWidth="0.65" strokeOpacity="0.5"/>
      <line x1="-36" y1="8"   x2="-28" y2="-24" stroke={BL} strokeWidth="0.6"  strokeOpacity="0.45"/>
      <line x1="36"  y1="8"   x2="28"  y2="-24" stroke={OR} strokeWidth="0.6"  strokeOpacity="0.45"/>
      <line x1="-20" y1="30"  x2="-36" y2="8"   stroke={BL} strokeWidth="0.6"  strokeOpacity="0.4"/>
      <line x1="20"  y1="30"  x2="36"  y2="8"   stroke={OR} strokeWidth="0.6"  strokeOpacity="0.4"/>
      <line x1="-20" y1="30"  x2="20"  y2="30"  stroke={BL} strokeWidth="0.65" strokeOpacity="0.45"/>
      {/* spokes to hub */}
      {nodes.map(([nx,ny,nc],i)=>(
        <line key={i} x1={nx} y1={ny} x2={0} y2={0}
          stroke={nc} strokeWidth="0.5" strokeOpacity="0.38"/>
      ))}
      {/* outer nodes */}
      {nodes.map(([nx,ny,nc],i)=>(
        <g key={i} style={{ filter:`drop-shadow(0 0 2px ${nc}aa)` }}>
          <circle cx={nx} cy={ny} r="5"
            fill="rgba(8,18,38,0.7)" stroke={nc} strokeWidth="0.8"/>
          <circle cx={nx} cy={ny} r="1.9" fill={nc} opacity="0.85"/>
        </g>
      ))}
      {/* central hub */}
      <circle r="8.5" fill="rgba(8,18,38,0.8)" stroke={OR} strokeWidth="0.95"
        style={{ filter:"drop-shadow(0 0 5px rgba(242,101,34,0.55))" }}/>
      <circle r="3.5" fill={OR} opacity="0.88"/>
      {/* spark rays */}
      {[0,60,120,180,240,300].map((deg,i)=>{
        const rad=deg*Math.PI/180;
        return (
          <line key={i}
            x1={10*Math.cos(rad)} y1={10*Math.sin(rad)}
            x2={18*Math.cos(rad)} y2={18*Math.sin(rad)}
            stroke={i%2===0?OR:BL} strokeWidth="0.5" strokeOpacity="0.58"/>
        );
      })}
      {/* floating particles */}
      {[[-14,-38],[16,-36],[38,-6],[8,38],[-38,22]].map(([px,py],i)=>(
        <circle key={i} cx={px} cy={py} r="1.1" fill={i%2===0?OR:BL} opacity="0.55"/>
      ))}
    </g>
  );
}

/* ── 4. Communication sector group ──────────────────────────────────────── */
export function CommunicationGroup({ active = false }: { active?: boolean }) {
  return (
    <g opacity={active ? 0.95 : 0.52} style={{ transition: "opacity 0.3s" }}>
      {/* left figure */}
      <circle cx="-24" cy="-22" r="5.5" stroke={BL} strokeWidth="0.85"
        fill="rgba(147,197,253,0.07)"/>
      <circle cx="-24" cy="-22" r="2.2" fill={BL} opacity="0.65"/>
      <line x1="-24" y1="-16" x2="-24" y2="-2" stroke={BL} strokeWidth="0.9" strokeLinecap="round"/>
      <line x1="-24" y1="-9"  x2="-30" y2="-3" stroke={BL} strokeWidth="0.75" strokeLinecap="round"/>
      <line x1="-24" y1="-9"  x2="-18" y2="-3" stroke={BL} strokeWidth="0.75" strokeLinecap="round"/>
      <line x1="-24" y1="-2"  x2="-28" y2="10" stroke={BL} strokeWidth="0.75" strokeLinecap="round"/>
      <line x1="-24" y1="-2"  x2="-20" y2="10" stroke={BL} strokeWidth="0.75" strokeLinecap="round"/>
      {/* right figure */}
      <circle cx="24" cy="-22" r="5.5" stroke={OR} strokeWidth="0.85"
        fill="rgba(242,101,34,0.07)"/>
      <circle cx="24" cy="-22" r="2.2" fill={OR} opacity="0.65"/>
      <line x1="24" y1="-16" x2="24"  y2="-2"  stroke={OR} strokeWidth="0.9"  strokeLinecap="round"/>
      <line x1="24" y1="-9"  x2="18"  y2="-3"  stroke={OR} strokeWidth="0.75" strokeLinecap="round"/>
      <line x1="24" y1="-9"  x2="30"  y2="-3"  stroke={OR} strokeWidth="0.75" strokeLinecap="round"/>
      <line x1="24" y1="-2"  x2="20"  y2="10"  stroke={OR} strokeWidth="0.75" strokeLinecap="round"/>
      <line x1="24" y1="-2"  x2="28"  y2="10"  stroke={OR} strokeWidth="0.75" strokeLinecap="round"/>
      {/* signal waves left→centre */}
      {[6,11,16].map((d,i)=>(
        <path key={`l${i}`} d={`M ${-18+d} -30 Q ${-16+d} -22 ${-18+d} -14`}
          stroke={BL} strokeWidth="0.62" strokeOpacity={0.55-i*0.13} fill="none"/>
      ))}
      {/* signal waves right→centre */}
      {[6,11,16].map((d,i)=>(
        <path key={`r${i}`} d={`M ${18-d} -30 Q ${16-d} -22 ${18-d} -14`}
          stroke={OR} strokeWidth="0.62" strokeOpacity={0.55-i*0.13} fill="none"/>
      ))}
      {/* centre exchange node */}
      <circle cy="-22" r="4.5" stroke={WH} strokeWidth="0.72"
        fill="rgba(255,255,255,0.05)"
        style={{ filter:"drop-shadow(0 0 3px rgba(255,255,255,0.55))" }}/>
      <circle cy="-22" r="1.7" fill={WH} opacity="0.65"/>
      <line x1="-18" y1="-22" x2="-5" y2="-22"
        stroke={BL} strokeWidth="0.55" strokeOpacity="0.42" strokeDasharray="2 2"/>
      <line x1="18"  y1="-22" x2="5"  y2="-22"
        stroke={OR} strokeWidth="0.55" strokeOpacity="0.42" strokeDasharray="2 2"/>
      {/* bottom relay nodes */}
      {[[-14,22,BL],[0,28,WH],[14,22,OR]].map(([nx,ny,nc],i)=>(
        <g key={i} style={{ filter:`drop-shadow(0 0 2px ${nc}88)` }}>
          <circle cx={nx as number} cy={ny as number} r="3.8"
            stroke={nc as string} strokeWidth="0.68" fill="rgba(8,18,38,0.75)"/>
          <circle cx={nx as number} cy={ny as number} r="1.4" fill={nc as string} opacity="0.72"/>
        </g>
      ))}
      <line x1="-10" y1="22" x2="-2"  y2="28" stroke={WH} strokeWidth="0.45" strokeOpacity="0.3"/>
      <line x1="10"  y1="22" x2="2"   y2="28" stroke={WH} strokeWidth="0.45" strokeOpacity="0.3"/>
      <line x1="-24" y1="10" x2="-14" y2="20" stroke={BL} strokeWidth="0.45" strokeOpacity="0.3" strokeDasharray="2 2"/>
      <line x1="24"  y1="10" x2="14"  y2="20" stroke={OR} strokeWidth="0.45" strokeOpacity="0.3" strokeDasharray="2 2"/>
    </g>
  );
}

/* ── 5. Compassion sector group ─────────────────────────────────────────── */
export function CompassionGroup({ active = false }: { active?: boolean }) {
  return (
    <g opacity={active ? 0.95 : 0.52} style={{ transition: "opacity 0.3s" }}>
      {/* protective rings */}
      {[30,38,46].map((r,i)=>(
        <circle key={r} r={r} fill="none"
          stroke={OR} strokeWidth="0.55" strokeOpacity={0.13-i*0.03}/>
      ))}
      {/* left hand */}
      <path d="M -30 14 Q -34 6 -32 -2 Q -30 -8 -24 -8 L -22 -8 L -22 -2
               Q -22 -4 -19 -4 L -19 -8 Q -19 -10 -16 -10 L -16 -6
               Q -16 -8 -13 -8 L -13 4
               Q -6 2 -4 10 L -4 20
               Q -12 22 -18 20 Q -26 18 -30 14 Z"
        stroke={OR} strokeWidth="0.82" strokeOpacity="0.68" fill="rgba(242,101,34,0.07)"/>
      {/* right hand (mirror) */}
      <path d="M 30 14 Q 34 6 32 -2 Q 30 -8 24 -8 L 22 -8 L 22 -2
               Q 22 -4 19 -4 L 19 -8 Q 19 -10 16 -10 L 16 -6
               Q 16 -8 13 -8 L 13 4
               Q 6 2 4 10 L 4 20
               Q 12 22 18 20 Q 26 18 30 14 Z"
        stroke={OR} strokeWidth="0.82" strokeOpacity="0.68" fill="rgba(242,101,34,0.07)"/>
      {/* central glowing orb */}
      <circle r="10.5" fill="rgba(242,101,34,0.10)" stroke={OR} strokeWidth="0.85"
        style={{ filter:"drop-shadow(0 0 7px rgba(242,101,34,0.5))" }}/>
      <circle r="5.5"  fill="rgba(242,101,34,0.20)" stroke={OR} strokeWidth="0.68"/>
      <circle r="2.6"  fill={OR} opacity="0.88"/>
      {/* heart */}
      <path d="M 0 3 Q -4 -1 -4 -4 Q -4 -7 -1 -7 Q 0 -7 0 -5 Q 0 -7 1 -7 Q 4 -7 4 -4 Q 4 -1 0 3 Z"
        fill={OR} opacity="0.58"/>
      {/* warmth rays */}
      {[-80,-55,-30,210,235,260].map((deg,i)=>{
        const rad=deg*Math.PI/180;
        return (
          <line key={i}
            x1={13*Math.cos(rad)} y1={13*Math.sin(rad)}
            x2={23*Math.cos(rad)} y2={23*Math.sin(rad)}
            stroke={OR} strokeWidth="0.48" strokeOpacity="0.32" strokeLinecap="round"/>
        );
      })}
      {/* top connection dots */}
      {[[-14,-32,BL],[0,-38,WH],[14,-32,BL]].map(([px,py,pc],i)=>(
        <circle key={i} cx={px as number} cy={py as number} r="2" fill={pc as string} opacity="0.5"/>
      ))}
      <path d="M -14 -32 Q 0 -36 14 -32"
        stroke={BL} strokeWidth="0.48" strokeOpacity="0.28" fill="none" strokeDasharray="2 2"/>
    </g>
  );
}
