import React from 'react';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

import { stateToProps, dispatchToProps } from './PostsContainer';

interface IProps {}

interface IState {}

type Props = stateToProps & dispatchToProps & IProps;

class Posts extends React.Component<Props, IState> {
  componentDidMount() {
    const { postsGetAll, resetRequestData } = this.props;
    resetRequestData();
    postsGetAll();
  }

  render() {
    const { posts, pending, error, success, errorMsg } = this.props;

    if (!pending && !success && error)
      return <Alert variant={'error'}>{errorMsg}</Alert>;

    if (!pending && success && !error && posts.length === 0)
      return <Alert variant={'info'}>No posts...</Alert>;

    if (pending || (!success && posts.length === 0)) return <Spinner></Spinner>;

    if (!success) return <Spinner></Spinner>;

    if (!pending && success && !error && posts.length > 0)
      return (
        <div>
          <PostsList posts={posts} />
        </div>
      );
  }
}

export default Posts;
