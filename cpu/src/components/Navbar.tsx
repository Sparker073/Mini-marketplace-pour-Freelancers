import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#091837]/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-[#1B78B1] to-[#74DBFD] text-transparent bg-clip-text hover:from-[#74DBFD] hover:to-[#1B78B1] transition-all duration-300 cursor-pointer"
            onClick={() => navigate('/')}
          >
            yohatech
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[#74DBFD] hover:text-white transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('experts')}
              className="text-[#74DBFD] hover:text-white transition-colors duration-300"
            >
              Experts
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-[#74DBFD] hover:text-white transition-colors duration-300"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-[#74DBFD] hover:text-white transition-colors duration-300"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#74DBFD] hover:text-white transition-colors duration-300"
            >
              Contact
            </button>
            <button className="p-2 rounded-full bg-[#1E2C37] hover:bg-[#1B78B1] transition-colors duration-300 group">
              <User className="h-5 w-5 text-[#74DBFD] group-hover:text-white transition-colors duration-300" />
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-[#1E2C37] hover:bg-[#1B78B1] transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-[#74DBFD]" />
              ) : (
                <Menu className="h-5 w-5 text-[#74DBFD]" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#091837]/95 backdrop-blur-lg animate-fadeIn">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <button 
              onClick={() => {
                scrollToSection('services');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full py-2 text-left text-[#74DBFD] hover:text-white transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => {
                scrollToSection('experts');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full py-2 text-left text-[#74DBFD] hover:text-white transition-colors duration-300"
            >
              Experts
            </button>
            <button 
              onClick={() => {
                scrollToSection('testimonials');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full py-2 text-left text-[#74DBFD] hover:text-white transition-colors duration-300"
            >
              Testimonials
            </button>
            <button 
              onClick={() => {
                scrollToSection('faq');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full py-2 text-left text-[#74DBFD] hover:text-white transition-colors duration-300"
            >
              FAQ
            </button>
            <button 
              onClick={() => {
                scrollToSection('contact');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full py-2 text-left text-[#74DBFD] hover:text-white transition-colors duration-300"
            >
              Contact
            </button>
            <button 
              className="block w-full py-2 text-left text-[#74DBFD] hover:text-white transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Profile
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;