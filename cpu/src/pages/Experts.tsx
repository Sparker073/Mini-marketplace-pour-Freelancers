import React from 'react';
import { ArrowLeft, Search, CheckCircle, Filter } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import CategoryFilter from '../components/CategoryFilter';

const Experts = () => {
  const navigate = useNavigate();
  const { getFilteredExperts } = useStore();
  const experts = getFilteredExperts();

  return (
    <div className="min-h-screen bg-[#091837] relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1B78B1]/20 rounded-full filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#74DBFD]/10 rounded-full filter blur-[120px] animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1E2C37]/20 rounded-full filter blur-[150px] animate-pulse-slow"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="inline-flex items-center text-[#74DBFD] hover:text-white group">
              <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>
            <button
              onClick={() => navigate('/add-service')}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#1B78B1] to-[#74DBFD] text-white hover:from-[#74DBFD] hover:to-[#1B78B1] transition-all duration-300"
            >
              Become an Expert
            </button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-[#74DBFD] text-transparent bg-clip-text mb-4">
              Our Expert Network
            </h1>
            <p className="text-[#74DBFD]/80 max-w-2xl mx-auto">
              Connect with industry-leading professionals who bring years of experience and expertise to your projects.
            </p>
          </div>

          <CategoryFilter />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {experts.map((expert) => (
              <div
                key={expert.name}
                className="group backdrop-blur-md bg-[#1E2C37]/40 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#74DBFD]/10 hover:-translate-y-2 border border-[#74DBFD]/10"
                onClick={() => navigate(`/expert/${expert.name.toLowerCase().replace(/\s+/g, '-')}`)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1B78B1] to-[#74DBFD] rounded-full flex items-center justify-center text-white text-xl font-semibold shadow-lg group-hover:shadow-[#74DBFD]/30 transition-all duration-500">
                      {expert.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white group-hover:text-[#74DBFD] transition-colors duration-300">
                        {expert.name}
                      </h3>
                      <p className="text-[#74DBFD] text-sm font-medium flex items-center">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {expert.expertise}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-white/80">{expert.role}</p>
                    <p className="text-[#74DBFD]/70 text-sm">Previously at {expert.company}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#74DBFD]/10">
                    <button className="w-full py-2 px-4 rounded-lg bg-[#091837]/50 border border-[#1B78B1]/50 text-[#74DBFD] group-hover:bg-gradient-to-r group-hover:from-[#1B78B1] group-hover:to-[#74DBFD] group-hover:text-white group-hover:border-transparent transition-all duration-500">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;