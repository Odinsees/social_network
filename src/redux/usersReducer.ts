import {usersAPI, UserType} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW_TO_USER = "users-reducer/FOLLOW-TO-USER";
const UN_FOLLOW_TO_USER = "users-reducer/UN-FOLLOW-TO-USER";
const SET_USER = "users-reducer/SET-USERS"
const SET_CURRENT_PAGE = "users-reducer/SET-CURRENT-PAGE"
const SET_TOTAL_USER_COUNT = "users-reducer/SET-TOTAL-USER-COUNT"
const TOGGLE_IS_FETCHING = "users-reducer/TOGGLE-IS-FETCHING"
const FOLLOWING_IN_PROGRESS = "users-reducer/FOLLOWING-IN-PROGRESS"


export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const userReducer = (state: UsersPageType = initialState, action: AllActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW_TO_USER:
            return {
                ...state,
                users: state.users.map(m => m.id === action.userID ? {...m, followed: true} : m)
            }
        case UN_FOLLOW_TO_USER:
            return {
                ...state,
                users: state.users.map(m => m.id === action.userID ? {...m, followed: false} : m)
            }
        case SET_USER:
            return {
                ...state,
                users: [...action.users/*, ...state.users*/]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

type AllActionType =
    | ReturnType<typeof followToUserSuccess>
    | ReturnType<typeof unFollowToUserSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof changeFollowingInProgress>

export const followToUserSuccess = (userID: number) => ({type: FOLLOW_TO_USER, userID} as const)
export const unFollowToUserSuccess = (userID: number) => ({type: UN_FOLLOW_TO_USER, userID} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USER, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USER_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (newToggleValue: boolean) => (
    {type: TOGGLE_IS_FETCHING, isFetching: newToggleValue} as const)
export const changeFollowingInProgress = (isFetching: boolean, userId: number) => (
    {type: FOLLOWING_IN_PROGRESS, isFetching, userId} as const)


export const getUsers = (currentPage:number, pageSize:number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(+data.totalCount))
                dispatch(toggleIsFetching(false))
                dispatch(setCurrentPage(currentPage))
            });
    }
}

export const followUser = (userID:number) => {
    return (dispatch: Dispatch) => {
        dispatch(changeFollowingInProgress(true,userID))
        usersAPI.followUser(userID)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(followToUserSuccess(userID))
                    dispatch(changeFollowingInProgress(false,userID))
                }
            });
    }
}

export const unFollowUser = (userID:number) => {
    return (dispatch: Dispatch) => {
        dispatch(changeFollowingInProgress(true, userID))
        usersAPI.unFollowUser(userID)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(unFollowToUserSuccess(userID))
                    dispatch(changeFollowingInProgress(false, userID))
                }
            });
    }
}

export default userReducer