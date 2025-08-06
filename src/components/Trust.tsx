import React, { useEffect, useRef, useState } from 'react';

const logos = [
  { src: '/logos/stripe.svg', alt: 'Stripe' },
  { src: '/logos/aws.svg', alt: 'AWS' },
  { src: '/logos/clerk.svg', alt: 'Clerk' },
  { src: '/logos/plausible.svg', alt: 'Plausible' },
  { src: '/logos/github.svg', alt: 'GitHub' },
  { src: '/logos/cloudflare.svg', alt: 'Cloudflare' },
  { src: '/logos/render.svg', alt: 'Render' },
  { src: '/logos/openai.svg', alt: 'OpenAI' },
  { src: '/logos/kit.svg', alt: 'Kit' },
];

export default function Trust() {
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
      className="py-12 bg-white dark:bg-black text-center text-[var(--foreground)]"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className={
            "text-2xl md:text-3xl font-semibold mb-4 opacity-0 transition-opacity" +
            (isVisible ? " animate-(--animate-fade-up-in)" : "")
          }
        >
          Built for Trust. Backed by Proven Infrastructure.
        </h2>

        <p
          className={
            "opacity-0 mb-10 text-base md:text-lg transition-opacity" +
            (isVisible
              ? " animate-(--animate-fade-up-in) [animation-delay:0.15s]"
              : "")
          }
        >
          Doxali runs on the same modern infrastructure trusted by the best teams in tech — 
          including GitHub, AWS, Cloudflare, and OpenAI. From authentication to AI to analytics, 
          every part of our stack is engineered for speed, security, and reliability. Your legal data is encrypted, 
          your experience is fast, and your privacy is respected — by design.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">
          {logos.map((logo, index) => (
            <img
  key={index}
  src={logo.src}
  alt={logo.alt}
  className={
    "h-8 mx-auto py-1 grayscale hover:grayscale-0 dark:invert transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 opacity-0" +
    (isVisible
      ? ` animate-(--animate-fade-up-in) [animation-delay:${0.2 + index * 0.05}s]`
      : "")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
