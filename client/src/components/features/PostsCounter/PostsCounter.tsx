import React from 'react';

interface IProps {
  postsCount: string;
}

class PostsCounter extends React.Component<IProps, {}> {
  render() {
    const { postsCount } = this.props;

    return <div>Posts amount: {postsCount}</div>;
  }
}

export default PostsCounter;
