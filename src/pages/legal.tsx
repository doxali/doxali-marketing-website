import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LegalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-[var(--foreground)]">
      <Head>
        <title>Legal Information | Doxali</title>
      </Head>

      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-md p-6 md:p-10">
          <h1 className="text-4xl font-bold mb-10">Legal Information</h1>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Terms of Service</h2>
            <p className="text-gray-600 dark:text-gray-400">
              By using Doxali, you agree to our terms and conditions. Document processing is subject to our internal compliance and service policies.
            </p>
            <Link href="/terms" className="text-[#2fc4a0] hover:text-[#28b093] text-sm font-medium">
              View full Terms of Service →
            </Link>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Privacy Policy</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We value your privacy. Your data is encrypted, never sold, and only used to power the Doxali platform and its AI-based services.
            </p>
            <Link href="/privacy" className="text-[#2fc4a0] hover:text-[#28b093] text-sm font-medium">
              View full Privacy Policy →
            </Link>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Refund Policy</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Purchases are final once document abstraction has been completed. Please confirm file selection and settings before checkout.
            </p>
            <Link href="/refund" className="text-[#2fc4a0] hover:text-[#28b093] text-sm font-medium">
              View full Refund Policy →
            </Link>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-xl font-semibold">Other Policies</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Additional operational policies, security protocols, and acceptable use guidelines are available here.
            </p>
            <Link href="/policies" className="text-[#2fc4a0] hover:text-[#28b093] text-sm font-medium">
              View Other Policies →
            </Link>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Scope Disclaimer</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Review which document types and clause categories are currently supported by Doxali — and which fall outside our abstraction scope.
            </p>
            <Link href="/scope" className="text-[#2fc4a0] hover:text-[#28b093] text-sm font-medium">
              View Scope Disclaimer →
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
