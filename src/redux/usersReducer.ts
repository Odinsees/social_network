const FOLLOW_TO_USER = "FOLLOW-TO-USER";
const UN_FOLLOW_TO_USER = "UN-FOLLOW-TO-USER";
const SET_USER = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

export type UserResponseType = {
    items: UserType[]
    totalCount: 15310
    error: string
}

type PhotosType = {
    small:string
    large:string
}

/*type LocationType = {
    country: string
    city: string
}*/

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotosType
    status: string
    followed: boolean
    /*location: LocationType*/
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
    currentPage:1,
    isFetching:false,
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
    | ReturnType<typeof followToUser>
    | ReturnType<typeof unFollowToUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

export const followToUser = (userID: number) => ({type: FOLLOW_TO_USER, userID} as const)
export const unFollowToUser = (userID: number) => ({type: UN_FOLLOW_TO_USER, userID} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USER, users} as const)
export const setCurrentPage = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount:number) => ({type: SET_TOTAL_USER_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (newToggleValue:boolean) => ({type: TOGGLE_IS_FETCHING, isFetching:newToggleValue} as const)


export default userReducer