import React from 'react';
import { Plus, MoreVertical } from 'lucide-react';
import ConfigCard from './ConfigCard';

const ConfigSection = ({ title, items, showAvatars = false }) => {
  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Botão Adicionar */}
      <button className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-8 mb-4 hover:border-gray-400 hover:bg-gray-100 transition-colors flex items-center justify-center">
        <Plus className="w-6 h-6 text-gray-400" />
      </button>

      {/* Lista de Cards */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <ConfigCard
            key={index}
            title={item.title}
            count={item.count}
            showAvatars={showAvatars}
            onEdit={() => console.log('Edit', item.title)}
            onDelete={() => console.log('Delete', item.title)}
            onAdd={() => console.log('Add', item.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default ConfigSection;