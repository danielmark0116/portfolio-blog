import React from 'react';

import { Post } from '../../../types/post';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';

import './PostSummary.scss';

const PostSummary = (props: Post) => (
  <article className="post-summary">
    <SmallTitle>{props.title}</SmallTitle>
    <p>{props.content}</p>
    <Button variant="primary">Read more</Button>
  </article>
);

export default PostSummary;
