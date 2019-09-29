import React from 'react';
import { Post } from '../../../types/post';

import PostsList from '../PostsList/PostsList';

interface IProps {
  postsGetAll: Function;
  posts: Post[];
}

interface IState {}

class Posts extends React.Component<IProps, IState> {
  componentDidMount() {
    const { postsGetAll } = this.props;
    postsGetAll();
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        <PostsList posts={posts} />
      </div>
    );
  }
}

export default Posts;
