import React from 'react';
import Sidebar from '../../components/Sidebar';
import DashboardCard from '../../components/ComponentesDasPaginas/Dashboard/DashboardCard';
import UltimasEntradas from '../../components/ComponentesDasPaginas/Dashboard/UltimasEntradas';

const Dashboard = () => {
  const ultimasEntradas = [
    { nome: 'Walber Paixão', hora: '5h14m' },
    { nome: 'Helio Ribeiro', hora: '5h14m' },
    { nome: 'Edvar Neto', hora: '5h14m' },
    { nome: 'Ludson Lira', hora: '5h14m' },
    { nome: 'Ryan Barbalho', hora: '5h14m' }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-20 min-h-screen overflow-y-auto bg-white">
        <div className="p-8">
          <h1 className="text-5xl font-bold text-[#4493AC] mb-12">Dashboard</h1>

          <div className="max-w-5xl">
            <DashboardCard>
              <UltimasEntradas entradas={ultimasEntradas} />
            </DashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;