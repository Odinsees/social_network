import {PostsType, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state: ProfilePageType, action: AllActionType): ProfilePageType =>{
    switch (action.type){
        case ADD_POST:
            let NewPost: PostsType = {id: 6, message: state.newPostText, likesCount: 0}
            state.posts.unshift(NewPost)
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

type AllActionType =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof UpdateNewPostActionCreator>

export const addPostActionCreator = ()=>({type: ADD_POST} as const)
export const UpdateNewPostActionCreator = (PostText: string)=>
    ({type: UPDATE_NEW_POST_TEXT, newText: PostText} as const)

export default profileReducer