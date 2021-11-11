import React from "react";
import {FormDataTypeForLoginForm, LoginReduxForm} from "./LoginForm";
import {loginUser} from "../../redux/auth-reducer";

export const Login = () => {

    const onSubmit = (formData:FormDataTypeForLoginForm) =>{
        let login = formData.login
        let password = formData.password
        let rememberMe = formData.rememberMe
        loginUser(login,password,rememberMe)
    }

    return(
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

