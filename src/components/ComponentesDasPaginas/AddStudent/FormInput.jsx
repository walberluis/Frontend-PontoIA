import React from 'react';

const FormInput = ({ label, value, onChange, placeholder, type = 'text' }) => {
  return (
    <div className="flex flex-col gap-2 max-w-md">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default FormInput;