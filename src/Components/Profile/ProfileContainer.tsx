import React from 'react';
import "./Profile.module.css"
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {getUserForProfileRender, ProfileType} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type PathParamType = {
    userId: string
}

type MapStateToPropsType = {
    profile: null | ProfileType
}

type MapDispatchToPropsType = {
    getUserForProfileRender: (userID: number) => void
}
export type ProfilePagePropsType = RouteComponentProps<PathParamType> & MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfilePagePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '3'
        }
        this.props.getUserForProfileRender(+userId)
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    profile: state.profileReducer.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default WithAuthRedirect(connect(mapStateToProps, {getUserForProfileRender})(WithUrlDataContainerComponent))