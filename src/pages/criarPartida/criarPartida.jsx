import "./criarPartida.css"

export default function CriarPartida(){
    return(
        <div>
            <div className="box">
                <form action="">
                    <fieldset>
                        <legend><b>Criação de Partida</b></legend>
                        <div className="inputBox">
                            <input type="text" name="nomeJogo" id="nomeJogo" className="inputUser" required/>
                            <label htmlFor="nomeJogo" className="labelInput">Nome do jogo</label>
                        </div>
                        <div className="inputBox">
                            <input type="email" name="emailConfirm" id="emailConfirm" className="inputUser" required/>
                            <label htmlFor="emailConfirm" className="labelInput">Email para confirmação</label>
                        </div>
                        <p>Tipo de partida:</p>
                        <input type="radio" id="feminino" name="genero" value="feminino" required/>
                        <label htmlFor="feminino">Feminino</label>
                        <br />
                        <input type="radio" id="masculino" name="genero" value="masculino" required/>
                        <label htmlFor="feminino">Masculino</label>
                        <br />
                        <input type="radio" id="misto" name="genero" value="misto" required/>
                        <label htmlFor="misto">Misto</label>
                        <br />
                        <div className="inputBox">
                            <input type="search" name="cidade" id="cidade" className="inputUser" required/>
                            <label htmlFor="cidade" className="labelInput">Cidade</label>
                        </div>
                        <div className="inputBox">
                            <input type="search" name="bairro" id="bairro" className="inputUser" required/>
                            <label htmlFor="bairro" className="labelInput">Bairro do local da Partida</label>
                        </div>
                        <input type="submit" name="submit" id="submit" />
                    </fieldset>
                </form>
            </div>
        </div>
    )
}