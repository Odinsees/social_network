import React from "react";
import s from './Users.module.css'
import userPhoto from "../../image/gunter.jpg"
import {NavLink} from 'react-router-dom';
import {usersAPI, UserType} from "../../api/api";

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    unFollowToUser: (userID: number) => void
    followToUser: (userID: number) => void
    users: UserType[]
    changeFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress:number[]
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

            {props.users.map((user: UserType) =>
                <div className={s.UserBox} key={user.id}>
                    <div className={s.AvaAndButton}>
                        <NavLink className={s.Avatar} to={"/profile/" + user.id}>
                            <img src={user.photos.small ? user.photos.small : userPhoto}
                                 alt="Ava"/>
                        </NavLink>
                        <br/>
                        <div>
                            {user.followed
                                ? <button
                                    disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        props.changeFollowingInProgress(true, user.id)
                                        usersAPI.unFollowUser(user.id)
                                            .then((data) => {
                                                if (data.resultCode === 0) {
                                                    props.unFollowToUser(user.id)
                                                    props.changeFollowingInProgress(false,user.id)
                                                }
                                            });
                                    }}> Unfollow </button>


                                : <button
                                    disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        props.changeFollowingInProgress(true,user.id)
                                        usersAPI.followUser(user.id)
                                            .then((data) => {
                                                if (data.resultCode === 0) {
                                                    props.followToUser(user.id)
                                                    props.changeFollowingInProgress(false,user.id)
                                                }
                                            });
                                    }}> Follow </button>}
                        </div>
                    </div>
                    <div className={s.UserInfo}>
                        <div className={s.UserInfoTop}>
                            <div className={s.FullName}>{user.name}</div>
                            <div className={s.LocationCountry}>{'user.location.country'}</div>
                        </div>
                        <div className={s.UserInfoBottom}>
                            <div className={s.Status}>{user.status}</div>
                            <div className={s.LocationCity}>{'user.location.city'}</div>
                        </div>
                    </div>
                    <br/>
                </div>)}
        </div>
    )
}