import './App.css';
import Topbar from './components/Topbar/topbar'
import Sidebar from './components/Sidebar/sidebar'
import CriarPartida from './pages/criarPartida/criarPartida';

function App() {
  return (
    <div className="App">
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <div className="mainPage">
            <CriarPartida/>
          </div>
        </div>
    </div>
  );
}

export default App;
