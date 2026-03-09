import React, { useState } from 'react';
import { Trash2, X, Pencil } from 'lucide-react';

// ─── Modal de EXCLUIR ─────────────────────────────────────────────────────────
export const ExcluirItemModal = ({ isOpen, onClose, onConfirm, nomeItem, tipoItem = 'item' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-red-400 to-red-600" />

        <div className="p-8 flex flex-col items-center text-center">
          {/* Ícone */}
          <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-5">
            <Trash2 className="w-8 h-8 text-red-500" />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">Excluir {tipoItem}</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Tem certeza que deseja excluir{' '}
            <span className="font-semibold text-gray-700">"{nomeItem}"</span>?
            <br />
            Esta ação não poderá ser desfeita.
          </p>

          <div className="flex gap-3 w-full">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold
                         hover:bg-gray-50 transition-colors text-sm"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 py-3 rounded-xl bg-red-500 text-white font-semibold
                         hover:bg-red-600 transition-colors text-sm"
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Modal de EDITAR ─────────────────────────────────────────────────────────
export const EditarItemModal = ({ isOpen, onClose, onConfirm, nomeAtual, tipoItem = 'item' }) => {
  const [novoNome, setNovoNome] = useState(nomeAtual ?? '');

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (novoNome.trim()) {
      onConfirm(novoNome.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#4493AC] to-[#243D6D]" />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EAF4F8] flex items-center justify-center">
                <Pencil className="w-5 h-5 text-[#4493AC]" />
              </div>
              <h2 className="text-xl font-bold text-[#243D6D]">Editar {tipoItem}</h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Campo */}
          <div className="mb-6">
            <label className="text-sm text-gray-500 mb-2 block">Nome do {tipoItem}</label>
            <input
              type="text"
              value={novoNome}
              onChange={e => setNovoNome(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleConfirm()}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none
                         focus:border-[#4493AC] transition-colors text-gray-800"
              autoFocus
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold
                         hover:bg-gray-50 transition-colors text-sm"
            >
              Cancelar
            </button>
            <button
              onClick={handleConfirm}
              disabled={!novoNome.trim()}
              className="flex-1 py-3 rounded-xl bg-[#4493AC] text-white font-semibold
                         hover:bg-[#357a96] transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};