import React, { useEffect, useRef } from 'react';

interface RainEffectProps {
  className?: string;
}

const RainEffect: React.FC<RainEffectProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const drops: { x: number; y: number; length: number; speed: number; opacity: number }[] = [];
    const maxDrops = 150; // Performance balance

    for (let i = 0; i < maxDrops; i++) {
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 10 + 15,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    const draw = () => {
      // Clear with slight transparency for trail effect
      // This also serves as the dark background of the app
      ctx.fillStyle = 'rgba(5, 5, 5, 0.4)'; 
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';

      for (let i = 0; i < maxDrops; i++) {
        const drop = drops[i];
        
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.globalAlpha = drop.opacity;
        ctx.stroke();

        drop.y += drop.speed;

        // Reset drop to top if it goes off screen
        if (drop.y > height) {
          drop.y = -drop.length;
          drop.x = Math.random() * width;
        }
      }
      
      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    const animationFrame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={className || "absolute top-0 left-0 w-full h-full pointer-events-none z-0"}
    />
  );
};

export default RainEffect;