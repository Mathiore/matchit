import './cadastro.css'
import {useState} from 'react';

export default function Cadastro(){

    const enviarSubmit = (event) => {
        event.preventDefault();
    };

    const[values, setValues] = useState({
        fullname:"",
        email:"",
        password:"",
    });

    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

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
                    </div>
                    <div className="email">
                        <label htmlFor="label">Email</label>
                        <input type="email" className="inputCadastro" name="email" value={values.email} onChange={handleChange}/>
                    </div>
                    <div className="password">
                        <label htmlFor="label">Senha</label>
                        <input type="password" className="inputCadastro" name="password" value={values.password} onChange={handleChange}/>
                    </div>
                    <div>
                        <button className="submitCadastro" onClick={enviarSubmit}>Finalizar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}