import React from 'react';

const ToggleSwitch = ({ label, checked, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-600">{label}</label>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(!checked)}
          className={`relative w-16 h-8 rounded-full transition-colors ${
            checked ? 'bg-green-500' : 'bg-gray-300'
          }`}
        >
          <div
            className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
              checked ? 'translate-x-9' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ToggleSwitch;