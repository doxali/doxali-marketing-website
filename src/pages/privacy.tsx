import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-[var(--foreground)]">
      <Head>
        <title>Privacy Policy | Doxali</title>
      </Head>

      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-md p-6 md:p-10 space-y-6">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p>
            Your privacy is important to us. Doxali encrypts and stores your data securely using industry-standard methods. We do not sell or share your information with third parties for marketing purposes.
          </p>
          <p>
            The data you provide is used solely to power Doxali's document extraction services and to improve the platform through anonymized analytics.
          </p>
          <p>
            You may request access to or deletion of your personal data at any time by contacting{' '}
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
