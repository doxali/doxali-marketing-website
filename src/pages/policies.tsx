import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OtherPoliciesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-[var(--foreground)]">
      <Head>
        <title>Operational Policies | Doxali</title>
      </Head>

      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-md p-6 md:p-10 space-y-6">
          <h1 className="text-4xl font-bold">Operational Policies</h1>
          <p>
            This section includes Doxali’s internal policies on security, data retention, uptime, and acceptable use.
          </p>
          <p>
            Doxali maintains 99.99% uptime through distributed hosting on AWS infrastructure. We actively monitor for vulnerabilities and respond to security threats using industry-standard tooling and practices.
          </p>
          <p>
            Use of our platform must comply with applicable law and may not involve uploading unauthorized, fraudulent, or malicious documents. Automated access (e.g., scraping) is prohibited without explicit prior approval.
          </p>
          <p>
            For full documentation, email <a href="mailto:legal@doxali.com" className="text-[#2fc4a0] hover:text-[#28b093] font-medium">legal@doxali.com</a>.
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
