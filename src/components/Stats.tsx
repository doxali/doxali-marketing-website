import React, { useEffect, useRef, useState } from 'react';

function formatNumber(num: number | string): string {
  return typeof num === 'number' ? num.toLocaleString('en-US') : num;
}

interface Stat {
  value: string;
  label: string;
}

const AnimatedNumber: React.FC<{ target: number | string; isVisible: boolean }> = ({ target, isVisible }) => {
  const [count, setCount] = useState(0);
  const duration = 2000;
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);

  useEffect(() => {
    if (!isVisible || typeof target !== 'number') return;

    const increment = target / totalFrames;
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      setCount((prev) => Math.min(prev + increment, target));
      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isVisible, target, totalFrames]);

  return (
    <span>
      {typeof target === 'number' ? formatNumber(Math.round(count)) : target}
    </span>
  );
};

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

const stats: Stat[] = [
  { value: '110', label: 'Document Types Supported' },
  { value: '12', label: 'AI-Powered Add-On Features' },
  { value: '90', label: 'Minutes Saved per Abstraction' },
  { value: '99', label: 'Uptime Reliability (%)' },
  { value: '43', label: 'Industries Served' },
  { value: '28', label: 'Platform Integrations' },
];

  return (
    <section
      ref={ref}
      className="relative py-6 bg-white dark:bg-black border-b border-gray-100 dark:border-white/5"
    >
      <div className="text-center max-w-4xl mx-auto px-6">
        <h2
          className={`text-5xl font-extrabold mb-6 tracking-tight transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } text-[#0c1f1b] dark:text-white`}
        >
          Doxali Workflow Automation
        </h2>
        <p
          className={`text-xl text-gray-600 dark:text-gray-400 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Discover the transformative power of our AI-driven platform in action.
        </p>

        <div className="flex justify-center mt-8">
          <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#2fc4a0]/10 border border-[#2fc4a0]/20 text-[#2fc4a0] font-semibold text-sm shadow-sm animate-pulse">
            Real-World Impact
          </span>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-8 max-w-7xl mx-auto">
        {stats.map(({ value, label }, idx) => {
          const isNumeric = /^[\d,]+$/.test(value.replace(/[^\d]/g, ''));
          const target = isNumeric ? parseInt(value.replace(/[^\d]/g, ''), 10) : value;

          return (
            <div
              key={label}
              className={`group transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="overflow-hidden rounded-2xl shadow-md transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-[#2fc4a0]/20">
                <div className="bg-gradient-to-b from-gray-100 to-white dark:from-[#1d1d1d] dark:to-[#111] border border-white/10 rounded-2xl p-8 text-center">
                  <p className="text-4xl font-black text-[#0c1f1b] dark:text-white">
                    <AnimatedNumber target={target} isVisible={isVisible} />
                  </p>
                  <p className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-300">
                    {label}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
