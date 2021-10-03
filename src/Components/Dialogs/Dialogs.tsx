import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {addMessageActionCreator, DialogsPageType, UpdateNewMessageTextActionCreator} from "../../redux/dialogsReducer";


type PropsType = {
    dialogsState: DialogsPageType
}


export const Dialogs: React.FC<PropsType> = (props) => {

    const dialogsHandler = () => props.dialogsState.dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>)

    const messagesHandler = () => props.dialogsState.messages.map(m => <Message message={m.message}/>)

   /* let newMessageElement = React.createRef<HTMLTextAreaElement>()*/

    let onSendMessageClickHandler = () => {
            props.store.dispatch(addMessageActionCreator())
    }

    let onSendMessageKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            props.store.dispatch(addMessageActionCreator())
        }
    }

    let onMessageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value
        let action = UpdateNewMessageTextActionCreator(text)
        props.store.dispatch(action)
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
                             /*ref={newMessageElement}*/
                             onChange={onMessageTextChange}
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

