import React from 'react';
import "./MyPosts.module.css"
import {addPostActionCreator, UpdateNewPostActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";


type PropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<PropsType> = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: string) => {
        let action = UpdateNewPostActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={onPostChange}
            newPostText={state.profileReducer.newPostText}
            PostsState={state.profileReducer.posts}
        />
    )

}

