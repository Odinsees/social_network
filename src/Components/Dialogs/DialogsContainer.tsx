import React from 'react';
import {
    addMessageActionCreator, DialogsPageType,
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";



type MapStateToPropsType = {
    dialogsState: DialogsPageType
    isAuth:boolean
}

type MapDispatchToPropsType = {
    addMessageActionCreator:(newMessageText:string)=>void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:RootReducerType):MapStateToPropsType =>{
    return {
        dialogsState: state.dialogsReducer,
        isAuth: state.authReducer.isAuth,
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            addMessageActionCreator,
        }),
    WithAuthRedirect,
)(Dialogs)


