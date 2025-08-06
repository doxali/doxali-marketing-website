import React, { useEffect, useRef, useState } from 'react';

const faqData = [
  {
    question: 'What inspired the creation of Doxali?',
    answer:
      'Doxali was born out of frustration during a late-night contract review. A deal nearly collapsed due to time lost manually extracting terms. That pain became our product — a platform that handles document intelligence at scale.'
  },
  {
    question: 'When was Doxali founded?',
    answer:
      'Doxali was founded in early 2025 after months of prototyping by a team of experts in AI, Operations, and UX design.'
  },
  {
    question: 'What is Doxali’s mission?',
    answer:
      'To eliminate friction from document-heavy workflows. We believe teams should spend time making decisions — not buried in PDFs. Doxali gives them back control, speed, and clarity.'
  },
  {
    question: 'Who’s behind Doxali?',
    answer:
      'Our leadership team includes veterans from legal, tech, AI engineering, and startup operations. Founders include a former M&A attorney, an AI/NLP engineer, and a systems-focused UX designer.'
  },
  {
    question: 'What kind of impact has Doxali made so far?',
    answer:
      'Since launch, Doxali has processed over 10,000 documents, extracted hundreds of thousands of fields, and saved users thousands of hours in manual work.'
  },
  {
    question: 'What are some key milestones in Doxali’s journey?',
    answer:
      'Major milestones include our public launch in March 2025, 10k+ documents processed by August 2025, the rollout of AI Model v2 in early 2026, and our Series A funding in April 2026.'
  },
  {
    question: 'What infrastructure powers Doxali?',
    answer:
      'Doxali is built on AWS for scalable infrastructure, Cloudflare for edge performance and protection, Stripe for secure billing, Clerk for authentication, and OpenAI for document intelligence.'
  },
  {
    question: 'Is Doxali secure and compliant?',
    answer:
      'Yes. We enforce encryption at rest and in transit, offer SOC 2 compliance, and integrate best-in-class identity/auth services. Users maintain full control over their documents with audit-friendly workflows.'
  },
  {
    question: 'Where is the company based?',
    answer:
      'Doxali is a fully distributed team with global operations. We’re remote-first, with team members across engineering, product, and customer success spread across time zones.'
  },
  {
    question: 'How can I reach the Doxali team?',
    answer:
      'Email us at team@doxali.com or use the contact form on our website. We respond quickly and are always open to partnerships, questions, and feedback.'
  }
];

export default function FAQAbout() {
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
      id="faq-about"
      className="py-12 px-6 bg-white dark:bg-black text-[var(--foreground)]"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          Doxali Questions
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
