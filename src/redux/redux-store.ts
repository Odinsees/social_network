import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import userReducer from "./usersReducer";

let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    userReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>
export type StoreType = typeof store

export let store = createStore(rootReducer)



