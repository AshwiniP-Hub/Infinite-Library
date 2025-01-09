// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for books..."
        className="w-full max-w-lg p-2 border border-gray-300 rounded-lg shadow-sm "
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition duration-200"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
