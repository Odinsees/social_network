import React from 'react';
import "./Profile.module.css"
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

type PathParamType = {
    userId?: string | undefined
}

type MapStateToPropsType = {
    profile: null | ProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (data: ProfileType) => void
}
export type ProfilePagePropsType = RouteComponentProps<PathParamType> & MapStateToPropsType & MapDispatchToPropsType //!!!!!

class ProfileContainer extends React.Component<ProfilePagePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId =  '2'
        }
        usersAPI.getUserForProfileRender(+userId)
            .then((data) => {
                this.props.setUserProfile(data)
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    profile: state.profileReducer.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)