import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {
    ActionsTypes,
    DialogsPageType
} from "../../redux/store";
import {addMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogsReducer";


type PropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs: React.FC<PropsType> = ({dialogsPage, dispatch}) => {


    const dialogsHandler = () => dialogsPage.dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>)

    const messagesHandler = () => dialogsPage.messages.map(m => <Message message={m.message}/>)

   /* let newMessageElement = React.createRef<HTMLTextAreaElement>()*/

    let onSendMessageClickHandler = () => {
            dispatch(addMessageActionCreator())
    }

    let onSendMessageKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            dispatch(addMessageActionCreator())
        }
    }

    let onMessageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value
        let action = UpdateNewMessageTextActionCreator(text)
        dispatch(action)
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
                             value={dialogsPage.newMessageText}
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

