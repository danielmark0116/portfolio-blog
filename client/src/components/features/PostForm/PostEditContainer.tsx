import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../redux/store';
import {
  selectorPostById,
  selectorPostsPending,
  selectorPostsPostSuccess,
  selectorPostsError,
  selectorPostsErrorMsg,
  postsFetchOneById,
  resetRequestData,
  selectorPostsGetOne,
  postsEditPostThunk
} from '../../../redux/postsRedux';

import PostForm from './PostForm';
import { ThunkDispatch } from 'redux-thunk';
import { Post } from '../../../types/post';
import { ActionTypes } from '../../../redux/actionTypes';

interface ownProps {
  id: string;
  title: string;
  content: string;
  author: string;
}

const mapStateToProps = (state: AppState, ownProps: ownProps) => ({
  pending: selectorPostsPending(state.postsReducer),
  success: selectorPostsPostSuccess(state.postsReducer),
  postId: ownProps.id,
  error: selectorPostsError(state.postsReducer),
  errorMsg: selectorPostsErrorMsg(state.postsReducer),
  title: ownProps.title,
  author: ownProps.author,
  content: ownProps.content,
  edit: true,
  buttonText: 'Edit post',
  successMsg: 'Post has been updated'
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  editPost: (id: string, post: Post) => dispatch(postsEditPostThunk(id, post)),
  resetRequestData: () => dispatch(resetRequestData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
