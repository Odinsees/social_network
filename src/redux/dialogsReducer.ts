const ADD_MESSAGE = "dialogs-reducer/ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "dialogs-reducer/UPDATE-NEW-MESSAGE-TEXT"

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
}

let initialState: DialogsPageType = {
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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: AllActionType): DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (action.newMessageText.trim() !== "") {
                let NewMessage: MessagesType = {id: 5, message: action.newMessageText}
                return  {
                    ...state,
                    messages: [...state.messages, NewMessage],
                }
            }
            return state
        default:
            return state
    }
}

type AllActionType =
    | ReturnType<typeof addMessageActionCreator>

export const addMessageActionCreator = (newMessageText:string) => ({type: ADD_MESSAGE, newMessageText} as const)


export default dialogsReducer