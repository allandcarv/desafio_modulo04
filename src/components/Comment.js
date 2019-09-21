import React from "react";

function Comments({ comment }) {
  return (
    <div className="comment">
      <div className="comment__avatar">
        <img src={comment.author.avatar} />
      </div>
      <div className="comment__body">
        <span className="comment__author">{comment.author.name}</span>
        <span className="comment__text">{comment.content}</span>
      </div>
    </div>
  );
}

export default Comments;
