import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>
export type StoreType = typeof store

export let store = createStore(rootReducer)



