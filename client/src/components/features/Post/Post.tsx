import React, { Component } from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import TextBlock from '../../common/TextBlock/TextBlock';
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
          <TextBlock role="secondary">{`By: ${singlePost.author}`}</TextBlock>
          <TextBlock role="secondary">{`Added: ${new Date(
            singlePost.createdAt
          ).valueOf()}`}</TextBlock>
          <HtmlBox>{singlePost.content}</HtmlBox>
        </div>
      );
    }
  }
}

export default Post;
