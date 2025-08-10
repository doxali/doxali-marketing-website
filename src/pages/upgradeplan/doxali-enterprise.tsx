import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Database, FileDown, ShieldCheck, Zap, Inbox, Layers } from "lucide-react";


export default function DoxaliEnterprisePage() {
  return (
    <>
      <Head>
        <title>Doxali Enterprise | Custom Pricing & Features</title>
        <meta
          name="description"
          content="Doxali Enterprise offers custom AI document extraction solutions with premium token limits, storage, and dedicated support for large-scale teams."
        />
      </Head>

      <Header />

      {/* Gradient background to match style */}
      <div className="bg-gradient-to-b from-[#d1fae5] via-[#e9fdf5] to-white dark:from-[#2a2a2a] dark:via-[#111111] dark:to-black transition-colors duration-500">
        <main className="max-w-5xl mx-auto px-6 py-20 space-y-12 text-[var(--foreground)]">
          
          {/* Hero */}
          <section className="text-center space-y-4">
            <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-[#2fc4a0]/10 text-[#2fc4a0] dark:bg-[#2fc4a0]/15">
              Custom Contract
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Doxali <span className="text-[#2fc4a0]">Enterprise</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Designed for large organizations needing <strong>extreme scale</strong>, <strong>customized pricing</strong>, and <strong>premium support</strong>.
            </p>
          </section>

          {/* Pricing Summary */}
          <section className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 md:p-8 bg-white/60 dark:bg-white/5 backdrop-blur">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-center">Custom Pricing</h2>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Enterprise pricing is based on your organization's scale, data volume, and support requirements.
              </p>
              
              <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Star className="w-[16px] h-[16px] text-[#2fc4a0] mt-1" />
                  <span>$0.005 Per Page  (Abstraction + Extraction)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-[16px] h-[16px] text-[#2fc4a0] mt-1" />
                  <span>$0.0001 Per AI Message</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-[16px] h-[16px] text-[#2fc4a0] mt-1" />
                  <span>Up to 200k Input Tokens / 50k Output Tokens Per Message</span>
                </li>
                <li className="flex items-start gap-2">
                  <Database className="w-[16px] h-[16px] text-[#2fc4a0] mt-1" />
                  <span>Customizable Storage Limit</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-[16px] h-[16px] text-[#2fc4a0] mt-1" />
                  <span>Dedicated Account Manager & Concierge Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-[16px] h-[16px] text-[#2fc4a0] mt-1" />
                  <span>SOC 2 Type II Compliance</span>
                </li>
              </ul>

              <div className="mt-6 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-block text-center px-6 py-3 rounded-lg bg-[#2fc4a0] text-white hover:bg-[#28b093] transition"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </section>

          {/* Why Enterprise */}
          <section className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 md:p-8 bg-white/60 dark:bg-white/5 backdrop-blur">
            <h2 className="text-2xl font-semibold mb-3">Why Enterprise?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Enterprise is ideal for legal, compliance, and analyst teams with extreme document processing needs. 
              Get unmatched performance, custom integrations, and personalized onboarding so your organization 
              can operate at full speed with AI-powered document intelligence.
            </p>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
