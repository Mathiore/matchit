import './procurarPartida.css'
import {MeetingRoomOutlined} from '@material-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Map from './img/maps.jpeg'

export default function ProcurarPartida(){
    const [partida, setPartida] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                setLoading(true);
                const {data} = await axios.get('/api/partidas');
                setLoading(false);
                setPartida(data);
            } catch(err){
                setError(err.message);
                setLoading(false);
            }
            
        };
        fetchData();
    },[])

    return(
        <div className="procurar">
            <div className="pesquisa">
                <input type="radio" className="radio_input" name="pesquisa" id="pesquisa1"/>
                <label htmlFor="pesquisa1" className="radio_label">Basquete</label>
                <input type="radio" className="radio_input" name="pesquisa" id="pesquisa2"/>
                <label htmlFor="pesquisa2" className="radio_label">Futebol</label>
                <input type="radio" className="radio_input" name="pesquisa" id="pesquisa3"/>
                <label htmlFor="pesquisa3" className="radio_label">Vôlei</label>
            </div>
            <div className="card-container">
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
                            <div className="map-container">
                                <img src={Map}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}