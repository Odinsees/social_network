import React from 'react';
import "./Profile.module.css"
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type PropsType = {
    profile:ProfileType
}

export const Profile = (props:PropsType) => {
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

