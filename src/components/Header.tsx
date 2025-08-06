'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-transparent bg-[#d1fae5] dark:bg-[#2a2a2a] shadow-sm backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4 relative flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center z-10">
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

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 text-sm">
          <Link href="/product" className="hover:text-[#28b093] transition">Product</Link>
          <Link href="/pricing" className="hover:text-[#28b093] transition">Pricing</Link>
          <Link href="/about" className="hover:text-[#28b093] transition">About</Link>
          <Link href="/resources" className="hover:text-[#28b093] transition">Resources</Link>
          <Link href="/contact" className="hover:text-[#28b093] transition">Contact</Link>
          <Link href="/blog" className="hover:text-[#28b093] transition">Blog</Link>
        </nav>

        {/* Right: Get Started (Always Visible) */}
        <div className="text-sm z-10 hidden md:block">
          <a
            href="/launch"
            className="text-[#2fc4a0] hover:text-[#28b093] dark:text-[#2fc4a0] dark:hover:text-[#28b093] font-medium"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-10 text-gray-700 dark:text-gray-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-4 bg-[#d1fae5] dark:bg-[#2a2a2a] border-t border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
          <Link href="/product" onClick={() => setMobileOpen(false)}>Product</Link>
          <Link href="/pricing" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <Link href="/resources" onClick={() => setMobileOpen(false)}>Resources</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
          <a
            href="/launch"
            onClick={() => setMobileOpen(false)}
            className="text-[#2fc4a0] hover:text-[#28b093] font-medium"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
