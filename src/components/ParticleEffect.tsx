import React, { useEffect, useRef } from 'react';
import '../index.css';

const ParticleEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const particlesContainer = containerRef.current;
    if (!particlesContainer) return;
    const particleCount = 80;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';

      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      const pos = resetParticle(particle);
      particlesContainer.appendChild(particle);
      animateParticle(particle, pos);
    };

    const resetParticle = (particle: HTMLDivElement) => {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = '0';

      return { x: posX, y: posY };
    };

    const animateParticle = (particle: HTMLDivElement, pos: { x: number; y: number }) => {
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30;

        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        setTimeout(() => {
          animateParticle(particle, resetParticle(particle));
        }, duration * 1000);
      }, delay * 1000);
    };

    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      const particle = document.createElement('div');
      particle.className = 'particle';

      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = '0.6';

      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.style.transition = 'all 2s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = '0';

        setTimeout(() => particle.remove(), 2000);
      }, 10);

      const spheres = document.querySelectorAll<HTMLElement>('.gradient-sphere');
      const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 5;

      spheres.forEach((sphere) => {
        sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={containerRef} id="particles-container" />;
};

export default ParticleEffect;
