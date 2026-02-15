import React, { useState } from 'react';
import { X } from 'lucide-react';
import FormInput from '../../components/ComponentesDasPaginas/AddStudent/FormInput';
import FormSelect from '../../components/ComponentesDasPaginas/AddStudent/FormSelect';
import ToggleSwitch from '../../components/ComponentesDasPaginas/AddStudent/ToggleSwitch';

const EditarPerfilModal = ({ isOpen, onClose, alunoInfo }) => {
  const [formData, setFormData] = useState({
    nomeCompleto: alunoInfo.nome || '',
    semestre: '2023',
    semestreNumero: '01',
    cargo: 'graduacao3',
    curso: 'computacao',
    turma: '03',
    trilha: 'ia',
    trabalhaAcademy: true
  });

  const [trilhaSelecionada, setTrilhaSelecionada] = useState(['ia']);

  const semestreNumeroOptions = [
    { value: '01', label: '01' },
    { value: '02', label: '02' }
  ];

  const cargoOptions = [
    { value: 'graduacao1', label: 'Aluno de Graduação I' },
    { value: 'graduacao2', label: 'Aluno de Graduação II' },
    { value: 'graduacao3', label: 'Aluno de Graduação III' }
  ];

  const cursoOptions = [
    { value: 'computacao', label: 'Ciência da Computação' },
    { value: 'engenharia', label: 'Engenharia de Computação' }
  ];

  const trilhas = [
    { value: 'ia', label: 'Inteligência Artificial' },
    { value: 'software', label: 'Desenvolvimento de Software' },
    { value: 'embarcados', label: 'Sistemas Embarcados' },
    { value: 'automacao', label: 'Automação Industrial' }
  ];

  const toggleTrilha = (trilhaValue) => {
    if (trilhaSelecionada.includes(trilhaValue)) {
      setTrilhaSelecionada(trilhaSelecionada.filter(t => t !== trilhaValue));
    } else {
      setTrilhaSelecionada([...trilhaSelecionada, trilhaValue]);
    }
  };

  const handleSave = () => {
    console.log('Salvando alterações:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay sombreado */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#2C3E50]">Editar Perfil</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Formulário */}
          <div className="space-y-6">
            {/* Nome Completo */}
            <FormInput
              label="Nome Completo"
              value={formData.nomeCompleto}
              onChange={(e) => setFormData({ ...formData, nomeCompleto: e.target.value })}
              placeholder="Walber Luis Santos da Paixão"
            />

            {/* Semestre e Trabalha no Academy */}
            <div className="grid grid-cols-3 gap-4">
              <FormInput
                label="Semestre de Entrada na UFAL"
                value={formData.semestre}
                onChange={(e) => setFormData({ ...formData, semestre: e.target.value })}
                placeholder="2023"
              />
              
              <FormSelect
                label=""
                value={formData.semestreNumero}
                onChange={(e) => setFormData({ ...formData, semestreNumero: e.target.value })}
                options={semestreNumeroOptions}
                placeholder="01"
              />

              <ToggleSwitch
                label="Trabalha no Academy"
                checked={formData.trabalhaAcademy}
                onChange={(checked) => setFormData({ ...formData, trabalhaAcademy: checked })}
              />
            </div>

            {/* Cargo e Curso */}
            <div className="grid grid-cols-2 gap-4">
              <FormSelect
                label="Cargo"
                value={formData.cargo}
                onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                options={cargoOptions}
                placeholder="Aluno de Graduação III"
              />

              <FormSelect
                label="Curso"
                value={formData.curso}
                onChange={(e) => setFormData({ ...formData, curso: e.target.value })}
                options={cursoOptions}
                placeholder="Ciência da Computação"
              />
            </div>

            {/* Turma */}
            <FormInput
              label="Turma"
              value={formData.turma}
              onChange={(e) => setFormData({ ...formData, turma: e.target.value })}
              placeholder="03"
            />

            {/* Trilha */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">Trilha</label>
              <div className="border-2 border-gray-300 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-3">
                  {trilhas.map((trilha) => (
                    <button
                      key={trilha.value}
                      onClick={() => toggleTrilha(trilha.value)}
                      className={`px-4 py-3 rounded-lg border-2 transition-colors ${
                        trilhaSelecionada.includes(trilha.value)
                          ? 'bg-[#2C3E50] text-white border-[#2C3E50]'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {trilha.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Botão Salvar */}
            <div className="flex justify-center pt-4">
              <button
                onClick={handleSave}
                className="px-12 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarPerfilModal;