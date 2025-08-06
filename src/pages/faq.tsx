import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQHome from '@/components/FAQHome';
import FAQProduct from '@/components/FAQProduct';
import FAQPricing from '@/components/FAQPricing';
import FAQAbout from '@/components/FAQAbout';

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-[var(--foreground)]">
      <Head>
        <title>FAQs | Doxali</title>
      </Head>

      <Header />

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-20 space-y-24">
        {/* Page Title */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Browse answers to common questions about the platform, pricing, product features, and more.
          </p>
        </section>

        {/* First Row: General + About */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col h-full">
            <h2 className="text-center text-2xl font-semibold mb-4">General Questions</h2>
            <FAQHome />
          </div>

          <div className="flex flex-col h-full">
            <h2 className="text-center text-2xl font-semibold mb-4">About Doxali</h2>
            <FAQAbout />
          </div>
        </section>

{/* Second Row: Product + Pricing */}
<section className="grid md:grid-cols-2 gap-12 items-start">
  <div className="flex flex-col h-full justify-start">
    <h2 className="text-center text-2xl font-semibold mb-4">Product Page</h2>
    <FAQProduct />
  </div>

  <div className="flex flex-col h-full justify-start">
    <h2 className="text-center text-2xl font-semibold mb-4">Plans & Pricing</h2>
    <div className="-mt-1"> {/* Nudging the component up slightly */}
      <FAQPricing />
    </div>
  </div>
</section>
      </main>

      <Footer />
    </div>
  );
}