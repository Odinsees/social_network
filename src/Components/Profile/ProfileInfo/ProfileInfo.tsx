import React from 'react';
import "./ProfileInfo.module.css";
import s from "./ProfileInfo.module.css";
import ProfileImage from "./ProfileImage.jpg";
import Avatar from "./Avatar.jpg"
export const ProfileInfo = () => {
    return (
        <div className={s.ProfileInfo}>
            <img
                className={s.ProfileInfoImage}
                src={ProfileImage}
                alt="ProfileImage"
            />
            <div className={s.descriptionBlock}>
                <div className={s.Description}>
                    <div className={s.UserName}>Lebedev Pavel</div>
                    <div className={s.UserBirthDay}>17.04.1997</div>
                    <div className={s.UserAddress}>Belarus/Minsk</div>
                </div>
                <img className={s.Avatar} src={Avatar} alt=""/>
            </div>
        </div>
    )
}
