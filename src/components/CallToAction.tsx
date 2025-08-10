import React, { useEffect, useRef, useState } from 'react';
import EmailCaptureForm from './EmailCaptureForm';

export default function Newsletter2() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
const [showParticles, setShowParticles] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setShowParticles(true), 3000);
  return () => clearTimeout(timer);
}, []);

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

  return (
    <section
      ref={ref}
  className="relative overflow-hidden pt-6 pb-20 min-h-screen bg-gradient-to-t from-[#d1fae5] to-white dark:from-[#2a2a2a] dark:via-[#111111] dark:to-black text-[#0c1f1b] dark:text-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2fc4a0]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#22d3ee]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#6366f1]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent bg-[size:40px_40px] dark:from-white"></div>
      </div>

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

      <div
        className={`relative max-w-5xl mx-auto text-center px-6 sm:px-10 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >

        {/* Headline */}
<h2 className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 transition-all duration-1000 delay-500 ${
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
}`}>
  <span className="bg-gradient-to-r from-[#2fc4a0] to-[#2fc4a0] bg-clip-text text-transparent">Document Extraction</span>
  <br />
  <span className="text-[#0c1f1b] dark:text-white">in Minutes</span>
</h2>

        {/* Badge */}
        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-[#2fc4a0]/10 border border-[#2fc4a0]/20 mb-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="w-2 h-2 bg-[#2fc4a0] rounded-full mr-2 animate-pulse"></div>
          <span className="text-sm font-medium text-[#2fc4a0]">AI Powered Document Extraction</span>
        </div>


        {/* Subtitle */}
        <p className={`text-xl sm:text-2xl text-slate-700 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Experience the future of document analysis with{' '}
          <span className="text-[#2fc4a0] font-semibold">AI Precision</span> that understands Context, Extracts highlights, and delivers faster results for your team.
        </p>

        {/* Feature highlights with icons */}
        <div className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {[
            {
              icon: (
                <svg className="w-5 h-5 text-[#2fc4a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              text: 'Lightning Fast',
            },
            {
              icon: (
                <svg className="w-5 h-5 text-[#2fc4a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              text: 'AI with Specific Context',
            },
            {
              icon: (
                <svg className="w-5 h-5 text-[#2fc4a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              text: 'Private & Secure',
            },
            {
              icon: (
                <svg className="w-5 h-5 text-[#2fc4a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              text: 'Smart Dashboard',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 bg-white/40 dark:bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-white/10"
            >
              {feature.icon}
              <span className="text-sm font-medium text-[#0c1f1b] dark:text-white">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`mb-12 transition-all duration-1000 delay-1100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <a
            href="/launch"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#2fc4a0] rounded-2xl shadow-xl hover:bg-[#26b396] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <span className="relative flex items-center">
              Get Started Now
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>

      </div>
         {/* Trust indicators */}
<div className="flex justify-center items-center space-x-8 mt-12 ...">
  <div className="flex items-center space-x-2">
    <div className="w-3 h-3 bg-[#2fc4a0] rounded-full"></div>
    <span className="text-xs text-slate-700 dark:text-slate-400">99.9% Uptime</span>
  </div>
  <div className="w-px h-4 bg-gray-300 dark:bg-slate-600"></div>
  <div className="flex items-center space-x-2">
    <div className="w-3 h-3 bg-[#6fe1c3] rounded-full"></div>
    <span className="text-xs text-slate-700 dark:text-slate-400">SOC 2 Compliant</span>
  </div>
  <div className="w-px h-4 bg-gray-300 dark:bg-slate-600"></div>
  <div className="flex items-center space-x-2">
    <div className="w-3 h-3 bg-[#a4f0da] rounded-full"></div>
    <span className="text-xs text-slate-700 dark:text-slate-400">GDPR Ready</span>
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