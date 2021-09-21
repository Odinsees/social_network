import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'

type DialogsItemType = {
    id: number
    name: string
}



export const DialogsItem: React.FC<DialogsItemType> = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
}





