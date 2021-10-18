import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootReducerType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUserAC,
    unFollowAC,
    UsersPageType,
    UserType
} from "../../redux/usersReducer";
import Users from "./Users";

type MapStateToPropsType = {
    users: UserType[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

type MapDispatchToPropsType = {
    followToUser:(userID: number)=>void
    unFollowToUser: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage:number) => void
    setTotalUsersCount: (totalUsersCount:number) =>void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return{
        users: state.userReducer.users,
        pageSize: state.userReducer.pageSize,
        totalUsersCount: state.userReducer.totalUsersCount,
        currentPage: state.userReducer.currentPage
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
        },
        setCurrentPage: (currentPage:number) =>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount:number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)