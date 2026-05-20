'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/ComponentesDasPaginas/Home/Header';
import MonitoramentoSection from '@/components/ComponentesDasPaginas/Home/MonitoramentoSection';
import AlunosSection from '@/components/ComponentesDasPaginas/Home/AlunosSection';

const MonitoramentoAoVivo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const cameras = [];
  const alunos = [];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-20 min-h-screen overflow-y-auto bg-gray-50">
        <div className="p-8">
          <Header />
          <MonitoramentoSection cameras={cameras} />
          <AlunosSection 
            alunos={alunos} 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
        </div>
      </div>
    </div>
  );
};

export default MonitoramentoAoVivo;
