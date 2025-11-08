'use client';

import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hope<span className="font-extrabold">Together</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center space-x-1">
            {[
              { name: 'Home', href: '#' },
              { name: 'About', href: '#' },
              { name: 'Resources', href: '#' },
              { name: 'Events', href: '#' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 ease-in-out"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Support
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-gray-600 rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-600 rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-full h-0.5 bg-gray-600 rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-4 border-t border-gray-200' : 'max-h-0'}`}>
          <ul className="flex flex-col space-y-3">
            {[
              { name: 'Home', href: '#' },
              { name: 'About', href: '#' },
              { name: 'Resources', href: '#' },
              { name: 'Events', href: '#' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}