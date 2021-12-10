import './cadastro.css'
import Login from '../login/login';

export default function Cadastro({submitForm}){

    const{handleChange, enviarSubmit, values, errors} = Login(submitForm);
    return(
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Cadastro</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label htmlFor="label">Nome Completo</label>
                        <input type="text" className="inputCadastro" name="fullname"/>
                        
                    </div>
                    <div className="email">
                        <label htmlFor="label">Email</label>
                        <input type="email" className="inputCadastro" name="email"/>
                    
                    </div>
                    <div className="password">
                        <label htmlFor="label">Senha</label>
                        <input type="password" className="inputCadastro" name="password"/>
                    
                    </div>
                    <div className="password">
                        <label htmlFor="label">Confirmar Senha</label>
                        <input type="password" className="inputCadastro" name="confipassword"/>
                    
                    </div>
                    <div>
                        <button className="submitCadastro">Finalizar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}