const SET_USER_DATA = "auth-reducer/SET-USER-DATA";
const TOGGLE_IS_FETCHING_AUTH = "auth-reducer/TOGGLE-IS-FETCHING"
const SET_USER_NAME_AND_PHOTO = "auth-reducer/SET-USER-NAME-AND-PHOTO"

type AuthResponseDataType = {
    id: number
    login: string
    email: string
}
export type AuthResponseType = {
    data: AuthResponseDataType
    messages: [],
    fieldsErrors: [],
    resultCode: number
}

export type AuthStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth:boolean
    userFullName:string | null
    userPhoto:string | null
}


let initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth:false,
    userFullName: null,
    userPhoto: null,
}

const authReducer = (state: AuthStateType = initialState, action: AuthActionType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth:true
            }
        case TOGGLE_IS_FETCHING_AUTH:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_USER_NAME_AND_PHOTO:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

type AuthActionType =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleIsFetchingAuth>
    | ReturnType<typeof setUserNameAndPhoto>

export const setAuthUserData = (userId: number, email: string, login: string,) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login,}
    } as const
}
export const toggleIsFetchingAuth = (newToggleValue:boolean) => (
    {type: TOGGLE_IS_FETCHING_AUTH, isFetching:newToggleValue} as const)

export const setUserNameAndPhoto = (userFullName:string, userPhoto:string,) => {
    return {
        type: SET_USER_NAME_AND_PHOTO,
        payload: {userFullName, userPhoto,}
    } as const
}

export default authReducer