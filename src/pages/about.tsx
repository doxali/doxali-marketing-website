import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQAbout from '@/components/FAQAbout';

const SNAPSHOT_METRICS = [
  { label: 'Docs Abstracted', value: '6.8k+' },
  { label: 'Fields Extracted', value: '100,459k+' },
  { label: 'Hours Saved', value: '10,977' },
  { label: 'Founded', value: '2025' },
];

const MILESTONES = [
  {
    date: 'MAR 2025',
    title: 'Public Launch',
    description: 'After a focused six-month beta, Doxali officially launched to the public — marking a new era in extraction powered by AI.',
  },
  {
    date: 'AUG 2025',
    title: '10,000+ Documents Abstracted',
    description: 'Surpassed 10k processed documents, proving Doxali’s value in accelerating document reviews at scale.',
  },
  {
    date: 'JAN 2026',
    title: 'AI Model v2 Deployed',
    description: 'Rolled out next-gen contextual extractions, enabling deeper understanding across diverse contractual agreements.',
  },
  {
    date: 'APR 2026',
    title: 'Series A Secured',
    description: 'Closed Series A funding to expand our engineering team, scale infrastructure, and strengthen industry partnerships.',
  },
];

const LEADERS = [
  {
    name: 'Steven McGee',
    role: 'Founder & Lead Developer',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format',
    linkedin: 'https://www.linkedin.com/in/alexnguyen',
  },
  {
    name: 'Luciano Pieroni',
    role: 'Sales & Operation Manager',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format',
    linkedin: 'https://www.linkedin.com/in/jamiepatel',
  },
  {
    name: 'Alfred Adler',
    role: 'Marketing & Strategy Director',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format',
    linkedin: 'https://www.linkedin.com/in/rileychen',
  },
  {
    name: 'Sandra Soot',
    role: 'Finance & Accounting Officer',
    photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&auto=format',
    linkedin: 'https://www.linkedin.com/in/drewcarter',
  },
];

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-start p-4 rounded-xl shadow-sm border border-gray-200 dark:border-white/20 bg-white dark:bg-[#2a2a2a] w-full sm:w-auto opacity-0 transition-opacity animate-(--animate-fade-up-in)">
      <span className="text-4xl font-extrabold tracking-tight text-[var(--foreground)]">{value}</span>
      <span className="text-sm uppercase tracking-wide mt-1 text-[#2fc4a0] font-medium">{label}</span>
    </div>
  );
}

function Milestone({ date, title, description }: { date: string; title: string; description: string }) {
  return (
    <div className="snap-center shrink-0 w-64 sm:w-72 md:w-80 p-4 rounded-xl shadow-md border border-gray-200 dark:border-white/20 bg-white dark:bg-[#2a2a2a] opacity-0 transition-opacity animate-(--animate-fade-up-in)">
      <p className="text-xs font-semibold text-[#2fc4a0] mb-1">{date}</p>
      <h3 className="text-lg font-bold mb-1 leading-snug text-[var(--foreground)]">{title}</h3>
      <p className="text-sm text-[var(--foreground)] opacity-80 leading-snug">{description}</p>
    </div>
  );
}

function LeaderCard({ name, role, photo, linkedin }: { name: string; role: string; photo: string; linkedin: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 p-4 bg-white dark:bg-[#2a2a2a] rounded-xl shadow-sm opacity-0 transition-opacity animate-(--animate-fade-up-in)">
      <Image src={photo} alt={name} width={96} height={96} className="rounded-full object-cover shadow-lg" />
      <h4 className="font-semibold text-lg text-[var(--foreground)]">{name}</h4>
      <p className="text-sm text-gray-400 dark:text-gray-500 mb-1">{role}</p>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-[#2fc4a0] text-xs underline">
        LinkedIn ↗
      </a>
    </div>
  );
}

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
const [visible, setVisible] = useState(true);

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
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
<div className="min-h-screen flex flex-col bg-gradient-to-b from-[#d1fae5] to-white dark:from-[#2a2a2a] dark:via-[#111111] dark:to-black transition-colors duration-300">
      <Header />

<main
  ref={sectionRef}
  className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-10 pt-16 space-y-24 text-[var(--foreground)]"
>
      {/* Hero + Metrics */}
<section
  className={
    "grid md:grid-cols-2 gap-16 items-center opacity-0 transition-opacity" +
    (visible ? " animate-[fade-up-in_0.6s_ease-out_forwards]" : "")
  }
>
  <div>
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
      AI That Understands Documents.<br />
      <span className="text-[#2fc4a0]">Structured. Secure. Scalable.</span>
    </h1>
    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-prose mb-8">
      Doxali extracts critical clauses, structures your data, and summarizes complex documents — all in seconds, with real-world data precision.
    </p>
    <Link
      href="/launch"
      className="inline-block bg-white text-[#2fc4a0] font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
    >
      Get Started Free
    </Link>
  </div>

  <div className="grid grid-cols-2 gap-6 self-start">
    {SNAPSHOT_METRICS.map(({ value, label }) => (
      <StatCard key={label} value={value} label={label} />
    ))}
  </div>
</section>

{/* Leadership */}
        <section
          className={
            "space-y-10 opacity-0 transition-opacity" +
            (visible ? " animate-(--animate-fade-up-in) [animation-delay:0.3s]" : "")
          }
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Leadership & Culture</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {LEADERS.map((leader) => (
              <LeaderCard key={leader.name} {...leader} />
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section
          className={
            "space-y-6 opacity-0 transition-opacity" +
            (visible ? " animate-(--animate-fade-up-in) [animation-delay:0.15s]" : "")
          }
        >
          <h2 className="text-3xl font-bold mb-2 text-center">Our Journey</h2>
          <div className="relative">
            <button
              className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gray-200 dark:border-white/20 bg-white dark:bg-[#2a2a2a] shadow-lg"
              onClick={() => document.getElementById('timeline-track')?.scrollBy({ left: -300, behavior: 'smooth' })}
            >
              <ArrowLeft className="w-4 h-4 text-[var(--foreground)]" />
            </button>
            <button
              className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gray-200 dark:border-white/20 bg-white dark:bg-[#2a2a2a] shadow-lg"
              onClick={() => document.getElementById('timeline-track')?.scrollBy({ left: 300, behavior: 'smooth' })}
            >
              <ArrowRight className="w-4 h-4 text-[var(--foreground)]" />
            </button>
            <div id="timeline-track" className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">
              {MILESTONES.map((m) => (
                <Milestone key={m.date} {...m} />
              ))}
            </div>
          </div>
        </section>

        {/* Vision + Origin */}
        <section
          className={
            "space-y-6 opacity-0 transition-opacity" +
            (visible ? " animate-(--animate-fade-up-in) [animation-delay:0.45s]" : "")
          }
        >
          <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
  Operations should be a launchpad, not a roadblock.
</p>
<p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
  At Doxali, we believe teams should spend their time driving strategic decisions, not buried in repetitive admin work.
</p><p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
  That’s why we built a precision-engineered platform that automates contract analysis, document review, and term Extraction. We eliminate the bottlenecks so teams can move faster, operate smarter, and deliver higher value across the business.
</p>
          <h2 className="text-3xl font-bold mt-8">How It Started</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
  It began in a war room at midnight.
</p>

<p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
  The deal was massive, one of those high-pressure, make-or-break transactions. But instead of finalizing terms, the our team was still combing through a 200-page contract, highlighting clauses by hand and cross-checking outdated spreadsheets. Tempers flared. Deadlines slipped. And what should have been strategic work felt more like digital janitorial duty.
</p>

<p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
  That night, one of our founders a former M&A Attorney, had enough. He called two longtime collaborators: an AI Engineer with a background in natural language processing, and a UX Designer who had streamlined systems for fast-moving startups. The question was simple:
</p>

<p className="text-gray-600 dark:text-gray-400 mt-4 indent-8 italic">
  "What if teams didn’t have to work this way anymore?"
</p>

<p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
  Within weeks, the team began prototyping. Not another clunky database or contract repository, but a real system that could think: intelligently extract key terms, surface risks, and structure documents for review before anyone hit Ctrl+F.
</p>

<p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
  By early 2025, Doxali was born built to eliminate manual friction, accelerate decision-making, and give teams their strategic edge back.
</p>

<p className="text-gray-600 dark:text-gray-400 mt-4 indent-8 font-semibold text-center">
  We didn’t just build a product. <br />
  We built the platform we wish we had that night.
          </p>
          <h2 className="text-3xl font-bold mt-8">In Good Company</h2>
         <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
  <span className="font-semibold">AWS</span> powers our core infrastructure, giving us the ability to scale on demand while maintaining best-in-class uptime, availability, and global reach. From compute to storage, we rely on AWS to deliver a secure and resilient cloud foundation.
</p>

<p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
  <span className="font-semibold">Cloudflare</span> protects and accelerates every interaction with Doxali. With enterprise-grade DDoS mitigation, edge caching, and traffic optimization, our users enjoy fast, secure access, no matter where they are in the world.
</p>

<p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
  <span className="font-semibold">Stripe</span> handles our billing with trusted payment infrastructure and full PCI compliance. Clients can onboard, subscribe, and manage accounts with confidence, backed by encrypted, seamless transactions.
</p>

<p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
  <span className="font-semibold">Clerk</span> manages identity, authentication, and user management with modern security protocols — including passwordless login, two-factor authentication, and real-time session tracking — all fully integrated into our platform.
</p>

<p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
  <span className="font-semibold">OpenAI</span> powers the intelligence layer of Doxali, enabling our platform to read, extract, and structure data from contracts and documents using cutting-edge language models trained on real-world automation workflows.
</p>

<p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed font-semibold text-center">
  Security, speed, and scalability is not optional, it's built into every layer of Doxali.
</p>
          <p className="text-gray-600 dark:text-gray-400 mt-6 text-center">
            Want to get in touch? Reach out at <a href="mailto:team@doxali.com" className="text-[#2fc4a0] underline">team@doxali.com</a>.
          </p>
        </section>

<FAQAbout />
{/* CTA Band */}
<div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#2fc4a0] dark:bg-[#28b093] text-center overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
      AI Powered Data Extraction 
    </h2>
    <p className="text-white/90 mb-8 text-lg max-w-xl mx-auto">
      Try Doxali free! Upload a document and experience fast, accurate extraction.
    </p>
    <Link
      href="/launch"
      className="inline-block bg-white text-[#2fc4a0] font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
    >
      Get Started Free
    </Link>
  </div>
</div>

      </main>

      <Footer />
    </div>
  );
}
