import React from 'react';
import "./Profile.module.css"
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/redux-store";


type PropsType = {
    store: StoreType
}


export const Profile: React.FC<PropsType> = (props) => {
    return (
        <div className={s.Profile}>
            <div className={s.ProfileInfo}>
                <ProfileInfo/>
            </div>
            <div className={s.MyPosts}>
                <MyPostsContainer
                    store={props.store}
                />
            </div>
        </div>
    )
}

