import { useState, useEffect } from "react";
import './login.css'

export default function Login(submitForm){
    return(
        <div className="container">
            <div className="app-login">
                <div>
                    <h2 className="title">Login</h2>
                </div>
                <form className="form-wrapper login">
                    <div className="email">
                        <label htmlFor="label">Email</label>
                        <input type="email" className="inputCadastro" name="email"/>

                    </div>
                    <div className="password">
                        <label htmlFor="label">Senha</label>
                        <input type="password" className="inputCadastro" name="password"/>
                    </div>
                    <div>
                        <button className="submitCadastro">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}