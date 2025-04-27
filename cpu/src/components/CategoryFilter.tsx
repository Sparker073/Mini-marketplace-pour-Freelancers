import React from 'react';
import { useStore } from '../store/useStore';

const CategoryFilter = () => {
  const { activeCategory, setActiveCategory } = useStore();
  const categories = ['All', 'Development', 'Design', 'Marketing', 'Business', 'Data Science'];

  return (
    <div className="py-4 bg-[#1E2C37]/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#1B78B1] to-[#74DBFD] text-white shadow-lg shadow-[#74DBFD]/20'
                  : 'bg-[#091837]/50 text-[#74DBFD] hover:bg-[#1B78B1]/20'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;