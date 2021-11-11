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
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {UserStatusResponseType} from "../../api/api";

type PathParamType = {
    userId: string
}

type MapStateToPropsType = {
    profile: null | ProfileType
    status: string
}

type MapDispatchToPropsType = {
    getUserForProfileRender: (userID: number) => void
    getUserStatusForProfileRender: (userID: number) => void
    updateStatusForProfileRender: (newStatusText: string) => void
}
export type ProfilePagePropsType = RouteComponentProps<PathParamType> & MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfilePagePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '20153'
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
})


// const WithAuthRedirect(connect(mapStateToProps, {getUserForProfileRender})(WithUrlDataContainerComponent))
// export default WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {getUserForProfileRender, getUserStatusForProfileRender,updateStatusForProfileRender}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)