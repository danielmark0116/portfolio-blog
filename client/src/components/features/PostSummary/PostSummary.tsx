import React from 'react';
import { Link } from 'react-router-dom';

import { Post } from '../../../types/post';

import { cutText } from '../../../utils/cutText';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import TextBlock from '../../common/TextBlock/TextBlock';

import './PostSummary.scss';

const PostSummary = (props: Post) => {
  const { title, content, id, author, createdAt } = props;

  return (
    <article className="post-summary">
      <SmallTitle>{title}</SmallTitle>
      <TextBlock role="secondary">{`By: ${author}`}</TextBlock>
      <TextBlock role="secondary">{`Added: ${new Date(
        createdAt
      ).toDateString()}`}</TextBlock>
      <HtmlBox>{cutText(content, 100)}</HtmlBox>
      <Link to={`/posts/${id}`}>
        <Button variant="primary">Read more</Button>
      </Link>
      <Link to={`/posts/edit/${id}`}>
        <Button variant="danger">Edit post</Button>
      </Link>
    </article>
  );
};

export default PostSummary;
