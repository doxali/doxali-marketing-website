import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQPricing from "@/components/FAQPricing";
import { Star } from 'lucide-react';
import Link from "next/link";

type BillingPeriod = "Monthly" | "Yearly";

const plans = [
  {
    shortTitle: "Free",
    title: (
      <div className="text-center">
        Free Account
        <br />
        <span className="text-lx">(Quick Access)</span>
      </div>
    ),
    price: {
      Monthly: (
        <div className="text-center">
          <span className="text-xl font-bold">$0 Per Month</span>
        </div>
      ),
      Yearly: (
        <div className="text-center">
          <span className="text-xl font-bold">$0 Per Year</span>
        </div>
      ),
    },
    note: (
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>5 Pages Per Day</span>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>3 Messages Per Day</span>
        </div>
        <div className="flex items-start justify-center gap-2 mt-2">
          <Star className="w-4 h-4 mt-1 text-[#2fc4a0]" />
          <div className="flex flex-col leading-tight text-left">
            <span>1 Add On Per Day</span>
            <span className="text-xs text-gray-500">(Coming Soon)</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>1 GB Document Storage</span>
        </div>
        <p className="mt-28">No Subscription</p>
        <p className="mt-2">No Credit Card Required</p>
      </div>
    ),
    isCurrent: true,
    ctaLabel: "Get Started",
    ctaHref: "/signup",
  },
  {
    shortTitle: "Standard",
    title: (
      <div className="text-center">
        Standard Account
        <br />
        <span className="text-lx">(Usage Rate)</span>
      </div>
    ),
    price: {
      Monthly: (
        <div className="text-center">
          <span className="text-xl">Pay-As-You-Go</span>
        </div>
      ),
      Yearly: (
        <div className="text-center">
          <span className="text-xl font-bold">Pay as you go</span>
        </div>
      ),
    },
    note: (
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>$0.05 Per Page</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>AI Extraction + Summary</span>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>$0.01 Per AI Message</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>AI Assistant</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>Document Context</span>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>10 GB Document Storage</span>
        </div>
        <p className="mt-10">No Subscription</p>
        <p className="mt-2">Pay-As-You-Go</p>
      </div>
    ),
    ctaLabel: "Upgrade Plan",
    ctaHref: "/upgradeplan/pay-as-you-go",
  },
  {
    shortTitle: "Professional",
    title: "Doxali Professional (Subscription)",
    price: {
      Monthly: (
        <div className="text-center">
          <span className="text-xl font-bold">$19.99 Monthly</span>
        </div>
      ),
      Yearly: (
        <div className="text-center">
          <span className="text-xl font-bold">
            ${`${(215).toFixed(2)}`} Yearly
          </span>
          <br />
        </div>
      ),
    },
    note: (
      <div className="text-center space-y-5">
        <div className="flex items-center justify-center gap-2">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>1000 Pages Per Month</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>AI Extraction + Summary</span>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>500 Messages Per Month</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>AI Assistant</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>Comparison Context</span>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>100 GB Document Storage</span>
        </div>
        <div className="flex items-center justify-center gap-2 mt-6">
          <Star className="w-4 h-4 text-[#2fc4a0]" />
          <span>Access to All Add Ons</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">(Coming Soon)</p>
      </div>
    ),
    isFeatured: true,
    ctaLabel: "Upgrade Plan",
    ctaHref: "/upgradeplan/doxali-professional",
  },
];

const comparisonSections = [
  {
    title: "Usage & Limits",
    rows: [
      { label: "Pages Per Month", values: ["30", "Custom", "1,000"] },
      { label: "Messages Per Month", values: ["90", "Custom", "500"] },
      { label: "Usage Refresh Period", values: ["1 Day", "Custom", "1 Month"] },
      { label: "Document Storage Space", values: ["1 GB", "10 GB", "100 GB"] },
    ],
  },
  {
    title: "Productivity Features",
    rows: [
      { label: "AI Document Extraction", values: [true, true, true] },
      { label: "AI Structured Document Summaries", values: [true, true, true] },
      { label: "AI Document Assistant with Specific Context", values: [true, true, true] },
      { label: "Document Storage Access", values: [true, true, true] },
      { label: "Import Bulk Documents", values: [false, true, true] },
      { label: "Compare Multiple Documents with Specific Context", values: [false, false, true] },
    ],
  },
  {
    title: "Security & Compliance",
    rows: [
      { label: "Google SSO", values: [true, true, true] },
      { label: "SOC 2 Type II Readiness", values: [true, true, true] },
      { label: "HIPAA & GDPR Support", values: [true, true, true] },
      { label: "Custom Data Retention Policies", values: [false, false, true] },
    ],
  },
  {
    title: "Support & Services",
    rows: [
      { label: "Email Support", values: [true, true, true] },
      { label: "Priority Response Time", values: [false, false, true] },
      { label: "Dedicated Account Support", values: [false, false, true] },
      { label: "Custom Deployment & Onboarding", values: [false, false, false] },
    ],
  },
];


const BillingToggle = ({
  period,
  setPeriod,
}: {
  period: BillingPeriod;
  setPeriod: (p: BillingPeriod) => void;
}) => (
  <div className="inline-flex bg-gray-200 dark:bg-gray-700 rounded-full p-1">
    {(["Monthly", "Yearly"] as BillingPeriod[]).map((label) => (
      <button
        key={label}
        onClick={() => setPeriod(label)}
        className={`px-4 py-1 rounded-full font-medium transition ${
          period === label
            ? "bg-gradient-to-r from-[#2fc4a0] to-[#28b093] text-white shadow"
            : "text-[#2fc4a0] hover:text-white"
        }`}
      >
        {label}
      </button>
    ))}
  </div>
);

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("Monthly");

  const featureRef = useRef<HTMLElement | null>(null);
const [featureVisible, setFeatureVisible] = useState(false);

useEffect(() => {
  const node = featureRef.current;
  if (!node) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setFeatureVisible(true);
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
        <title>Doxali Pricing | Transparent Tiers for Every Workflow</title>
        <meta
          name="description"
          content="Explore Doxali's Free, Basic, Business & Enterprise pricing, plus an in-depth feature comparison."
        />
      </Head>
      <Header />

      <main
        className="relative pt-14 pb-20
                   bg-gradient-to-b from-[#d1fae5] to-white
                   dark:from-[#2a2a2a] dark:via-[#111111] dark:to-black
                   text-[#0c1f1b] dark:text-white overflow-hidden"
      >
{/* Hero */}
<div className="max-w-3xl mx-auto text-center px-4 space-y-4">
  <h1 className="text-4xl md:text-5xl font-bold">
    AI Powered Document Extraction & Data Intelligence
  </h1>
  <p className="text-gray-600 dark:text-gray-400 text-lg">
    Harness advanced AI to extract, structure, and analyze your documents turning complex data into clear, actionable insights that scale with your workflow.
  </p>
         <BillingToggle period={billingPeriod} setPeriod={setBillingPeriod} /> 
        </div>

{/* Pricing Cards */}
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 justify-items-center">
  {plans.map((plan) => (
    <div
      key={plan.shortTitle}
      className="group transition-all duration-300 transform hover:scale-105 w-full max-w-sm"
    >
      <div
        className={`
          relative flex flex-col justify-between h-full p-8 rounded-2xl
          bg-white/50 dark:bg-gradient-to-b dark:from-[#1d1d1d] dark:to-[#111] backdrop-blur-sm
          border ${
            plan.isFeatured
              ? "border-[#2fc4a0]"
              : "border-[#2fc4a0]/20 dark:border-[#2fc4a0]/40"
          }
          shadow-md group-hover:shadow-xl group-hover:shadow-[#2fc4a0]/20 transition-all duration-300
        `}
      >
        {plan.isFeatured && (
          <div className="absolute -top-3 -right-3 bg-[#2fc4a0] text-white text-xs px-2 py-1 rounded-full">
            Best Value
          </div>
        )}

        <div>
          <h2 className="text-xl font-semibold text-center">{plan.title}</h2>
          <div className="mt-4 text-3xl font-bold">{plan.price[billingPeriod]}</div>
          <div className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {plan.note}
          </div>
        </div>

        <Link
          href={typeof plan.ctaHref === "string" ? plan.ctaHref : "/signup"}
          className={`relative z-10 mt-6 block w-full text-center font-semibold rounded-full px-6 py-3 ${
            plan.isCurrent
              ? "border-2 border-[#2fc4a0] text-[#2fc4a0] bg-transparent cursor-default"
              : "bg-gradient-to-r from-[#2fc4a0] to-[#28b093] text-white hover:opacity-90"
          }`}
          aria-label={`Go to ${plan.shortTitle} plan details`}
        >
          {plan.isCurrent ? "Current Plan" : plan.ctaLabel ?? "Get Started"}
        </Link>
      </div>
    </div>
  ))}
</div>

{/* Comparison Table */}
<section className="max-w-6xl mx-auto px-4 mt-20 overflow-x-auto">
  <table className="min-w-full text-sm text-left">
    <thead>
      <tr>
        <th className="px-6 py-3"></th>
        {plans.map((p) => (
          <th
  key={p.shortTitle}
  className="px-6 py-3 text-center font-semibold text-gray-700 dark:text-gray-100"
>
  {p.shortTitle}
</th>
        ))}
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
      {comparisonSections.map((section) => (
        <React.Fragment key={section.title}>
          <tr className="bg-gray-100 dark:bg-gradient-to-b dark:from-[#1d1d1d] dark:to-[#111]">
            <td
              colSpan={plans.length + 1}
              className="px-6 py-2 font-medium text-gray-900 dark:text-gray-100"
            >
              {section.title}
            </td>
          </tr>
          {section.rows.map((row) => (
            <tr key={row.label}>
              <td className="px-6 py-2">{row.label}</td>
              {row.values.map((val, i) => (
                <td key={i} className="px-6 py-2 text-center">
                  {typeof val === "boolean" ? (
                    val ? (
                      <span className="text-[#28b093] font-bold">&#10003;</span>
                    ) : (
                      <span className="text-gray-400 dark:text-gray-600">&#10007;</span>
                    )
                  ) : (
                    val
                  )}
                </td>
              ))}
            </tr>
          ))}
        </React.Fragment>
      ))}
    </tbody>
  </table>
  <p className="mt-4 text-right text-sm text-gray-600 dark:text-gray-400">
    or <a href="/upgradeplan/doxali-enterprise" className="underline">contact sales</a>
  </p>
</section>
      </main>

{/* Feature Section (placed above FAQ) */}
<section
  ref={featureRef}
className="pt-0 pb-16 bg-white dark:bg-black text-[var(--foreground)]"
>
  <div
    className={
      'max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-16 transition-all duration-1000 ' +
      (featureVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')
    }
  >
    {/* Left: Image */}
    <div className="flex-1 w-full order-2 md:order-1">
      <div className="w-full rounded-2xl overflow-hidden border border-[#2fc4a0]/50 shadow-lg">
        <img
          src="/Doxaliapp.png"
          alt="Doxali App Interface"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>

    {/* Right: Text */}
    <div className="flex-1 order-1 md:order-2 text-left min-h-[500px]">
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
        Meet Your<br />
        <span className="text-[#2fc4a0]">AI Document Assistant</span>
      </h2>
      <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl space-y-6">
        <p>Documents can be dense, slow, and costly to process.</p>
        <p>
          <span className="text-[#2fc4a0] font-semibold">Doxali’s AI Assistant</span> changes that — giving you an on-demand expert that pulls key clauses, summarizes contracts, and delivers structured insights in seconds.
        </p>
        <p>Built on GPT-4. Optimized for real-world legal and technical use cases.</p>
        <p>
          Whether you're reviewing NDAs, leases, or technical specs, Doxali ensures you never miss a critical clause. With contextual understanding and structured extraction, it's built to save professionals time and reduce risk — while giving teams confidence in every decision they make.
        </p>
        <p>
          No more CTRL+F guesswork or endless scrolling. Doxali helps you zero in on obligations, renewal windows, and liability exposure instantly — making document comprehension faster, smarter, and more actionable.
        </p>
      </div>
    </div>
  </div>
</section>

<FAQPricing />

{/* CTA Section - styled like Product page */}
<section className="py-16 px-6 bg-gradient-to-r from-[#2fc4a0] to-[#28b093] text-white text-center">
  <h2 className="text-3xl font-semibold mb-4">Need a Custom Plan or Help Deciding?</h2>
   <p className="text-lg">
    Email us at <a href="mailto:Sales@doxali.com" className="underline hover:text-white/90">Sales@doxali.com</a>
  </p>
</section>
      <Footer />
    </>
  );
}
