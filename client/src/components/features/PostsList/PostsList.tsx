import React from 'react';

import PostSummary from '../PostSummary/PostSummary';
import { Post } from '../../../types/post';

interface IProps {
  posts: Post[];
}

const PostsList = (props: IProps) => (
  <div>
    <section className="posts-list">
      {props.posts.map(post => (
        <PostSummary key={post.id} {...post} />
      ))}
    </section>
  </div>
);

export default PostsList;
