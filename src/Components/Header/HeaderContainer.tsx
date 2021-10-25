import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, setUserNameAndPhoto, toggleIsFetchingAuth} from "../../redux/auth-reducer";
import {RootReducerType} from "../../redux/redux-store";
import {authAPI, AuthResponseType, usersAPI} from "../../api/api";

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
    isFetching: boolean
    userName: string | null
    userPhoto: string | null
}

type MapDispatchToPropsType = {
    setUserDataAC: (userId: number, email: string, login: string,) => void
    toggleIsFetchingAuth: (newToggleValue: boolean) => void
    setUserNameAndPhoto: (userName: string, userPhoto: string,) => void
}
export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeadersAPIComponent extends React.Component<AuthPropsType> {

    componentDidMount() {
        this.props.toggleIsFetchingAuth(true)
        authAPI.checkedAuth()
            .then((data) => {
                if (data.resultCode === 0) {
                    let {id, email, login,} = data.data
                    this.props.setUserDataAC(id, email, login)
                    this.props.toggleIsFetchingAuth(false)
                    usersAPI.getUser(data.data.id)
                        .then((data) => {
                            let userName = data.fullName
                            let userPhoto = data.photos.small
                            this.props.setUserNameAndPhoto(userName,userPhoto)
                        });
                } else {

                }

            });
    }

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
    setUserDataAC: setAuthUserData,
    toggleIsFetchingAuth, setUserNameAndPhoto
})(HeadersAPIComponent)


