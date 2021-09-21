import React from 'react';
import "./Post.module.css"
import s from "./Post.module.css";
import Avatar from "../ProfileInfo/Avatar.jpg"
import Like from "../../../image/Icon/likes.svg"

type PostType = {
    message: string
    likesCount: number
}

export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img
                className={s.Avatar}
                src={Avatar}
                alt="ava"/>
            <div className={s.Message}>
                <div className={s.MessageText}>
                    {props.message}
                </div>
            </div>
            <div className={s.LikesCount}>
                <div>
                    like {props.likesCount}
                </div>
                <img
                    className={s.LikeImg}
                    src={Like} alt=""/>
            </div>
        </div>
    )
}

/*export default Post;*/

