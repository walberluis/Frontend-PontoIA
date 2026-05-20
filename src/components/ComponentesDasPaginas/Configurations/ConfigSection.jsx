import React from 'react';
import { Plus, MoreVertical } from 'lucide-react';
import ConfigCard from './ConfigCard';

const ConfigSection = ({ title, items, showAvatars = false }) => {
  const getEmptyMessage = () => {
    switch (title.toLowerCase()) {
      case 'turmas':
        return 'Nenhuma turma cadastrada';
      case 'cargos':
        return 'Nenhum cargo cadastrado';
      case 'cursos':
        return 'Nenhum curso cadastrado';
      default:
        return 'Nenhum item cadastrado';
    }
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Botão Adicionar */}
      <button className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-6 mb-3 hover:border-gray-400 hover:bg-gray-100 transition-colors flex items-center justify-center">
        <Plus className="w-6 h-6 text-gray-400" />
      </button>

      {/* Lista de Cards ou Estado Vazio */}
      {items && items.length > 0 ? (
        <div className="space-y-3">
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
      ) : (
        <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-2xl bg-white text-gray-400">
          <p className="text-sm font-medium">{getEmptyMessage()}</p>
        </div>
      )}
    </div>
  );
};

export default ConfigSection;