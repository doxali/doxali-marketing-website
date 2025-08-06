import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ScopeDisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-[var(--foreground)]">
      <Head>
        <title>Scope Disclaimer | Doxali</title>
      </Head>

      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-md p-6 md:p-10 space-y-6">
          <h1 className="text-4xl font-bold">Scope Disclaimer</h1>
          <p>
            Doxali currently supports a wide range of common legal documents including lease agreements, loan agreements, purchase & sale agreements (PSAs), NDAs, operating agreements, and select construction contracts.
          </p>
          <p>
            We do not yet support litigation-related documents, legal opinions, highly customized or handwritten contracts, or scanned documents with poor OCR fidelity. Users are responsible for ensuring document clarity and legibility prior to upload.
          </p>
          <p>
            Our scope is continually expanding. For the latest list of supported document types and clause categories, please refer to our documentation or contact{' '}
            <a href="mailto:support@doxali.com" className="text-[#2fc4a0] hover:text-[#28b093] font-medium underline">
              support@doxali.com
            </a>.
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