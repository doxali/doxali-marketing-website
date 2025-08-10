import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQPricing from "@/components/FAQPricing";
import { Star } from "lucide-react";

export default function PayAsYouGoPage() {
  return (
    <>
      <Head>
        <title>Pay‑As‑You‑Go Pricing | Doxali</title>
        <meta
          name="description"
          content="Flexible AI document extraction and structured data with no monthly subscription—pay only for what you use."
        />
      </Head>

      <Header />

      {/* Soft mint top fade (matches Professional / Pricing pages) */}
      <div className="bg-gradient-to-b from-[#d1fae5] via-[#e9fdf5] to-white dark:from-[#2a2a2a] dark:via-[#111111] dark:to-black transition-colors duration-500">
        <main className="relative max-w-5xl mx-auto px-6 py-20 space-y-12 text-[var(--foreground)]">
          {/* Decorative soft glow in background */}
          <div className="pointer-events-none absolute inset-x-0 -top-16 mx-auto h-48 max-w-3xl rounded-full blur-3xl opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(47,196,160,.35),transparent_60%)]" />

          {/* Hero */}
          <section className="text-center space-y-4">
            <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-[#2fc4a0]/10 text-[#2fc4a0] dark:bg-[#2fc4a0]/15">
              Usage‑Based Plan
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Doxali <span className="text-[#2fc4a0]">Pay‑As‑You‑Go</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Flexible <strong>AI document data extraction</strong> and structured{" "}
              <strong>data summaries</strong> without a monthly commitment.
            </p>
          </section>

          {/* Credit Bundles */}
          <section className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 md:p-8 bg-white/60 dark:bg-white/5 backdrop-blur space-y-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold">Buy Credits</h2>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300">
                Flexible • No Expiration*
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400">
              Pick a bundle and pay only for what you use. Credits apply to per‑page extraction and AI
              assistant messages.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* $10 */}
              <div className="group relative rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 transition shadow-md hover:shadow-[0_0_0_3px_rgba(47,196,160,.15)]">
                <div className="mb-3">
                  <div className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Starter
                  </div>
                  <div className="text-3xl font-bold">$10</div>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[#2fc4a0] mt-0.5" />
                    <span>
                      ~200 pages <span className="text-gray-500"></span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[#2fc4a0] mt-0.5" />
                    <span>
                      ~1,000 AI messages{" "}
                      <span className="text-gray-500"></span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[#2fc4a0] mt-0.5" />
                    <span>Good for Light Usage</span>
                  </li>
                </ul>
                <a
                  href="#buy-10"
                  className="relative z-10 block text-center px-4 py-3 rounded-full bg-gradient-to-r from-[#2fc4a0] to-[#28b093] text-white font-semibold hover:opacity-90 transition"
                >
                  Buy $10 Credits
                </a>
              </div>

              {/* $50 (Most Popular) */}
              <div className="group relative rounded-2xl border border-[#2fc4a0]/40 dark:border-[#2fc4a0]/50 bg-white/80 dark:bg-white/5 backdrop-blur p-6 transition shadow-md hover:shadow-[0_0_0_3px_rgba(47,196,160,.25)]">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-full bg-[#2fc4a0] text-white">
                  Most Popular
                </span>
                <div className="mb-3">
                  <div className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Growth
                  </div>
                  <div className="text-3xl font-bold">$50</div>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[#2fc4a0] mt-0.5" />
                    <span>
                      ~1,000 pages <span className="text-gray-500"></span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[#2fc4a0] mt-0.5" />
                    <span>
                      ~5,000 AI messages{" "}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[#2fc4a0] mt-0.5" />
                    <span>Great for Workflows</span>
                  </li>
                </ul>
                <a
                  href="#buy-50"
                  className="relative z-10 block text-center px-4 py-3 rounded-full bg-gradient-to-r from-[#2fc4a0] to-[#28b093] text-white font-semibold hover:opacity-90 transition"
                >
                  Buy $50 Credits
                </a>
              </div>

              {/* $100 */}
              <div className="group relative rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 transition shadow-md hover:shadow-[0_0_0_3px_rgba(47,196,160,.15)]">
                <div className="mb-3">
                  <div className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Scale
                  </div>
                  <div className="text-3xl font-bold">$100</div>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[#2fc4a0] mt-0.5" />
                    <span>
                      ~2,000 pages <span className="text-gray-500"></span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[#2fc4a0] mt-0.5" />
                    <span>
                      ~10,000 AI messages{" "}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[#2fc4a0] mt-0.5" />
                    <span>Best for Bulk Review</span>
                  </li>
                </ul>
                <a
                  href="#buy-100"
                  className="relative z-10 block text-center px-4 py-3 rounded-full bg-gradient-to-r from-[#2fc4a0] to-[#28b093] text-white font-semibold hover:opacity-90 transition"
                >
                  Buy $100 Credits
                </a>
              </div>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              *Update this note to reflect your real policy. If credits never expire, state it clearly here and in your legal pages.
            </p>
          </section>

          {/* How It Works */}
          <section className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 md:p-8 bg-white/60 dark:bg-white/5 backdrop-blur space-y-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold">How It Works</h2>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300">
                No Subscription
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400">
              Ideal for occasional usage or variable workloads. Upload documents anytime and get
              transparent, per‑use pricing for pages and AI assistant messages.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Per‑use rates */}
              <div className="group rounded-xl border border-gray-200 dark:border-white/10 p-5 bg-white/70 dark:bg-white/5 backdrop-blur transition hover:shadow-[0_0_0_3px_rgba(47,196,160,.15)]">
                <h3 className="font-semibold mb-2">Per‑Use Rates</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[#2fc4a0] mt-0.5" />
                    <span>$0.05 per page (AI Extraction)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[#2fc4a0] mt-0.5" />
                    <span>$0.01 per AI message (AI Assistant)</span>
                  </li>
                </ul>
              </div>

              {/* What’s included */}
              <div className="group rounded-xl border border-gray-200 dark:border-white/10 p-5 bg-white/70 dark:bg-white/5 backdrop-blur transition hover:shadow-[0_0_0_3px_rgba(47,196,160,.15)]">
                <h3 className="font-semibold mb-2">What’s Included</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[#2fc4a0] mt-0.5" />
                    <span>10 GB document storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[#2fc4a0] mt-0.5" />
                    <span>No monthly fees • Start anytime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[#2fc4a0] mt-0.5" />
                    <span>Export structured data for better reviews</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* CTA Band — same style as pricing page footer strip */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#2fc4a0] to-[#28b093] text-white text-center">
        <h2 className="text-3xl font-semibold mb-3">Need a Custom Plan or Help Deciding?</h2>
        <p className="text-lg">
          Email us at{" "}
          <a href="mailto:Sales@doxali.com" className="underline hover:text-white/90">
            Sales@doxali.com
          </a>
        </p>
      </section>

      <Footer />
    </>
  );
}
