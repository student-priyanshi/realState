import React, { useState } from 'react';
import { Home, Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <Home className="w-8 h-8 text-amber-600" />
            <span className="text-stone-900">DreamHome</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('buy')}
              className={`transition-colors ${
                currentPage === 'buy' ? 'text-amber-600' : 'text-stone-700 hover:text-amber-600'
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => handleNavClick('rent')}
              className={`transition-colors ${
                currentPage === 'rent' ? 'text-amber-600' : 'text-stone-700 hover:text-amber-600'
              }`}
            >
              Rent
            </button>
            <button
              onClick={() => handleNavClick('sell')}
              className={`transition-colors ${
                currentPage === 'sell' ? 'text-amber-600' : 'text-stone-700 hover:text-amber-600'
              }`}
            >
              Sell
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors ${
                currentPage === 'about' ? 'text-amber-600' : 'text-stone-700 hover:text-amber-600'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors ${
                currentPage === 'contact' ? 'text-amber-600' : 'text-stone-700 hover:text-amber-600'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-stone-600">
              <Phone className="w-4 h-4" />
              <span className="text-sm">(555) 123-4567</span>
            </div>
            <button
              onClick={() => handleNavClick('sell')}
              className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
            >
              List Property
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => handleNavClick('buy')}
              className={`block w-full text-left py-2 ${
                currentPage === 'buy' ? 'text-amber-600' : 'text-stone-700 hover:text-amber-600'
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => handleNavClick('rent')}
              className={`block w-full text-left py-2 ${
                currentPage === 'rent' ? 'text-amber-600' : 'text-stone-700 hover:text-amber-600'
              }`}
            >
              Rent
            </button>
            <button
              onClick={() => handleNavClick('sell')}
              className={`block w-full text-left py-2 ${
                currentPage === 'sell' ? 'text-amber-600' : 'text-stone-700 hover:text-amber-600'
              }`}
            >
              Sell
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`block w-full text-left py-2 ${
                currentPage === 'about' ? 'text-amber-600' : 'text-stone-700 hover:text-amber-600'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`block w-full text-left py-2 ${
                currentPage === 'contact' ? 'text-amber-600' : 'text-stone-700 hover:text-amber-600'
              }`}
            >
              Contact
            </button>
            <div className="flex items-center gap-2 text-stone-600 py-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">(555) 123-4567</span>
            </div>
            <button
              onClick={() => handleNavClick('sell')}
              className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              List Property
            </button>
          </div>
        </div>
      )}
    </header>
  );
}