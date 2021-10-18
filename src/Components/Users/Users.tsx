import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from "../../image/gunter.jpg"

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((response: any) => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                });
    }

    onPageChanged = (pageNumber:number) =>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)

        let pages = [];

        for (let i = 1; i <= pagesCount;i++){
            pages.push(i)
        }

        return (
            <div>
                {pages.map(p=>{
                    return <span
                        className={this.props.currentPage === p ? s.selectedPage:''}
                        onClick={(e)=> this.onPageChanged(p)}
                    >{p}</span>

                })}

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