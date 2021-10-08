
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}


let initialState:ProfilePageType = {
    posts: [
        {id: 1, message: "Hi my friend!", likesCount: 12},
        {id: 2, message: "I am learn React!", likesCount: 100},
        {id: 3, message: "I am learn JS!", likesCount: 123},
        {id: 4, message: "I am learn HTML!", likesCount: 13},
        {
            id: 5,
            message: "Hello world!",
            likesCount: 11232101
        },
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: AllActionType): ProfilePageType =>{
    switch (action.type){
        case ADD_POST:
            if (state.newPostText.trim() !==""){
                let NewPost: PostsType = {id: 6, message: state.newPostText, likesCount: 0}
                let stateCopy = {...state}
                stateCopy.posts = [NewPost,...state.posts]
                stateCopy.newPostText = ""
                return stateCopy
            }
            return state
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
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