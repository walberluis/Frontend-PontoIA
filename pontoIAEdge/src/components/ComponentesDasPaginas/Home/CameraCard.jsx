import React from 'react';

const CameraCard = ({ camera }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
      <img 
        src={camera.image} 
        alt={camera.name}
        className="w-full h-64 object-cover"
      />
      <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        AO VIVO
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <p className="text-white font-medium">{camera.name}</p>
      </div>
    </div>
  );
};

export default CameraCard;