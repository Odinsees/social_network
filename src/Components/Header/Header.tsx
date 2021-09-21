import React from 'react';
import s from './Header.module.css'
import imageSrc from "../../image/pngwing.com.png"

export const Header = () => {
    return (
            <div className={s.Header}>
                    <img src={imageSrc} alt="logo"/>
                    <div className={s.Title}>IT solution</div>
            </div>
    )
}

