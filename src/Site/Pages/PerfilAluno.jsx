import React from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/ComponentesDasPaginas/Profile/PageHeader';
import AlunoInfoCard from '../../components/ComponentesDasPaginas/Profile/AlunoInfoCard';
import GaleriaAluno from '../../components/ComponentesDasPaginas/Profile/GaleriaAluno';

const PerfilAluno = () => {
  const alunoInfo = {
    nome: 'Walber Luis Santos da Paixão',
    turma: 'Turma 3',
    horasSemanais: '20 horas semanais',
    curso: 'Ciência da Computação',
    especializacao: 'Inteligência Artificial',
    nivel: 'Aluno de Graduação III'
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-20 min-h-screen overflow-y-auto bg-gray-50">
        <div className="p-8">
          <PageHeader title="Página do Aluno" showSearch={true} />

          <AlunoInfoCard alunoInfo={alunoInfo} />

          <div className="my-8">
            <GaleriaAluno quantidade={9} />
          </div>

          <div className="flex justify-center">
            <button className="px-16 py-4 bg-gray-300 hover:bg-gray-400 text-red-600 font-semibold rounded-lg transition-colors">
              Remover Aluno
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilAluno;