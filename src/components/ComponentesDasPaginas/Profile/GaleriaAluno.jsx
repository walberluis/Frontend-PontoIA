import React from 'react';
import { ImageOff } from 'lucide-react';

const GaleriaAluno = ({ quantidade = 0 }) => {
  const galeria = Array(quantidade).fill(null);

  return (
    <div className="border border-black bg-transparent rounded-3xl p-6">
      <h3 className="text-2xl font-thin text-[#2C3E50] text-center mb-9 font-['Inter']">
        Galeria do Aluno
      </h3>

      {quantidade > 0 ? (
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
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-gray-400 max-w-md mx-auto">
          <div className="w-12 h-12 bg-[#D4E8ED] rounded-full flex items-center justify-center mb-3 text-[#4493AC]">
            <ImageOff className="w-6 h-6" />
          </div>
          <p className="text-base font-semibold text-gray-700">Galeria vazia</p>
          <p className="text-xs text-gray-400 mt-1 text-center">
            Nenhuma foto cadastrada para o reconhecimento facial deste aluno.
          </p>
        </div>
      )}
    </div>
  );
};

export default GaleriaAluno;