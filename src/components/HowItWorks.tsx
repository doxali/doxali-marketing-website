import React, { useEffect, useRef, useState } from 'react';

const steps = [
{
  title: 'Step 1: Upload Your Document',
  description:
    'Start by uploading a contract, agreement, or supported file. Doxali accepts PDFs, Word docs, and text-based formats, just drag and drop or select from your device.',
},
{
  title: 'Step 2: AI Powered Document Extraction',
  description:
    'Our GPT-4-enhanced AI scans the document to extract key terms: including dates, payments, obligations, and important clause informaion with contextual awareness.',
},
{
  title: 'Step 3: AI Structured Document Summary',
  description:
    'Quickly review a clean, structured summary of all extracted terms. Sections are organized by clause type and include definitions, conditions, and counterparties.',
},
{
  title: 'Step 4: Export Your AI Extraction',
  description:
    'Download a ready-to-use Excel file with extracted key terms organized and labeled. Great for internal tracking, collaboration, or keeping your records clean and searchable.',
},
{
  title: 'Step 5: Automate Workflows with Doxali',
  description:
    'Doxali eliminates busywork so you can focus on decisions, not details. Whether you’re onboarding clients, reviewing vendor terms, or building internal processes, our AI helps you move with context and speed.',
}
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
