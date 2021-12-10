import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './login.css'
import { signin } from "../../../actions/userActions";
import { useDispatch } from "react-redux";

export default function Login(submitForm){

    const[email, setEmail] = useState('');

    const[password, setPassword] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return(
        <div className="container">
            <div className="app-login">
                <div>
                    <h2 className="title">Login</h2>
                </div>
                <form className="form-wrapper" onSubmit={submitHandler}>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="inputCadastro" name="email" required onChange={ e => setEmail(e.target.value)}/>

                    </div>
                    <div className="password">
                        <label htmlFor="password">Senha</label>
                        <input type="password" className="inputCadastro" name="password" required onChange={ e => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button type="submit" className="submitCadastro">Entrar</button>
                    </div>
                    <div className="cadastrar">
                        Novo usuário? {' '}
                        <Link to="/Cadastro">Crie sua conta</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}