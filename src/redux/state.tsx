export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostActionType | UpdateNewTextActionType | AddMessageActionType | UpdateNewMessageTextActionType

type AddPostActionType = {
    type: "ADD-POST"
}
type UpdateNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    text: string
}

type AddMessageActionType = {
    type: "ADD-MESSAGE"
}

type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    text: string
}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi my friend!", likesCount: 12},
                {id: 2, message: "I am learn React!", likesCount: 100},
                {id: 3, message: "I am learn JS!", likesCount: 123},
                {id: 4, message: "I am learn HTML!", likesCount: 13},
                {
                    id: 5,
                    message: "Hello MAZAFAKA! Я стану программистом и буду херачить в кайф!!!!!",
                    likesCount: 11232101
                },
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Pavel"},
                {id: 2, name: "Irina"},
                {id: 3, name: "Sergey"},
                {id: 4, name: "Anna"},
                {id: 5, name: "Olia"}
            ],
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "Watsaaaaaap men"},
                {id: 3, message: "Ratatata"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Hello bro"}
            ],
            newMessageText: ""
        }
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            if (this._state.profilePage.newPostText.trim() !== "" /*&& this._state.profilePage.newPostText !== "Add text"*/) {
                let NewPost: PostsType = {id: 6, message: this._state.profilePage.newPostText, likesCount: 0}
                this._state.profilePage.posts.unshift(NewPost)
                this._state.profilePage.newPostText = ""
                this._callSubscriber()
            }
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber()
        } else if (action.type === ADD_MESSAGE){
            if (this._state.dialogsPage.newMessageText.trim() !== "") {
                let NewMessage: MessagesType = {id: 5, message: this._state.dialogsPage.newMessageText}
                this._state.dialogsPage.messages.push(NewMessage)
                this._state.dialogsPage.newMessageText = ""
                this._callSubscriber()
            }
        }else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.text
            this._callSubscriber()
        }

    }
}

export const addPostActionCreator = (): AddPostActionType => {
    return {type: ADD_POST}
}

export const UpdateNewPostActionCreator = (text: string): UpdateNewTextActionType => {
    return {type: UPDATE_NEW_POST_TEXT, text: text}
}

export const addMessageActionCreator = (): AddMessageActionType => {
    return {type: ADD_MESSAGE}
}

export const UpdateNewMessageTextActionCreator = (text: string): UpdateNewMessageTextActionType => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, text: text}
}


/*
let rerenderEntireThree = () =>{
    console.log('state was changed')
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText:string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi my friend!", likesCount: 12},
            {id: 2, message: "I am learn React!", likesCount: 100},
            {id: 3, message: "I am learn JS!", likesCount: 123},
            {id: 4, message: "I am learn HTML!", likesCount: 13},
            {id: 5, message: "Hello MAZAFAKA! Я стану программистом и буду херачить в кайф!!!!!", likesCount: 11232101},
        ],
        newPostText:''
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Pavel"},
            {id: 2, name: "Irina"},
            {id: 3, name: "Sergey"},
            {id: 4, name: "Anna"},
            {id: 5, name: "Olia"}
        ],
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "Watsaaaaaap men"},
            {id: 3, message: "Ratatata"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Hello bro"}
        ]
    }
}


export const AddPost = () =>{
    if (state.profilePage.newPostText.trim() !=="" && state.profilePage.newPostText !== "Add text"){
        let NewPost:PostsType = {id: 6, message: state.profilePage.newPostText, likesCount: 0}
        state.profilePage.posts.unshift(NewPost)
        rerenderEntireThree()
        state.profilePage.newPostText = ""
    }
}

export const updateNewPostText = (newText:string) =>{
    state.profilePage.newPostText = newText
    rerenderEntireThree()
}

export const subscribe=(observer:()=>void)=>{
    rerenderEntireThree = observer
}*/
