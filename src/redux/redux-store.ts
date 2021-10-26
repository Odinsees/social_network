import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import userReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    userReducer,
    authReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>
export type StoreType = typeof store

export let store: Store<RootReducerType> = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store


