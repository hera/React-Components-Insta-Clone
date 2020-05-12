// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        placeholder="Add comment... "
      />
    </form>
  );
};

export default CommentInput;
