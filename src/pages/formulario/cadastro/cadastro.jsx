import './cadastro.css'

export default function Cadastro(){
    return(
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Cadastro</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label htmlFor="label">Nome Completo</label>
                        <input type="text" className="inputCadastro" required/>
                    </div>
                    <div className="email">
                        <label htmlFor="label">Email</label>
                        <input type="email" className="inputCadastro" required/>
                    </div>
                    <div className="password">
                        <label htmlFor="label">Senha</label>
                        <input type="password" className="inputCadastro" required/>
                    </div>
                </form>
            </div>
        </div>
    )
}