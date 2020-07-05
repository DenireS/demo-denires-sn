import React from 'react';
import s from './Post.module.css';

function Post(props) {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"></img>
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
}

export default Post;
