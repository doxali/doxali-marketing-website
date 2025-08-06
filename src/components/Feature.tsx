import React, { useEffect, useRef, useState } from 'react';

export default function Feature() {
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
      className="py-16 bg-white dark:bg-black text-[var(--foreground)]"
    >
      <div
        className={
          'max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-16 transition-all duration-1000 ' +
          (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')
        }
      >
        {/* Left: Image */}
        <div className="flex-1 w-full order-2 md:order-1">
          <div className="w-full rounded-2xl overflow-hidden border border-[#2fc4a0]/50 shadow-lg">
            <img
              src="/Doxaliapp.png"
              alt="Doxali App Interface"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex-1 order-1 md:order-2 text-left min-h-[500px]">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Meet Your<br />
            <span className="text-[#2fc4a0]">AI Document Assistant</span>
          </h2>
          <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl space-y-6">
            <p>Documents can be dense, slow, and costly to process.</p>
            <p>
              <span className="text-[#2fc4a0] font-semibold">Doxali’s AI Assistant</span> changes that — giving you an on-demand expert that pulls key clauses, summarizes contracts, and delivers structured insights in seconds.
            </p>
            <p>Built on GPT‑4. Optimized for real-world legal and technical use cases.</p>
            <p>
              Whether you're reviewing NDAs, leases, or technical specs, Doxali ensures you never miss a critical clause. With contextual understanding and structured extraction, it's built to save professionals time and reduce risk — while giving teams confidence in every decision they make.
            </p>
            <p>
              No more CTRL+F guesswork or endless scrolling. Doxali helps you zero in on obligations, renewal windows, and liability exposure instantly — making document comprehension faster, smarter, and more actionable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
