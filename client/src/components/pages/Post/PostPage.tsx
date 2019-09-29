import React from 'react';

import PostContainer from '../../features/Post/PostContainer';

const PostPage = (props: any) => {
  return (
    <div>
      <PostContainer id={props.match.params.id} />
    </div>
  );
};

export default PostPage;
