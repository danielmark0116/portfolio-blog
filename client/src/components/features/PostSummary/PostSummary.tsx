import React from 'react';
import { Link } from 'react-router-dom';

import { Post } from '../../../types/post';

import { cutText } from '../../../utils/cutText';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

import './PostSummary.scss';

const PostSummary = (props: Post) => {
  const { title, content, id } = props;

  return (
    <article className="post-summary">
      <SmallTitle>{title}</SmallTitle>
      <HtmlBox>{cutText(content, 100)}</HtmlBox>
      <Link to={`/posts/${id}`}>
        <Button variant="primary">Read more</Button>
      </Link>
    </article>
  );
};

export default PostSummary;
