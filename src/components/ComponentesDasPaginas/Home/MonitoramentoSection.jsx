import React from 'react';
import CameraCard from './CameraCard';

const MonitoramentoSection = ({ cameras }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-['Inter'] text-gray-800 mb-6">Monitoramento Ao Vivo</h2>
      <div className="grid grid-cols-3 gap-6">
        {cameras.map((camera) => (
          <CameraCard key={camera.id} camera={camera} />
        ))}
      </div>
    </div>
  );
};

export default MonitoramentoSection;