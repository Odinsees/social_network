import React from 'react';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {addMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";


type PropsType = {
    store: StoreType
}


export const DialogsContainer: React.FC<PropsType> = (props) => {

    let state = props.store.getState()

    let onSendMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageTextChange = (text: string) => {
        let action = UpdateNewMessageTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <Dialogs dialogsState={state.dialogsReducer}/>
    )
}

