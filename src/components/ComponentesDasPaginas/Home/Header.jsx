import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-16">
      <h1 className="text-4xl font-bold text-[#4493AC]">Home</h1>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
        <div>
          <div className="text-lg font-bold text-gray-800">Edge Academy</div>
        </div>
      </div>
    </div>
  );
};

export default Header;