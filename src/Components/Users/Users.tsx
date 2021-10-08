import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'

export const Users: React.FC<UsersPropsType> = (props) => {

    if (props.users.users.length === 0){
        props.setUsers([
            {
                id: 1,
                photoUrl: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
                fullName: 'Pavel',
                location: {country: "Belarus", city: "Minsk"},
                status: "Hey men! I love codding",
                followStatus: true
            },
            {
                id: 2,
                photoUrl: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
                fullName: 'Sergey',
                location: {country: "Belarus", city: "Minsk"},
                status: "Hey men! I love bansai!",
                followStatus: false
            },
            {
                id: 3,
                photoUrl: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
                fullName: 'Dmitri',
                location: {country: "Belarus", city: "Minsk"},
                status: "Hey men! I love stay at home!",
                followStatus: true
            },
            {
                id: 4,
                photoUrl: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
                fullName: 'Irina',
                location: {country: "Belarus", city: "Minsk"},
                status: "Hey men! I love anime",
                followStatus: false
            },
        ])
    }

    return (
        <div>
            {props.users.users.map(m =>
                <div className={s.UserBox} key={m.id}>
                    <div className={s.AvaAndButton}>
                        <div className={s.Avatar}>
                            <img src={m.photoUrl}
                                 alt="Ava"/>
                        </div>
                        <br/>
                        <div>
                            {m.followStatus
                                ? <button onClick={() => props.unFollowToUser(m.id)}> Unfollow </button>
                                : <button onClick={() => props.followToUser(m.id)}> Follow </button>}
                        </div>
                    </div>
                    <div className={s.UserInfo}>
                        <div className={s.UserInfoTop}>
                            <div className={s.FullName}>{m.fullName}</div>
                            <div className={s.LocationCountry}>{m.location.country}</div>
                        </div>
                        <div className={s.UserInfoBottom}>
                            <div className={s.Status}>{m.status}</div>
                            <div className={s.LocationCity}>{m.location.city}</div>
                        </div>
                    </div>
                    <br/>
                </div>)}
        </div>
    )
}