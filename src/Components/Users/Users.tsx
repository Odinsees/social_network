import React from "react";
import s from './Users.module.css'
import userPhoto from "../../image/gunter.jpg"
import {UserType} from "../../redux/usersReducer";
import {NavLink} from 'react-router-dom';

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    unFollowToUser: (userID: number) => void
    followToUser: (userID: number) => void
    users: UserType[]
}

export const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div style={{width: "100vh"}}>
            {pages.map(p => {
                return <span
                    key={p}
                    className={props.currentPage === p ? s.selectedPage : ''}
                    onClick={() => props.onPageChanged(p)}
                >{p}</span>
            })}

            {props.users.map((m: UserType) =>
                <div className={s.UserBox} key={m.id}>
                    <div className={s.AvaAndButton}>
                        <NavLink className={s.Avatar} to={"/profile/" + m.id} >
                            <img src={m.photos.small !== null ? m.photos.small : userPhoto}
                                 alt="Ava"/>
                        </NavLink>
                        <br/>
                        <div>
                            {m.followed
                                ? <button onClick={() => props.unFollowToUser(m.id)}> Unfollow </button>
                                : <button onClick={() => props.followToUser(m.id)}> Follow </button>}
                        </div>
                    </div>
                    <div className={s.UserInfo}>
                        <div className={s.UserInfoTop}>
                            <div className={s.FullName}>{m.name}</div>
                            <div className={s.LocationCountry}>{'m.location.country'}</div>
                        </div>
                        <div className={s.UserInfoBottom}>
                            <div className={s.Status}>{m.status}</div>
                            <div className={s.LocationCity}>{'m.location.city'}</div>
                        </div>
                    </div>
                    <br/>
                </div>)}
        </div>
    )
}