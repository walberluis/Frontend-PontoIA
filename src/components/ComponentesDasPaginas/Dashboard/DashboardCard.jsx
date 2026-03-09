import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const DashboardCard = ({ children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="border-2 border-gray-300 rounded-3xl p-8 bg-white">
      <div className="flex items-center gap-3 mb-8">
        {/* Botão Monthly */}
        <button className="flex items-center gap-2 px-4 py-2 bg-[#D4E8ED] rounded-3xl hover:bg-[#c4dde3] transition-colors">
          <span className="font-medium text-gray-700">Monthly</span>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </button>

        {/* Botão de ajuda com tooltip */}
        <div className="relative">
          <button
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="w-9 h-9 bg-[#D4E8ED] rounded-full flex items-center justify-center hover:bg-[#c4dde3] transition-colors"
            aria-label="Informações sobre o painel"
          >
            <HelpCircle className="w-5 h-5 text-[#4493AC]" />
          </button>

          {/* Tooltip */}
          {showTooltip && (
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-10
                         w-64 bg-[#243D6D] text-white text-sm rounded-2xl px-4 py-3 shadow-xl
                         pointer-events-none"
            >
              {/* Seta */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0
                              border-x-8 border-x-transparent border-t-8 border-t-[#243D6D]" />

              <p className="font-semibold text-[#7DD3C0] mb-1 text-xs uppercase tracking-wide">
                Sobre este painel
              </p>
              <p className="leading-relaxed text-slate-200">
                Aqui você visualiza o resumo de horas mensais registradas por cada aluno no período selecionado.
              </p>
            </div>
          )}
        </div>
      </div>

      {children}
    </div>
  );
};

export default DashboardCard;