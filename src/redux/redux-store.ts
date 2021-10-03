import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer
})

export type RootReducerType = ReturnType<typeof reducers>

export let store = createStore(reducers)


