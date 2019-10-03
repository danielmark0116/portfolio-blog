import { connect } from 'react-redux';
import { AppState } from '../../../redux/store';

import PostForm from './PostForm';
import {
  selectorPostsPending,
  selectorPostsError,
  selectorPostsErrorMsg,
  postsAddPostThunk,
  resetRequestData,
  selectorPostsPostSuccess
} from '../../../redux/postsRedux';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../redux/actionTypes';
import { Post } from '../../../types/post';

const mapStateToProps = (state: AppState) => ({
  pending: selectorPostsPending(state.postsReducer),
  success: selectorPostsPostSuccess(state.postsReducer),
  error: selectorPostsError(state.postsReducer),
  errorMsg: selectorPostsErrorMsg(state.postsReducer),
  edit: false,
  buttonText: 'Add post',
  successMsg: 'Post has been added'
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  addPost: (post: Post) => dispatch(postsAddPostThunk(post)),
  resetRequestData: () => dispatch(resetRequestData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
