import React from 'react';

import PostsContainer from '../../features/Posts/PostsContainer';

const RandomPostPage = (props: any) => {
  return (
    <div>
      <PostsContainer pagination={false} random={true} />
    </div>
  );
};

export default RandomPostPage;
