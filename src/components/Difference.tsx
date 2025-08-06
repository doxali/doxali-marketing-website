import React, { useEffect, useRef, useState } from 'react';
import { Brain, FileText, DollarSign } from 'lucide-react';

export default function Difference() {
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

  const features = [
    {
      title: 'AI Powered Smart Extraction',
      icon: <Brain className="w-8 h-8 text-[#2fc4a0] mx-auto mb-3" />,
      desc: 'Extract critical fields in seconds. Powered by GPT-4 and trained on real-world documents.',
      delay: '0s',
    },
    {
      title: 'Downloadable Smart Summaries',
      icon: <FileText className="w-8 h-8 text-[#2fc4a0] mx-auto mb-3" />,
      desc: 'Doxali transforms dense documents into structured downloadable summaries.',
      delay: '0.2s',
    },
    {
      title: 'Live Cost Estimates',
      icon: <DollarSign className="w-8 h-8 text-[#2fc4a0] mx-auto mb-3" />,
      desc: 'Unlike other platforms, Doxali shows pricing, token usage, and page count per upload.',
      delay: '0.4s',
    },
  ];

  return (
    <section
      ref={ref}
  className="relative bg-white dark:bg-black text-[#0c1f1b] dark:text-white py-12"
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2
          className={`text-3xl md:text-4xl font-semibold mb-16 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          How is Doxali Different?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-stretch">
          {features.map(({ title, icon, desc, delay }, idx) => (
            <div
              key={idx}
              style={{ animationDelay: delay }}
              className={`group flex transition-all duration-700 transform h-full ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex flex-col justify-between w-full min-h-full bg-gradient-to-b from-gray-100 to-white dark:from-[#1d1d1d] dark:to-[#111] border border-white/10 rounded-2xl p-8 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-[#2fc4a0]/20">
                <div>
                  {icon}
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="opacity-80 text-sm leading-relaxed">{desc}</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <a
                    href="/product"
                    className="text-sm text-[#2fc4a0] hover:underline font-medium"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
