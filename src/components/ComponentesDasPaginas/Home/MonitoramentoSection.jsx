import React from 'react';
import CameraCard from './CameraCard';
import { CameraOff } from 'lucide-react';

const MonitoramentoSection = ({ cameras }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-['Inter'] text-gray-800 mb-6 text-center">Monitoramento Ao Vivo</h2>
      
      {cameras && cameras.length > 0 ? (
        <div className="grid grid-cols-3 gap-6">
          {cameras.map((camera) => (
            <CameraCard key={camera.id} camera={camera} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 bg-white border-2 border-dashed border-gray-300 rounded-3xl p-8 shadow-sm max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-[#D4E8ED] rounded-full flex items-center justify-center mb-4 text-[#4493AC]">
            <CameraOff className="w-8 h-8" />
          </div>
          <p className="text-xl font-semibold text-gray-800">Não existem câmeras conectadas</p>
          <p className="text-sm text-gray-500 mt-1 text-center">
            Conecte uma câmera ao sistema para iniciar a transmissão e detecção facial em tempo real.
          </p>
        </div>
      )}
    </div>
  );
};

export default MonitoramentoSection;