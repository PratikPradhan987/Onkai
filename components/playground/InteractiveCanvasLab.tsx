'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function InteractiveCanvasLab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(true);
  const [mode, setMode] = useState<'wave' | 'particles'>('wave');
  const animFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    const height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    // Particle nodes
    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 3 + 1.5,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (mode === 'wave') {
        // Multi-frequency synthesis wave
        ctx.beginPath();
        ctx.strokeStyle = '#ff5c00';
        ctx.lineWidth = 3;

        for (let x = 0; x < width; x += 3) {
          const y1 = Math.sin((x * 0.008) + time) * (height * 0.15);
          const y2 = Math.cos((x * 0.015) - time * 0.8) * (height * 0.08);
          const y = height / 2 + y1 + y2;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Secondary harmonic glow
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 92, 0, 0.25)';
        ctx.lineWidth = 6;
        for (let x = 0; x < width; x += 4) {
          const y1 = Math.sin((x * 0.008) + time) * (height * 0.15);
          const y2 = Math.cos((x * 0.015) - time * 0.8) * (height * 0.08);
          const y = height / 2 + y1 + y2;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      } else {
        // Connected particle network
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#ff5c00';
          ctx.fill();

          // Connect nearby particles
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(255, 92, 0, ${1 - dist / 120 * 0.8})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }

      time += 0.03;
      if (isRunning) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    if (isRunning) {
      animFrameRef.current = requestAnimationFrame(render);
    }

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isRunning, mode]);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-surface-border space-y-4 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-surface-border/60 pb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-onkai-orange" aria-hidden="true" />
          <h2 className="text-lg font-bold text-white">
            Interactive Signal Laboratory
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={mode === 'wave' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setMode('wave')}
          >
            Wave Synthesis
          </Button>
          <Button
            variant={mode === 'particles' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setMode('particles')}
          >
            Particle Network
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsRunning(!isRunning)}
            aria-label={isRunning ? 'Pause simulation' : 'Play simulation'}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </Button>
        </div>
      </div>

      <div className="relative h-64 sm:h-80 w-full rounded-2xl bg-surface-elevated overflow-hidden border border-surface-border/60">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          aria-label="Interactive generative audio waveform and particle simulation"
          role="img"
        />
        <div className="absolute bottom-3 left-4 text-[11px] font-mono text-text-muted pointer-events-none">
          CANVAS2D // 60FPS SYNTHESIS BUFFER
        </div>
      </div>
    </div>
  );
}
