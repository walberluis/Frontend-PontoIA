import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MonitoramentoAoVivo from '../../pontoIAEdge/src/Site/Pages/MonitoramentoAoVivo';
import AdicionarAluno from '../../pontoIAEdge/src/Site/Pages/AdicionarAluno';
import Dashboard from '../../pontoIAEdge/src/Site/Pages/Dashboard';
import Configuracoes from '../../pontoIAEdge/src/Site/Pages/Configuracoes';
import PerfilAluno from '../../pontoIAEdge/src/Site/Pages/PerfilAluno';
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