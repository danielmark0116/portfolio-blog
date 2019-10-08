import React, { useState } from 'react';

import { IProps, dispatchToProps } from './LikesContainer';

import style from './likes.module.scss';

type Props = IProps & dispatchToProps;

const Likes = (props: Props) => {
  const [likes, handleLike] = useState(props.likes);

  const likeUpdate = (value: number) => {
    handleLike(likes + value);
    props.likePost(props.id, value);
  };

  return (
    <div className={style.like_box}>
      {likes} likes
      <br />
      <button
        className={style.like_btn}
        onClick={() => {
          likeUpdate(1);
        }}
      >
        Like
      </button>
      <button
        className={style.like_btn_dislike}
        onClick={() => {
          likeUpdate(-1);
        }}
      >
        Dislike
      </button>
    </div>
  );
};

export default Likes;
