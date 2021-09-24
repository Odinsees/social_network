import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {
    ActionsTypes,
    addMessageActionCreator,
    addPostActionCreator,
    DialogsPageType, UpdateNewMessageTextActionCreator,
    UpdateNewPostActionCreator
} from "../../redux/state";


type PropsType = {
    dialogsPage:DialogsPageType
    dispatch:(action: ActionsTypes)=>void
}

export const Dialogs: React.FC<PropsType> = ({dialogsPage,dispatch}) => {


    const dialogsHandler = () => dialogsPage.dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>)

    const messagesHandler = () => dialogsPage.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let onClickHandler = () => {
        if (newMessageElement.current) {
            dispatch(addMessageActionCreator())
        }
    }

    let onKeyPressHandler = (event:KeyboardEvent<HTMLTextAreaElement>) =>{
        if (event.key === "Enter"){
            dispatch(addMessageActionCreator())
        }
    }

    let onMessageTextChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
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
                {messagesHandler()}
                <textarea ref={newMessageElement}
                          onChange={onMessageTextChange}
                          onKeyPress={onKeyPressHandler}
                          value={dialogsPage.newMessageText}
                > </textarea>
                <button onClick={onClickHandler}>send</button>
            </div>
        </div>
    )
}

