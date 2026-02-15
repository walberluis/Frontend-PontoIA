import Sidebar from "../components/Sidebar.jsx"
import Header from "../components/Home/Header.jsx"
import CameraGrid from "../components/Cameragrid.jsx"
import AlunosGrid from "../components/Alunosgrid.jsx"
import "../styles/home.css"

export default function Home() {
  return (
    <div className="layout">

      <Sidebar />

      <main className="content">
        <Header />
        <CameraGrid />
        <AlunosGrid />
      </main>

    </div>
  )
}