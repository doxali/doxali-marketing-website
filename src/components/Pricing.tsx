import { Star } from "lucide-react";
import Link from "next/link";
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
        { text: "5 Pages Per Day", star: true },
        { text: "3 Messages Per Day", star: true },
        { text: "1 GB of Storage", star: true },
      ],
      footer: "No Credit Card • No Subscription",
      note: "Daily Refresh",
      ctaHref: "/signup",
      delay: "0s",
    },
    {
      title: "Standard Account",
      subtitle: "(Usage Rate)",
      features: [
        { text: "$0.05 Per Page AI Extraction", star: true },
        { text: "$0.01 Per AI Assistant Request", star: true },
        { text: "10 GB Document Storage", star: true },
      ],
      footer: "Pay As You Go",
      note: <p className="mt-2">Custom Refresh</p>,
      ctaHref: "/upgradeplan/pay-as-you-go",
      delay: "0.2s",
    },
    {
      title: "Doxali Professional",
      subtitle: "(Subscription)",
      features: [
        { text: "1000 AI Extractions", star: true },
        { text: "500 AI Messages", star: true },
        { text: "100 GB Document Storage", star: true },
      ],
      footer: "$19.99 Monthly Subscription",
      note: <p className="mt-2">Monthly Refresh</p>,
      ctaHref: "/upgradeplan/doxali-professional",
      delay: "0.4s",
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16 justify-items-center">
          {plans.map(({ title, subtitle, features, footer, note, ctaHref, delay }, idx) => (
            <div
              key={idx}
              style={{ animationDelay: delay as React.CSSProperties["animationDelay"] }}
              className={`group w-full max-w-sm transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-col justify-between w-full relative z-10 bg-gradient-to-b from-gray-100 to-white dark:from-[#1d1d1d] dark:to-[#111] border border-white/10 rounded-2xl p-10 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-[#2fc4a0]/20">
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-400 mb-4">{subtitle}</p>

                  <ul className="opacity-80 text-sm text-left space-y-2">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-start">
                        {f.star && <Star className="w-4 h-4 text-[#2fc4a0] mr-2 mt-0.5" />}
                        <span>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  {footer && (
                    <div className="mb-4 text-center font-medium text-sm text-[#2fc4a0]">
                      {footer}
                    </div>
                  )}

                  <div className="text-xs text-gray-400 dark:text-gray-400 mb-6 text-center">
                    {note}
                  </div>

                  {/* Centered CTA per plan */}
                  <div className="flex justify-center">
                    <Link
                      href={ctaHref || "/pricing"}
                      className="inline-block text-sm text-white bg-gradient-to-r from-[#2fc4a0] to-[#28b093] font-medium px-6 py-3 rounded-full hover:opacity-90 transition"
                      aria-label={`Go to ${title} details`}
                    >
                      View details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
