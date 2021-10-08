import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootReducerType} from "../../redux/redux-store";
import {followAC, setUserAC, unFollowAC, UsersPageType, UserType} from "../../redux/usersReducer";

type MapStateToPropsType = {
    users: UsersPageType
}

type MapDispatchToPropsType = {
    followToUser:(userID: number)=>void
    unFollowToUser: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return{
        users: state.userReducer
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        followToUser: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollowToUser: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUserAC(users))
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)