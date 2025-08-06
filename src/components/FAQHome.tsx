import React, { useEffect, useRef, useState } from 'react';

const faqData = [
  {
    question: 'What makes Doxali different?',
    answer:
      'Most tools claim to handle documents. Doxali *actually* reads them, extracting key terms, summarizing dense content, and letting you chat with your files like a human expert. No jargon. No guesswork. Just clarity at speed.'
  },
  {
    question: 'How does pricing work? And is it really that simple?',
    answer:
      'Yes. $0.10 per page to extract and summarize. $8.99/month + $0.0467/message to chat with your documents. No confusing caps, no throttled speed — just full access and transparent usage-based billing you can track in real time.'
  },
  {
    question: 'Can I test it out before paying?',
    answer:
      'Of course. The Free Tier gives you 20 pages and 30 messages each month — no credit card, no bait-and-switch. It’s enough to see exactly how Doxali fits into your workflow.'
  },
  {
    question: 'Do I need a legal background or tech skills?',
    answer:
      'Nope. Doxali is built for real people, not just lawyers or coders. It explains contracts, clauses, and summaries in plain English. If you can upload a PDF, you’re already a power user.'
  },
  {
    question: 'Is my information safe?',
    answer:
      'Yes. Documents are encrypted in transit and at rest. Nothing is used for training. Nothing is shared. You stay in control, always — with one-click delete and no shady data reuse.'
  },
  {
    question: 'What’s the Pro Plan vs. Power Plan difference?',
    answer:
      'Pro Plan is best for most: $8.99/month plus per-message pricing. Power Plan ($28.99/month) gives API access, token-level usage, and is built for legal teams, devs, and scale-intensive workflows.'
  },
  {
    question: 'Why not just use a cheaper “unlimited” tool?',
    answer:
      'Because “unlimited” often means throttled, slow, or restricted. Doxali doesn’t cut corners. You get full speed, full accuracy, and full control — with pricing that matches real usage. No surprises.'
  }
];

export default function Faq() {
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
      id="faq"
className="py-12 px-6 bg-white dark:bg-black text-[var(--foreground)]"

    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          Common Questions
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