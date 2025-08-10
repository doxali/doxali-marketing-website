import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

type Particle = {
  left: string;
  duration: number;
  scale: number;
  opacity: number;
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  // IntersectionObserver for fade-in animations
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Delay particle animation start
  useEffect(() => {
    const timer = setTimeout(() => setShowParticles(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Hydration-safe random particles
  const particles = useMemo<Particle[]>(() => {
    if (!showParticles) return [];
    return Array.from({ length: 40 }).map(() => ({
      left: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 8,
      scale: 0.5 + Math.random(),
      opacity: 0.4 + Math.random() * 0.3,
    }));
  }, [showParticles]);

  const fadeBase =
    'transition-all duration-1000 will-change-transform will-change-opacity';
  const fadeHidden = 'opacity-0 translate-y-8';
  const fadeShown = 'opacity-100 translate-y-0';
  const fadeIn = (delay = 0) => ({
    className: `${fadeBase} ${isVisible ? fadeShown : fadeHidden}`,
    style: { transitionDelay: `${delay}ms` } as React.CSSProperties,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#d1fae5] to-white dark:from-[#2a2a2a] dark:via-[#111111] dark:to-black text-[#0c1f1b] dark:text-white"
    >
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#2fc4a0]"
              style={{
                bottom: 0,
                left: p.left,
                animation: `particleFloat ${p.duration}s ease-in-out infinite`,
                transform: `translateY(0) scale(${p.scale})`,
                opacity: p.opacity,
              }}
            />
          ))}
        </div>
      )}

      {/* Content wrapper with min + max height */}
<div className="relative z-10 mx-auto max-w-screen-xl px-6 min-h-[min(600px,100svh)] py-16 md:py-24 lg:flex lg:flex-col lg:justify-center xl:justify-start">
        <h1
          {...fadeIn(0)}
          className="text-5xl md:text-7xl font-black leading-tight mb-6 text-center"
        >
          <span className="bg-gradient-to-r from-[#2fc4a0] via-[#28b093] to-[#2fc4a0] bg-clip-text text-transparent">
            AI Powered
          </span>
          <br />
          <span className="relative">Document Intelligence</span>
        </h1>

        <div {...fadeIn(200)} className="text-center">
          <h2 className="text-lg md:text-2xl font-light mb-6 text-slate-700 dark:text-slate-300">
            Welcome to the{' '}
            <span className="font-bold text-[#2fc4a0] relative inline-block">
              Doxali
              <span className="absolute -bottom-1 left-1/2 w-24 h-1 bg-gradient-to-r from-[#2fc4a0] to-[#28b093] rounded-full -translate-x-1/2" />
            </span>{' '}
            Experience
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Transform your document management with cutting-edge AI technology.
            Streamline workflows, reduce risks, and unlock insights like never before.
          </p>
        </div>

        <div
          {...fadeIn(400)}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link
            href="/launch"
            className="group relative font-bold px-10 py-4 rounded-full border-2 border-[#2fc4a0] text-[#2fc4a0] overflow-hidden transition-all inline-flex items-center justify-center"
          >
            <span className="relative z-10 text-white group-hover:text-[#2fc4a0] transition-colors duration-300">
              Get Started
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#2fc4a0] to-[#28b093] transition-transform duration-300 group-hover:scale-x-0 origin-left scale-x-100 rounded-full z-0" />
          </Link>

          <Link
            href="/about"
            className="group relative border-2 border-[#2fc4a0] text-[#2fc4a0] font-bold px-10 py-4 rounded-full hover:text-white overflow-hidden transition-all inline-flex items-center justify-center"
          >
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#2fc4a0] to-[#28b093] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes particleFloat {
          0% {
            transform: translateY(0) scale(0.6);
            opacity: 0;
          }
          30% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-80vh) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
