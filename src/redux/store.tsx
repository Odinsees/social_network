import profileReducer, {addPost, updateNewPostText} from "./profileReducer";
import dialogsReducer, {addMessageActionCreator, UpdateNewMessageTextActionCreator} from "./dialogsReducer";


export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

export type NewsType = {}
export type MusicType = {}
export type SettingsType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    news:NewsType
    music:MusicType
    settings:SettingsType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof UpdateNewMessageTextActionCreator>


/*export let store: StoreType = {
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
        },
        news:{},
        music:{},
        settings:{}
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
    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    }
}*/

