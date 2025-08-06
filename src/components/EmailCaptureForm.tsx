import { useState } from 'react';

export default function EmailCaptureForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        alert('Subscription failed. Please try again later.');
      }
    } catch (err) {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="group mt-16 max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#2fc4a0]/20">
      <div className="bg-gradient-to-b from-gray-100 to-white dark:from-[#1d1d1d] dark:to-[#111] border border-white/10 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">📬 Get the Latest from Doxali</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Join 10,000+ readers for tips on AI-powered document review, legal automation, and product news.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2fc4a0]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#2fc4a0] hover:bg-[#28b093] text-white font-semibold px-6 py-3 rounded transition disabled:opacity-60"
            disabled={loading || submitted}
          >
            {submitted ? 'Thank you!' : loading ? 'Submitting...' : 'Subscribe'}
          </button>
        </form>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
