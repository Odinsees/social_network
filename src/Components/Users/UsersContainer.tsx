import React from "react";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {
    followUser,
    unFollowUser,
    getUsers,
    setCurrentPage,
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {UserType} from "../../api/api";

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

}

type MapDispatchToPropsType = {
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    unFollowUser={this.props.unFollowUser}
                    followUser={this.props.followUser}
                    followingInProgress={this.props.followingInProgress}
                />
            }
        </>
    }
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        users: state.userReducer.users,
        pageSize: state.userReducer.pageSize,
        totalUsersCount: state.userReducer.totalUsersCount,
        currentPage: state.userReducer.currentPage,
        isFetching: state.userReducer.isFetching,
        followingInProgress: state.userReducer.followingInProgress,
    }
}

export const UsersContainer = connect(mapStateToProps, {
    followUser,
    unFollowUser,
    setCurrentPage,
    getUsers,
})(UsersAPIComponent)