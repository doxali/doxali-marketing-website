import React, { useEffect, useRef, useState } from 'react';

const faqData = [
  {
    question: 'What’s included in the Free Tier?',
    answer:
      'The Free Tier gives you 10 pages per day for text extraction, 20,000 AI tokens daily, access to the chat assistant, and 1 saved chat thread — all with no credit card required.'
  },
  {
    question: 'Do I need to subscribe to start using Doxali?',
    answer:
      'No. You can use the Free Tier or the pay-as-you-go Standard Account without any subscription. Subscriptions only apply to the Professional and Enterprise tiers.'
  },
  {
    question: 'How does per-page pricing work in the Standard Account?',
    answer:
      'You’re charged $0.05 per page for Extractions. This includes smart summaries and structured outputs based on your uploaded PDF or DOCX.'
  },
  {
    question: 'What does “$0.01 per AI message” mean?',
    answer:
      'It refers to each message you send in the chat with your documents. On the Standard Plan, you’re billed a penny per prompt you submit to the AI assistant.'
  },
  {
    question: 'Is the pricing based on tokens or pages?',
    answer:
      'It depends on your plan. Standard accounts are priced per page and per message. Professional and Enterprise plans offer token-based AI pricing for granular cost control.'
  },
  {
    question: 'How is the Professional Plan different from Standard?',
    answer:
      'The Professional Plan is $19.99/month and offers deeply discounted rates: just $0.01/page, $0.00015 per 1k input tokens, and $0.00060 per 1k output tokens — plus 100 GB storage and full access to advanced chat features.'
  },
  {
    question: 'Who should choose the Enterprise Plan?',
    answer:
      'Enterprise is for Operational teams, high-scale users, and orgs needing SOC 2, SSO, or on-prem options. It includes unlimited storage, custom contracts, and our lowest per-unit pricing.'
  },
  {
    question: 'Are there hidden fees or usage caps?',
    answer:
      'No hidden fees. Usage is clearly tracked in real time. Plans with token-based billing split long messages automatically, so you’re never hit with surprise overages.'
  },
  {
    question: 'What are “input” and “output” tokens?',
    answer:
      'Input tokens are what you send to the AI; output tokens are what it sends back. A single page can be ~1,500 tokens. Doxali shows token counts so you can monitor usage easily.'
  },
  {
    question: 'Can I switch between plans later?',
    answer:
      'Absolutely. You can upgrade or downgrade anytime — from Free to Standard, from Standard to Pro, or back again. Your storage and history follow your account.'
  }
];

export default function FAQPricing() {
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
      id="faq-pricing"
      className="py-12 px-6 bg-white dark:bg-black text-[var(--foreground)]"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          Pricing Questions
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
