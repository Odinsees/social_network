import {DialogsPageType, MessagesType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
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

const dialogsReducer = (state: DialogsPageType = initialState, action: AllActionType): DialogsPageType =>{
    switch (action.type){
        case ADD_MESSAGE:
            let NewMessage: MessagesType = {id: 5, message: state.newMessageText}
            state.messages.push(NewMessage)
            state.newMessageText = ""
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
        }
}

type AllActionType =
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof UpdateNewMessageTextActionCreator>

export const addMessageActionCreator = ()=> ({type: ADD_MESSAGE} as const)
export const UpdateNewMessageTextActionCreator = (MessageText: string)=>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: MessageText}as const)

export default dialogsReducer