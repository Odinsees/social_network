import React from 'react';
import "./Profile.module.css"
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";
import {ProfilePagePropsType} from "./ProfileContainer";


export const Profile = (props:ProfilePagePropsType) => {
    return (
        <div className={s.Profile}>
            <div className={s.ProfileInfo}>
                <ProfileInfo profile={props.profile}/>
            </div>
            <div className={s.MyPosts}>
                <MyPostsContainer
                />
            </div>
        </div>
    )
}

