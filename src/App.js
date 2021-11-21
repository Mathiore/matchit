import './App.css';
import Topbar from './components/Topbar/topbar'
import Sidebar from './components/Sidebar/sidebar'

function App() {
  return (
    <div className="App">
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <div className="mainPage">
            other
          </div>
        </div>
    </div>
  );
}

export default App;
