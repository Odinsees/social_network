import React from 'react';
import s from './Header.module.css'
import imageSrc from "../../image/pngwing.com.png"
import {NavLink} from 'react-router-dom';
import {AuthPropsType} from "./HeaderContainer";
import {Preloader} from "../common/Preloader/Preloader";
import defaultLogo from '../../image/gunter.jpg'


export const Header = (props: AuthPropsType) => {
    return (
        props.isFetching
            ? <Preloader/>
            : <div className={s.Header}>
                <div className={s.logoBlock}>
                    <img src={imageSrc} alt="logo"/>
                    <span className={s.Title}>SocialNetwork</span>
                </div>
                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div>
                            <span>{props.userName}</span>
                            <img style={{width: '40px', borderRadius:"50%"}}
                                 src={props.userPhoto ? props.userPhoto : defaultLogo}
                                 alt=""/>
                        </div>
                        : <div>
                            <NavLink to={'/login'}>LOGIN</NavLink>
                        </div>

                    }
                </div>
            </div>
    )
}

