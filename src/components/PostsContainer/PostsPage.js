//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = (props) => {
    let postsArr = props.postsArr;


    if (postsArr.length) {
        return (
            <div className="posts-container-wrapper">
                { postsArr.map((post) => <Post post={post}/>) }
            </div>
        );
    } else {
        return (
            <div className="posts-container-wrapper"><h3>Nothing found.</h3></div>
        );
    }
};

export default PostsPage;
