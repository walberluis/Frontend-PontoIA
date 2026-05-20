'use client';

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import PageHeader from '@/components/ComponentesDasPaginas/Profile/PageHeader';
import AlunoInfoCard from '@/components/ComponentesDasPaginas/Profile/AlunoInfoCard';
import GaleriaAluno from '@/components/ComponentesDasPaginas/Profile/GaleriaAluno';
import RemoverAlunoModal from '@/Site/PopUpsEModals/RemoverAlunoModal';

const PerfilAluno = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;
  const [isRemoverModalOpen, setIsRemoverModalOpen] = useState(false);

  const alunoInfo = {
    nome: 'Walber Paixão',
    turma: 'Turma 3',
    horasSemanais: '20 horas semanais',
    curso: 'Ciência da Computação',
    especializacao: 'Inteligência Artificial',
    nivel: 'Aluno de Graduação III'
  };

  const handleRemoverAluno = () => {
    console.log(`Aluno ${id} removido`);
    setIsRemoverModalOpen(false);
    router.push('/');
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-20 min-h-screen overflow-y-auto bg-gray-50">
        <div className="p-8">
          <PageHeader title="Página do Aluno" showSearch={true}
          />

          <AlunoInfoCard alunoInfo={alunoInfo} />

          <div className="my-8">
            <GaleriaAluno quantidade={0} />
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => setIsRemoverModalOpen(true)}
              className="px-16 py-4 bg-gray-300 text-[#E83535] font-thin rounded-lg hover:bg-[#E83535] hover:text-white transition-colors font-[Inter]"
            >
              Remover Aluno
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Remover */}
      <RemoverAlunoModal
        isOpen={isRemoverModalOpen}
        onClose={() => setIsRemoverModalOpen(false)}
        onConfirm={handleRemoverAluno}
        nomeAluno={alunoInfo.nome}
      />
    </div>
  );
};

export default PerfilAluno;
