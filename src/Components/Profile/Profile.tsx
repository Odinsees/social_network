import React from 'react';
import "./Profile.module.css"
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type PropsType = {
    profilePage: ProfilePageType
    AddPost:()=>void
    updateNewPostText:(newText:string)=>void
}

export const Profile: React.FC<PropsType> = ({profilePage,AddPost,updateNewPostText}) => {
    return (
        <div className={s.Profile}>
            <div className={s.ProfileInfo}>
                <ProfileInfo/>
            </div>
            <div className={s.MyPosts}>
                <MyPosts
                    PostsState={profilePage.posts}
                    AddPost={AddPost}
                    newPostText={profilePage.newPostText}
                    updateNewPostText={updateNewPostText}
                />
            </div>
        </div>
    )
}

