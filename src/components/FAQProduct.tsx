import React, { useEffect, useRef, useState } from 'react';

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

export default function FAQProduct() {
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
    <section
      ref={ref}
      id="faq-product"
      className="py-12 px-6 bg-white dark:bg-black text-[var(--foreground)]"
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
  );
}
