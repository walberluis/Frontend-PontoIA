import React from 'react';
import { AlertTriangle } from 'lucide-react';

const RemoverAlunoModal = ({ isOpen, onClose, onConfirm, nomeAluno }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay sombreado */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-30 max-h-50 border-4 border-blue-500">
        <div className="p-12">
          {/* Título */}
          <h2 className="text-4xl font-bold text-center mb-8">Remover Aluno</h2>

          {/* Pergunta */}
          <p className="text-2xl text-center mb-8 text-['Inter']">
            Tem certeza que desejar remover <strong>{nomeAluno}</strong>?
          </p>

          {/* Aviso */}
          <div className="bg-[#2C3E50] rounded-xl p-6 mb-12 flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-white flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Inter']">Aviso</h3>
              <p className="text-white text-lg">
                Ao remover esta conta, o aluno será desligado do sistema.
              </p>
            </div>
          </div>

          {/* Botões */}
          <div className="flex items-center justify-between gap-8">
            <button
              onClick={onClose}
              className="flex-1 px-8 border-black py-4 text-2xl font-semibold text-gray-800 hover:bg-gray-100 rounded-xl transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 border-black px-8 py-4 text-2xl font-semibold text-gray-800 hover:bg-red-400 rounded-xl transition-colors"
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoverAlunoModal;