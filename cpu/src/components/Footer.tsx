import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#091837] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B78B1]/5 to-[#091837]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#1B78B1] to-[#74DBFD] text-transparent bg-clip-text mb-4">
              yohatech
            </h3>
            <p className="text-[#74DBFD]/80 mb-6 max-w-md">
              Connecting businesses with top-tier freelance talent. Our platform makes it easy to find and collaborate with the best experts in their field.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-[#1E2C37] hover:bg-[#1B78B1] transition-colors duration-300">
                <Facebook className="h-5 w-5 text-[#74DBFD]" />
              </a>
              <a href="#" className="p-2 rounded-full bg-[#1E2C37] hover:bg-[#1B78B1] transition-colors duration-300">
                <Twitter className="h-5 w-5 text-[#74DBFD]" />
              </a>
              <a href="#" className="p-2 rounded-full bg-[#1E2C37] hover:bg-[#1B78B1] transition-colors duration-300">
                <Instagram className="h-5 w-5 text-[#74DBFD]" />
              </a>
              <a href="#" className="p-2 rounded-full bg-[#1E2C37] hover:bg-[#1B78B1] transition-colors duration-300">
                <Linkedin className="h-5 w-5 text-[#74DBFD]" />
              </a>
              <a href="#" className="p-2 rounded-full bg-[#1E2C37] hover:bg-[#1B78B1] transition-colors duration-300">
                <Github className="h-5 w-5 text-[#74DBFD]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#74DBFD]/80 hover:text-[#74DBFD] transition-colors duration-300">
                  Find Experts
                </a>
              </li>
              <li>
                <a href="#" className="text-[#74DBFD]/80 hover:text-[#74DBFD] transition-colors duration-300">
                  Become an Expert
                </a>
              </li>
              <li>
                <a href="#" className="text-[#74DBFD]/80 hover:text-[#74DBFD] transition-colors duration-300">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-[#74DBFD]/80 hover:text-[#74DBFD] transition-colors duration-300">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#74DBFD]/80 hover:text-[#74DBFD] transition-colors duration-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-[#74DBFD]/80 hover:text-[#74DBFD] transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#74DBFD]/80 hover:text-[#74DBFD] transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[#74DBFD]/80 hover:text-[#74DBFD] transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1B78B1]/20 py-6">
          <p className="text-center text-[#74DBFD]/60 text-sm">
            © {new Date().getFullYear()} yohatech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;