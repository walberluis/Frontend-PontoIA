'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { UserX, Search } from 'lucide-react';
import AlunoCard from './AlunoCard';
import SearchBar from './SearchBar';

const AlunosSection = ({ alunos, searchTerm, onSearchChange }) => {
  const router = useRouter();
  const filteredAlunos = alunos.filter(aluno =>
    aluno.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="border border-black bg-transparent rounded-3xl p-8 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl text-gray-800 font-['Inter']">Alunos</h2>
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      </div>

      {alunos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-white border-2 border-dashed border-gray-300 rounded-3xl p-8 shadow-sm">
          <div className="w-16 h-16 bg-[#D4E8ED] rounded-full flex items-center justify-center mb-4 text-[#4493AC]">
            <UserX className="w-8 h-8" />
          </div>
          <p className="text-xl font-semibold text-gray-800">Não existem alunos cadastrados</p>
          <p className="text-sm text-gray-500 mt-1 mb-6 text-center max-w-md">
            Cadastre novos alunos para iniciar a detecção de presença e monitoramento de ponto.
          </p>
          <button
            onClick={() => router.push('/adicionar-aluno')}
            className="px-6 py-2.5 bg-[#4493AC] text-white rounded-full font-semibold shadow-sm hover:bg-[#3b8096] transition-colors"
          >
            Cadastrar Aluno
          </button>
        </div>
      ) : filteredAlunos.length > 0 ? (
        <div className="grid grid-cols-4 gap-6">
          {filteredAlunos.map((aluno) => (
            <AlunoCard key={aluno.id} aluno={aluno} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
          <Search className="w-12 h-12 mb-3 opacity-30" />
          <p className="text-lg font-medium">Nenhum aluno encontrado</p>
          <p className="text-sm mt-1">Tente ajustar o termo de busca</p>
        </div>
      )}
    </div>
  );
};

export default AlunosSection;