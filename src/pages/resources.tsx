import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, FileText, HelpCircle, MailOpen } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
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

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#d1fae5] to-white dark:from-[#2a2a2a] dark:via-[#111111] dark:to-black text-[var(--foreground)]">
      <Head>
        <title>Resources | Doxali</title>
      </Head>

      <Header />

      <main ref={sectionRef} className="flex-1 w-full max-w-5xl mx-auto px-6 md:px-10 py-20 space-y-20">
        <section
          className={
            "text-center opacity-0 transition-opacity" +
            (visible ? " animate-(--animate-fade-up-in)" : "")
          }
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Explore guides, documentation, and answers to help you make the most of Doxali.
          </p>
        </section>

        <section
          className={
            "grid md:grid-cols-2 gap-6 opacity-0 transition-opacity" +
            (visible ? " animate-(--animate-fade-up-in) [animation-delay:0.2s]" : "")
          }
        >
          <ResourceCard
            href="/blog"
            title="Doxali Blog"
            icon={<BookOpen className="w-5 h-5 text-[#2fc4a0]" />}
            description="Insights, tutorials, and product announcements."
          />
          <ResourceCard
            href="/faq"
            title="FAQs"
            icon={<HelpCircle className="w-5 h-5 text-[#2fc4a0]" />}
            description="Answers to common questions about using Doxali."
          />
          <ResourceCard
            href="/docs"
            title="Documentation"
            icon={<FileText className="w-5 h-5 text-[#2fc4a0]" />}
            description="Get detailed usage instructions and technical references."
          />
          <ResourceCard
            href="/contact"
            title="Contact Support"
            icon={<MailOpen className="w-5 h-5 text-[#2fc4a0]" />}
            description="Still need help? Get in touch with our team."
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ResourceCard({ href, title, icon, description }: {
  href: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-xl bg-white dark:bg-[#1a1a1a] p-6 shadow border border-gray-200 dark:border-white/10 hover:shadow-md transition block"
    >
      <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
        {icon} {title}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </Link>
  );
}
