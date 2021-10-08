import React from 'react';
import {
    addMessageActionCreator, DialogsPageType,
    UpdateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    dialogsState: DialogsPageType
}

type MapDispatchToPropsType = {
    onSendMessage:()=>void
    onMessageTextChange:(newMessageText:string)=>void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:RootReducerType):MapStateToPropsType =>{
    return {
        dialogsState: state.dialogsReducer
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType =>{
    return {
        onSendMessage: () => {dispatch(addMessageActionCreator())},
        onMessageTextChange: (newMessageText:string) => {dispatch(UpdateNewMessageTextActionCreator(newMessageText))}
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

