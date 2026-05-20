'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import ConfigSection from '@/components/ComponentesDasPaginas/Configurations/ConfigSection';

const Configuracoes = () => {
  // Inicializa as listas vazias por padrão
  const initialTurmas = [];
  const initialCargos = [];
  const initialCursos = [];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-20 min-h-screen bg-white">
        <div className="p-8">
          <h1 className="text-5xl font-bold text-[#4493AC] mb-12">Configurações</h1>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max">
              {/* Coluna 1: Turmas */}
              <div className="w-[450px] flex-shrink-0">
                <ConfigSection 
                  title="Turmas" 
                  initialItems={initialTurmas} 
                  tipoItem="turma" 
                  showAvatars={false} 
                />
              </div>

              {/* Coluna 2: Cargos */}
              <div className="w-[450px] flex-shrink-0">
                <ConfigSection 
                  title="Cargos" 
                  initialItems={initialCargos} 
                  tipoItem="cargo" 
                  showAvatars={false} 
                />
              </div>

              {/* Coluna 3: Cursos */}
              <div className="w-[450px] flex-shrink-0">
                <ConfigSection 
                  title="Cursos" 
                  initialItems={initialCursos} 
                  tipoItem="curso" 
                  showAvatars={false} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;
