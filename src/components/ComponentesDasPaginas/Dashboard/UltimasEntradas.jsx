import React from 'react';
import EntradaItem from './EntradaItem';

const UltimasEntradas = ({ entradas }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-[#7DD3C0] mb-6">Últimas Entradas</h3>
      
      <div className="flex items-center justify-between mb-4 px-2">
        <span className="text-sm text-gray-500 pl-6">Aluno</span>
        <span className="text-sm text-gray-500 pr-10">Horas</span>
      </div>

      <div>
        {entradas.map((entrada, index) => (
          <EntradaItem key={index} nome={entrada.nome} hora={entrada.hora} />
        ))}
      </div>
    </div>
  );
};

export default UltimasEntradas;