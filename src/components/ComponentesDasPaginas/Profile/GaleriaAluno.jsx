import React from 'react';

const GaleriaAluno = ({ quantidade = 9 }) => {
  const galeria = Array(quantidade).fill(null);

  return (
    <div className="border border-black bg-transparent rounded-3xl p-6">
      <h3 className="text-xl font-bold text-[#2C3E50] text-center mb-6 font-['Inter']">
        Galeria do Aluno
      </h3>

      <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto p-200">
        {galeria.map((_, index) => (
          <div 
            key={index}
            className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
          >
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 border-4 border-gray-400 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-400 rounded ml-1"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriaAluno;