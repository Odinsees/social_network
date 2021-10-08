import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from './Post/Post';
import "./MyPosts.module.css"
import s from "./MyPosts.module.css";
import {MyPostPropsType} from "./MyPostsContainer";



export const MyPosts: React.FC<MyPostPropsType> = ({PostsState, newPostText, ...props}) => {

    const postsHandler = () => PostsState.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let onClickHandler = () => {
        props.addPost()
    }

    let onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            props.addPost()
        }
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postBlock}>
            <div className={s.PostsTitle}>
                <h2>My posts</h2>
            </div>
            <div className={s.NewPost}>
                    <textarea
                        className={s.TextArea}
                        //ref={newPostElement}
                        onKeyPress={onKeyPressHandler}
                        onChange={onPostChange}
                        value={newPostText}
                    />
                <button className={s.AddPostButton} onClick={onClickHandler}> send</button>
            </div>
            <div className={s.Posts}>
                {postsHandler()}
            </div>
        </div>
    )
}

