import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote:
      "We pulled rent escalation schedules and renewal dates from five leases in under an hour. It used to take a full afternoon to go through those manually, and even then we’d occasionally miss small details. With Doxali, we’ve standardized how lease data is reviewed across the team, which has improved both speed and consistency.",
    name: "Ellen S.",
    title: "Real Estate Analyst",
  },
  {
    quote:
      "The borrower name, loan amount, and maturity date from our loan agreements came through cleanly. It cut our prep time significantly and gave us structured data we could plug straight into our internal systems. We’ve now built a workflow around it to help with monthly portfolio reviews.",
    name: "Mark R.",
    title: "Loan Operations Specialist",
  },
  {
    quote:
      "Purchase price, closing date, and buyer details all populated reliably from the sale agreement document. It was the first time I didn’t need to go line by line checking those values by hand. I still do a quick scan afterward, but I rarely have to make edits now.",
    name: "Tina H.",
    title: "Transaction Coordinator",
  },
  {
    quote:
      "Uploading lease renewals and amendments gave us structured outputs for rent and security deposit terms within minutes. It helped us stay organized ahead of audit season and reduced the time we spent in spreadsheets. Even the formatting of the summaries makes it easier to hand off to others internally.",
    name: "Carlos F.",
    title: "Portfolio Manager",
  },
  {
    quote:
      "Even with scanned PDFs, it extracted interest rate, payment schedule, and collateral fields accurately. That’s been a consistent challenge for our team, and this tool handled it without needing adjustments. It’s a noticeable improvement compared to other OCR-based platforms we’ve tested.",
    name: "Priya M.",
    title: "Loan Processing Lead",
  },
  {
    quote:
      "We extracted property address, square footage, and rent commencement dates from multiple lease files without manual entry. That’s easily several hours saved each week just from those extractions alone. Having structured output also helps our team when importing into our lease management software.",
    name: "Lindsey P.",
    title: "Lease Administrator",
  },
  {
    quote:
      "The purchase and sale agreements yielded clean data on closing costs and contingencies. Having those fields consistently mapped made our internal review process far smoother than before. I also appreciate that it doesn’t try to over-interpret the data — it just gives you the clean version fast.",
    name: "James K.",
    title: "Real Estate Closing Analyst",
  },
  {
    quote:
      "Maturity date and amortization schedule for each loan were structured correctly. That used to be a tedious part of our workflow, and now it’s handled in a few clicks with no back-and-forth. We’ve since added it to our review checklist for every new loan file.",
    name: "Sara L.",
    title: "Credit Analyst",
  },
  {
    quote:
      "It flagged auto-renew clauses and CAM charges across our lease portfolio, helping us get ahead of upcoming escalations. This kind of automation has really streamlined our lease tracking. We now use it on every incoming lease and amendment as part of our onboarding process.",
    name: "Michelle A.",
    title: "Tenant Relations Manager",
  },
  {
    quote:
      "From the purchase agreements, the buyer, seller, and deposit terms were consistently captured. It helped eliminate manual lookup errors and gave our legal team better confidence in the summaries. The extracted terms are now archived alongside the original documents for quick reference.",
    name: "David W.",
    title: "Real Estate Underwriter",
  },{
  quote:
    "We’ve used Doxali primarily for lease abstracts, and it consistently surfaces renewal terms and tenant responsibilities without us having to comb through the entire document. It’s made onboarding new properties much faster, especially when dealing with third-party leases we didn’t draft.",
  name: "Haley T.",
  title: "Property Management Lead",
},
{
  quote:
    "When we migrated our loan files to a new system, Doxali helped us extract key financial terms quickly, including rate schedules and covenant triggers. That saved us from manually re-keying hundreds of values and reduced our error rate significantly.",
  name: "Jason M.",
  title: "VP, Lending Operations",
},
{
  quote:
    "Parsing through purchase contracts used to be one of the more time-consuming steps during diligence. Now we get a clean sheet with deal terms, earnest money, and inspection windows laid out — it’s helped both legal and acquisitions stay aligned.",
  name: "Lauren B.",
  title: "Director of Acquisitions",
},
{
  quote:
    "We use Doxali as a first-pass filter before contracts go to legal. The tool reliably identifies payment obligations, performance dates, and liability language — which gives us more confidence before escalation.",
  name: "Daniel K.",
  title: "Contract Intake Specialist",
},
{
  quote:
    "Most of the leases we work with are older PDFs or scans, and Doxali handles them better than anything else we’ve tried. The data we get back requires almost no cleanup, which is a big win when processing batches.",
  name: "Amira S.",
  title: "Commercial Lease Coordinator",
},
];
const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-36 pb-36 mb-0 bg-white dark:bg-black text-center text-[var(--foreground)] w-full px-4"
    >
      <h2
        className={
          'text-3xl md:text-4xl font-semibold mb-12 transition-opacity duration-700 opacity-0' +
          (isVisible ? ' opacity-100 animate-[fade-up-in_0.6s_ease-out]' : '')
        }
      >
        What Our Users Say
      </h2>

      <div className="flex justify-center overflow-visible">
        <div className="w-full max-w-screen-xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 overflow-visible">
          <div className="group transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#2fc4a0]/20 overflow-visible rounded-2xl shadow-md">
            <div className="bg-white dark:bg-[#0a0a0a] border border-white/10 rounded-2xl p-10 min-h-[200px] flex flex-col justify-between text-left">
              <blockquote className="italic text-base mb-4 text-gray-800 dark:text-gray-200">
                “{testimonials[index].quote}”
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonials[index].name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonials[index].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="flex flex-col items-center mt-6 gap-4">
  {/* Dot navigation */}
  <div className="flex gap-2">
    {testimonials.map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`h-2 w-2 rounded-full transition-all ${
          i === index
            ? 'bg-[#2fc4a0]'
            : 'bg-gray-300 dark:bg-gray-700 hover:bg-[#2fc4a0]/50'
        }`}
        aria-label={`Go to testimonial ${i + 1}`}
      />
    ))}
  </div>

  {/* Green arrow buttons */}
  <div className="flex gap-6 mt-2">
    <button
      onClick={() =>
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      }
      aria-label="Previous testimonial"
      className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {/* Left arrow */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2fc4a0]" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.707 14.707a1 1 0 01-1.414 0L7 10.414l4.293-4.293a1 1 0 111.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>
    </button>

    <button
      onClick={() =>
        setIndex((prev) => (prev + 1) % testimonials.length)
      }
      aria-label="Next testimonial"
      className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {/* Right arrow */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2fc4a0]" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 5.293a1 1 0 011.414 0L13 9.586l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
</div>
    </section>
  );
};

export default Testimonials;