import {checkedAuth} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {RootReducerType} from "./redux-store";
import {FormAction} from "redux-form";


const SET_INITIALIZED_SUCCESS = "auth-reducer/SET-INITIALIZED-SUCCESS";

export type AppStateType = {
    initialized: boolean
}

let initialState: AppStateType = {
    initialized: false
}

const appReducer = (state: AppStateType = initialState, action: AppActionType): AppStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

type AppActionType =
    | ReturnType<typeof setInitializedSuccess>


export const setInitializedSuccess = () => {
    return {
        type: SET_INITIALIZED_SUCCESS,
    } as const
}

export const InitializeApp = (): ThunkAction<void, RootReducerType, void, AppActionType | FormAction> => (dispatch) => {
    let promise = dispatch(checkedAuth())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitializedSuccess())
        })

}


export default appReducer