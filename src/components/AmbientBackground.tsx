import { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    let width = container.clientWidth;
    let height = container.clientHeight;

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    const draw = () => {
      time += 0.015;

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      const spacing = 25;
      const cols = Math.floor(width / spacing) + 1;
      const rows = Math.floor(height / spacing) + 1;

      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const isEvenRow = j % 2 === 0;
          const xOffset = isEvenRow ? 0 : spacing / 2;
          const x = i * spacing + xOffset;
          const y = j * spacing;

          const dx = x - centerX;
          const dy = y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.max(centerX, centerY);

          // Base opacity decreasing towards the edges
          let baseAlpha = 0.5 - (distance / maxDist) * 0.6;
          if (baseAlpha < 0) baseAlpha = 0;

          const wave = Math.sin(distance * 0.02 - time);
          const radius = 0.5 + ((wave + 1) / 2) * 1.0; // slightly smaller top size
          const alpha = baseAlpha * (0.4 + ((wave + 1) / 2) * 0.6);

          if (alpha > 0.005) {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-b-3xl">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
