import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useStore } from '../store/useStore';

const SearchBar = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const { setSearchQuery } = useStore();

  return (
    <div className={`relative w-full md:w-72 transition-all duration-300 ${
      searchFocused ? 'transform scale-105 shadow-lg shadow-[#74DBFD]/20' : ''
    }`}>
      <Search className={`absolute left-3 top-2.5 h-5 w-5 transition-all duration-300 ${
        searchFocused ? 'text-[#74DBFD]' : 'text-[#1B78B1]'
      }`} />
      <input 
        type="text" 
        placeholder="Search for services..." 
        className="pl-10 py-2 px-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#74DBFD] border-none bg-[#091837]/50 backdrop-blur-sm text-white transition-all duration-300"
        onFocus={() => setSearchFocused(true)}
        onBlur={() => setSearchFocused(false)}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;