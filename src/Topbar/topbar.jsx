import './topbar.css'
import logo from './img/logo.png'

export default Topbar =>
    <div className="topbar">
        <div className="barWrapper">
            <div className="topLeft">
                <div className="logo"><img src={logo} alt="" />match it</div>
            </div>
            <div className="topRight">
                <nav>
                    <ul>
                        <li>Início</li>
                        <li>Criar partida</li>
                        <li>Procurar partida</li>
                        <li>Sign in</li>
                        
                    </ul>
                </nav>
                
            </div>
        </div>
        
    </div>