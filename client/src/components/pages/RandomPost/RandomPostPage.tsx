import React from 'react';

import PostContainer from '../../features/Post/PostContainer';

import PostsContainer from '../../features/Posts/PostsContainer';

const RandomPostPage = (props: any) => {
  return (
    <div>
      <PostsContainer pagination={false} random={true} />
    </div>
  );
};

export default RandomPostPage;
