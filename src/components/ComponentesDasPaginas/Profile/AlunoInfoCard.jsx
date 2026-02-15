import React, { useState } from 'react';
import { Edit2, BookOpen, Brain, GraduationCap, Clock } from 'lucide-react';
import EditarPerfilModal from '../../../Site/PopUpsEModals/EditarPerfilModal';

const AlunoInfoCard = ({ alunoInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="flex items-start gap-8">
          {/* Foto do perfil */}
          <div className="relative">
            <div className="w-40 h-40 bg-black rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full"></div>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="absolute bottom-2 right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Edit2 className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Informações */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold text-[#2C3E50]">{alunoInfo.nome}</h2>
              <span className="px-4 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                {alunoInfo.turma}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">{alunoInfo.horasSemanais}</span>
              </div>

              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">{alunoInfo.curso}</span>
              </div>

              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">{alunoInfo.especializacao}</span>
              </div>

              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">{alunoInfo.nivel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <EditarPerfilModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        alunoInfo={alunoInfo}
      />
    </>
  );
};

export default AlunoInfoCard;