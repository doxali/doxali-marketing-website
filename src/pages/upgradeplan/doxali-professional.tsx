import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Star,
  Database,
  FileDown,
  ShieldCheck,
  Zap,
  Inbox,
  Layers,
} from 'lucide-react';

export default function DoxaliProfessionalPage() {
  return (
    <>
      <Head>
        <title>Doxali Professional | Pricing, Limits & What’s Included</title>
        <meta
          name="description"
          content="Doxali Professional delivers advanced AI document extraction, structured data outputs, and accelerated review—built for teams that need accuracy, scale, and control."
        />
      </Head>

      <Header />

      {/* soft top fade like product page */}
      <div className="bg-gradient-to-b from-[#d1fae5] via-[#e9fdf5] to-white dark:from-[#2a2a2a] dark:via-[#111111] dark:to-black transition-colors duration-500">
        <main className="max-w-5xl mx-auto px-6 py-20 space-y-12 text-[var(--foreground)]">
          {/* Hero */}
          <section className="text-center space-y-4">
            <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-[#2fc4a0]/10 text-[#2fc4a0] dark:bg-[#2fc4a0]/15">
              Subscription Plan
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Doxali <span className="text-[#2fc4a0]">Professional</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Advanced <strong>AI document extraction</strong>, structured <strong>data</strong> outputs, and
              accelerated review—built for professionals and teams that need accuracy, scale, and control.
            </p>
          </section>

          {/* Plan Card */}
          <section className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 md:p-8 bg-white/60 dark:bg-white/5 backdrop-blur">
            <div className="md:flex md:items-start md:justify-between gap-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Pricing & Limits</h2>

                {/* Billing summary cards */}
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Monthly */}
                  <div className="group relative rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-5 transition hover:shadow-[0_0_0_3px_rgba(47,196,160,.15)]">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-200">
                        Monthly
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-end gap-1">
                        <span className="text-3xl font-extrabold tracking-tight">$19.99</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">/mo</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Cancel anytime. Full Professional features.
                      </p>
                    </div>
                  </div>

                  {/* Yearly */}
                  <div className="group relative rounded-2xl border border-[#2fc4a0]/40 dark:border-[#2fc4a0]/50 bg-white/80 dark:bg-white/5 backdrop-blur p-5 transition hover:shadow-[0_0_0_3px_rgba(47,196,160,.25)]">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[#2fc4a0]/10 text-[#2fc4a0]">
                        Yearly
                      </span>
                      <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold bg-[#2fc4a0]/15 text-[#2fc4a0] ring-1 ring-inset ring-[#2fc4a0]/30">
                        ~10% off
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-end gap-1">
                        <span className="text-3xl font-extrabold tracking-tight">$215</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">/yr</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Best value for teams using Pro regularly.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star className="w-[16px] h-[16px] text-[#2fc4a0] shrink-0 mt-1" />
                    <span>
                      Token Guidance: up to <span className="font-medium">200k input</span> / <span className="font-medium">50k output</span> tokens per message (typical), with smart chunking for large docs.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="w-[16px] h-[16px] text-[#2fc4a0] shrink-0 mt-1" />
                    <span>
                      Storage: <span className="font-medium">100&nbsp;GB</span> document storage with version history.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileDown className="w-[16px] h-[16px] text-[#2fc4a0] shrink-0 mt-1" />
                    <span>Exports: JSON / CSV structured data and human‑readable summaries.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-[16px] h-[16px] text-[#2fc4a0] shrink-0 mt-1" />
                    <span>Support: Priority email support and faster queueing.</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/signup"
                    className="inline-block text-center px-6 py-3 rounded-lg bg-[#2fc4a0] text-white hover:bg-[#28b093] transition"
                  >
                    Start Professional
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block text-center px-6 py-3 rounded-lg border border-gray-300 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/10 transition"
                  >
                    Talk to Sales
                  </Link>
                </div>
              </div>

              {/* Side Highlights */}
              <div className="mt-8 md:mt-0 md:w-80">
                <div className="rounded-xl border border-gray-200 dark:border-white/10 p-5 bg-white/70 dark:bg-white/5">
                  <h3 className="font-semibold mb-3">What’s Included</h3>
                  <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-[#2fc4a0] shrink-0 mt-0.5" />
                      <span>AI clause extraction, summaries, and structured fields</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Inbox className="w-4 h-4 text-[#2fc4a0] shrink-0 mt-0.5" />
                      <span>Document chat with context retention</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Layers className="w-4 h-4 text-[#2fc4a0] shrink-0 mt-0.5" />
                      <span>Batch processing + smart chunking for large PDFs</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#2fc4a0] shrink-0 mt-0.5" />
                      <span>Fair‑use guardrails to keep performance consistent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Professional */}
          <section className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 md:p-8 bg-white/60 dark:bg-white/5 backdrop-blur">
            <h2 className="text-2xl font-semibold mb-3">Why Professional</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Built for legal, operations, and analyst teams who need fast, accurate insights from real‑world documents—NDAs, leases, MSAs, SOWs, insurance policies, financials, and more. Professional pairs high token ceilings with structured outputs so you can review faster and move with confidence.
            </p>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
}
