import React from 'react';
import { Post } from '../../../types/post';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

interface IProps {
  postsGetAll: Function;
  posts: Post[];
  pending: Boolean;
  error: Boolean;
  success: Boolean;
  errorMsg: string;
}

interface IState {}

class Posts extends React.Component<IProps, IState> {
  componentDidMount() {
    const { postsGetAll } = this.props;
    postsGetAll();
  }

  render() {
    const { posts, pending, error, success, errorMsg } = this.props;

    if (!pending && !success && error)
      return <Alert variant={'error'}>{errorMsg}</Alert>;

    if (!pending && success && !error && posts.length === 0)
      return <Alert variant={'info'}>No posts...</Alert>;

    if (pending || (!success && posts.length === 0)) return <Spinner></Spinner>;

    if (!pending && success && !error && posts.length > 0)
      return (
        <div>
          {pending && <Spinner />}
          <PostsList posts={posts} />
        </div>
      );
  }
}

export default Posts;
