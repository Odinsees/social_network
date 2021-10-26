import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootReducerType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsForRedirect = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: RootReducerType): mapStateToPropsForRedirect => ({
    isAuth: state.authReducer.isAuth,
})

export function WithAuthRedirect<T>(Component: ComponentType<T>){
    function RedirectComponent(props: mapStateToPropsForRedirect) {

        let {isAuth, ...restProps} = props

        if (!isAuth) {
            return <Redirect to={'/login'}/>
        } else {
            return <Component {...restProps as T} />
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}