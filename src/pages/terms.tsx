import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-[var(--foreground)]">
      <Head>
        <title>Terms of Service | Doxali</title>
      </Head>

      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-md p-6 md:p-10 space-y-6">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p>
            By using Doxali, you agree to abide by our terms and conditions. All document abstractions are subject to system availability and data quality, and must comply with applicable usage guidelines.
          </p>
          <p>
            You are responsible for the accuracy and appropriateness of the documents you submit. While Doxali uses AI to assist in extraction, final review and verification remain your responsibility. Our platform does not constitute legal advice.
          </p>
          <p>
            These terms may be updated periodically. Continued use of the platform constitutes acceptance of the most current version.
          </p>
          <div className="pt-10 text-center">
            <Link href="/legal" className="text-[#2fc4a0] hover:text-[#28b093] font-medium">
              ← Back to Legal Information
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
