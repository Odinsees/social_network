import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from '../Post/Post';
import "./MyPosts.module.css"
import s from "./MyPosts.module.css";
import {ActionsTypes, addPostActionCreator, PostsType, UpdateNewPostActionCreator} from "../../../redux/state";


type PropsType = {
    PostsState: PostsType[]
    newPostText:string
    dispatch:(action: ActionsTypes)=>void
}


export const MyPosts: React.FC<PropsType> = ({PostsState,newPostText, dispatch}) => {

    const postsHandler = () => PostsState.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onClickHandler = () => {
        if (newPostElement.current) {
            //AddPost()
            dispatch(addPostActionCreator())
        }
    }

    let onKeyPressHandler = (event:KeyboardEvent<HTMLTextAreaElement>) =>{
        if (event.key === "Enter"){
            //AddPost()
            dispatch(addPostActionCreator())
        }
    }

    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        let text = e.target.value
        let action = UpdateNewPostActionCreator(text)
        dispatch(action)
    }

    return (
        <div className={s.postBlock}>
            <div className={s.PostsTitle}>
                <h2>My posts</h2>
            </div>
            <div className={s.NewPost}>
                    <textarea className={s.TextArea}
                              ref={newPostElement}
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

