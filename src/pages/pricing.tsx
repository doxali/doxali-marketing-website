import React, { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQPricing from "@/components/FAQPricing";

type BillingPeriod = "Monthly" | "Yearly";

const plans = [
  {
    shortTitle: "Free",
    title: "Free Tier (Starter Access)",
    price: { Monthly: "$0/mo", Yearly: "$0/yr" },
    features: [
      "10 Pages Per Day (Text Extraction Only)",
      "Chat With Your Documents (AI Assistant)",
      "20,000 AI Tokens Per Day (Input + Output)",
      "1 Saved Chat Thread",
      "1 Add-On Per Day (e.g., Executive Summary)",
      "No Subscription • No Credit Card Required",
    ],
    isCurrent: true,
    ctaLabel: "Get Started",
    ctaHref: "/signup",
  },
  {
    shortTitle: "Basic",
    title: "Standard Account (Flat Rate)",
    price: { Monthly: "Pay as you go", Yearly: "Pay as you go" },
    features: [
      "$0.05 Per Page (Text Extraction + Structured Abstraction)",
      "$0.01 Per AI Message (Up to 15k Input / 5k Output Tokens)",
      "10 GB Document Storage",
      "Pay-As-You-Go • No Subscription",
    ],
    ctaLabel: "Upgrade Plan",
    ctaHref: "/billing/standard",
  },
  {
    shortTitle: "Business",
    title: "Doxali Professional (Usage-Based)",
    price: {
      Monthly: "$19.99/mo",
      Yearly: `$${(19.99 * 12 * 0.9).toFixed(2)}/yr`, // 10% discount
    },
    features: [
      "$19.99 Monthly Subscription",
      "$0.01 Per Page (Priority File Types Included)",
      "AI Chat: $0.00015 per 1,000 Input Tokens",
      "AI Chat: $0.00060 per 1,000 Output Tokens",
      "Up to 100k Input / 25k Output Tokens Per Message",
      "100 GB Document Storage",
      "SOC 2 Type II, GDPR, TLS 1.2+, AES-256 Encryption",
    ],
    isFeatured: true,
    ctaLabel: "Upgrade Plan",
    ctaHref: "/billing/pro",
  },
  {
    shortTitle: "Enterprise",
    title: "Doxali Enterprise",
    price: { Monthly: "—", Yearly: "—" },
    features: [
      "Custom Annual Contract (Contact Sales)",
      "$0.005 Per Page (Extraction + Abstraction)",
      "AI Chat: $0.00010 per 1,000 Input Tokens",
      "AI Chat: $0.00040 per 1,000 Output Tokens",
      "Up to 200k Input / 50k Output Tokens Per Message",
      "Unlimited Document Storage",
      "SSO, Dedicated Account Manager, SOC 2 Type II, SLA",
      "On-Prem / VPC Deployment Option",
    ],
    ctaLabel: "Contact Sales",
    ctaHref: "/contact",
  },
];

const comparisonSections = [
  {
    title: "Usage & Limits",
    rows: [
      { label: "Documents Per Month", values: ["10", "100", "1,000", "Custom"] },
      { label: "File Upload Size", values: ["5 MB", "20 MB", "100 MB", "Unlimited"] },
      { label: "Storage Duration", values: ["7 Days", "30 Days", "180 Days", "Custom"] },
      { label: "Users Per Account", values: ["1", "5", "25", "Unlimited"] },
    ],
  },
  {
    title: "AI Document Intelligence",
    rows: [
      { label: "Document Extraction", values: [true, true, true, true] },
      { label: "Document Summarization", values: [true, true, true, true] },
      { label: "Document Storage Access", values: [false, true, true, true] },
      { label: "Document Specific Chat Context", values: [false, true, true, true] },
      { label: "Custom Prompt Templates", values: [false, false, true, true] },
    ],
  },
  {
    title: "Integrations & Automation",
    rows: [
      { label: "Slack / Discord Intake", values: [false, true, true, true] },
      { label: "Email-To-AI Input", values: [false, true, true, true] },
      { label: "OpenAI API Integration", values: [false, true, true, true] },
      { label: "Webhooks & Structured Exports", values: [false, false, true, true] },
    ],
  },
  {
    title: "Productivity Features",
    rows: [
      { label: "Downloadable Summaries", values: [false, true, true, true] },
      { label: "Clause Library & Reuse", values: [false, false, true, true] },
      { label: "Bulk Document Import", values: [false, false, true, true] },
      { label: "Version Comparison", values: [false, false, true, true] },
    ],
  },
  {
    title: "Insights & Analytics",
    rows: [
      { label: "Document Activity Reports", values: [false, true, true, true] },
      { label: "Clause Usage Trends", values: [false, false, true, true] },
      { label: "Exported Data Analysis", values: [false, false, true, true] },
      { label: "Custom Dashboards", values: [false, false, false, true] },
    ],
  },
  {
    title: "Security & Compliance",
    rows: [
      { label: "Google SSO", values: [false, true, true, true] },
      { label: "SOC 2 Type II Readiness", values: [false, false, true, true] },
      { label: "HIPAA & GDPR Support", values: [false, false, true, true] },
      { label: "Audit Logs", values: [false, false, true, true] },
      { label: "Custom Data Retention Policies", values: [false, false, false, true] },
    ],
  },
  {
    title: "Support & Services",
    rows: [
      { label: "Email Support", values: [true, true, true, true] },
      { label: "Priority Response Time", values: [false, false, true, true] },
      { label: "Onboarding & Training", values: [false, false, true, true] },
      { label: "Dedicated Account Manager", values: [false, false, false, true] },
      { label: "Custom Deployment", values: [false, false, false, true] },
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
        className="relative pt-8 pb-20 min-h-screen
                   bg-gradient-to-b from-[#d1fae5] to-white
                   dark:from-[#2a2a2a] dark:via-[#111111] dark:to-black
                   text-[#0c1f1b] dark:text-white overflow-hidden"
      >
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center px-4 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Clear, Scalable Pricing for Every Workflow
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Choose a tier that fits your volume, team size, and security needs—
            starting free, scaling up.
          </p>
          <BillingToggle period={billingPeriod} setPeriod={setBillingPeriod} />
        </div>

{/* Pricing Cards */}
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
  {plans.map((plan) => (
    <div
      key={plan.shortTitle}
      className={`
        group transition-all duration-300 transform hover:scale-105
      `}
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
          <h2 className="text-xl font-semibold">{plan.title}</h2>
          <div className="mt-4 text-3xl font-bold">
            {plan.price[billingPeriod]}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {plan.features.map((f) => (
              <li key={f}>
                <span className="text-[#28b093] font-bold mr-1">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={plan.ctaHref}
          className={`
            mt-6 block w-full text-center font-semibold rounded-full px-6 py-3
            ${
              plan.isCurrent
                ? "border-2 border-[#2fc4a0] text-[#2fc4a0] bg-transparent cursor-default"
                : "bg-gradient-to-r from-[#2fc4a0] to-[#28b093] text-white hover:opacity-90"
            }
          `}
        >
          {plan.isCurrent ? "Current Plan" : plan.ctaLabel}
        </a>
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
    or <a href="/contact" className="underline">contact sales</a>
  </p>
</section>
      </main>

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
