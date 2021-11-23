import './sidebar.css'
import {EditLocationOutlined, SportsBasketballOutlined, SportsSoccerOutlined, SportsVolleyballOutlined, PublicOutlined, ControlPointOutlined} from '@material-ui/icons'
import {Link} from 'react-router-dom'

export default Sidebar =>
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sideMenu">
                <ul className="sideList">
                    <li className="sideItem active">
                        <Link to="/CriarPartida" style={{textDecoration: 'none', color: '#fff'}}>
                        <EditLocationOutlined className="barIcon"/>
                        CRIAR PARTIDA
                        </Link>
                    </li>
                    <li className="sideItem">
                        <Link to="/ProcurarPartida" style={{textDecoration: 'none', color: '#fff'}}> 
                        <PublicOutlined className="barIcon"/>
                        PROCURAR PARTIDA
                        </Link>
                    </li>
                    <li className="sideItem">
                        <ControlPointOutlined className="barIcon"/>
                        PERSONALIZADOS
                    </li>
                </ul>
            </div>
        </div>
    </div>