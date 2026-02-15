import React from 'react';
import AlunoCard from './AlunoCard';
import SearchBar from './SearchBar';

const AlunosSection = ({ alunos, searchTerm, onSearchChange }) => {
  const filteredAlunos = alunos.filter(aluno =>
    aluno.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="border border-black bg-transparent rounded-3xl p-8 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl text-gray-800 font-['Inter']">Alunos</h2>
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      </div>

      <div className="grid grid-cols-4 gap-6">
        {filteredAlunos.map((aluno) => (
          <AlunoCard key={aluno.id} aluno={aluno} />
        ))}
      </div>
    </div>
  );
};

export default AlunosSection;