import {ActionsTypes, DialogsPageType, MessagesType} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const dialogsReducer = (state: DialogsPageType, action: AllActionType): DialogsPageType =>{
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