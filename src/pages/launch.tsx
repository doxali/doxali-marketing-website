import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailCaptureForm from '@/components/EmailCaptureForm';

export default function LaunchPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const fadeInBase = "opacity-0 transition-opacity duration-700 ease-out";
  const fadeInActive = "animate-fade-up-in";

  return (
<div className="min-h-screen flex flex-col bg-gradient-to-b from-[#d1fae5] to-white dark:from-[#2a2a2a] dark:via-[#111111] dark:to-black text-[var(--foreground)]">
      <Head>
        <title>Launching Soon | Doxali</title>
      </Head>

      <Header />

      <main ref={sectionRef} className="flex-1 max-w-2xl mx-auto px-6 py-24 text-center space-y-10">
        <section className={`${fadeInBase} ${visible ? fadeInActive : ''}`}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            We're Putting on the Finishing Touches
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
            Doxali is almost ready. Sign up below and we’ll notify you the moment our AI Powered Extraction platform goes live.
          </p>
        </section>

        <section className={`${fadeInBase} ${visible ? fadeInActive : ''}`}>
          <EmailCaptureForm />
        </section>

        <section className={`${fadeInBase} ${visible ? fadeInActive : ''}`}>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            We respect your inbox. Only major updates — no spam, ever.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
