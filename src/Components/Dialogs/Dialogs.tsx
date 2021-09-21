import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsPageType} from "../../redux/state";


type PropsType = {
    state:DialogsPageType
}

export const Dialogs: React.FC<PropsType> = ({state}) => {


    const dialogsHandler = () => state.dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>)

    const messagesHandler = () => state.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () =>{
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsHandler()}
            </div>
            <div className={s.messages}>
                {messagesHandler()}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>send</button>
            </div>
        </div>
    )
}

