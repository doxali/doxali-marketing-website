import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import {
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Megaphone,
  Inbox
} from 'lucide-react';

export default function ContactPage() {
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
        <title>Contact Us | Doxali</title>
      </Head>

      <Header />

      <main ref={sectionRef} className="flex-1 w-full max-w-5xl mx-auto px-6 md:px-10 py-20 space-y-20">
        {/* Intro */}
        <section
          className={
            "text-center opacity-0 transition-opacity" +
            (visible ? " animate-(--animate-fade-up-in)" : "")
          }
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help?</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Get in touch with our sales and support teams for demos, onboarding support, or product questions.
          </p>
        </section>

        {/* Cards */}
        <section
          className={
            "grid md:grid-cols-2 gap-6 opacity-0 transition-opacity" +
            (visible ? " animate-(--animate-fade-up-in) [animation-delay:0.2s]" : "")
          }
        >
          <div className="rounded-xl bg-white dark:bg-[#1a1a1a] p-6 shadow border border-gray-200 dark:border-white/10">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#2fc4a0]" /> Sales
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Questions about plans, pricing, or enterprise contracts? Our sales team is here to help.
            </p>
            <a href="mailto:sales@doxali.com" className="text-sm text-[#2fc4a0] hover:text-[#28b093] font-medium">
              Talk to sales →
            </a>
          </div>

          <div className="rounded-xl bg-white dark:bg-[#1a1a1a] p-6 shadow border border-gray-200 dark:border-white/10">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#2fc4a0]" /> Help & Support
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Need help with abstraction or have product feedback? Get in touch with our support team.
            </p>
            <a href="mailto:support@doxali.com" className="text-sm text-[#2fc4a0] hover:text-[#28b093] font-medium">
              Contact support →
            </a>
          </div>
        </section>

        {/* Extra Info */}
        <section
          className={
            "grid md:grid-cols-2 gap-6 opacity-0 transition-opacity" +
            (visible ? " animate-(--animate-fade-up-in) [animation-delay:0.4s]" : "")
          }
        >
          <div>
            <h3 className="font-semibold text-lg mb-1">Join the community</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Connect with automation enthusiasts and ops leaders in our Discord.
            </p>
            <a href="https://discord.gg/doxali" className="text-sm text-[#2fc4a0] hover:text-[#28b093] font-medium">
              Join Discord →
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">General inquiries</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Got something else to ask? Send us an email.
            </p>
            <a href="mailto:hello@doxali.com" className="text-sm text-[#2fc4a0] hover:text-[#28b093] font-medium">
              hello@doxali.com
            </a>
          </div>
        </section>

        {/* Additional Info */}
        <section
          className={
            "grid md:grid-cols-2 gap-6 opacity-0 transition-opacity" +
            (visible ? " animate-(--animate-fade-up-in) [animation-delay:0.6s]" : "")
          }
        >
          <div>
            <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#2fc4a0]" /> Office Location
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Doxali HQ</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">123 AI Lane, Suite 400</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Austin, TX 78701</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#2fc4a0]" /> Business Hours
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Mon–Fri: 9am – 6pm CST</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Closed on weekends and holidays</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-[#2fc4a0]" /> Media & Partnerships
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              For press, PR, or partnership opportunities, reach out to our team directly.
            </p>
            <a href="mailto:press@doxali.com" className="text-sm text-[#2fc4a0] hover:text-[#28b093] font-medium">
              Contact media →
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
              <Inbox className="w-5 h-5 text-[#2fc4a0]" /> Stay in the Loop
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Be the first to know about product updates, launches, and tips.
            </p>
            <a href="#" className="text-sm text-[#2fc4a0] hover:text-[#28b093] font-medium">
              Subscribe to updates →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
