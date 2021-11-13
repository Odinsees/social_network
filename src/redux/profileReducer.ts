import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = "profile-reducer/ADD-POST";
const SET_USER_PROFILE = "profile-reducer/SET-USER-PROFILE";
const SET_USER_STATUS = "profile-reducer/SET-USER-STATUS";
const UPDATE_USER_STATUS = "profile-reducer/UPDATE-USER-STATUS";

type ContactsType = {
    facebook: string,
    website: null,
    vk: string
    twitter: string
    instagram: string
    youtube: null,
    github: string
    mainLink: null
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
    email:string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostsType[]
    profile: null | ProfileType
    status: string
}


let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi my friend!", likesCount: 12},
        {id: 2, message: "I am learn React!", likesCount: 100},
        {id: 3, message: "I am learn JS!", likesCount: 123},
        {id: 4, message: "I am learn HTML!", likesCount: 13},
        {id: 5, message: "Hello world!", likesCount: 11232101},
    ],
    profile: null,
    status: '',
}

const profileReducer = (state: ProfilePageType = initialState, action: AllActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            if (action.newPostText.trim() !== "") {
                let NewPost: PostsType = {id: 6, message: action.newPostText, likesCount: 0}
                return {
                    ...state,
                    posts: [NewPost, ...state.posts],
                }
            }
            return state
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_USER_STATUS:
            return {
                ...state,
                status: action.newStatusText
            }
        default:
            return state
    }
}

type AllActionType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof updateStatus>

export const addPost = (newPostText:string) => ({type: ADD_POST,newPostText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status} as const)
export const updateStatus = (newStatusText: string) => ({type: UPDATE_USER_STATUS, newStatusText} as const)


export const getUserForProfileRender = (userID: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserForProfileRender(userID)
            .then((data) => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getUserStatusForProfileRender = (userID: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserStatusForProfileRender(userID)
            .then((response) => {
                if (response.data) {
                    dispatch(setUserStatus(response.data))
                } else {
                    dispatch(setUserStatus('status - none'))
                }
            })
    }
}

export const updateStatusForProfileRender = (newStatusText: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(newStatusText)
            .then((response:any)=>{
                if (response.data.resultCode === 0 ){
                    dispatch(updateStatus(newStatusText))
                }
            })
    }
}


export default profileReducer