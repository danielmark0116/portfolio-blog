import React, { Component } from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import Author from '../../common/Author/Author';
import Spinner from '../../common/Spinner/Spinner';

import { stateToProps, dispatchToProps } from './PostContainer';

type Props = stateToProps & dispatchToProps;

interface IState {}

class Post extends Component<Props, IState> {
  componentDidMount() {
    const { fetchPost, postId } = this.props;

    fetchPost(postId);
  }

  render() {
    const { singlePost, pending, success, error } = this.props;

    if (pending) return <Spinner></Spinner>;

    if (!pending && !success && error) return <p>error</p>;

    if (!singlePost) return null;

    if (!pending && success && !error) {
      return (
        <div>
          <PageTitle>{singlePost.title}</PageTitle>
          <Author>{singlePost.author}</Author>
          <HtmlBox>{singlePost.content}</HtmlBox>
        </div>
      );
    }
  }
}

export default Post;
