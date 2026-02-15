import React from 'react';
import { User } from 'lucide-react';

const EntradaItem = ({ nome, hora }) => {
  return (
    <div className="flex items-center justify-between bg-[#D4E8ED] rounded-2xl px-6 py-4 mb-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-gray-700" />
        </div>
        <span className="font-medium text-gray-800">{nome}</span>
      </div>
      <span className="px-4 py-2 bg-[#2C3E50] text-white rounded-full text-sm font-medium">
        {hora}
      </span>
    </div>
  );
};

export default EntradaItem;