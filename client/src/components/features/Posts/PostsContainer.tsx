import { connect } from 'react-redux';

import Posts from './Posts';
import { AppState } from '../../../redux/store';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../redux/actionTypes';
import {
  postsFetchAll,
  selectorPostsPending,
  selectorPostsError,
  selectorPostsSuccess,
  selectorPostsErrorMsg,
  selectorPostsAllFromLatest,
  resetRequestData
} from '../../../redux/postsRedux';

import { Post } from '../../../types/post';

export interface stateToProps {
  posts: Post[];
  pending: Boolean;
  error: Boolean;
  success: Boolean;
  errorMsg: string;
}

export interface dispatchToProps {
  postsGetAll: Function;
  resetRequestData: Function;
}

const mapStateToProps = (state: AppState) => ({
  posts: selectorPostsAllFromLatest(state.postsReducer),
  pending: selectorPostsPending(state.postsReducer),
  error: selectorPostsError(state.postsReducer),
  success: selectorPostsSuccess(state.postsReducer),
  errorMsg: selectorPostsErrorMsg(state.postsReducer)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  postsGetAll: () => dispatch(postsFetchAll()),
  resetRequestData: () => dispatch(resetRequestData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
