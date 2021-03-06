import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {checkedAuth, logOutUser} from "../../redux/auth-reducer";
import {RootReducerType} from "../../redux/redux-store";

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
    isFetching: boolean
    userName: string | null
    userPhoto: string | null
}

type MapDispatchToPropsType = {
    logOutUser:()=>void
}

export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeadersAPIComponent extends React.Component<AuthPropsType> {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        login: state.authReducer.login,
        isAuth: state.authReducer.isAuth,
        isFetching: state.authReducer.isFetching,
        userName: state.authReducer.userFullName,
        userPhoto: state.authReducer.userPhoto,
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    logOutUser,
})(HeadersAPIComponent)


