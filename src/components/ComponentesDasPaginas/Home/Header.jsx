import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-16">
      <h1 className="text-4xl font-bold text-[#4493AC]">Home</h1>
      <img
        src="/src/assets/logo-academy.png"
        alt="Logo"
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};

export default Header;