import "./criarPartida.css"

export default function CriarPartida(){
    return(
        <div>
            <div className="box">
                <form action="">
                    <fieldset>
                        <legend><b>Criação de Partida</b></legend>
                        <div className="inputBox">
                            <input type="text" name="nomeJogo" id="nomeJogo" className="inputJogo" required/>
                            <label htmlFor="nomeJogo">Nome do jogo</label>
                        </div>
                        <div className="inputBox">
                            <input type="email" name="emailConfirm" id="emailConfirm" className="inputEmailConfirm" required/>
                            <label htmlFor="emailConfirm">Email para confirmação</label>
                        </div>
                        <p>Tipo de partida:</p>
                        <input type="radio" id="feminino" name="genero" value="feminino" required/>
                        <label htmlFor="feminino">Feminino</label>
                        <input type="radio" id="masculino" name="genero" value="masculino" required/>
                        <label htmlFor="feminino">Masculino</label>
                        <input type="radio" id="misto" name="genero" value="misto" required/>
                        <label htmlFor="misto">Misto</label>
                        <div className="inputBox">
                            <input type="text" name="cidade" id="cidade" className="inputCidade" required/>
                            <label htmlFor="cidade">Cidade</label>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="bairro" id="bairro" className="inputBairro" required/>
                            <label htmlFor="bairro">Bairro do local da Partida</label>
                        </div>
                        <input type="submit" name="submit" id="submit" />
                    </fieldset>
                </form>
            </div>
        </div>
    )
}