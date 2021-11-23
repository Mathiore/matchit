import './sidebar.css'
import {EditLocationOutlined, SportsBasketballOutlined, SportsSoccerOutlined, SportsVolleyballOutlined, PublicOutlined, ControlPointOutlined} from '@material-ui/icons'

export default Sidebar =>
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sideMenu">
                <ul className="sideList">
                    <li className="sideItem active">
                        <EditLocationOutlined className="barIcon"/>
                        CRIAR PARTIDA
                    </li>
                    <li className="sideItem">
                        <PublicOutlined className="barIcon"/>
                        PROCURAR PARTIDA
                    </li>
                    <li className="sideItem">
                        <ControlPointOutlined className="barIcon"/>
                        PERSONALIZADOS
                    </li>
                </ul>
            </div>
        </div>
    </div>