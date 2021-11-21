import './sidebar.css'
import {EditLocationOutlined, SportsBasketballOutlined, SportsSoccerOutlined, SportsVolleyballOutlined, PublicOutlined} from '@material-ui/icons'

export default Sidebar =>
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sideMenu">
                <ul className="sideList">
                    <li className="sideItem">
                        <EditLocationOutlined/>
                        CRIAR PARTIDA
                    </li>
                    <li className="sideItem">
                        <PublicOutlined/>
                        PROCURAR PARTIDA
                    </li>
                    <li className="sideItem">
                        <SportsBasketballOutlined/>
                        BASQUETE
                    </li>
                    <li className="sideItem">
                        <SportsSoccerOutlined/>
                        FUTEBOL
                    </li>
                    <li className="sideItem">
                        <SportsVolleyballOutlined/>
                        VÔLEI
                    </li>
                </ul>
            </div>
        </div>
    </div>