const FOLLOW_TO_USER = "FOLLOW-TO-USER";
const UN_FOLLOW_TO_USER = "UN-FOLLOW-TO-USER";
const SET_USER = "SET-USERS"

type LocationType = {
    country: string
    city: string
}

export type UserType = {
    id: number
    photoUrl:string
    fullName: String
    location: LocationType
    status: string
    followStatus: boolean
}

export type UsersPageType = {
    users: UserType[]
}


let initialState: UsersPageType = {
    users:[],
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
        case SET_USER: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}

type AllActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUserAC>

export const followAC = (userID: number) => ({type: FOLLOW_TO_USER, userID} as const)
export const unFollowAC = (userID: number) => ({type: UN_FOLLOW_TO_USER, userID} as const)
export const setUserAC = (users: UserType[]) => ({type: SET_USER, users} as const)


export default userReducer