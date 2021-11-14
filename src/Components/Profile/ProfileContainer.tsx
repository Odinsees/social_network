import React from 'react';
import "./Profile.module.css"
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {
    getUserForProfileRender,
    getUserStatusForProfileRender,
    ProfileType,
    updateStatusForProfileRender
} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamType = {
    userId: string
}

type MapStateToPropsType = {
    profile: null | ProfileType
    status: string
    isAuthorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserForProfileRender: (userID: number) => void
    getUserStatusForProfileRender: (userID: number) => void
    updateStatusForProfileRender: (newStatusText: string) => void
}
export type ProfilePagePropsType = RouteComponentProps<PathParamType> & MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfilePagePropsType> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            if (this.props.isAuthorizedUserId)
                userId = this.props.isAuthorizedUserId.toString()
            if (!(userId)) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserForProfileRender(+userId)
        this.props.getUserStatusForProfileRender(+userId)
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    isAuthorizedUserId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth,
})


export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {getUserForProfileRender, getUserStatusForProfileRender, updateStatusForProfileRender}),
    withRouter,
)(ProfileContainer)