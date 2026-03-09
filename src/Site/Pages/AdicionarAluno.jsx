import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import FormInput from '../../components/ComponentesDasPaginas/AddStudent/FormInput';
import FormSelect from '../../components/ComponentesDasPaginas/AddStudent/FormSelect';
import ToggleSwitch from '../../components/ComponentesDasPaginas/AddStudent/ToggleSwitch';
import ImageUpload from '../../components/ComponentesDasPaginas/AddStudent/ImageUpload';

const AdicionarAluno = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    semestre: '',
    semestreNumero: '',
    turma: '',
    cargo: '',
    curso: '',
    trilha: '',
    trabalhaAcademy: false,
    imagensCount: 0
  });

  const semestreNumeroOptions = [
    { value: '01', label: '01' },
    { value: '02', label: '02' }
  ];

  const turmaOptions = [
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '03' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
    { value: '06', label: '06' }
  ];

  const cargoOptions = [
    { value: 'graduacao1', label: 'Aluno de Graduação I' },
    { value: 'graduacao2', label: 'Aluno de Graduação II' },
    { value: 'graduacao3', label: 'Aluno de Graduação III' },
    { value: 'trainee1', label: 'Trainee I' },
    { value: 'trainee2', label: 'Trainee II' },
    { value: 'trainee3', label: 'Trainee II' },
    { value: 'trainee4', label: 'Trainee IV' }
  ];

  const cursoOptions = [
    { value: 'computacao', label: 'Ciência da Computação' },
    { value: 'engenharia', label: 'Engenharia de Computação' }
  ];

  const trilhaOptions = [
    { value: 'software', label: 'Desenvolvimento de Software' },
    { value: 'automacao', label: 'Automação Industrial' },
    { value: 'ia', label: 'Inteligência Artificial' },
    { value: 'embarcados', label: 'Sistemas Embarcados' }
  ];

  const handleSubmit = () => {
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Sidebar />
      
     <div className="ml-20 min-h-screen overflow-y-auto bg-gray-50 flex flex-col items-center">
        <div className="p-8 w-full max-w-6xl">
          <h1 className="text-5xl font-bold text-[#4493AC] mb-12">Adicionar Aluno</h1>

          <div className="space-y-6">
            {/* Linha 1: Nome, Semestre e Trabalha no Academy */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-5">
                <FormInput
                  label="Nome Completo"
                  value={formData.nomeCompleto}
                  onChange={(e) => setFormData({ ...formData, nomeCompleto: e.target.value })}
                  placeholder="Digite o nome completo do aluno"
                />
              </div>

              <div className="col-span-2">
                <FormInput
                  label="Ano de Ingresso"
                  value={formData.semestre}
                  onChange={(e) => setFormData({ ...formData, semestre: e.target.value })}
                  placeholder="XXXX"
                />
              </div>
              
              <div className="col-span-2">
                <FormSelect
                  label="Semestre"
                  value={formData.semestreNumero}
                  onChange={(e) => setFormData({ ...formData, semestreNumero: e.target.value })}
                  options={semestreNumeroOptions}
                  placeholder="--"
                />
              </div>

                  <div className="col-span-3">
                    <div className="flex flex-col">
                      <label className="text-sm text-black mb-1">
                        Trabalha no Academy
                      </label>
                      <div className="flex items-center h-[42px] px-3">
                        <ToggleSwitch
                          checked={formData.trabalhaAcademy}
                          onChange={(checked) => setFormData({ ...formData, trabalhaAcademy: checked })}
                        />
                      </div>
                    </div>
                  </div>
            </div>

            {/* Linha 2: Turma, Cargo, Curso, Trilha */}
            <div className="grid grid-cols-4 gap-6">
              <FormSelect
                label="Turma"
                value={formData.turma}
                onChange={(e) => setFormData({ ...formData, turma: e.target.value })}
                options={turmaOptions}
                placeholder="--"
              />

              <FormSelect
                label="Cargo"
                value={formData.cargo}
                onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                options={cargoOptions}
                placeholder="Selecione o cargo"
              />

              <FormSelect
                label="Curso"
                value={formData.curso}
                onChange={(e) => setFormData({ ...formData, curso: e.target.value })}
                options={cursoOptions}
                placeholder="Selecione o curso"
              />

              <FormSelect
                label="Trilha"
                value={formData.trilha}
                onChange={(e) => setFormData({ ...formData, trilha: e.target.value })}
                options={trilhaOptions}
                placeholder="Selecione a trilha"
              />
            </div>

            {/* Linha 3: Upload de Imagens */}
            <ImageUpload
              onImageSelect={() => console.log('Selecionar imagem')}
              selectedCount={formData.imagensCount}
            />

            {/* Botão Registrar */}
            <div className="flex justify-center pt-8">
              <button
                onClick={handleSubmit}
                className="px-12 py-3 border-2 border-gray-300 text-[#4493AC] font-semibold rounded-lg hover:bg-[#243D6D] hover:text-white transition-colors"
              >
                Registrar Aluno
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdicionarAluno;
