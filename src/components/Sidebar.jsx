import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import home from '../assets/home.svg'
import threebars from '../assets/three-bars.svg'
import search from '../assets/search.svg'
import settings from '../assets/settings.svg'
import graph from '../assets/graph.svg'
import logout from '../assets/logout.svg'
import add from '../assets/add.svg'

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-20 bg-white flex flex-col items-center py-6 space-y-8 fixed left-0 top-0 h-screen z-50 shadow-xl">
      {/* Logo no topo */}
      <div className="w-12 h-12 items-center">
        <img src={threebars} alt="Três Barras" className="w-full h-full" />
      </div>
      
      <div className="flex-1 flex flex-col space-y-6 items-center">
        <button 
          onClick={() => navigate('/')}
          className="bg-white hover:opacity-70"
        >
          <img src={home} alt="Home" className="w-10 h-10" />
        </button>

        <button 
          onClick={() => navigate('/search')}
          className="transition-opacity hover:opacity-70 bg-white"
        >
          <img src={search} alt="Search" className="w-7 h-7" />
        </button>

        <button 
          onClick={() => navigate('/adicionar-aluno')}
          className="transition-opacity hover:opacity-70 bg-white"
        >
          <img src={add} alt="Adicionar" className="w-7 h-7" />
        </button>

        <button 
          onClick={() => navigate('/dashboard')}
          className="transition-opacity hover:opacity-70 bg-white"
        >
          <img src={graph} alt="Dashboard" className="w-7 h-7" />
        </button>

        <button 
          onClick={() => navigate('/configuracoes')}
          className="transition-opacity hover:opacity-70 bg-white"
        >
          <img src={settings} alt="Configurações" className="w-7 h-7" />
        </button>
      </div>

      <button className="transition-opacity hover:opacity-70 bg-white">
        <img src={logout} alt="Logout" className="w-7 h-7" />
      </button>
    </div>
  );
};

export default Sidebar;