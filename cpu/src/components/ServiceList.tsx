import React, { useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const ServiceList = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [searchFocused, setSearchFocused] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { setSearchQuery } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddService = () => {
    navigate('/add-service');
  };

  return (
    <div className="bg-[#091837] relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Main Background */}
        <div className="absolute inset-0 bg-[#091837] z-0"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-50%] left-[-10%] right-0 bottom-0 opacity-40">
          <div className="absolute w-[500px] h-[500px] bg-[#1B78B1] rounded-full filter blur-[80px] animate-float"></div>
        </div>
        <div className="absolute top-[20%] right-[-30%] opacity-20">
          <div className="absolute w-[600px] h-[600px] bg-[#74DBFD] rounded-full filter blur-[100px] animate-float-slow"></div>
        </div>
        <div className="absolute bottom-[-20%] left-[30%] opacity-20">
          <div className="absolute w-[500px] h-[500px] bg-[#1E2C37] rounded-full filter blur-[80px] animate-pulse-slow"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
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
                  className="block py-2 text-[#74DBFD] hover:text-white transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </button>
                <button 
                  className="block py-2 text-[#74DBFD] hover:text-white transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Experts
                </button>
                <button 
                  className="block py-2 text-[#74DBFD] hover:text-white transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </button>
                <button 
                  className="block py-2 text-[#74DBFD] hover:text-white transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </button>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section - Full Width */}
        <div className="relative w-full min-h-[400px]">
          {/* Hero Background Image - Full Width */}
          <div className=" absolute inset-0 z-0 overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="Collaboration" 
              className="w-full h-full object-cover scale-110 transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#091837]/75"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#091837]/80 via-[#091837]/60 to-[#091837]"></div>
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeIn">
                <span className="bg-gradient-to-r from-white to-[#74DBFD] text-transparent bg-clip-text">
                  Connect with Top-Tier
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#74DBFD] to-white text-transparent bg-clip-text">
                  Freelance Talents
                </span>
              </h1>
              
              <p className="text-[#74DBFD]/90 mb-8 max-w-xl mx-auto animate-fadeInDelayed">
                Find the perfect expert for your project or offer your specialized skills to clients worldwide.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 animate-fadeInDelayed backdrop-blur-sm bg-[#091837]/30 p-4 rounded-xl">
                <div className={`relative w-full md:w-72 transition-all duration-300 ${
                  searchFocused ? 'transform scale-105 shadow-lg shadow-[#74DBFD]/20' : ''
                }`}>
                  <Search className={`absolute left-3 top-2.5 h-5 w-5 transition-all duration-300 ${
                    searchFocused ? 'text-[#74DBFD]' : 'text-[#1B78B1]'
                  }`} />
                  <input 
                    type="text" 
                    placeholder="Search for experts..." 
                    className="pl-10 py-2 px-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#74DBFD] border-none bg-[#091837]/50 backdrop-blur-sm text-white transition-all duration-300"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <span className="text-[#74DBFD]/50">Or</span>
                
                <button
                  onClick={handleAddService}
                  className="w-full md:w-auto py-2 px-6 rounded-lg bg-gradient-to-r from-[#1B78B1] to-[#74DBFD] text-white font-medium hover:from-[#74DBFD] hover:to-[#1B78B1] transition-all duration-500 shadow-lg hover:shadow-[#74DBFD]/20 transform hover:-translate-y-1"
                >
                  Share your Talents
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;