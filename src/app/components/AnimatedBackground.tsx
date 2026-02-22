import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particles
    const particles: Particle[] = [];
    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
      });
    }

    // Network nodes
    const nodes: Node[] = [];
    const nodeCount = 30;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      });
    }

    // Code symbols
    const codeSymbols = ['{', '}', '<', '>', '/', '(', ')', '[', ']', ';', '=', '+', '-', '*'];
    const floatingSymbols: Array<{
      x: number;
      y: number;
      vy: number;
      symbol: string;
      opacity: number;
    }> = [];
    for (let i = 0; i < 15; i++) {
      floatingSymbols.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vy: -0.15 - Math.random() * 0.2,
        symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        opacity: 0.1 + Math.random() * 0.15,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.4)';
        ctx.fill();
      });

      // Draw and update nodes with connections
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - distance / 150)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8);
        gradient.addColorStop(0, 'rgba(167, 139, 250, 0.8)');
        gradient.addColorStop(1, 'rgba(167, 139, 250, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw and update floating code symbols
      floatingSymbols.forEach((symbol) => {
        symbol.y += symbol.vy;
        if (symbol.y < -20) {
          symbol.y = canvas.height + 20;
          symbol.x = Math.random() * canvas.width;
        }

        ctx.font = '16px monospace';
        ctx.fillStyle = `rgba(156, 163, 175, ${symbol.opacity})`;
        ctx.fillText(symbol.symbol, symbol.x, symbol.y);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: 'linear-gradient(to bottom, #030712, #0f172a)' }}
    />
  );
}
