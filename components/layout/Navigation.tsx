'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BondLinkLogo } from '../BondLinkLogo';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Assessment', href: '/test' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#08090a]/90 backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <BondLinkLogo size={32} showText={true} variant="dark" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  item.name === 'Cosmic Blueprint'
                    ? 'bg-gradient-to-r from-[#5e6ad2] to-[#7170ff] bg-clip-text text-transparent'
                    : 'text-[#8a8f98] hover:text-[#f7f8f8]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/test"
              className="bg-[#5e6ad2] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-[#828fff] transition-colors"
            >
              Start Assessment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#8a8f98] hover:text-[#f7f8f8] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[rgba(255,255,255,0.05)]">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium py-2 px-3 rounded-md transition-colors ${
                    item.name === 'Cosmic Blueprint'
                      ? 'bg-gradient-to-r from-[#5e6ad2] to-[#7170ff] bg-clip-text text-transparent'
                      : 'text-[#8a8f98] hover:text-[#f7f8f8] hover:bg-[rgba(255,255,255,0.05)]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/test"
                className="bg-[#5e6ad2] text-white text-sm font-medium py-2.5 px-4 rounded-md text-center hover:bg-[#828fff] transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Assessment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
