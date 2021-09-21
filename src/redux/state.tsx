let rerenderEntireThree = (state:RootStateType) =>{
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
        newPostText:'Add text'
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
        rerenderEntireThree(state)
        state.profilePage.newPostText = ""
    }
}

export const updateNewPostText = (newText:string) =>{
    state.profilePage.newPostText = newText
    rerenderEntireThree(state)
}

export const subscribe=(observer:any)=>{
    rerenderEntireThree = observer
}