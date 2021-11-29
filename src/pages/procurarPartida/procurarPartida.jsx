import './procurarPartida.css'
import {MeetingRoomOutlined} from '@material-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProcurarPartida(){
    const [partida, setPartida] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const {data} = await axios.get('/api/partidas');
            setPartida(data);
        };
        fetchData();
    },[])

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
                        {partida.map((partidas)=>(
                            <ul className="list-partidas">
                                <li className="partidas">
                                    <span className="nome-partida">{partidas.jogo}</span>
                                    <span className="num-jogadores">{partidas.jogadores}</span>
                                    <span className="entrar"><MeetingRoomOutlined/></span>
                                </li>
                            </ul>
                        ))}
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