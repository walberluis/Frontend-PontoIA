
import React from 'react';
import Sidebar from '../../components/Sidebar';
import ConfigSection from '../../components/ComponentesDasPaginas/Configurations/ConfigSection';

const Configuracoes = () => {
  const turmas = [
    { title: 'Turma 01', count: 15 },
    { title: 'Turma 02', count: 18 },
    { title: 'Turma 03', count: 21 },
    { title: 'Turma 04', count: 21 }
  ];

  const cargos = [
    { title: 'Aluno de Graduação I', count: 13 },
    { title: 'Aluno de Graduação II', count: 16 },
    { title: 'Aluno de Graduação III', count: 18 },
    { title: 'Trainee I', count: 10 }
  ];

  const cursos = [
    { title: 'Ciência da Computação', count: 45 },
    { title: 'Engenharia de Computação', count: 32 }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-20 min-h-screen bg-white">
        <div className="p-8">
          <h1 className="text-5xl font-bold text-[#4493AC] mb-12">Configurações</h1>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max">
              <div className="w-[450px] flex-shrink-0">
                <ConfigSection title="Turmas" items={turmas} showAvatars={false} />
              </div>
              <div className="w-[450px] flex-shrink-0">
                <ConfigSection title="Cargos" items={cargos} showAvatars={true} />
              </div>
              <div className="w-[450px] flex-shrink-0">
                <ConfigSection title="Cursos" items={cursos} showAvatars={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;