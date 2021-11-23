import './App.css';
import Topbar from './components/Topbar/topbar'
import Sidebar from './components/Sidebar/sidebar'
import CriarPartida from './pages/criarPartida/criarPartida';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Topbar/>
        <div className="container">
          <Sidebar/>
            <Routes>
                <Route path="/CriarPartida" element={<CriarPartida/>}></Route>
                
            </Routes>
        </div>
    </Router>
  );
}

export default App;
