import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthResponseType, setAuthUserData, setUserNameAndPhoto, toggleIsFetchingAuth} from "../../redux/auth-reducer";
import {RootReducerType} from "../../redux/redux-store";
import {ProfileType} from "../../redux/profileReducer";

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
        axios.get<AuthResponseType>(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, email, login,} = response.data.data
                    this.props.setUserDataAC(id, email, login)
                    this.props.toggleIsFetchingAuth(false)
                    axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/` + response.data.data.id)
                        .then((response) => {
                            let userName = response.data.fullName
                            let userPhoto = response.data.photos.small
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


