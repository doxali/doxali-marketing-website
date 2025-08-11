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
<div
  className="
    min-h-screen flex flex-col
    bg-[linear-gradient(to_bottom,#d1fae5_0%,#e9fdf5_40%,white_60%,white_100%)]
    dark:bg-[linear-gradient(to_bottom,#2a2a2a_0%,#111111_40%,#000_60%,#000_100%)]
    transition-colors duration-300
  "
>

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

        {/* Why Doxali – Modern SaaS proof section */}
        <section
          className={
            "opacity-0 transition-opacity" +
            (visible ? " animate-(--animate-fade-up-in) [animation-delay:0.25s]" : "")
          }
        >
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] p-8 md:p-10">
            {/* subtle grid background */}
            <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(65%_60%_at_50%_40%,black,transparent)]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#2fc4a0]/20 blur-3xl"></div>
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
                Why teams choose <span className="text-[#2fc4a0]">Doxali</span>
              </h2>
              <p className="mt-3 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A focused platform for turning unstructured contracts into structured, review-ready data—fast, consistent, and secure.
              </p>

              {/* Pillars */}
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] p-5 shadow-sm">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#2fc4a0]/10 text-[#2fc4a0] font-bold">①</div>
                  <h3 className="font-semibold text-lg">Precision extraction</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Clause-level understanding tuned for commercial, legal, and ops workflows. Reduce variance and rework.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] p-5 shadow-sm">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#2fc4a0]/10 text-[#2fc4a0] font-bold">②</div>
                  <h3 className="font-semibold text-lg">Structured by design</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Output mapped to your fields, schemas, and downstream systems—no brittle regex or manual cleanup.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] p-5 shadow-sm">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#2fc4a0]/10 text-[#2fc4a0] font-bold">③</div>
                  <h3 className="font-semibold text-lg">Security first</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Private by default. Granular access, audit trails, and region-aware processing for sensitive data.
                  </p>
                </div>
              </div>

              {/* Proof row */}
              <div className="mt-8 flex flex-col md:flex-row items-stretch gap-4">
                <div className="flex-1 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] p-5">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">What you get</h4>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#2fc4a0]"></span>Risk flags with rationale and source lines</li>
                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#2fc4a0]"></span>Normalized fields (party, dates, economics, obligations)</li>
                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#2fc4a0]"></span>One-click CSV / API handoff</li>
                  </ul>
                </div>
                <div className="flex-1 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] p-5">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Built-in trust</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs bg-[#2fc4a0]/10 text-[#2fc4a0] border border-[#2fc4a0]/20">SOC 2-ready</span>
                    <span className="px-3 py-1 rounded-full text-xs bg-[#2fc4a0]/10 text-[#2fc4a0] border border-[#2fc4a0]/20">PII Safe</span>
                    <span className="px-3 py-1 rounded-full text-xs bg-[#2fc4a0]/10 text-[#2fc4a0] border border-[#2fc4a0]/20">GDPR-aligned</span>
                    <span className="px-3 py-1 rounded-full text-xs bg-[#2fc4a0]/10 text-[#2fc4a0] border border-[#2fc4a0]/20">Encryption at rest & transit</span>
                  </div>
                </div>
                <div className="flex-1 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] p-5">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Customer snapshot</h4>
                  <blockquote className="mt-3 text-sm leading-relaxed">
                    “Doxali cut our review time by 70% and standardized fields across vendors—our team finally ships on time.”
                  </blockquote>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">VP Ops, Mid-Market SaaS</p>
                </div>
              </div>

              {/* Comparison */}
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] p-5">
                  <h4 className="font-semibold">The old way</h4>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Ctrl+F, copy-paste, and spreadsheet sprawl</li>
                    <li>• Inconsistent extractions and reviewer bias</li>
                    <li>• Weeks to roll up deal intelligence</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] p-5 ring-1 ring-[#2fc4a0]/10">
                  <h4 className="font-semibold">With Doxali</h4>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#2fc4a0]"></span>Review-ready summaries & fields in seconds</li>
                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#2fc4a0]"></span>Consistency at scale with schema controls</li>
                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#2fc4a0]"></span>Instant exports to your systems</li>
                  </ul>
                </div>
              </div>

              {/* micro-cta */}
              <div className="mt-8 flex items-center justify-center gap-3">
                <Link
                  href="/launch"
                  className="inline-flex items-center justify-center rounded-xl bg-[#2fc4a0] px-5 py-2.5 font-semibold text-white shadow-lg hover:brightness-95 transition"
                >
                  Start free
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 dark:border-white/20 bg-white dark:bg-transparent px-5 py-2.5 font-semibold text-[var(--foreground)] hover:bg-gray-50 dark:hover:bg-white/5 transition"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
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
