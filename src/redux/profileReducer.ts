import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const ADD_POST = "profile-reducer/ADD-POST";
const UPDATE_NEW_POST_TEXT = "profile-reducer/UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "profile-reducer/SET-USER-PROFILE";

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
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: null | ProfileType
}


let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi my friend!", likesCount: 12},
        {id: 2, message: "I am learn React!", likesCount: 100},
        {id: 3, message: "I am learn JS!", likesCount: 123},
        {id: 4, message: "I am learn HTML!", likesCount: 13},
        {id: 5, message: "Hello world!", likesCount: 11232101},
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state: ProfilePageType = initialState, action: AllActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText.trim() !== "") {
                let NewPost: PostsType = {id: 6, message: state.newPostText, likesCount: 0}
                return {
                    ...state,
                    posts: [NewPost, ...state.posts],
                    newPostText: ""
                }
            }
            return state
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

type AllActionType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>

export const addPost = () => ({type: ADD_POST} as const)
export const updateNewPostText = (PostText: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: PostText} as const)
export const setUserProfile = (profile:ProfileType) =>
    ({type: SET_USER_PROFILE, profile} as const)


export const getUserForProfileRender = (userID:number) =>{
    return (dispatch:Dispatch)=>{
        usersAPI.getUserForProfileRender(userID)
            .then((data) => {
                dispatch(setUserProfile(data))
            });
    }
}

export default profileReducer