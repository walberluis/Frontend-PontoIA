'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import LogoutModal from '@/Site/PopUpsEModals/logoutmodal';

const home = '/assets/home.svg';
const threebars = '/assets/three-bars.svg';
const search = '/assets/search.svg';
const settings = '/assets/settings.svg';
const graph = '/assets/graph.svg';
const logout = '/assets/logout.svg';
const add = '/assets/add.svg';

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [logoutOpen, setLogoutOpen] = useState(false);

  const handleLogout = () => {
    setLogoutOpen(false);
    // Lógica de logout
    router.push('/');
  };

  return (
    <>
      <div className="w-20 hover:w-64 bg-white flex flex-col items-start py-6 fixed left-0 top-0 h-screen z-50 shadow-xl transition-all duration-300 ease-in-out group overflow-hidden">
        {/* Logo / Menu Header */}
        <div className="w-full px-5 flex items-center h-12 mb-8">
          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
            <img src={threebars} alt="Menu" className="w-10 h-10" />
          </div>
          <span className="ml-4 font-bold text-lg text-[#243D6D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            PontoIA
          </span>
        </div>

        {/* Links de navegação */}
        <div className="flex-1 flex flex-col space-y-6 items-start w-full">
          <button 
            onClick={() => router.push('/')} 
            className="flex items-center w-full px-5 py-2 text-gray-700 hover:text-[#4493AC] hover:bg-gray-50 bg-transparent border-none transition-colors rounded-xl whitespace-nowrap"
          >
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
              <img src={home} alt="Home" className="w-10 h-10" />
            </div>
            <span className="ml-4 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Início
            </span>
          </button>

          <button 
            onClick={() => router.push('/search')} 
            className="flex items-center w-full px-5 py-2 text-gray-700 hover:text-[#4493AC] hover:bg-gray-50 bg-transparent border-none transition-colors rounded-xl whitespace-nowrap"
          >
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
              <img src={search} alt="Search" className="w-7 h-7" />
            </div>
            <span className="ml-4 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Buscar Aluno
            </span>
          </button>

          <button 
            onClick={() => router.push('/adicionar-aluno')} 
            className="flex items-center w-full px-5 py-2 text-gray-700 hover:text-[#4493AC] hover:bg-gray-50 bg-transparent border-none transition-colors rounded-xl whitespace-nowrap"
          >
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
              <img src={add} alt="Adicionar" className="w-7 h-7" />
            </div>
            <span className="ml-4 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Adicionar Aluno
            </span>
          </button>

          <button 
            onClick={() => router.push('/dashboard')} 
            className="flex items-center w-full px-5 py-2 text-gray-700 hover:text-[#4493AC] hover:bg-gray-50 bg-transparent border-none transition-colors rounded-xl whitespace-nowrap"
          >
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
              <img src={graph} alt="Dashboard" className="w-7 h-7" />
            </div>
            <span className="ml-4 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Dashboard
            </span>
          </button>

          <button 
            onClick={() => router.push('/configuracoes')} 
            className="flex items-center w-full px-5 py-2 text-gray-700 hover:text-[#4493AC] hover:bg-gray-50 bg-transparent border-none transition-colors rounded-xl whitespace-nowrap"
          >
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
              <img src={settings} alt="Configurações" className="w-7 h-7" />
            </div>
            <span className="ml-4 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Configurações
            </span>
          </button>
        </div>

        {/* Botão Sair */}
        <button
          onClick={() => setLogoutOpen(true)}
          className="flex items-center w-full px-5 py-2 text-gray-700 hover:text-[#E83535] hover:bg-red-50 bg-transparent border-none transition-colors rounded-xl whitespace-nowrap mt-auto"
        >
          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
            <img src={logout} alt="Logout" className="w-7 h-7" />
          </div>
          <span className="ml-4 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Sair da Conta
          </span>
        </button>
      </div>

      {/* Modal de logout */}
      <LogoutModal
        isOpen={logoutOpen}
        onClose={() => setLogoutOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Sidebar;