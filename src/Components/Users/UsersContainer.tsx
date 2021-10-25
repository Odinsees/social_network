import React from "react";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {
    followToUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollowToUser, UserResponseType, UserType,
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type MapStateToPropsType = {
    users: UserType[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
}

type MapDispatchToPropsType = {
    followToUser:(userID: number)=>void
    unFollowToUser: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage:number) => void
    setTotalUsersCount: (totalUsersCount:number) =>void
    toggleIsFetching:(newToggleValue:boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get<UserResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true, headers: {'API-KEY': '1734c197-25c0-4bdd-9d52-5f9220f3c903'}})
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(+response.data.totalCount)
                this.props.toggleIsFetching(false)
            });
    }
    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get<UserResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true, headers: {'API-KEY': '1734c197-25c0-4bdd-9d52-5f9220f3c903'}})
            .then((response) => {
                this.props.setUsers(response.data.items )
                this.props.toggleIsFetching(false)
            });
    }
    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                :<Users
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    unFollowToUser={this.props.unFollowToUser}
                    followToUser={this.props.followToUser}
                />
            }
        </>
    }
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return{
        users: state.userReducer.users,
        pageSize: state.userReducer.pageSize,
        totalUsersCount: state.userReducer.totalUsersCount,
        currentPage: state.userReducer.currentPage,
        isFetching: state.userReducer.isFetching,
    }
}

export const UsersContainer = connect(mapStateToProps, {
    followToUser,
    unFollowToUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersAPIComponent)