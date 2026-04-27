"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  color: string;
  alpha: number;
  phase: number;
  speed: number;
  isNeuron: boolean;
  fireTimer: number;
  fireDelay: number;
  firing: boolean;
  fireR: number;
}

// Stars (background layer)
interface Star {
  x: number; y: number;
  r: number;
  phase: number;
  speed: number;
}

const PALETTE = [
  "100, 140, 255",  // electric blue
  "130,  70, 255",  // violet
  " 60, 200, 220",  // teal
  "242, 101,  34",  // TAVAS orange
  "180, 160, 255",  // lavender
  "200, 230, 255",  // ice white
];

export default function NeuralSpace() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const nodes: Node[] = [];
    const stars: Star[] = [];
    const CONN_DIST = 160;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      nodes.length = 0;
      stars.length = 0;
      const W = canvas.width, H = canvas.height;
      const area = W * H;

      // Background stars
      const starCount = Math.floor(area / 4000);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: 0.3 + Math.random() * 1.1,
          phase: Math.random() * Math.PI * 2,
          speed: 0.008 + Math.random() * 0.018,
        });
      }

      // Neural nodes
      const nodeCount = Math.floor(area / 14000);
      for (let i = 0; i < nodeCount; i++) {
        const isNeuron = Math.random() < 0.35;
        const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: isNeuron ? 2 + Math.random() * 2.5 : 0.8 + Math.random() * 1.2,
          color,
          alpha: isNeuron ? 0.6 + Math.random() * 0.4 : 0.3 + Math.random() * 0.5,
          phase: Math.random() * Math.PI * 2,
          speed: 0.018 + Math.random() * 0.025,
          isNeuron,
          fireTimer: Math.random() * 200,
          fireDelay: 80 + Math.random() * 280,
          firing: false,
          fireR: 0,
        });
      }
    };

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Background stars
      for (const s of stars) {
        s.phase += s.speed;
        const a = 0.35 + Math.sin(s.phase) * 0.25;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${a})`;
        ctx.fill();
      }

      // Update nodes
      for (const n of nodes) {
        n.phase += n.speed;
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0) n.x = W; if (n.x > W) n.x = 0;
        if (n.y < 0) n.y = H; if (n.y > H) n.y = 0;

        if (n.isNeuron) {
          n.fireTimer++;
          if (n.fireTimer >= n.fireDelay && !n.firing) {
            n.firing = true; n.fireR = 0;
          }
          if (n.firing) {
            n.fireR += 2;
            if (n.fireR > 55) {
              n.firing = false;
              n.fireTimer = 0;
              n.fireDelay = 80 + Math.random() * 280;
            }
          }
        }
      }

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONN_DIST) {
            const t = 1 - dist / CONN_DIST;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${a.color}, ${t * 0.18})`;
            ctx.lineWidth = t * 1.2;
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        const pulse = 0.7 + Math.sin(n.phase) * 0.3;
        const r = n.r * pulse;
        const a = n.alpha * pulse;

        if (n.isNeuron) {
          // Outer glow halo
          const halo = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 7);
          halo.addColorStop(0, `rgba(${n.color}, ${a * 0.55})`);
          halo.addColorStop(1, `rgba(${n.color}, 0)`);
          ctx.beginPath();
          ctx.arc(n.x, n.y, r * 7, 0, Math.PI * 2);
          ctx.fillStyle = halo;
          ctx.fill();

          // Firing ring
          if (n.firing && n.fireR > 0) {
            const ringA = (1 - n.fireR / 55) * 0.7;
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.fireR, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${n.color}, ${ringA})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${n.color}, ${Math.min(1, a * 1.6)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(() => { resize(); init(); });
    observer.observe(canvas);
    resize(); init(); draw();

    return () => { cancelAnimationFrame(animId); observer.disconnect(); };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
