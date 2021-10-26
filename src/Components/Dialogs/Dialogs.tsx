import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsHandler = () => props.dialogsState.dialogs.map(d => <DialogsItem key={d.id} id={d.id} name={d.name}/>)

    const messagesHandler = () => props.dialogsState.messages.map(m => <Message key={m.id} message={m.message}/>)

    let onSendMessageClickHandler = () => {
        props.addMessageActionCreator()
    }

    let onSendMessageKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            props.addMessageActionCreator()
        }
    }

    let onMessageTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value
        props.UpdateNewMessageTextActionCreator(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsHandler()}
            </div>
            <div className={s.messages}>
                <div>{messagesHandler()}</div>
                <div>
                    <div>
                         <textarea
                             className={s.TextArea}
                             onChange={onMessageTextChangeHandler}
                             onKeyPress={onSendMessageKeyPressHandler}
                             value={props.dialogsState.newMessageText}
                         > </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClickHandler}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

