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
    { id: 1, nome: 'Walber Paixão', nomecompleto: 'Walber Paixão de Oliveira' },
    { id: 2, nome: 'Kauê Patricius', nomecompleto: 'Kauê Patricius da Silva' },
    { id: 3, nome: 'Helio Ribeiro', nomecompleto: 'Helio Ribeiro Santos' },
    { id: 4, nome: 'Ludson Lira', nomecompleto: 'Ludson Lira Oliveira' },
    { id: 5, nome: 'Edvar Neto', nomecompleto: 'Edvar Neto Lima' },
    { id: 6, nome: 'Victor Hugo', nomecompleto: 'Victor Hugo Costa' },
    { id: 7, nome: 'Renalvo Alves', nomecompleto: 'Renalvo Alves Silva' },
    { id: 8, nome: 'Ryan Barbalho', nomecompleto: 'Ryan Barbalho Santos' },
    { id: 9, nome: 'Raul Alves', nomecompleto: 'Raul Alves Oliveira' },
    { id: 10, nome: 'José Alves', nomecompleto: 'José Alves Costa' },
    { id: 11, nome: 'Antony Dias', nomecompleto: 'Antony Dias Lima' },
    { id: 12, nome: 'Eduardo Maciel', nomecompleto: 'Eduardo Maciel Santos' }
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