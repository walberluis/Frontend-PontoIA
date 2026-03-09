import React, { useState } from 'react';
import { Users, Edit2, Trash2 } from 'lucide-react';
import { ExcluirItemModal, EditarItemModal } from '../../../Site/PopUpsEModals/ConfigModals';

const ConfigCard = ({ title, count, tipoItem = 'item', onEdit, onDelete }) => {
  const [excluirOpen, setExcluirOpen] = useState(false);
  const [editarOpen,  setEditarOpen]  = useState(false);

  const handleConfirmDelete = () => {
    onDelete?.();
    setExcluirOpen(false);
  };

  const handleConfirmEdit = (novoNome) => {
    onEdit?.(novoNome);
  };

  return (
    <>
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{count} Alunos</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Lápis → abre modal de edição */}
            <button
              onClick={() => setEditarOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Editar nome"
            >
              <Edit2 className="w-5 h-5 text-gray-600" />
            </button>

            {/* Lixeira → abre modal de exclusão */}
            <button
              onClick={() => setExcluirOpen(true)}
              className="p-2 hover:bg-red-50 rounded-lg transition-colors"
              title="Excluir"
            >
              <Trash2 className="w-5 h-5 text-red-400" />
            </button>
          </div>

          {/* Avatares decorativos */}
          <div className="flex -space-x-2">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-white" />
            ))}
          </div>
        </div>
      </div>

      {/* Modal excluir */}
      <ExcluirItemModal
        isOpen={excluirOpen}
        onClose={() => setExcluirOpen(false)}
        onConfirm={handleConfirmDelete}
        nomeItem={title}
        tipoItem={tipoItem}
      />

      {/* Modal editar */}
      <EditarItemModal
        isOpen={editarOpen}
        onClose={() => setEditarOpen(false)}
        onConfirm={handleConfirmEdit}
        nomeAtual={title}
        tipoItem={tipoItem}
      />
    </>
  );
};

export default ConfigCard;