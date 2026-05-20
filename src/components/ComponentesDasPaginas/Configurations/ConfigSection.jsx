'use client';

import React, { useState } from 'react';
import { Plus, MoreVertical } from 'lucide-react';
import ConfigCard from './ConfigCard';
import { AdicionarItemModal } from '@/Site/PopUpsEModals/Configmodals';

const ConfigSection = ({ title, initialItems = [], tipoItem = 'item', showAvatars = false }) => {
  const [items, setItems] = useState(initialItems);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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

  const handleAddItem = (nome) => {
    setItems([...items, { title: nome, count: 0 }]);
  };

  const handleRenameItem = (index, novoNome) => {
    const updated = [...items];
    updated[index].title = novoNome;
    setItems(updated);
  };

  const handleRemoveItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  return (
    <>
      <div className="bg-gray-50 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        </div>

        {/* Botão Adicionar */}
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-6 mb-3 hover:border-gray-400 hover:bg-gray-100 transition-colors flex items-center justify-center bg-transparent"
        >
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
                tipoItem={tipoItem}
                showAvatars={showAvatars}
                onEdit={(novoNome) => handleRenameItem(index, novoNome)}
                onDelete={() => handleRemoveItem(index)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-2xl bg-white text-gray-400">
            <p className="text-sm font-medium">{getEmptyMessage()}</p>
          </div>
        )}
      </div>

      {/* Modal Adicionar */}
      <AdicionarItemModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onConfirm={handleAddItem}
        tipoItem={tipoItem}
      />
    </>
  );
};

export default ConfigSection;