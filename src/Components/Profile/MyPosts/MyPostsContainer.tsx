import React from 'react';
import "./MyPosts.module.css"
import {addPost, PostsType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {RootReducerType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = {
    PostsState: PostsType[]
}

type MapDispatchToPropsType = {
    addPost:(newPostText:string)=>void
}

export type MyPostPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:RootReducerType):MapStateToPropsType =>{
    return {
        PostsState: state.profileReducer.posts,
    }
}

export const MyPostsContainer = compose<React.ComponentType>(
    withRouter,
    connect(
        mapStateToProps,
        {
            addPost,
        }
    )
)(MyPosts)
