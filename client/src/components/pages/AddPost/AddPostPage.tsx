import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PostForm from '../../features/PostForm/PostFormContainer';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../redux/actionTypes';
import { resetRequestData } from '../../../redux/postsRedux';

const AddPostPage = (props: dispatchToProps) => {
  useEffect(() => {
    props.resetRequestData();
  }, []);

  return (
    <div>
      <h1>Add post</h1>
      <PostForm></PostForm>
    </div>
  );
};

interface dispatchToProps {
  resetRequestData: Function;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  resetRequestData: () => dispatch(resetRequestData())
});

export default connect(
  null,
  mapDispatchToProps
)(AddPostPage);
