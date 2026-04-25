import { useEffect, useRef } from 'react';

export default function NetworkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
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

    // Node particle definition
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }

    // Generate responsive amount of particles
    const getParticleCount = () => {
      const area = width * height;
      return Math.min(Math.floor(area / 10000), 120); // Scale down based on screen area to prevent lag
    };

    let particles: Particle[] = [];
    const initParticles = () => {
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4, // Slow drift
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.2 + 0.5
        });
      }
    };
    initParticles();

    // Re-initialize particles heavily on big resizes to distribute them correctly
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResizeEnd = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        initParticles();
      }, 300);
    };
    window.addEventListener('resize', handleResizeEnd);

    const draw = () => {
      // Deep pitch black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Update positions
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls smoothly
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      // Render connection lines (The "Network")
      const connectDistance = 140;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectDistance) {
            // Farther = more transparent
            let opacity = 1 - (distance / connectDistance);
            
            // Vignette calculation: lower opacity if line is near the edge of container
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;
            const distFromCenterX = Math.abs(midX - width / 2) / (width / 2);
            const distFromCenterY = Math.abs(midY - height / 2) / (height / 2);
            const edgeFade = 1 - Math.max(distFromCenterX, distFromCenterY);
            
            // Final edge fade calculation capping opacity heavily
            opacity = opacity * edgeFade * 0.3; // Max line opacity is 30%

            if (opacity > 0) {
              ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`; // Violet colored connections
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Render particle dots
      particles.forEach(p => {
        // Vignette on particles too
        const distFromCenterX = Math.abs(p.x - width / 2) / (width / 2);
        const distFromCenterY = Math.abs(p.y - height / 2) / (height / 2);
        const edgeFade = 1 - Math.max(distFromCenterX, distFromCenterY);
        
        ctx.fillStyle = `rgba(59, 130, 246, ${0.1 + edgeFade * 0.5})`; // Blue nodes
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (1 + edgeFade), 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResizeEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
