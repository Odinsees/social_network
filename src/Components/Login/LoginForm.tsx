import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredFeel} from "../../utils/validators";


export type FormDataTypeForLoginForm = {
    login:string
    password:string
    rememberMe:boolean
}


export const LoginForm: React.FC<InjectedFormProps<FormDataTypeForLoginForm>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input} placeholder={'login'} name={'login'}
                    validate={[requiredFeel]}
                />
            </div>
            <div>
                <Field
                    component={Input} placeholder={'password'} name={'password'} type={'password'}
                    validate={[requiredFeel]}
                />
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'rememberMe'}/>remember me
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