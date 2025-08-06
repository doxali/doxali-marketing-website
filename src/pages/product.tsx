'use client';

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, X } from 'lucide-react';

const faqData = [
  {
    question: 'What exactly does Doxali do?',
    answer:
      'Doxali reads your contracts and legal documents, extracts key data, generates structured summaries, and lets you chat with the content like you would with a legal expert. Upload a file and get clarity instantly.'
  },
  {
    question: 'How is Doxali different from a basic PDF reader?',
    answer:
      'Unlike a PDF reader, Doxali understands the text — it pulls out deadlines, obligations, key terms, and more. Then it explains them in plain English or answers your questions in a chat. It’s like having an AI-powered analyst built into your workflow.'
  },
  {
    question: 'What types of documents can I upload?',
    answer:
      'Doxali supports commercial leases, PSAs, loan agreements, NDAs, term sheets, corporate bylaws, and over 30 other legal document types — with custom templates for each. Just upload your PDF and the system routes it automatically.'
  },
  {
    question: 'Do I need to tag or format the document in a specific way?',
    answer:
      'No formatting required. Doxali uses OCR and smart classification to extract and structure information from scanned or digital PDFs. Even long or messy files are parsed accurately.'
  },
  {
    question: 'How does the document chat work?',
    answer:
      'After uploading a file, you can ask follow-up questions like “When does this lease expire?” or “Who is responsible for insurance?” The AI responds instantly — with citations from the source document if needed.'
  },
  {
    question: 'Can I select what kind of summary or output I get?',
    answer:
      'Yes. During upload, you can choose add-ons like Executive Summary, Red Flag Scan, or Term Sheet Mode. These customize the output based on what you need from the document.'
  },
  {
    question: 'Does Doxali store my documents?',
    answer:
      'Yes, but only under your control. Uploaded files are encrypted at rest and in transit, stored securely, and can be deleted at any time with one click. You own your data, and nothing is ever used for model training.'
  },
  {
    question: 'Is it fast enough to use in real time?',
    answer:
      'Absolutely. Most files are abstracted within seconds, and the document chat is real-time. You can upload, review, and get answers without waiting hours or days.'
  },
  {
    question: 'Can I use Doxali without being a lawyer or expert?',
    answer:
      'Yes. Doxali is built for real-world users — founders, ops teams, finance leads, assistants — anyone who needs to understand a legal document without reading every page or hiring counsel.'
  },
  {
    question: 'What if I need help or custom features?',
    answer:
      'Doxali supports chat-based feedback, and Pro or Enterprise users get access to API support, account managers, and custom workflows. Reach out through the contact page anytime.'
  }
];

export default function ProductPage() {
  const [selected, setSelected] = useState<number>(0);
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Why Doxali? | Product Overview</title>
        <meta
          name="description"
          content="Discover what makes Doxali uniquely powerful for legal document workflows."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-[#d1fae5] via-[#e9fdf5] to-white dark:from-[#2a2a2a] dark:via-[#111111] dark:to-black text-[#0c1f1b] dark:text-white transition-colors duration-500">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-10 px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Doxali?
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
            From AI-powered extraction to transparent pricing and downloadable summaries,
            Doxali transforms your legal workflows.
          </p>
          <Link
            href="/launch"
            className="inline-block px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#2fc4a0] to-[#28b093] hover:opacity-90 shadow-md transition"
          >
            Get Started
          </Link>
        </section>

        {/* Comparison Table */}
        <section className="pt-6 pb-16 px-6">
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2" />
                  <th className="px-4 py-2 font-semibold text-gray-900 dark:text-white text-center">Doxali</th>
                  <th className="px-4 py-2 font-semibold text-gray-900 dark:text-white text-center">Others</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Instant Document Search With Specific Context', true, false],
                  ['Downloadable AI-Written Summaries', true, false],
                  ['Field-Level Extraction (Dates, Names, Clauses)', true, false],
                  ['See Your Cost Before Uploading', true, false],
                  ['Export Structured Data To PDF / CSV / DOCX', true, false],
                  ['Built For Contracts, Not Chat Replies', true, false],
                  ['Custom Prompt Templates', true, false],
                  ['SOC 2, GDPR, Encryption-At-Rest', true, true],
                  ['Full Developer API Access', true, true],
                ].map(([feature, dox, other], i) => (
                  <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-200">{feature}</td>
                    <td className="px-4 py-3 text-center">
                      {dox ? (
                        <Check className="inline-block w-5 h-5 text-[#2fc4a0]" />
                      ) : (
                        <X className="inline-block w-5 h-5 text-red-500" />
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {other ? (
                        <Check className="inline-block w-5 h-5 text-[#2fc4a0]" />
                      ) : (
                        <X className="inline-block w-5 h-5 text-red-500" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* FAQ Section — starts after gradient ends */}
      <section
        ref={ref}
        id="faq-product"
        className="py-16 px-6 bg-white dark:bg-black text-[#0c1f1b] dark:text-white"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
            Product Questions, Real Answers
          </h2>

          <label className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">
            Select a question:
          </label>
          <select
            className="w-full border border-gray-300 dark:border-white/20 rounded-lg p-3 mb-4 bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2fc4a0]"
            value={selected}
            onChange={(e) => setSelected(parseInt(e.target.value))}
          >
            {faqData.map((faq, index) => (
              <option key={index} value={index}>
                {faq.question}
              </option>
            ))}
          </select>

          <div className="bg-gray-100 dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-100 p-4 rounded-lg shadow text-base border-l-4 border-[#2fc4a0]">
            {faqData[selected].answer}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#2fc4a0] to-[#28b093] text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to transform your document workflows?</h2>
        <Link
          href="/launch"
          className="inline-block px-8 py-3 border border-white rounded-full hover:bg-white hover:text-[#2fc4a0] transition"
        >
          Try Doxali Now
        </Link>
      </section>

      <Footer />
    </>
  );
}
