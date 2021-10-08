import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.itemProfile}>
                <NavLink to="/profile" activeClassName={s.active}> Profile</NavLink>
            </div>
            <div className={s.itemDialogs}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.itemNews}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.itemMusic}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.itemSettings}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.itemSettings}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

