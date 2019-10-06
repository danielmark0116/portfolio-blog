import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostEditContainer from '../../features/PostForm/PostEditContainer';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../redux/actionTypes';
import { Post } from '../../../types/post';
import {
  postsFetchOneById,
  selectorPostsGetOne,
  selectorPostsError,
  selectorPostsSuccess,
  resetRequestData,
  selectorPostsPending
} from '../../../redux/postsRedux';
import { AppState } from '../../../redux/store';

import Spinner from '../../common/Spinner/Spinner';

interface IProps {
  getPost: Function;
  match: any;
  post: Post;
  pending: Boolean;
  success: Boolean;
  error: Boolean;
  resetRequestData: Function;
}

class PostEditPage extends Component<IProps, {}> {
  componentDidMount() {
    this.props.resetRequestData();
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, success, error, pending } = this.props;

    if (pending) return <Spinner />;
    if (!pending || !error || success)
      return (
        <div>
          <h1>Edit post</h1>
          <PostEditContainer
            id={this.props.match.params.id}
            title={post.title ? post.title : ''}
            content={post.content ? post.content : ''}
            author={post.author ? post.author : ''}
          ></PostEditContainer>
        </div>
      );
  }
}

const mapStateToProps = (state: AppState) => ({
  post: selectorPostsGetOne(state.postsReducer),
  success: selectorPostsSuccess(state.postsReducer),
  error: selectorPostsError(state.postsReducer),
  pending: selectorPostsPending(state.postsReducer)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  getPost: (id: string) => dispatch(postsFetchOneById(id)),
  resetRequestData: () => dispatch(resetRequestData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEditPage);
