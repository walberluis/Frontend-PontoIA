import React from 'react';
import { Image } from 'lucide-react';

const ImageUpload = ({ onImageSelect, selectedCount = 0 }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-600">Selecionar Fotos de Rosto</label>
      <div className="border-2 border-gray-300 rounded-lg p-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
            <Image className="w-10 h-10 text-gray-400" />
          </div>
          
          <div className="flex-1">
            <p className="text-sm text-gray-600 italic mb-3">
              Faça o upload de uma imagem com menos de 100kb
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={onImageSelect}
                className="px-6 py-2 border-2 border-gray-800 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Escolher Imagem
              </button>
              <span className="text-sm text-gray-600">
                {selectedCount} Imagens Selecionadas
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;