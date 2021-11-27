import './procurarPartida.css'
import {MeetingRoomOutlined} from '@material-ui/icons';

export default function ProcurarPartida(){
    return(
        <div className="procurar">
            <div className="card-container">
                <div className="pesquisa">

                </div>
                <div className="card">
                    <div className="conteudo">
                        <h1 className="conteudo-titulo">
                            Partidas em Aberto
                        </h1>
                        <ul className="list-partidas">
                            <li className="partidas">
                                <span className="nome-partida">Jogo de Basquete</span>
                                <span className="num-jogadores"> 1/6</span>
                                <span className="entrar"><MeetingRoomOutlined/></span>
                            </li>
                            <li className="partidas">
                                <span className="nome-partida">Jogo de Futebol</span>
                                <span className="num-jogadores"> 3/6</span>
                                <span className="entrar"><MeetingRoomOutlined/></span>
                            </li>
                            <li className="partidas">
                                <span className="nome-partida">Jogo de Vôlei</span>
                                <span className="num-jogadores"> 5/6</span>
                                <span className="entrar"><MeetingRoomOutlined/></span>
                            </li>
                            <li className="partidas">
                                <span className="nome-partida">Jogo do Joãozinho</span>
                                <span className="num-jogadores"> 4/6</span>
                                <span className="entrar"><MeetingRoomOutlined/></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="conteudo">
                        <div className="conteudo-titulo">
                            <h1>Localização</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}