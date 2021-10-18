import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from "../../image/gunter.jpg"

class Users extends React.Component<any, any> {

    constructor(props:any) {
        super(props);

        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response: any) => {
                    this.props.setUsers(response.data.items)
                });
        }
    }

    render() {
        return (
            <div>
                {this.props.users.map((m: any) =>
                    <div className={s.UserBox} key={m.id}>
                        <div className={s.AvaAndButton}>
                            <div className={s.Avatar}>
                                <img src={m.photos.small !== null ? m.photos.small : userPhoto}
                                     alt="Ava"/>
                            </div>
                            <br/>
                            <div>
                                {m.followStatus
                                    ? <button onClick={() => this.props.unFollowToUser(m.id)}> Unfollow </button>
                                    : <button onClick={() => this.props.followToUser(m.id)}> Follow </button>}
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
}

export default Users