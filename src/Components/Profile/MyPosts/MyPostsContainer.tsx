import React from 'react';
import "./MyPosts.module.css"
import {addPost, getUserForProfileRender, PostsType, updateNewPostText} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {RootReducerType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";


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

export const MyPostsContainer = withRouter(WithAuthRedirect(connect(
    mapStateToProps,
    {
        addPost,
        updateNewPostText,
    }
    )(MyPosts)))

