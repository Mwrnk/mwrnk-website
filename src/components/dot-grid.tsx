'use client';

import { useEffect, useRef } from 'react';

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const spacing = 28;
    const baseRadius = 1.2;
    const rippleRadius = 220;
    const rippleStrength = 3.5;
    let cols: number, rows: number;
    let dots: { baseX: number; baseY: number; x: number; y: number; radius: number; alpha: number }[];
    let mouseX = -9999, mouseY = -9999;
    let smoothMouseX = -9999, smoothMouseY = -9999;
    let scrollY = 0;
    let animFrameId: number;

    function initGrid() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = window.innerWidth + 'px';
      canvas!.style.height = window.innerHeight + 'px';
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(window.innerWidth / spacing) + 2;
      rows = Math.ceil(window.innerHeight / spacing) + 2;
      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ baseX: c * spacing, baseY: r * spacing, x: c * spacing, y: r * spacing, radius: baseRadius, alpha: 0.12 });
        }
      }
    }

    initGrid();

    const onResize = () => initGrid();
    const onMouseMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onMouseLeave = () => { mouseX = -9999; mouseY = -9999; };
    const onScroll = () => { scrollY = window.scrollY; };

    window.addEventListener('resize', onResize);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll);

    function animate(time: number) {
      const t = time * 0.001;
      smoothMouseX += (mouseX - smoothMouseX) * 0.08;
      smoothMouseY += (mouseY - smoothMouseY) * 0.08;

      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const offsetY = -(scrollY % spacing);
        const drawY = dot.baseY + offsetY;

        const dx = dot.baseX - smoothMouseX;
        const dy = drawY - smoothMouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const rippleFactor = Math.max(0, 1 - dist / rippleRadius);
        const wave = Math.sin(dist * 0.04 - t * 2.5) * rippleFactor;

        const angle = Math.atan2(dy, dx);
        const push = rippleFactor * rippleFactor * 8;
        const targetX = dot.baseX + Math.cos(angle) * push;
        const targetY = drawY + Math.sin(angle) * push;

        dot.x += (targetX - dot.x) * 0.12;
        dot.y += (targetY - dot.y) * 0.12;

        const sizeBoost = rippleFactor * rippleStrength;
        const targetRadius = baseRadius + sizeBoost + wave * 1.2;
        dot.radius += (Math.max(0.4, targetRadius) - dot.radius) * 0.15;

        const baseAlpha = 0.1;
        const targetAlpha = baseAlpha + rippleFactor * 0.55 + wave * 0.08;
        dot.alpha += (Math.max(0.06, Math.min(0.7, targetAlpha)) - dot.alpha) * 0.12;

        ctx!.beginPath();
        ctx!.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${dot.alpha})`;
        ctx!.fill();
      }

      animFrameId = requestAnimationFrame(animate);
    }

    animFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
