import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import fotoperfil from '../../assets/fotoperfil.jpg';
import Sidebar from '../../components/Sidebar';

// ─── dados mockados ────────────────────────────────────────────────────────────
const ALUNOS = [
  { id: 1,  nome: 'Walber Paixão',   turma: 'Turma 01', trilha: 'ia',        nivel: 'graduacao3' },
  { id: 2,  nome: 'Kauê Patricius',  turma: 'Turma 02', trilha: 'software',  nivel: 'trainee2'   },
  { id: 3,  nome: 'Helio Ribeiro',   turma: 'Turma 01', trilha: 'embarcados',nivel: 'trainee1'   },
  { id: 4,  nome: 'Ludson Lira',     turma: 'Turma 03', trilha: 'automacao', nivel: 'graduacao1' },
  { id: 5,  nome: 'Edvar Neto',      turma: 'Turma 02', trilha: 'ia',        nivel: 'graduacao2' },
  { id: 6,  nome: 'Victor Hugo',     turma: 'Turma 04', trilha: 'software',  nivel: 'trainee3'   },
  { id: 7,  nome: 'Renalvo Alves',   turma: 'Turma 03', trilha: 'ia',        nivel: 'trainee4'   },
  { id: 8,  nome: 'Ryan Barbalho',   turma: 'Turma 01', trilha: 'embarcados',nivel: 'graduacao3' },
  { id: 9,  nome: 'Raul Alves',      turma: 'Turma 04', trilha: 'automacao', nivel: 'graduacao1' },
  { id: 10, nome: 'José Alves',      turma: 'Turma 02', trilha: 'software',  nivel: 'trainee2'   },
  { id: 11, nome: 'Antony Dias',     turma: 'Turma 03', trilha: 'ia',        nivel: 'graduacao2' },
  { id: 12, nome: 'Eduardo Maciel',  turma: 'Turma 01', trilha: 'software',  nivel: 'trainee1'   },
];

const TURMAS  = ['Turma 01','Turma 02','Turma 03','Turma 04'];
const TRILHAS = [
  { value: 'ia',         label: 'Inteligência Artificial'   },
  { value: 'software',   label: 'Desenvolvimento de Software'},
  { value: 'embarcados', label: 'Sistemas Embarcados'        },
  { value: 'automacao',  label: 'Automação Industrial'       },
];
const NIVEIS = [
  { value: 'trainee1',   label: 'Trainee I'              },
  { value: 'trainee2',   label: 'Trainee II'             },
  { value: 'trainee3',   label: 'Trainee III'            },
  { value: 'trainee4',   label: 'Trainee IV'             },
  { value: 'graduacao1', label: 'Aluno de Graduação I'   },
  { value: 'graduacao2', label: 'Aluno de Graduação II'  },
  { value: 'graduacao3', label: 'Aluno de Graduação III' },
];

// ─── chip de filtro ────────────────────────────────────────────────────────────
const FilterChip = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
      active
        ? 'bg-[#4493AC] text-white border-[#4493AC] shadow-sm'
        : 'bg-white text-gray-600 border-gray-300 hover:border-[#4493AC] hover:text-[#4493AC]'
    }`}
  >
    {label}
  </button>
);

// ─── card do aluno ─────────────────────────────────────────────────────────────
const AlunoCard = ({ aluno }) => {
  const navigate = useNavigate();
  const nivelLabel = NIVEIS.find(n => n.value === aluno.nivel)?.label ?? '';
  const trilhaLabel = TRILHAS.find(t => t.value === aluno.trilha)?.label ?? '';

  return (
    <div
      onClick={() => navigate(`/perfil-aluno/${aluno.id}`)}
      className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-5 flex flex-col items-center
                 hover:shadow-xl hover:scale-105 transition-all cursor-pointer group"
    >
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 mb-3 shadow-lg">
        <img src={fotoperfil} alt={aluno.nome} className="w-full h-full object-cover" />
      </div>
      <p className="text-white font-semibold text-center text-sm mb-1">{aluno.nome}</p>
      <p className="text-slate-300 text-xs text-center mb-2">{aluno.turma}</p>
      <div className="flex flex-col gap-1 w-full mt-1">
        <span className="text-xs text-center text-[#7DD3C0] truncate">{trilhaLabel}</span>
        <span className="text-xs text-center text-slate-400 truncate">{nivelLabel}</span>
      </div>
    </div>
  );
};

// ─── página principal ──────────────────────────────────────────────────────────
const SearchPage = () => {
  const [searchTerm,    setSearchTerm]    = useState('');
  const [turmaAtiva,    setTurmaAtiva]    = useState('');
  const [trilhaAtiva,   setTrilhaAtiva]   = useState('');
  const [nivelAtivo,    setNivelAtivo]    = useState('');
  const [showFilters,   setShowFilters]   = useState(false);

  const totalAtivos = [turmaAtiva, trilhaAtiva, nivelAtivo].filter(Boolean).length;

  const limparFiltros = () => {
    setTurmaAtiva('');
    setTrilhaAtiva('');
    setNivelAtivo('');
    setSearchTerm('');
  };

  const filtered = ALUNOS.filter(a => {
    const matchSearch = a.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchTurma  = !turmaAtiva  || a.turma  === turmaAtiva;
    const matchTrilha = !trilhaAtiva || a.trilha === trilhaAtiva;
    const matchNivel  = !nivelAtivo  || a.nivel  === nivelAtivo;
    return matchSearch && matchTurma && matchTrilha && matchNivel;
  });

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-20 min-h-screen overflow-y-auto bg-gray-50">
        <div className="p-8">

          {/* ── cabeçalho ── */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-5xl font-bold text-[#4493AC]">Buscar Alunos</h1>
          </div>

          {/* ── barra de pesquisa + botão filtros ── */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nome do aluno…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-5 py-3 rounded-full border border-gray-300
                           focus:outline-none focus:ring-2 focus:ring-[#4493AC]/40 bg-white shadow-sm"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="absolute right-4 top-1/2 -translate-y-1/2">
                  <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>

            <button
              onClick={() => setShowFilters(v => !v)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all font-medium text-sm shadow-sm
                ${showFilters ? 'bg-[#4493AC] text-white border-[#4493AC]' : 'bg-white text-gray-700 border-gray-300 hover:border-[#4493AC]'}`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtros
              {totalAtivos > 0 && (
                <span className={`ml-1 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold
                  ${showFilters ? 'bg-white text-[#4493AC]' : 'bg-[#4493AC] text-white'}`}>
                  {totalAtivos}
                </span>
              )}
            </button>

            {totalAtivos > 0 && (
              <button
                onClick={limparFiltros}
                className="text-sm text-gray-500 hover:text-red-500 transition-colors underline"
              >
                Limpar filtros
              </button>
            )}
          </div>

          {/* ── painel de filtros (expansível) ── */}
          {showFilters && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8 space-y-5">
              {/* Turma */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Turma</p>
                <div className="flex flex-wrap gap-2">
                  {TURMAS.map(t => (
                    <FilterChip
                      key={t}
                      label={t}
                      active={turmaAtiva === t}
                      onClick={() => setTurmaAtiva(v => v === t ? '' : t)}
                    />
                  ))}
                </div>
              </div>

              {/* Trilha */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Trilha</p>
                <div className="flex flex-wrap gap-2">
                  {TRILHAS.map(t => (
                    <FilterChip
                      key={t.value}
                      label={t.label}
                      active={trilhaAtiva === t.value}
                      onClick={() => setTrilhaAtiva(v => v === t.value ? '' : t.value)}
                    />
                  ))}
                </div>
              </div>

              {/* Nível */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Nível</p>
                <div className="flex flex-wrap gap-2">
                  {NIVEIS.map(n => (
                    <FilterChip
                      key={n.value}
                      label={n.label}
                      active={nivelAtivo === n.value}
                      onClick={() => setNivelAtivo(v => v === n.value ? '' : n.value)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── contador de resultados ── */}
          <p className="text-sm text-gray-500 mb-6">
            {filtered.length === ALUNOS.length
              ? `${ALUNOS.length} alunos cadastrados`
              : `${filtered.length} resultado${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`}
          </p>

          {/* ── grade de alunos ── */}
          {filtered.length > 0 ? (
            <div className="border border-black bg-transparent rounded-3xl p-8 shadow-sm">
              <div className="grid grid-cols-4 gap-6">
                {filtered.map(aluno => (
                  <AlunoCard key={aluno.id} aluno={aluno} />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400">
              <Search className="w-16 h-16 mb-4 opacity-30" />
              <p className="text-lg font-medium">Nenhum aluno encontrado</p>
              <p className="text-sm mt-1">Tente ajustar os filtros ou o termo de busca</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SearchPage;