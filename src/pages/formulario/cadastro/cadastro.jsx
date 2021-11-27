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
                        <input type="text" className="inputCadastro" name="fullname" value={values.fullname} onChange={handleChange}/>
                        {errors.fullname && <p className="error">{errors.fullname}</p>}
                    </div>
                    <div className="email">
                        <label htmlFor="label">Email</label>
                        <input type="email" className="inputCadastro" name="email" value={values.email} onChange={handleChange}/>
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label htmlFor="label">Senha</label>
                        <input type="password" className="inputCadastro" name="password" value={values.password} onChange={handleChange}/>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="password">
                        <label htmlFor="label">Confirmar Senha</label>
                        <input type="password" className="inputCadastro" name="confipassword" value={values.confipassword} onChange={handleChange}/>
                        {errors.confipassword && <p className="error">{errors.confipassword}</p>}
                    </div>
                    <div>
                        <button className="submitCadastro" onClick={enviarSubmit}>Finalizar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}