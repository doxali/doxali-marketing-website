import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#d1fae5] dark:bg-[#2a2a2a] text-sm text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand with logos */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/doxali-logo.png"
                alt="Doxali logo"
                className="h-8 w-auto block dark:hidden"
              />
              <img
                src="/doxali-logo-dark.png"
                alt="Doxali logo (dark)"
                className="h-8 w-auto hidden dark:block"
              />
            </Link>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Features</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-[#28b093]">AI Summaries</Link></li>
              <li><Link href="#" className="hover:text-[#28b093]">Red Flag Detection</Link></li>
              <li><Link href="#" className="hover:text-[#28b093]">Clause Comparison</Link></li>
              <li><Link href="#" className="hover:text-[#28b093]">Multi-doc Chat</Link></li>
              <li><Link href="#" className="hover:text-[#28b093]">Version Control</Link></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="hover:text-[#28b093]">Pricing</Link></li>
              <li><Link href="#" className="hover:text-[#28b093]">Integrations</Link></li>
              <li><Link href="#" className="hover:text-[#28b093]">Roadmap</Link></li>
              <li><Link href="#" className="hover:text-[#28b093]">Release Notes</Link></li>
              <li><Link href="#" className="hover:text-[#28b093]">Security</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-[#28b093]">About</Link></li>
              <li><Link href="/blog" className="hover:text-[#28b093]">Blog</Link></li>
              <li><Link href="#" className="hover:text-[#28b093]">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-[#28b093]">Contact</Link></li>
              <li><Link href="/legal" className="hover:text-[#28b093]">Legal</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/resources" className="hover:text-[#28b093]">Guides</Link></li>
              <li><Link href="/faq" className="hover:text-[#28b093]">FAQs</Link></li>
              <li><Link href="/docs" className="hover:text-[#28b093]">Documentation</Link></li>
              <li><Link href="#" className="hover:text-[#28b093]">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#28b093]">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="mailto:hello@doxali.com" className="hover:text-[#28b093]">Email Us</Link></li>
              <li><Link href="https://discord.gg/doxali" target="_blank" className="hover:text-[#28b093]">Discord</Link></li>
              <li><Link href="#" className="hover:text-[#28b093]">GitHub</Link></li>
              <li><Link href="#" className="hover:text-[#28b093]">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-[#28b093]">YouTube</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-6 pb-8 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Doxali LLC ·{' '}
        <Link href="/terms" className="hover:text-[#28b093]">Terms</Link> ·{' '}
        <Link href="/privacy" className="hover:text-[#28b093]">Privacy</Link> ·{' '}
        <Link href="/legal" className="hover:text-[#28b093]">Legal</Link>
      </div>
    </footer>
  );
}
