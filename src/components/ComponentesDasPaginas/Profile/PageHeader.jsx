import React from 'react';
import SearchBar from '../Home/SearchBar';

const PageHeader = ({ title, showSearch = false, searchTerm = '', onSearchChange }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-[#4493AC]">{title}</h1>
      {showSearch && <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />}
    </div>
  );
};

export default PageHeader;