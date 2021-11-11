import React from 'react';
import {Post} from './Post/Post';
import "./MyPosts.module.css"
import s from "./MyPosts.module.css";
import {MyPostPropsType} from "./MyPostsContainer";
import {AddNewPostReduxForm, FormDataTypeForNewPostText} from "./AddNewPostForm";



export const MyPosts: React.FC<MyPostPropsType> = ({PostsState, ...props}) => {

    const postsHandler = () => PostsState.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addNewPost = (data:FormDataTypeForNewPostText) =>{
        props.addPost(data.newPostText)
    }

    return (
        <div className={s.postBlock}>
            <div className={s.PostsTitle}>
                <h2>My posts</h2>
            </div>
            <div className={s.NewPost}>
                <AddNewPostReduxForm
                    onSubmit={addNewPost}
                />
            </div>
            <div className={s.Posts}>
                {postsHandler()}
            </div>
        </div>
    )
}

