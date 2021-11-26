import './topbar.css'
import logo from './img/logo.png'
import profile from './img/profile.png'
import {Link} from 'react-router-dom'

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
                        <li><Link to="/Login" style={{textDecoration: 'none', color: '#fff'}}>Entre</Link></li>
                        <li><Link to="/Cadastro" style={{textDecoration: 'none', color: '#fff'}}>Cadastre-se</Link></li>
                    </ul>
                </nav>
                <img src={profile} alt="" className="profile" />
                
            </div>
        </div>
        
    </div>