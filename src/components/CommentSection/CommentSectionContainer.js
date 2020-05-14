// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  let [comments, addComment] = useState([]);

  function submitComment (event) {
    event.preventDefault();
    let commentField = event.target.querySelector('input');
    addComment([...comments, commentField.value]);
    commentField.value = '';
  }

  return (
    <div>
      { comments.map((comment) => <Comment comment={comment} />) }
      <CommentInput submitComment={submitComment}/>
    </div>
  );
};

export default CommentSection;
