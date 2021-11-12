import React from "react";
import s from './FormsControls.module.css'

type TextAreaPropsType = {
    children: string
    className: string
    input: {}
    meta: {}
    placeholder: string
}

export const Textarea = ({input,meta,...props}:TextAreaPropsType) =>{
    return(
        <div className={s.formControl + " " + s.error}>
            <textarea {...props} {...input}></textarea>
        </div>
    )
}