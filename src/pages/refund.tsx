import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-[var(--foreground)]">
      <Head>
        <title>Refund Policy | Doxali</title>
      </Head>

      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-md p-6 md:p-10 space-y-6">
          <h1 className="text-4xl font-bold">Refund Policy</h1>
          <p>
            All purchases made through Doxali are final once your document abstraction has been processed. We encourage you to review your file selection and document type carefully before confirming payment.
          </p>
          <p>
            If you believe you were charged in error or encountered a technical issue, please contact{' '}
            <a href="mailto:support@doxali.com" className="text-[#2fc4a0] hover:text-[#28b093] font-medium underline">
              support@doxali.com
            </a>{' '}
            within 7 days of the transaction. Refunds may be granted at our discretion in cases such as duplicate charges or system failure.
          </p>
          <p>
            Doxali is not responsible for incomplete or inaccurate input provided by the user that results in suboptimal abstraction output.
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
