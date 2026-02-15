import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MonitoramentoAoVivo from '../src/Site/Pages/MonitoramentoAoVivo';
import AdicionarAluno from '../src/Site/Pages/AdicionarAluno'
import Dashboard from '../src/Site/Pages/Dashboard';
import Configuracoes from '../src/Site/Pages/Configuracoes';
import PerfilAluno from '../src/Site/Pages/PerfilAluno';
import './App.css';

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<MonitoramentoAoVivo />} />
          <Route path="/adicionar-aluno" element={<AdicionarAluno />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/perfil-aluno/:id" element={<PerfilAluno />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;