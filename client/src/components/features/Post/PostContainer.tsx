import { connect } from 'react-redux';
import { AppState } from '../../../redux/store';
import {
  selectorPostsGetOne,
  postsFetchOneById,
  selectorPostsPending,
  selectorPostsError,
  selectorPostsSuccess,
  selectorPostsErrorMsg
} from '../../../redux/postsRedux';

import PostPage from './Post';

import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../redux/actionTypes';
import { Post } from '../../../types/post';

export interface stateToProps {
  singlePost: Post;
  postId: string;
  pending: Boolean;
  error: Boolean;
  success: Boolean;
  errorMsg: string;
}

export interface dispatchToProps {
  fetchPost: Function;
}

const mapStateToProps = (state: AppState, ownProps: { id: string }) => ({
  singlePost: selectorPostsGetOne(state.postsReducer),
  postId: ownProps.id,
  pending: selectorPostsPending(state.postsReducer),
  error: selectorPostsError(state.postsReducer),
  success: selectorPostsSuccess(state.postsReducer),
  errorMsg: selectorPostsErrorMsg(state.postsReducer)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  fetchPost: (id: string) => dispatch(postsFetchOneById(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage);
