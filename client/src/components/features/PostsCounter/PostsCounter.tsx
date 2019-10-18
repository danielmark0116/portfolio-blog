import React from 'react';

interface IProps {
  postsCount: string;
}

class PostsCounter extends React.Component<IProps, {}> {
  render() {
    const { postsCount } = this.props;

    return (
      <div>
        {`Skyrocketing number of: ${postsCount} ${
          parseInt(postsCount) === 1 ? 'post!' : 'posts!'
        }`}
      </div>
    );
  }
}

export default PostsCounter;
