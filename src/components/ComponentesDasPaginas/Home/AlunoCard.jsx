import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users } from 'lucide-react';

const AlunoCard = ({ aluno }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/perfil-aluno/${aluno.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all cursor-pointer hover:scale-105"
    >
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
        <Users className="w-10 h-10 text-slate-700" />
      </div>
      <p className="text-white font-medium text-center">{aluno.nome}</p>
    </div>
  );
};

export default AlunoCard;