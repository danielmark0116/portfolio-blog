import React from 'react';
import { Link } from 'react-router-dom';

import { Post } from '../../../types/post';

import { cutText } from '../../../utils/cutText';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import TextBlock from '../../common/TextBlock/TextBlock';
import Likes from '../Likes/LikesContainer';

import './PostSummary.scss';

const PostSummary = (props: Post) => {
  const { title, content, id, author, createdAt, likes } = props;

  return (
    <article className="post-summary">
      <SmallTitle>{title}</SmallTitle>
      <Likes id={id} likes={likes} />
      <TextBlock role="secondary">{`By: ${author}`}</TextBlock>
      <TextBlock role="secondary">{`Added: ${new Date(
        createdAt
      ).toLocaleString()}`}</TextBlock>
      <HtmlBox>{cutText(content, 100)}</HtmlBox>
      <Link to={`/blog/posts/${id}`}>
        <Button variant="primary">Read more</Button>
      </Link>
      {/* <Link to={`/posts/edit/${id}`}>
        <Button variant="danger">Edit post</Button>
      </Link> */}
    </article>
  );
};

export default PostSummary;
