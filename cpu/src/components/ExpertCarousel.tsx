import React, { useRef } from 'react';
import { CheckCircle, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

const ExpertCarousel = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const { getFilteredExperts } = useStore();
  const filteredExperts = getFilteredExperts();

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleViewProfile = (expertId: string) => {
    navigate(`/expert/${expertId}`);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#091837]/0 via-[#1B78B1]/5 to-[#091837]/0"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white to-[#74DBFD] text-transparent bg-clip-text">
            Explore Our Expert Services
          </h2>
          <button
            onClick={() => navigate('/experts')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1E2C37]/50 text-[#74DBFD] hover:bg-[#1B78B1]/20 transition-all duration-300"
          >
            <Users className="h-4 w-4" />
            View All Experts
          </button>
        </div>
        
        <p className="text-[#74DBFD]/80 mb-12 max-w-2xl">
          Connect with industry leaders who've worked at top companies and bring exceptional skills to your projects.
        </p>

        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#1E2C37]/80 hover:bg-[#1B78B1] transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
          >
            <ChevronLeft className="h-6 w-6 text-[#74DBFD]" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#1E2C37]/80 hover:bg-[#1B78B1] transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
          >
            <ChevronRight className="h-6 w-6 text-[#74DBFD]" />
          </button>

          <div
            ref={carouselRef}
            className="overflow-x-auto py-10 hide-scrollbar flex gap-6 pb-4 snap-x snap-mandatory scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {filteredExperts.map((expert, index) => (
              <div
                key={expert.name}
                className={`flex-none w-[300px] snap-start group relative backdrop-blur-md bg-[#1E2C37]/40 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#74DBFD]/10 hover:-translate-y-2 ${
                  expert.featured ? 'ring-2 ring-[#74DBFD]' : 'hover:ring-1 hover:ring-[#1B78B1]'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#1B78B1]/30 to-transparent"></div>
                
                {expert.featured && (
                  <div className="absolute top-3 right-3 bg-[#74DBFD] text-[#091837] text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Featured
                  </div>
                )}
                
                <div className="p-6 flex flex-col items-center relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#1B78B1] to-[#74DBFD] rounded-full mb-4 flex items-center justify-center text-white text-2xl font-semibold shadow-lg group-hover:shadow-[#74DBFD]/30 transition-all duration-500 transform group-hover:scale-105">
                    {expert.name.charAt(0)}
                  </div>
                  
                  <h3 className="font-bold text-white group-hover:text-[#74DBFD] transition-colors duration-300">{expert.name}</h3>
                  <p className="text-[#74DBFD] text-sm font-medium flex items-center">
                    <CheckCircle className="h-3 w-3 mr-1 text-[#74DBFD]" />
                    {expert.expertise}
                  </p>
                  <p className="text-sm text-white/80 mt-1">{expert.role}</p>
                  <p className="text-xs text-[#74DBFD]/70 mt-2">Previously at {expert.company}</p>
                  
                  <button 
                    onClick={() => handleViewProfile(expert.name.toLowerCase().replace(/\s+/g, '-'))}
                    className="mt-6 w-full py-2 px-4 rounded-lg bg-[#091837]/50 border border-[#1B78B1]/50 text-[#74DBFD] group-hover:bg-gradient-to-r group-hover:from-[#1B78B1] group-hover:to-[#74DBFD] group-hover:text-white group-hover:border-transparent transition-all duration-500"
                  >
                    View Profile
                  </button>
                </div>
                
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#091837]/40 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertCarousel;