import React, { useEffect, useRef, useState } from 'react';

const steps = [
  {
    title: 'Step 1: Upload Your Legal Document',
    description:
      'Start by uploading any contract, agreement, or legal file. Doxali supports a wide range of formats — just drag and drop or select from your device.',
  },
  {
    title: 'Step 2: Let AI Analyze Key Terms',
    description:
      'Our precision-trained AI scans your document for critical clauses, terms, and values. It highlights essentials like dates, obligations, payments, and more.',
  },
  {
    title: 'Step 3: Review Structured Output',
    description:
      'Instantly view a clean, editable summary of your document. This includes extracted key terms, definitions, and obligations in a digestible format built for legal clarity.',
  },
  {
    title: 'Step 4: Export or Generate Reports',
    description:
      'Download your structured results as Excel, JSON, or shareable formats. Use the data for internal tracking, negotiations, or client reporting.',
  },
  {
    title: 'Step 5: Save Time, Reduce Errors',
    description:
      'Doxali replaces hours of document review with minutes of precision. Avoid missed details and streamline your workflow with confidence and control.',
  },
];

export default function HowItWorks() {
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

  return (
    <section
      ref={ref}
className="relative py-12 px-6 bg-white dark:bg-black text-[#0c1f1b] dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h3
          className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          How Doxali Works
        </h3>

        <div className="flex flex-col space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`relative w-full transition-all duration-700 ease-out transform group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Floating Step Badge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 rounded-full bg-[#2fc4a0] text-white text-center font-bold text-lg leading-[3rem] shadow-xl">
                  {index + 1}
                </div>
              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-2xl shadow-md transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-[#2fc4a0]/20">
                <div className="bg-gradient-to-b from-gray-100 to-white dark:from-[#1d1d1d] dark:to-[#111] border border-white/10 rounded-2xl pt-10 p-8 text-center">
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
