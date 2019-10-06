import { connect } from 'react-redux';

import Posts from './Posts';
import { AppState } from '../../../redux/store';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../redux/actionTypes';
import {
  selectorPostsPending,
  selectorPostsError,
  selectorPostsSuccess,
  selectorPostsErrorMsg,
  resetRequestData,
  postsFetchPage,
  selectorPostsAll,
  selectorPageCount,
  selectorActivePage,
  selectorPostsGetOne,
  postsFetchRandom
} from '../../../redux/postsRedux';

import { Post } from '../../../types/post';

interface ownProps {
  initPage?: number;
  postsPerPage?: number | null;
  pagination?: Boolean;
  random?: Boolean;
}

export interface stateToProps {
  posts: Post[];
  singlePost: Post;
  pending: Boolean;
  error: Boolean;
  success: Boolean;
  errorMsg: string;
  noOfPages: number;
  activePage: number;
  initPage?: number;
  postsPerPage?: number | null;
  pagination?: Boolean;
  random?: Boolean;
}

export interface dispatchToProps {
  postsGetPage: Function;
  postsGetRandom: Function;
  resetRequestData: Function;
}

const mapStateToProps = (state: AppState, ownProps: ownProps) => ({
  posts: selectorPostsAll(state.postsReducer),
  singlePost: selectorPostsGetOne(state.postsReducer),
  pending: selectorPostsPending(state.postsReducer),
  error: selectorPostsError(state.postsReducer),
  success: selectorPostsSuccess(state.postsReducer),
  errorMsg: selectorPostsErrorMsg(state.postsReducer),
  noOfPages: selectorPageCount(state.postsReducer),
  activePage: selectorActivePage(state.postsReducer),
  initPage: ownProps.initPage,
  postsPerPage: ownProps.postsPerPage,
  pagination: ownProps.pagination,
  random: ownProps.random
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  postsGetPage: (page: number, postsPerPage: number) =>
    dispatch(postsFetchPage(page, postsPerPage)),
  resetRequestData: () => dispatch(resetRequestData()),
  postsGetRandom: () => dispatch(postsFetchRandom())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
