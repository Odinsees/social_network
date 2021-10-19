import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootReducerType} from "../../redux/redux-store";
import preloaderIcon from "../../image/Icon/Preloader/Preloader.svg"
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUserAC, toggleIsFetchingAC,
    unFollowAC,
    UserType
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(+response.data.totalCount)
                this.props.toggleIsFetching(false)
            });
    }
    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
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
        },
        toggleIsFetching:(newToggleValue:boolean) => {
            dispatch(toggleIsFetchingAC(newToggleValue))
        },
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)