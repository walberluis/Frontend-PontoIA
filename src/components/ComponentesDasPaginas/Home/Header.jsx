import React from 'react';
import logo from '../../../assets/logo-academy.png'

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-16">
      <h1 className="text-5xl font-bold text-[#4493AC]">Home</h1>
      <img
        src={logo}
        alt="Logo"
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};

export default Header;