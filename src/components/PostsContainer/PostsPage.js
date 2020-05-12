//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = (props) => {
  let postsArr = props.postsArr;


  return (
    <div className="posts-container-wrapper">
      { postsArr.map((p) => <Post post={p}/>) }
    </div>
  );
};

export default PostsPage;
