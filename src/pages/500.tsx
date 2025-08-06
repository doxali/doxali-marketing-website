import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Error500Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#d1fae5] to-white dark:from-[#2a2a2a] dark:via-[#111111] dark:to-black text-[var(--foreground)]">
      <Head>
        <title>Server Error | Doxali</title>
      </Head>

      <Header />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-6xl font-extrabold mb-4">500</h1>
        <h2 className="text-2xl font-semibold mb-2">Something went wrong</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
          We're experiencing some technical difficulties. Please try again later or head back to the homepage.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#2fc4a0] hover:bg-[#28b093] text-white font-semibold rounded-xl shadow transition"
        >
          Go to Homepage
        </Link>
      </main>

      <Footer />
    </div>
  );
}
