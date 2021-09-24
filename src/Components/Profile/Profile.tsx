import React from 'react';
import "./Profile.module.css"
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";


type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<PropsType> = ({profilePage, dispatch}) => {
    return (
        <div className={s.Profile}>
            <div className={s.ProfileInfo}>
                <ProfileInfo/>
            </div>
            <div className={s.MyPosts}>
                <MyPosts
                    PostsState={profilePage.posts}
                    newPostText={profilePage.newPostText}
                    dispatch={dispatch}
                />
            </div>
        </div>
    )
}

