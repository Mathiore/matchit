import './sidebar.css'
import {EditLocationOutlined, SportsBasketballOutlined, SportsSoccerOutlined, SportsVolleyballOutlined, PublicOutlined, ControlPointOutlined} from '@material-ui/icons'

export default Sidebar =>
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sideMenu">
                <ul className="sideList">
                    <li className="sideItem">
                        <EditLocationOutlined className="barIcon"/>
                        CRIAR PARTIDA
                    </li>
                    <li className="sideItem active">
                        <PublicOutlined className="barIcon"/>
                        PROCURAR PARTIDA
                    </li>
                    <li className="sideItem">
                        <SportsBasketballOutlined className="barIcon"/>
                        BASQUETE
                    </li>
                    <li className="sideItem">
                        <SportsSoccerOutlined className="barIcon"/>
                        FUTEBOL
                    </li>
                    <li className="sideItem">
                        <SportsVolleyballOutlined className="barIcon" />
                        VÔLEI
                    </li>
                    <li className="sideItem">
                        <ControlPointOutlined className="barIcon"/>
                        PERSONALIZADOS
                    </li>
                </ul>
            </div>
        </div>
    </div>