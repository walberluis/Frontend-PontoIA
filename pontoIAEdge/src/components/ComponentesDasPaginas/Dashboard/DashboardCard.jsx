import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const DashboardCard = ({ children }) => {
  return (
    <div className="border-2 border-gray-300 rounded-3xl p-8 bg-white">
      <div className="flex items-center gap-3 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-[#D4E8ED] rounded-lg hover:bg-[#c4dde3] transition-colors">
          <span className="font-medium text-gray-700">Monthly</span>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </button>
        <button className="w-9 h-9 bg-[#D4E8ED] rounded-full flex items-center justify-center hover:bg-[#c4dde3] transition-colors">
          <HelpCircle className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {children}
    </div>
  );
};

export default DashboardCard;