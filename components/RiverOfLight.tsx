"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ─── ViewBox ─────────────────────────────────────────────────────────────── */
const VW = 1440;
const VH = 580;

/* ─── Anchors ────────────────────────────────────────────────────────────── */
const YCX = 215;   // Yantra centre x
const YCY = 290;   // Yantra centre y
const NCX = 1225;  // Neural centre x
const NCY = 290;   // Neural centre y

/* ─── Helpers ────────────────────────────────────────────────────────────── */
function tri(cx: number, cy: number, r: number, startDeg: number): string {
  return [0, 120, 240]
    .map(d => {
      const a = ((d + startDeg) * Math.PI) / 180;
      return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
    })
    .join(" ");
}

/* ─── Neural constellation data ─────────────────────────────────────────── */
const NODES = [
  { x: 1225, y: 290 },  // 0 hub
  { x: 1162, y: 235 },  // 1
  { x: 1288, y: 228 },  // 2
  { x: 1322, y: 286 },  // 3
  { x: 1285, y: 350 },  // 4
  { x: 1162, y: 350 },  // 5
  { x: 1120, y: 286 },  // 6
  { x: 1198, y: 168 },  // 7 upper-left
  { x: 1338, y: 166 },  // 8 upper-right
];

const EDGES = [
  [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],  // hub spokes
  [1,2],[2,3],[3,4],[4,5],[5,6],[6,1],  // outer ring
  [1,7],[2,8],[3,8],[7,8],              // upper cluster
];

const PULSE_EDGES = [[0,2],[1,7],[3,8],[0,4],[5,6]];

/* ─── Yantra geometry ────────────────────────────────────────────────────── */
const YANTRA_RADII = [105, 82, 62, 44];
const LOTUS_R = 122;

/* ═══════════════════════════════════════════════════════════════════════════ */
export default function RiverOfLight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 1;
    let H = 1;
    let animId = 0;

    const setSize = () => {
      W = canvas.offsetWidth  || 1;
      H = canvas.offsetHeight || 1;
      canvas.width  = W;
      canvas.height = H;
    };
    setSize();

    /* Map viewBox → canvas pixels */
    const tx = (vx: number) => (vx / VW) * W;
    const ty = (vy: number) => (vy / VH) * H;

    /* Bezier path: yantra → gentle arc → neural */
    const path = () => ({
      sx:  tx(YCX), sy:  ty(YCY),
      c1x: tx(560), c1y: ty(138),
      c2x: tx(882), c2y: ty(442),
      dx:  tx(NCX), dy:  ty(NCY),
    });

    function cubic(t: number, p0: number, p1: number, p2: number, p3: number) {
      const u = 1 - t;
      return u*u*u*p0 + 3*u*u*t*p1 + 3*u*t*t*p2 + t*t*t*p3;
    }

    function pointAt(t: number, p: ReturnType<typeof path>): [number, number] {
      return [
        cubic(t, p.sx, p.c1x, p.c2x, p.dx),
        cubic(t, p.sy, p.c1y, p.c2y, p.dy),
      ];
    }

    /* Colour: amber #F26522 → cool blue #93C5FD */
    function lerp(t: number): [number,number,number] {
      return [
        Math.round(242 + (147 - 242) * t),
        Math.round(101 + (197 - 101) * t),
        Math.round( 34 + (253 -  34) * t),
      ];
    }

    type P = { t: number; speed: number; sz: number };
    const particles: P[] = Array.from({ length: 58 }, () => ({
      t:     Math.random(),
      speed: 0.00035 + Math.random() * 0.00075,   // very slow drift
      sz:    0.7 + Math.random() * 2.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const p = path();

      /* faint guide ribbon */
      ctx.beginPath();
      ctx.moveTo(p.sx, p.sy);
      ctx.bezierCurveTo(p.c1x, p.c1y, p.c2x, p.c2y, p.dx, p.dy);
      ctx.strokeStyle = "rgba(242,101,34,0.045)";
      ctx.lineWidth   = 1.2;
      ctx.stroke();

      /* particles */
      for (const pt of particles) {
        pt.t += pt.speed;
        if (pt.t > 1) pt.t -= 1;

        const [x, y]   = pointAt(pt.t, p);
        const [r, g, b] = lerp(pt.t);
        const alpha = pt.t < 0.07 ? pt.t / 0.07
                    : pt.t > 0.93 ? (1 - pt.t) / 0.07
                    : 1;

        /* soft glow halo */
        const grd = ctx.createRadialGradient(x, y, 0, x, y, pt.sz * 5.5);
        grd.addColorStop(0, `rgba(${r},${g},${b},${(alpha * 0.24).toFixed(3)})`);
        grd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(x, y, pt.sz * 5.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        /* core dot */
        ctx.beginPath();
        ctx.arc(x, y, pt.sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${(alpha * 0.88).toFixed(3)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

      {/* ── PARTICLE CANVAS ── */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* ── SVG GEOMETRY ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="rol-y-glow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="rol-n-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* ════ YANTRA — outer static rings + lotus ════ */}
        <g opacity={0.88}>
          <circle cx={YCX} cy={YCY} r={150}
            fill="none" stroke="rgba(242,101,34,0.09)" strokeWidth="0.6"/>
          <circle cx={YCX} cy={YCY} r={132}
            fill="none" stroke="rgba(242,101,34,0.06)" strokeWidth="0.4"/>

          {/* 8 lotus petals — static */}
          {Array.from({ length: 8 }, (_, i) => {
            const deg = i * 45;
            const rad = (deg * Math.PI) / 180;
            const px  = YCX + LOTUS_R * Math.cos(rad);
            const py  = YCY + LOTUS_R * Math.sin(rad);
            return (
              <ellipse key={i}
                cx={px} cy={py} rx={13} ry={25}
                fill="rgba(242,101,34,0.04)"
                stroke="rgba(242,101,34,0.12)"
                strokeWidth="0.5"
                transform={`rotate(${deg}, ${px}, ${py})`}
              />
            );
          })}
        </g>

        {/* ════ YANTRA — slowly rotating inner geometry ════ */}
        <motion.g
          style={{ transformOrigin: `${YCX}px ${YCY}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 130, repeat: Infinity, ease: "linear" }}
          filter="url(#rol-y-glow)"
          opacity={0.82}
        >
          {YANTRA_RADII.map((r, idx) => (
            <g key={idx}>
              {/* upward triangle */}
              <polygon
                points={tri(YCX, YCY, r, -90)}
                fill="none"
                stroke={`rgba(242,101,34,${(0.33 - idx * 0.06).toFixed(2)})`}
                strokeWidth={idx < 2 ? 0.85 : 0.55}
              />
              {/* downward triangle */}
              <polygon
                points={tri(YCX, YCY, r, 90)}
                fill="none"
                stroke={`rgba(255,188,76,${(0.27 - idx * 0.05).toFixed(2)})`}
                strokeWidth={idx < 2 ? 0.85 : 0.55}
              />
            </g>
          ))}
          {/* Bindu */}
          <circle cx={YCX} cy={YCY} r={6.5}  fill="rgba(242,101,34,0.65)" />
          <circle cx={YCX} cy={YCY} r={2.8}  fill="rgba(255,222,120,0.90)" />
        </motion.g>

        {/* Yantra pulse aura */}
        <motion.circle
          cx={YCX} cy={YCY} r={14}
          fill="rgba(242,101,34,0.10)"
          animate={{ r: [14, 24, 14], opacity: [0.10, 0.26, 0.10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ════ NEURAL CONSTELLATION ════ */}
        <g filter="url(#rol-n-glow)">
          {/* static edges */}
          {EDGES.map(([a, b], i) => (
            <line key={i}
              x1={NODES[a].x} y1={NODES[a].y}
              x2={NODES[b].x} y2={NODES[b].y}
              stroke="rgba(147,197,253,0.14)" strokeWidth="0.7"
            />
          ))}
          {/* pulsing edges */}
          {PULSE_EDGES.map(([a, b], i) => (
            <motion.line key={i}
              x1={NODES[a].x} y1={NODES[a].y}
              x2={NODES[b].x} y2={NODES[b].y}
              stroke="rgba(147,197,253,0.55)" strokeWidth="0.85"
              initial={{ opacity: 0.04 }}
              animate={{ opacity: [0.04, 0.55, 0.04] }}
              transition={{
                duration: 3.5 + i * 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.75,
              }}
            />
          ))}
          {/* nodes */}
          {NODES.map((n, i) => (
            <motion.circle key={i}
              cx={n.x} cy={n.y}
              r={i === 0 ? 5.5 : 3}
              fill={i === 0 ? "rgba(147,197,253,0.75)" : "rgba(147,197,253,0.44)"}
              animate={{ opacity: [0.32, 0.92, 0.32] }}
              transition={{
                duration: 2.6 + i * 0.44,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.38,
              }}
            />
          ))}
        </g>

        {/* Neural pulse aura */}
        <motion.circle
          cx={NCX} cy={NCY} r={12}
          fill="rgba(147,197,253,0.07)"
          animate={{ r: [12, 20, 12], opacity: [0.07, 0.20, 0.07] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* ════ SATELLITE (near upper-right neural cluster) ════ */}
        <motion.g
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          opacity={0.36}
        >
          {/* body */}
          <rect x={1355} y={144} width={22} height={12} rx={2.5}
            fill="rgba(180,210,255,0.12)" stroke="rgba(180,210,255,0.52)" strokeWidth="0.7"/>
          {/* left solar panel */}
          <rect x={1323} y={147} width={29} height={6} rx={1.5}
            fill="rgba(100,160,255,0.10)" stroke="rgba(147,197,253,0.42)" strokeWidth="0.6"/>
          {/* right solar panel */}
          <rect x={1381} y={147} width={29} height={6} rx={1.5}
            fill="rgba(100,160,255,0.10)" stroke="rgba(147,197,253,0.42)" strokeWidth="0.6"/>
          {/* antenna stem */}
          <line x1={1366} y1={144} x2={1366} y2={134}
            stroke="rgba(200,220,255,0.42)" strokeWidth="0.6"/>
          {/* antenna dish */}
          <circle cx={1366} cy={132} r={3.2}
            fill="none" stroke="rgba(200,220,255,0.42)" strokeWidth="0.6"/>
          {/* dashed orbital arc */}
          <path d="M 1302 208 Q 1368 126 1432 172"
            fill="none" stroke="rgba(147,197,253,0.06)"
            strokeWidth="0.8" strokeDasharray="3 7"/>
        </motion.g>
      </svg>
    </div>
  );
}
