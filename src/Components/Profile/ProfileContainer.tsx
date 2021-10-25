import React from 'react';
import "./Profile.module.css"
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import axios from "axios";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamType = {
    userId?: string | undefined
}

type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (data: ProfileType) => void
}
type ProfilePagePropsType = RouteComponentProps<PathParamType> & MapStateToPropsType & MapDispatchToPropsType //!!!!!

class ProfileContainer extends React.Component<ProfilePagePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId =  '2'
        }
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response) => {
                this.props.setUserProfile(response.data)
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