import React from "react";
import s from './FormsControls.module.css'

type FormPropsType = {
    children: {}
    className: string
    input: {}
    meta: {
        error: string
        touched: boolean
    }
    placeholder: string
}

const FormControl = ({input, meta, ...props}: FormPropsType) => {
    const showError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (showError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            <div>
                {showError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props: FormPropsType) => {
    return <FormControl {...props}><textarea {...props}{...props.input}/></FormControl>
}

export const Input = (props: FormPropsType) => {
    return <FormControl {...props}><input {...props} {...props.input}/></FormControl>
}
