import React from 'react';
import { Post } from '../../../types/post';

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
        {posts.map(x => (
          <p key={x.id}>{x.title}</p>
        ))}
      </div>
    );
  }
}

export default Posts;
