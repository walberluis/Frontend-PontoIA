import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Home, TrendingUp, Settings, Plus, Menu, Users } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-20 bg-white flex flex-col items-center py-6 space-y-8 fixed left-0 top-0 h-screen z-50 shadow-xl">
      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
        <Menu className="w-6 h-6 text-white" />
      </div>
      
      <div className="flex-1 flex flex-col space-y-6">
        <button 
          onClick={() => navigate('/')}
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
            isActive('/') ? 'bg-slate-600' : 'hover:bg-slate-600'
          }`}
        >
          <Home className={`w-6 h-6 ${isActive('/') ? 'text-white' : 'text-gray-300'}`} />
        </button>

        <button 
          onClick={() => navigate('/search')}
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
            isActive('/search') ? 'bg-slate-600' : 'hover:bg-slate-600'
          }`}
        >
          <Search className={`w-6 h-6 ${isActive('/search') ? 'text-white' : 'text-gray-300'}`} />
        </button>

        <button 
          onClick={() => navigate('/adicionar-aluno')}
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
            isActive('/adicionar-aluno') ? 'bg-slate-600' : 'hover:bg-slate-600'
          }`}
        >
          <Plus className={`w-6 h-6 ${isActive('/adicionar-aluno') ? 'text-white' : 'text-gray-300'}`} />
        </button>

        <button 
          onClick={() => navigate('/dashboard')}
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
            isActive('/dashboard') ? 'bg-slate-600' : 'hover:bg-slate-600'
          }`}
        >
          <TrendingUp className={`w-6 h-6 ${isActive('/dashboard') ? 'text-white' : 'text-gray-300'}`} />
        </button>

        <button 
          onClick={() => navigate('/configuracoes')}
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
            isActive('/configuracoes') ? 'bg-slate-600' : 'hover:bg-slate-600'
          }`}
        >
          <Settings className={`w-6 h-6 ${isActive('/configuracoes') ? 'text-white' : 'text-gray-300'}`} />
        </button>
      </div>

      <button className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors">
        <Users className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default Sidebar;