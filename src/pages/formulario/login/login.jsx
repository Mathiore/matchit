import { useState, useEffect } from "react";
import Validation from "../cadastro/validation";

export default function Login(submitForm){
    const enviarSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        setDados(true);
    };

    const[values, setValues] = useState({
        fullname:"",
        email:"",
        password:"",
        confipassword:"",
    });

    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const[errors, setErrors] = useState({});

    const[dadosCorretos, setDados] = useState(false);

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dadosCorretos){
            submitForm(true);
        }
    },[errors]);

    return{handleChange, enviarSubmit, errors, values};
}