import React from 'react';
import "./MyPosts.module.css"
import {addPost, PostsType, updateNewPostText} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {RootReducerType} from "../../../redux/redux-store";
import {connect} from "react-redux";


type MapStateToPropsType = {
    PostsState: PostsType[]
    newPostText:string
}

type MapDispatchToPropsType = {
    addPost:()=>void
    updateNewPostText:(newPostText:string)=>void
}

export type MyPostPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:RootReducerType):MapStateToPropsType =>{
    return {
        PostsState: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}

export const MyPostsContainer = connect(
    mapStateToProps,
    {
        addPost,
        updateNewPostText,
    }
    )(MyPosts)

