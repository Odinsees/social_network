import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Post} from '../Post/Post';
import "./MyPosts.module.css"
import s from "./MyPosts.module.css";
import {PostsType} from "../../../redux/state";


type PropsType = {
    PostsState: PostsType[]
    AddPost: () => void
    newPostText:string
    updateNewPostText:(newText:string)=>void
}


export const MyPosts: React.FC<PropsType> = ({PostsState, AddPost,newPostText,updateNewPostText}) => {

    const postsHandler = () => PostsState.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onClickHandler = () => {
        if (newPostElement.current) {
            AddPost()
        }
    }

    let onKeyPressHandler = (event:KeyboardEvent<HTMLTextAreaElement>) =>{
        if (event.key === "Enter" && "Shift"){
            AddPost()
        }
    }

    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        let text = e.target.value
        updateNewPostText(text)
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

