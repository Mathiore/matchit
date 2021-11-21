import './topbar.css'
import logo from './img/logo.png'
import profile from './img/profile.png'

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
                        <li>Entre</li>
                        <li>Cadastre-se</li>
                    </ul>
                </nav>
                <img src={profile} alt="" className="profile" />
                
            </div>
        </div>
        
    </div>