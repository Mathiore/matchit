
export default function Validation(values){

    let errors ={};
    
    if(!values.fullname){
        errors.fullname="Nome inválido."
    }
    if(!values.email){
        errors.email="Email inválido."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email inválido."
    }
    if(!values.password){
        errors.password="Senha inválida."
    } else if(values.password.length < 5){
        errors.password="Senha deve ter mais que 5 Caracteres."
    }
    if(!values.confipassword){
        errors.confipassword="As senhas devem ser Iguais."
    }

    return errors;
}