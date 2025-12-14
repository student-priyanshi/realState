import React from 'react';
import { Home, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-8 h-8 text-amber-500" />
              <span className="text-white">DreamHome</span>
            </div>
            <p className="text-stone-400 mb-4 text-sm">
              Your trusted partner in finding the perfect property. We help you discover homes that match your dreams.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">
                  Agents
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">
                  Buy Property
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">
                  Rent Property
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">
                  Sell Property
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">
                  Property Management
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">
                  Home Loans
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-stone-400 text-sm">
                  123 Real Estate Ave, Los Angeles, CA 90001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-stone-400 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-stone-400 text-sm">info@dreamhome.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-sm text-center md:text-left">
            © 2025 DreamHome. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}