import React, { useEffect, useRef, useState } from 'react';
import EmailCaptureForm from './EmailCaptureForm';

export default function Newsletter() {
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
      className="bg-white dark:bg-black py-12"
    >
      <div
        className={`max-w-4xl mx-auto px-6 sm:px-10 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white">
          Join Our Inner Circle
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Get insights, product updates, and AI Powered tips delivered straight to your inbox — no fluff, just real value.
        </p>

        <div className="max-w-xl mx-auto">
          <EmailCaptureForm />
        </div>
      </div>
    </section>
  );
}