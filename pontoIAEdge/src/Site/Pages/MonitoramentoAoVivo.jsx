import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/ComponentesDasPaginas/Home/Header';
import MonitoramentoSection from '../../components/ComponentesDasPaginas/Home/MonitoramentoSection';
import AlunosSection from '../../components/ComponentesDasPaginas/Home/AlunosSection';

const MonitoramentoAoVivo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const cameras = [
    { id: 1, name: 'Acesso Principal', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop' },
    { id: 2, name: 'Corredor A', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop' },
    { id: 3, name: 'Sala de Espera', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=300&fit=crop' }
  ];

  const alunos = [
    { id: 1, nome: 'Walber Paixão' },
    { id: 2, nome: 'Kauê Patricius' },
    { id: 3, nome: 'Helio Ribeiro' },
    { id: 4, nome: 'Ludson Lira' },
    { id: 5, nome: 'Edvar Neto' },
    { id: 6, nome: 'Victor Hugo' },
    { id: 7, nome: 'Renalvo Alves' },
    { id: 8, nome: 'Ryan Barbalho' },
    { id: 9, nome: 'Raul Alves' },
    { id: 10, nome: 'José Alves' },
    { id: 11, nome: 'Antony Dias' },
    { id: 12, nome: 'Eduardo Maciel' }
  ];

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