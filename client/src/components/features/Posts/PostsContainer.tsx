import { connect } from 'react-redux';

import Posts from './Posts';
import { AppState } from '../../../redux/store';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../redux/actionTypes';
import {
  postsFetchAll,
  selectorPostsAll,
  selectorPostsPending,
  selectorPostsError,
  selectorPostsSuccess,
  selectorPostsErrorMsg
} from '../../../redux/postsRedux';

const mapStateToProps = (state: AppState) => ({
  posts: selectorPostsAll(state.postsReducer),
  pending: selectorPostsPending(state.postsReducer),
  error: selectorPostsError(state.postsReducer),
  success: selectorPostsSuccess(state.postsReducer),
  errorMsg: selectorPostsErrorMsg(state.postsReducer)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  postsGetAll: () => dispatch(postsFetchAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
