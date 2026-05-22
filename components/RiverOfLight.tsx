"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ─── ViewBox ─────────────────────────────────────────────────────────────── */
const VW = 1440;
const VH = 580;

/* ─── Anchors ────────────────────────────────────────────────────────────── */
const YCX = 215;   // Yantra centre
const YCY = 290;
const NCX = 1218;  // Satellite centre
const NCY = 293;

/* ─── Yantra helpers ─────────────────────────────────────────────────────── */
function tri(cx: number, cy: number, r: number, startDeg: number): string {
  return [0, 120, 240]
    .map(d => {
      const a = ((d + startDeg) * Math.PI) / 180;
      return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
    })
    .join(" ");
}

const YANTRA_RADII = [105, 82, 62, 44];
const LOTUS_R = 122;

/* ─── Satellite geometry constants ──────────────────────────────────────── */
// Main bus (body)
const B = { x: 1177, y: 260, w: 82, h: 66 }; // rect, centre ≈ (1218, 293)

// Solar array panels
const LP = { x: 1052, y: 257, w: 96, h: 72 }; // left panel
const RP = { x: 1289, y: 257, w: 96, h: 72 }; // right panel

// Deployment arms (body ↔ panel)
const LA = { x: 1148, y: 284, w: 29, h: 9 };
const RA = { x: 1259, y: 284, w: 30, h: 9 };

// Antenna dish above body
const DISH_CX = 1218;
const DISH_CY = 225;
const DISH_RX = 36;
const DISH_RY = 11;

// Panel grid (3 cols × 2 rows dividers)
function panelGrid(px: number, py: number, pw: number, ph: number) {
  const lines: Array<{ x1:number;y1:number;x2:number;y2:number }> = [];
  for (let c = 1; c <= 2; c++)
    lines.push({ x1: px + pw*c/3, y1: py, x2: px + pw*c/3, y2: py+ph });
  for (let r = 1; r <= 3; r++)
    lines.push({ x1: px, y1: py + ph*r/4, x2: px+pw, y2: py + ph*r/4 });
  return lines;
}

/* ═══════════════════════════════════════════════════════════════════════════ */
export default function RiverOfLight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ── Particle stream canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 1, H = 1, animId = 0;

    const setSize = () => {
      W = canvas.offsetWidth  || 1;
      H = canvas.offsetHeight || 1;
      canvas.width  = W;
      canvas.height = H;
    };
    setSize();

    const tx = (vx: number) => (vx / VW) * W;
    const ty = (vy: number) => (vy / VH) * H;

    const path = () => ({
      sx:  tx(YCX), sy:  ty(YCY),
      c1x: tx(555), c1y: ty(136),
      c2x: tx(880), c2y: ty(445),
      dx:  tx(NCX), dy:  ty(NCY),
    });

    function cubic(t:number,p0:number,p1:number,p2:number,p3:number){
      const u=1-t; return u*u*u*p0+3*u*u*t*p1+3*u*t*t*p2+t*t*t*p3;
    }
    function ptAt(t:number,p:ReturnType<typeof path>):[number,number]{
      return [cubic(t,p.sx,p.c1x,p.c2x,p.dx), cubic(t,p.sy,p.c1y,p.c2y,p.dy)];
    }
    function lerp(t:number):[number,number,number]{
      return [
        Math.round(242+(147-242)*t),
        Math.round(101+(197-101)*t),
        Math.round( 34+(253- 34)*t),
      ];
    }

    type Pt = { t:number; speed:number; sz:number };
    const particles: Pt[] = Array.from({length:58},()=>({
      t:     Math.random(),
      speed: 0.00035+Math.random()*0.00075,
      sz:    0.7+Math.random()*2.3,
    }));

    const draw = () => {
      ctx.clearRect(0,0,W,H);
      const p = path();

      ctx.beginPath();
      ctx.moveTo(p.sx,p.sy);
      ctx.bezierCurveTo(p.c1x,p.c1y,p.c2x,p.c2y,p.dx,p.dy);
      ctx.strokeStyle="rgba(242,101,34,0.045)";
      ctx.lineWidth=1.2; ctx.stroke();

      for (const pt of particles) {
        pt.t+=pt.speed; if(pt.t>1) pt.t-=1;
        const [x,y]   = ptAt(pt.t,p);
        const [r,g,b] = lerp(pt.t);
        const alpha   = pt.t<0.07?pt.t/0.07:pt.t>0.93?(1-pt.t)/0.07:1;

        const grd = ctx.createRadialGradient(x,y,0,x,y,pt.sz*5.5);
        grd.addColorStop(0,`rgba(${r},${g},${b},${(alpha*0.24).toFixed(3)})`);
        grd.addColorStop(1,"rgba(0,0,0,0)");
        ctx.beginPath(); ctx.arc(x,y,pt.sz*5.5,0,Math.PI*2);
        ctx.fillStyle=grd; ctx.fill();

        ctx.beginPath(); ctx.arc(x,y,pt.sz,0,Math.PI*2);
        ctx.fillStyle=`rgba(${r},${g},${b},${(alpha*0.88).toFixed(3)})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  /* ── SVG colours ── */
  const SAT = "rgba(180,210,255,";  // satellite blue-white
  const ACC = "rgba(147,197,253,";  // accent blue
  const CELL= "rgba(96,145,220,";   // solar cell grid

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="rol-y-glow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="rol-s-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* ════ YANTRA — outer static rings + lotus ════ */}
        <g opacity={0.88}>
          <circle cx={YCX} cy={YCY} r={150}
            fill="none" stroke="rgba(242,101,34,0.09)" strokeWidth="0.6"/>
          <circle cx={YCX} cy={YCY} r={132}
            fill="none" stroke="rgba(242,101,34,0.06)" strokeWidth="0.4"/>
          {Array.from({length:8},(_,i)=>{
            const deg=i*45, rad=(deg*Math.PI)/180;
            const px=YCX+LOTUS_R*Math.cos(rad), py=YCY+LOTUS_R*Math.sin(rad);
            return (
              <ellipse key={i} cx={px} cy={py} rx={13} ry={25}
                fill="rgba(242,101,34,0.04)"
                stroke="rgba(242,101,34,0.12)" strokeWidth="0.5"
                transform={`rotate(${deg},${px},${py})`}/>
            );
          })}
        </g>

        {/* ════ YANTRA — rotating inner geometry ════ */}
        <motion.g
          style={{transformOrigin:`${YCX}px ${YCY}px`}}
          animate={{rotate:360}}
          transition={{duration:130,repeat:Infinity,ease:"linear"}}
          filter="url(#rol-y-glow)" opacity={0.82}
        >
          {YANTRA_RADII.map((r,idx)=>(
            <g key={idx}>
              <polygon points={tri(YCX,YCY,r,-90)} fill="none"
                stroke={`rgba(242,101,34,${(0.33-idx*0.06).toFixed(2)})`}
                strokeWidth={idx<2?0.9:0.6}/>
              <polygon points={tri(YCX,YCY,r,90)} fill="none"
                stroke={`rgba(255,188,76,${(0.27-idx*0.05).toFixed(2)})`}
                strokeWidth={idx<2?0.9:0.6}/>
            </g>
          ))}
          <circle cx={YCX} cy={YCY} r={6.5} fill="rgba(242,101,34,0.65)"/>
          <circle cx={YCX} cy={YCY} r={2.8} fill="rgba(255,222,120,0.90)"/>
        </motion.g>

        {/* Yantra pulse aura */}
        <motion.circle cx={YCX} cy={YCY} r={14} fill="rgba(242,101,34,0.10)"
          animate={{r:[14,24,14],opacity:[0.10,0.26,0.10]}}
          transition={{duration:5,repeat:Infinity,ease:"easeInOut"}}/>

        {/* Yantra source glow */}
        <motion.circle cx={YCX} cy={YCY} r={12} fill="rgba(242,101,34,0.08)"
          animate={{r:[12,20,12],opacity:[0.08,0.20,0.08]}}
          transition={{duration:4.2,repeat:Infinity,ease:"easeInOut",delay:1.5}}/>

        {/* ════ SATELLITE ════ */}
        <motion.g
          filter="url(#rol-s-glow)"
          animate={{y:[-5,5,-5]}}
          transition={{duration:11,repeat:Infinity,ease:"easeInOut"}}
          opacity={0.9}
        >
          {/* ── Signal pulses from dish ── */}
          {[0,1,2].map(i=>(
            <motion.ellipse key={`sig-${i}`}
              cx={DISH_CX} cy={DISH_CY}
              rx={DISH_RX} ry={DISH_RY}
              fill="none" stroke={`${ACC}0.35)`} strokeWidth="0.6"
              initial={{rx:DISH_RX, ry:DISH_RY, opacity:0.35}}
              animate={{
                rx:[DISH_RX, DISH_RX+55],
                ry:[DISH_RY, DISH_RY+20],
                opacity:[0.35,0],
              }}
              transition={{
                duration:4,
                repeat:Infinity,
                ease:"easeOut",
                delay:i*1.33,
              }}
            />
          ))}

          {/* ── Antenna dish ── */}
          {/* Dish bowl — parabolic arc approximated as rotated ellipse */}
          <ellipse
            cx={DISH_CX} cy={DISH_CY}
            rx={DISH_RX} ry={DISH_RY}
            fill={`${SAT}0.08)`}
            stroke={`${ACC}0.55)`} strokeWidth="0.9"
          />
          {/* Dish surface cross-bars */}
          <line
            x1={DISH_CX-DISH_RX} y1={DISH_CY}
            x2={DISH_CX+DISH_RX} y2={DISH_CY}
            stroke={`${ACC}0.22)`} strokeWidth="0.5"/>
          <line
            x1={DISH_CX} y1={DISH_CY-DISH_RY}
            x2={DISH_CX} y2={DISH_CY+DISH_RY}
            stroke={`${ACC}0.22)`} strokeWidth="0.5"/>
          {/* Feed strut from body top to dish */}
          <line
            x1={DISH_CX} y1={B.y}
            x2={DISH_CX} y2={DISH_CY+DISH_RY+1}
            stroke={`${SAT}0.42)`} strokeWidth="0.7"/>
          {/* Feed horn at focus */}
          <motion.circle
            cx={DISH_CX} cy={DISH_CY} r={3.5}
            fill={`${ACC}0.65)`}
            animate={{opacity:[0.5,1.0,0.5]}}
            transition={{duration:2.8,repeat:Infinity,ease:"easeInOut"}}
          />

          {/* ── Left deployment arm ── */}
          <rect
            x={LA.x} y={LA.y} width={LA.w} height={LA.h} rx={1.5}
            fill={`${SAT}0.10)`} stroke={`${SAT}0.38)`} strokeWidth="0.6"/>

          {/* ── Left solar panel ── */}
          <rect
            x={LP.x} y={LP.y} width={LP.w} height={LP.h} rx={2}
            fill={`${CELL}0.18)`} stroke={`${ACC}0.45)`} strokeWidth="0.8"/>
          {/* panel grid */}
          {panelGrid(LP.x,LP.y,LP.w,LP.h).map((l,i)=>(
            <line key={`lg-${i}`}
              x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              stroke={`${ACC}0.18)`} strokeWidth="0.4"/>
          ))}
          {/* panel sheen */}
          <rect
            x={LP.x+4} y={LP.y+4} width={LP.w-8} height={LP.h-8} rx={1.5}
            fill="none" stroke={`${SAT}0.12)`} strokeWidth="0.4"/>

          {/* ── Main bus (body) ── */}
          <rect
            x={B.x} y={B.y} width={B.w} height={B.h} rx={3}
            fill={`${SAT}0.12)`} stroke={`${SAT}0.55)`} strokeWidth="0.9"/>
          {/* body thermal stripes */}
          {[1,2,3].map(k=>(
            <line key={`bs-${k}`}
              x1={B.x} y1={B.y+B.h*k/4}
              x2={B.x+B.w} y2={B.y+B.h*k/4}
              stroke={`${SAT}0.09)`} strokeWidth="0.5"/>
          ))}
          {/* body equipment panel (centre box) */}
          <rect
            x={B.x+16} y={B.y+14} width={B.w-32} height={B.h-28} rx={2}
            fill={`${SAT}0.08)`} stroke={`${ACC}0.30)`} strokeWidth="0.6"/>
          {/* main sensor / lens */}
          <motion.circle
            cx={B.x+B.w/2} cy={B.y+B.h/2} r={8}
            fill={`${ACC}0.14)`} stroke={`${ACC}0.55)`} strokeWidth="0.7"
            animate={{opacity:[0.55,1.0,0.55]}}
            transition={{duration:3.5,repeat:Infinity,ease:"easeInOut",delay:0.5}}
          />
          <circle cx={B.x+B.w/2} cy={B.y+B.h/2} r={3.5}
            fill={`${ACC}0.65)`}/>
          {/* corner thruster nozzles */}
          {[[B.x+4,B.y+4],[B.x+B.w-4,B.y+4],
            [B.x+4,B.y+B.h-4],[B.x+B.w-4,B.y+B.h-4]].map(([cx,cy],i)=>(
            <circle key={`th-${i}`} cx={cx} cy={cy} r={3}
              fill={`${SAT}0.08)`} stroke={`${SAT}0.35)`} strokeWidth="0.5"/>
          ))}

          {/* ── Right deployment arm ── */}
          <rect
            x={RA.x} y={RA.y} width={RA.w} height={RA.h} rx={1.5}
            fill={`${SAT}0.10)`} stroke={`${SAT}0.38)`} strokeWidth="0.6"/>

          {/* ── Right solar panel ── */}
          <rect
            x={RP.x} y={RP.y} width={RP.w} height={RP.h} rx={2}
            fill={`${CELL}0.18)`} stroke={`${ACC}0.45)`} strokeWidth="0.8"/>
          {panelGrid(RP.x,RP.y,RP.w,RP.h).map((l,i)=>(
            <line key={`rg-${i}`}
              x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              stroke={`${ACC}0.18)`} strokeWidth="0.4"/>
          ))}
          <rect
            x={RP.x+4} y={RP.y+4} width={RP.w-8} height={RP.h-8} rx={1.5}
            fill="none" stroke={`${SAT}0.12)`} strokeWidth="0.4"/>

          {/* ── Small side antenna (right of body) ── */}
          <line
            x1={B.x+B.w} y1={B.y+12}
            x2={B.x+B.w+22} y2={B.y+2}
            stroke={`${SAT}0.38)`} strokeWidth="0.6"/>
          <circle cx={B.x+B.w+22} cy={B.y+2} r={2.2}
            fill="none" stroke={`${ACC}0.40)`} strokeWidth="0.5"/>

          {/* ── Dashed orbital path ── */}
          <ellipse
            cx={NCX} cy={NCY+30}
            rx={155} ry={42}
            fill="none" stroke={`${ACC}0.06)`}
            strokeWidth="0.7" strokeDasharray="4 8"/>
        </motion.g>

        {/* Satellite arrival glow */}
        <motion.circle cx={NCX} cy={NCY} r={12} fill={`${ACC}0.07)`}
          animate={{r:[12,22,12],opacity:[0.07,0.20,0.07]}}
          transition={{duration:4.5,repeat:Infinity,ease:"easeInOut",delay:1.2}}/>

      </svg>
    </div>
  );
}
