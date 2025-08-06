import React, { useEffect, useRef, useState } from 'react';

export default function Demo() {
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
      id="product"
      className="py-15 text-center bg-white dark:bg-black text-[var(--foreground)]"
    >
      <h2
        className={
          "text-3xl md:text-4xl font-semibold mb-4 opacity-0 transition-opacity" +
          (isVisible ? " animate-(--animate-fade-up-in)" : "")
        }
      >
        Doxali in Action
      </h2>

      <p
        className={
          "opacity-0 max-w-xl mx-auto mb-10 transition-opacity" +
          (isVisible
            ? " animate-(--animate-fade-up-in) [animation-delay:0.2s]"
            : "")
        }
      >
        Designed to Accelerate Document Reviews and Eliminate Manual Work. See How Doxali Turns Complex Documents into Downloadable Summaries.
      </p>

      <div
        className={
          "max-w-4xl mx-auto px-4 opacity-0 transition-opacity" +
          (isVisible
            ? " animate-(--animate-fade-up-in) [animation-delay:0.4s]"
            : "")
        }
      >
<div className="rounded-xl overflow-hidden shadow-xl border-[1px] border-[#2fc4a0]">
          <video
            src="/uploaddemo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
