import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowParticles(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = (delay = 0) =>
    `transition-all duration-1000 delay-[${delay}ms] ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`;

  return (
    <section
      ref={ref}
  className="relative pt-8 pb-20 min-h-screen bg-gradient-to-b from-[#d1fae5] to-white dark:from-[#2a2a2a] dark:via-[#111111] dark:to-black text-[#0c1f1b] dark:text-white overflow-hidden"
    >
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#2fc4a0]"
              style={{
                bottom: 0,
                left: `${Math.random() * 100}%`,
                animation: `particleFloat ${10 + Math.random() * 8}s ease-in-out infinite`,
                transform: `translateY(0) scale(${0.5 + Math.random()})`,
                opacity: 0.4 + Math.random() * 0.3,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative text-center max-w-6xl mx-auto px-6 z-10">
        <h1 className={`text-6xl md:text-8xl font-black leading-tight mb-6 ${fadeIn()}`}>
          <span className="bg-gradient-to-r from-[#2fc4a0] via-[#28b093] to-[#2fc4a0] bg-clip-text text-transparent">
            AI Powered
          </span>
          <br />
          <span className="relative">Document Intelligence</span>
        </h1>

        <div className={fadeIn(300)}>
          <h2 className="text-xl md:text-3xl font-light mb-6 text-slate-700 dark:text-slate-300">
            Welcome to the{' '}
            <span className="font-bold text-[#2fc4a0] relative inline-block">
              Doxali
              <div className="absolute -bottom-1 left-1/2 w-24 h-1 bg-gradient-to-r from-[#2fc4a0] to-[#28b093] rounded-full transform -translate-x-1/2" />
            </span>{' '}
            Experience
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Transform your document management with cutting-edge AI technology.
            Streamline workflows, reduce risks, and unlock insights like never before.
          </p>
        </div>

        <div className={`mt-16 flex flex-col sm:flex-row justify-center gap-6 ${fadeIn(500)}`}>
          {/* Updated Get Started Button */}
          <a
            href="/launch"
            className="group relative font-bold px-10 py-4 rounded-full border-2 border-[#2fc4a0] text-[#2fc4a0] overflow-hidden transition-all"
          >
            <span className="relative z-10 text-white group-hover:text-[#2fc4a0] transition-colors duration-300">
              Get Started
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2fc4a0] to-[#28b093] transition-transform duration-300 group-hover:scale-x-0 origin-left scale-x-100 rounded-full z-0" />
          </a>

          {/* Learn More Button (unchanged) */}
          <Link
            href="/about"
            className="group relative border-2 border-[#2fc4a0] text-[#2fc4a0] font-bold px-10 py-4 rounded-full hover:text-white overflow-hidden transition-all"
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2fc4a0] to-[#28b093] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
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
