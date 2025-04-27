import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#091837] via-[#1B78B1]/10 to-[#091837]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-[#74DBFD] text-transparent bg-clip-text mb-4">
            Get in Touch
          </h2>
          <p className="text-[#74DBFD]/80 max-w-2xl mx-auto">
            Have questions or ready to start your project? We're here to help you find the perfect expert for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className="backdrop-blur-lg bg-[#1E2C37]/30 p-6 rounded-2xl border border-[#74DBFD]/10 shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-[#74DBFD] text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-[#091837]/50 border border-[#1B78B1]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#74DBFD] transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[#74DBFD] text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-[#091837]/50 border border-[#1B78B1]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#74DBFD] transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-[#74DBFD] text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-[#091837]/50 border border-[#1B78B1]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#74DBFD] transition-all duration-300 h-32"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#1B78B1] to-[#74DBFD] text-white font-medium hover:from-[#74DBFD] hover:to-[#1B78B1] transition-all duration-500 shadow-lg hover:shadow-[#74DBFD]/20 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="backdrop-blur-lg bg-[#1E2C37]/30 p-6 rounded-2xl border border-[#74DBFD]/10 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-[#1B78B1] to-[#74DBFD]">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email Us</h3>
                  <p className="text-[#74DBFD]">contact@yohatech.com</p>
                  <p className="text-[#74DBFD]/70 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-[#1E2C37]/30 p-6 rounded-2xl border border-[#74DBFD]/10 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-[#1B78B1] to-[#74DBFD]">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Call Us</h3>
                  <p className="text-[#74DBFD]">+1 (555) 123-4567</p>
                  <p className="text-[#74DBFD]/70 text-sm mt-1">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-[#1E2C37]/30 p-6 rounded-2xl border border-[#74DBFD]/10 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-[#1B78B1] to-[#74DBFD]">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                  <p className="text-[#74DBFD]">123 Innovation Drive</p>
                  <p className="text-[#74DBFD]/70 text-sm mt-1">San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;