import React from 'react';
import "./ProfileInfo.module.css";
import s from "./ProfileInfo.module.css";
import ProfileImage from "../../../image/ProfileImage.jpg";
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import defaultPhoto from '../../../image/gunter.jpg'

type PropsType = {
    profile:ProfileType | null
}

export const ProfileInfo = (props:PropsType) => {

    if(!props.profile){
        return <Preloader/>
    }else{
        return (
            <div className={s.ProfileInfo}>
                <img
                    className={s.ProfileInfoImage}
                    src={ProfileImage}
                    alt="ProfileImage"
                />
                <div className={s.descriptionBlock}>
                    <div className={s.Description}>
                        <div className={s.UserName}>{props.profile.fullName}</div>
                        <div className={s.UserStatus}>{props.profile.aboutMe}</div>
                        <div className={s.LookingForAJob}>
                            Looking job: {props.profile.lookingForAJob
                            ? <span style={{backgroundColor:"green"}}>Yes</span>
                            : <span style={{backgroundColor:"red"}}>No</span>}
                        </div>
                    </div>
                    <img className={s.Avatar} src={props.profile.photos.small ? props.profile.photos.small:defaultPhoto} alt=""/>
                </div>
            </div>
        )
    }

}
