'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardCard from '@/components/ComponentesDasPaginas/Dashboard/DashboardCard';
import UltimasEntradas from '@/components/ComponentesDasPaginas/Dashboard/UltimasEntradas';

const Dashboard = () => {
  const ultimasEntradas = [];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-20 min-h-screen overflow-y-auto bg-white">
        <div className="p-8">
          <h1 className="text-5xl font-bold text-[#4493AC] mb-12">Dashboard</h1>

          <div className="w-full max-h-[calc(100vh-12rem)]">
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
