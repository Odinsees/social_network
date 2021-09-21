import React from 'react';
import s from './../Dialogs.module.css'


type MassageType = {
    message: string
}


export const Message: React.FC<MassageType> = (props) => {
    return (
        <div
            className={s.dialog}>{props.message}
        </div>
    )
}




