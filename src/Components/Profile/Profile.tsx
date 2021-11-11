import React from 'react';
import "./Profile.module.css"
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePagePropsType} from "./ProfileContainer";


export const Profile = (props:ProfilePagePropsType) => {
    return (
        <div className={s.Profile}>
            <div className={s.ProfileInfo}>
                <ProfileInfo
                    profile={props.profile}
                    status={props.status}
                    updateStatusForProfileRender={props.updateStatusForProfileRender}
                />
            </div>
            <div className={s.MyPosts}>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

