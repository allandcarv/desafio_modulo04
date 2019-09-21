import React from "react";

import Comment from "./Comment";

function Post({ post }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="header__avatar">
          <img src={post.author.avatar} alt="profile" />
        </div>
        <div className="header__info">
          <span className="post__author">{post.author.name}</span>
          <small className="post__date">{post.date}</small>
        </div>
      </div>
      <div className="post__body">
        <span>{post.content}</span>
        <div className="comments">
          {post.comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
