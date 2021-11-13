import React from "react";
import {FormDataTypeForLoginForm, LoginReduxForm} from "./LoginForm";
import {loginUser} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {RootReducerType, store} from "../../redux/redux-store";

const Login = (props:LoginPropsType) => {

    const onSubmit = (formData:FormDataTypeForLoginForm) =>{
        let login = formData.login
        let password = formData.password
        let rememberMe = formData.rememberMe
        props.loginUser(login,password,rememberMe)
    }

    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return(
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

type LoginPropsType = mapStateToPropsType & mapDispatchToProps

type mapStateToPropsType = {
    isAuth:boolean
}

type mapDispatchToProps = {
    loginUser:(login:string,password:string,rememberMe:boolean)=>void
}

const mapStateToProps = (state:RootReducerType) =>({
    isAuth: state.authReducer.isAuth
})

export default connect (mapStateToProps,{loginUser})(Login)

