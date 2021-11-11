import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type FormDataTypeForLoginForm = {
    login:string
    password:string
    rememberMe:boolean
}


export const LoginForm: React.FC<InjectedFormProps<FormDataTypeForLoginForm>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} placeholder={'login'} name={'login'}/>
            </div>
            <div>
                <Field component={'input'} placeholder={'password'} name={'password'}/>
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'rememberMe'}/>remember me
            </div>
            <div>
                <button type={'submit'}>login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataTypeForLoginForm>({
    // a unique name for the form
    form: 'login'
})(LoginForm)