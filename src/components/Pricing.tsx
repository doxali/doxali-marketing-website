import React, { useEffect, useRef, useState } from "react";

export default function Pricing() {
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

  const plans = [
    {
      title: "Free Account",
      subtitle: "(Quick Access)",
      features: [
        "5 Pages Per Day (AI Extraction Limited)",
        "3 Messages Per Day (AI Assistant Limited)",
        "1 GB of Storage",
        "No Credit Card • No Subscription",
      ],
note: (
    <>
      <p> Upload, Extract, and Chat with your document.</p>
      <p className="mt-2">Daily Refresh.</p>
    </>
  ),
      delay: "0s",
    },
    {
      title: "Standard Account",
      subtitle: "(Flat Usage Rate)",
      features: [
        "$0.05 Per Page (AI Extraction Access)",
        "$0.01 Per AI Message (AI Assistant Access)",
        "10 GB Document Storage",
        "Pay As You Go • No Subscription",
      ],
note: (
  <>
    <p>Choose flexible bundles at $10, $50, or $100.</p>
    <p className="mt-2">Scale with your usage as you grow.</p>
    <p className="mt-2">Only pay for what you use.</p>
  </>
),
      delay: "0.2s",
    },
    {
      title: "Doxali Professional",
      subtitle: "(Subscription)",
      features: [
        "1000 Pages Monthly (AI Extraction Access)",
        "500 AI Messages (AI Assistant Access)",
        "100 GB Document Storage",
        "$19.99 Monthly Subscription",
      ],
      note: (
    <>
      <p>
        Includes 1000 pages and 500 messages monthly. If you exceed these, you can continue using
        credits at Standard Plan rates until your next cycle.
      </p>
      <p className="mt-2">Monthly Refresh.</p>
    </>
  ),
      delay: "0.4s",
    },
  ];

  const enterprisePlan = {
    title: "Doxali Enterprise",
    features: [
      "Custom Annual Contract (Contact Sales)",
      "$0.005 Per Page (Extraction + Extraction)",
      "AI Chat: $0.00010 per 1 000 Input Tokens",
      "AI Chat: $0.00040 per 1 000 Output Tokens",
      "Up to 200 k Input + 50 k Output Tokens per Message",
      "Unlimited document storage",
      "SSO, Dedicated Account Manager, SOC 2 Type II, SLA",
      "On Prem / VPC deployment option",
    ],
    note:
      "Enterprise grade security, unlimited scale, and white glove support. Talk to us for custom pricing.",
    delay: "0.6s",
  };

  return (
    <section
      ref={ref}
  className="relative bg-white dark:bg-black text-[#0c1f1b] dark:text-white py-12"
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2
          className={`text-3xl md:text-4xl font-semibold mb-16 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Transparent Pricing
        </h2>

        {/* Top 3 plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          {plans.map(({ title, subtitle, features, note, delay }, idx) => (
            <div
              key={idx}
              style={{ animationDelay: delay }}
              className={`group flex transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-col justify-between w-full relative z-10 bg-gradient-to-b from-gray-100 to-white dark:from-[#1d1d1d] dark:to-[#111] border border-white/10 rounded-2xl p-8 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-[#2fc4a0]/20">
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-400 mb-4">{subtitle}</p>
                  <ul className="opacity-80 text-sm text-left space-y-2">
                    {features.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
<div className="text-xs text-gray-400 dark:text-gray-400 mb-4 space-y-2">{note}</div>
                  <div className="flex justify-end">
                    <a
                      href="/pricing"
                      className="text-sm text-[#2fc4a0] hover:underline font-medium"
                    >
                      View details →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Plan full width */}
        <div
          style={{ animationDelay: enterprisePlan.delay }}
          className={`relative group transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative z-10 bg-gradient-to-b from-gray-100 to-white dark:from-[#1d1d1d] dark:to-[#111] border border-white/10 rounded-2xl p-10 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-[#2fc4a0]/20 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {enterprisePlan.title}
            </h3>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-800 dark:text-gray-200 mb-4">
              {enterprisePlan.features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {enterprisePlan.note}
              </p>
              <a
                href="/pricing"
                className="text-sm text-[#2fc4a0] hover:underline font-medium"
              >
                View details →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
