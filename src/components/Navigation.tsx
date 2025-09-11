'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-lg shadow-2xl sticky top-0 z-50 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-20">
          {/* Logo - Positioned absolutely */}
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-10">
            <Link href="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-black text-white group-hover:text-blue-400 transition-all duration-300">
                    Auto<span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Repair</span>
                  </div>
                  <div className="text-xs text-slate-400 font-medium tracking-wider">PROFESSIONAL SERVICE</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex lg:items-center lg:justify-center h-full">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-5 py-3 text-slate-300 hover:text-white font-semibold text-base tracking-wide transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button & Mobile Menu - Positioned absolutely */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-4">
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Get Estimate
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                  <span className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
                    <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-90' : '-translate-y-2'}`}></span>
                    <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'translate-y-0'}`}></span>
                    <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-90' : 'translate-y-2'}`}></span>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden bg-slate-900/98 backdrop-blur-lg border-t border-slate-700/50 transform transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center justify-between p-4 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl font-semibold transition-all duration-300 hover:translate-x-2 group"
              style={{
                animationDelay: isMenuOpen ? `${index * 0.1}s` : '0s',
                animation: isMenuOpen ? `slideInRight 0.3s ease-out ${index * 0.1}s both` : 'none'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{item.name}</span>
              <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}

          {/* Mobile CTA */}
          <div className="pt-4 border-t border-slate-700/50">
            <Link href="/contact" className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
