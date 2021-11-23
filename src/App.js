import './App.css';
import Topbar from './components/Topbar/topbar'
import Sidebar from './components/Sidebar/sidebar'
import CriarPartida from './pages/criarPartida/criarPartida';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Formulario from './pages/formulario/formulario';

function App() {
  return (
    <Router>
        <Topbar/>
        <div className="container">
          <Sidebar/>
            <Routes>
                <Route path="/" element={<Formulario/>}></Route>
                <Route path="/CriarPartida" element={<CriarPartida/>}></Route>

            </Routes>
        </div>
    </Router>
  );
}

export default App;
