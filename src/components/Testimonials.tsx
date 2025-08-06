import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: "I uploaded a lease and got clean data back in seconds. Total game-changer.",
    name: "Katie L.",
    title: "Operations Associate",
  },
  {
    quote: "We used to abstract by hand — now it takes minutes, not days.",
    name: "Angela P.",
    title: "Paralegal",
  },
  {
    quote: "Doxali helps us scale diligence without hiring more analysts.",
    name: "Luis R.",
    title: "VP, Acquisitions",
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 bg-white dark:bg-black text-center text-[var(--foreground)]"
    >
      <h2
        className={
          'text-3xl md:text-4xl font-semibold mb-12 transition-opacity duration-700 opacity-0' +
          (isVisible ? ' opacity-100 animate-[fade-up-in_0.6s_ease-out]' : '')
        }
      >
        What Our Users Say
      </h2>

      <div className="flex justify-center overflow-visible">
        <div className="w-full max-w-2xl px-6 overflow-visible">
          <div className="group transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#2fc4a0]/20 overflow-visible rounded-2xl shadow-md">
            <div className="bg-gradient-to-b from-gray-100 to-white dark:from-[#1d1d1d] dark:to-[#111] border border-white/10 rounded-2xl p-8 min-h-[200px] flex flex-col justify-between text-left">
              <blockquote className="italic text-base mb-4 text-gray-800 dark:text-gray-100">
                “{testimonials[index].quote}”
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonials[index].name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonials[index].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index
                ? 'bg-[#2fc4a0]'
                : 'bg-gray-300 dark:bg-gray-700 hover:bg-[#2fc4a0]/50'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
