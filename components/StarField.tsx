"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Star = {
      x: number; y: number;
      r: number;
      baseAlpha: number; alpha: number;
      speed: number; phase: number;
      color: string;
    };

    const COLORS = ["255,255,255", "200,220,255", "255,240,200", "180,200,255"];

    const stars: Star[] = Array.from({ length: 220 }, () => ({
      x:         Math.random() * canvas.width,
      y:         Math.random() * canvas.height,
      r:         Math.random() * 1.4 + 0.2,
      baseAlpha: Math.random() * 0.6 + 0.2,
      alpha:     0,
      speed:     Math.random() * 0.008 + 0.002,   // twinkle speed
      phase:     Math.random() * Math.PI * 2,       // twinkle offset
      color:     COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    // A handful of larger bright stars with glow
    const brightStars = Array.from({ length: 12 }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      r:     Math.random() * 1.8 + 1.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.005 + 0.002,
    }));

    let t = 0;
    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // regular stars — twinkle via sine wave
      stars.forEach(s => {
        s.alpha = s.baseAlpha * (0.55 + 0.45 * Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color},${s.alpha})`;
        ctx.fill();
      });

      // bright stars with soft glow
      brightStars.forEach(s => {
        const alpha = 0.5 + 0.5 * Math.sin(t * s.speed + s.phase);
        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 8);
        g.addColorStop(0, `rgba(200,220,255,${alpha * 0.9})`);
        g.addColorStop(0.3, `rgba(180,200,255,${alpha * 0.3})`);
        g.addColorStop(1,   `rgba(180,200,255,0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 8, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,248,255,${alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
