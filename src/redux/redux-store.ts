import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import userReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    appReducer,
    profileReducer,
    dialogsReducer,
    userReducer,
    authReducer,
    form:formReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>
export type StoreType = typeof store

export let store: Store<RootReducerType> = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store


