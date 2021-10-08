import React from 'react';
import "./MyPosts.module.css"
import {addPostActionCreator, PostsType, UpdateNewPostActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {RootReducerType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


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
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType =>{
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        updateNewPostText: (newPostText:string) => {dispatch(UpdateNewPostActionCreator(newPostText))}
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

