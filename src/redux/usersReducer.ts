const FOLLOW_TO_USER = "FOLLOW-TO-USER";
const UN_FOLLOW_TO_USER = "UN-FOLLOW-TO-USER";
const SET_USER = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

type LocationType = {
    country: string
    city: string
}

type PhotosType = {
    small:string
    large:string
}

export type UserType = {
    id: number
    photos:PhotosType
    name: String
    location: LocationType
    status: string
    followStatus: boolean
}

export type UsersPageType = {
    users: UserType[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount:0,
    currentPage:1111,
    isFetching:false,
}

const userReducer = (state: UsersPageType = initialState, action: AllActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW_TO_USER:
            return {
                ...state,
                users: state.users.map(m => m.id === action.userID ? {...m, followStatus: true} : m)
            }
        case UN_FOLLOW_TO_USER:
            return {
                ...state,
                users: state.users.map(m => m.id === action.userID ? {...m, followStatus: false} : m)
            }
        case SET_USER:
            return {
                ...state,
                users: [...action.users, ...state.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage:action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount:action.totalUsersCount
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching:action.isFetching
            }
        default:
            return state
    }
}

type AllActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>

export const followAC = (userID: number) => ({type: FOLLOW_TO_USER, userID} as const)
export const unFollowAC = (userID: number) => ({type: UN_FOLLOW_TO_USER, userID} as const)
export const setUserAC = (users: UserType[]) => ({type: SET_USER, users} as const)
export const setCurrentPageAC = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount:number) => ({type: SET_TOTAL_USER_COUNT, totalUsersCount} as const)
export const toggleIsFetchingAC = (newToggleValue:boolean) => ({type: TOGGLE_IS_FETCHING, isFetching:newToggleValue} as const)


export default userReducer