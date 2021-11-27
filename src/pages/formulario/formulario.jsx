import './formulario.css';
import Cadastro from './cadastro/cadastro';
import ValidationSuccess from './cadastro/validationSuccess';
import { useState } from 'react';

export default function Formulario(){
    
    const[CadastroConcluido, setCadastro] = useState(false);

    const submitCadastro = () => {
        setCadastro(true);
    };

    return(

        <div className="formulario">
            { !CadastroConcluido ? (<Cadastro submitForm={submitCadastro}/>) : (<ValidationSuccess/>)}
        </div>
    )
}