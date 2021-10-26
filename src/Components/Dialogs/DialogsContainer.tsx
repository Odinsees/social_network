import React from 'react';
import {
    addMessageActionCreator, DialogsPageType,
    UpdateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";



type MapStateToPropsType = {
    dialogsState: DialogsPageType
    isAuth:boolean
}

type MapDispatchToPropsType = {
    addMessageActionCreator:()=>void
    UpdateNewMessageTextActionCreator:(text:string)=>void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:RootReducerType):MapStateToPropsType =>{
    return {
        dialogsState: state.dialogsReducer,
        isAuth: state.authReducer.isAuth,
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps,
    {
        addMessageActionCreator,
        UpdateNewMessageTextActionCreator,
    })(AuthRedirectComponent)

