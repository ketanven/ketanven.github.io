import { useEffect, useRef, useState } from 'react';

export default function AmbientBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      const isTouch = navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
      setIsMobile(window.innerWidth < 1024 || isTouch);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
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
          const radius = 0.5 + ((wave + 1) / 2) * 1.0;
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
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-b-3xl">
        {/* Soft, beautiful radial glowing gradients (aurora effect) */}
        <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[60%] rounded-full bg-blue-500/10 blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[-20%] w-[80%] h-[60%] rounded-full bg-purple-500/10 blur-[100px]"></div>
        
        {/* CSS Dot Grid Background with vignette mask */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          }}
        ></div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-b-3xl">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
