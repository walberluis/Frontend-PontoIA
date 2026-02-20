import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-20 bg-white flex flex-col items-center py-6 space-y-8 fixed left-0 top-0 h-screen z-50 shadow-xl">
      {/* Logo no topo */}
      <div className="w-12 h-12">
        <img src="/src/assets/three-bars.svg" alt="Três Barras" className="w-full h-full" />
      </div>
      
      <div className="flex-1 flex flex-col space-y-6">
        <button 
          onClick={() => navigate('/')}
          className="bg-white hover:opacity-70"
        >
          <img src="/src/assets/home.svg" alt="Home" className="w-10 h-10" />
        </button>

        <button 
          onClick={() => navigate('/search')}
          className="transition-opacity hover:opacity-70 bg-white"
        >
          <img src="/src/assets/search.svg" alt="Search" className="w-7 h-7" />
        </button>

        <button 
          onClick={() => navigate('/adicionar-aluno')}
          className="transition-opacity hover:opacity-70 bg-white"
        >
          <img src="/src/assets/add.svg" alt="Adicionar" className="w-7 h-7" />
        </button>

        <button 
          onClick={() => navigate('/dashboard')}
          className="transition-opacity hover:opacity-70 bg-white"
        >
          <img src="/src/assets/graph.svg" alt="Dashboard" className="w-7 h-7" />
        </button>

        <button 
          onClick={() => navigate('/configuracoes')}
          className="transition-opacity hover:opacity-70 bg-white"
        >
          <img src="/src/assets/settings.svg" alt="Configurações" className="w-7 h-7" />
        </button>
      </div>

      <button className="transition-opacity hover:opacity-70 bg-white">
        <img src="/src/assets/logout.svg" alt="Logout" className="w-7 h-7" />
      </button>
    </div>
  );
};

export default Sidebar;