import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageReduxForm, FormDataTypeForDialogsNewMessage} from "./AddMessageForm";


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsHandler = () => props.dialogsState.dialogs.map(d => <DialogsItem key={d.id} id={d.id} name={d.name}/>)

    const messagesHandler = () => props.dialogsState.messages.map(m => <Message key={m.id} message={m.message}/>)


    const addNewMessageFromForm = (data:FormDataTypeForDialogsNewMessage) => {
        props.addMessageActionCreator(data.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsHandler()}
            </div>
            <div className={s.messages}>
                <div>{messagesHandler()}</div>
                <div>
                    <AddMessageReduxForm
                        onSubmit={addNewMessageFromForm}
                    />
                </div>
            </div>
        </div>
    )

}

