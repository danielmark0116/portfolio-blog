import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';

import PageTitle from '../../common/PageTitle/PageTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import TextBlock from '../../common/TextBlock/TextBlock';
import Spinner from '../../common/Spinner/Spinner';
import Likes from '../Likes/LikesContainer';

import { stateToProps, dispatchToProps } from './PostContainer';
import { RouteComponentProps } from 'react-router';

import style from './share_btn.module.scss';
import * as config from '../../../config';

type Props = RouteComponentProps & stateToProps & dispatchToProps;

interface IState {}

class Post extends Component<Props, IState> {
  componentDidMount() {
    const { fetchPost, postId } = this.props;

    fetchPost(postId);
  }

  render() {
    const { singlePost, pending, success, error, location } = this.props;

    if (pending) return <Spinner></Spinner>;

    if (singlePost.title === '' || singlePost.content === '')
      return <Spinner></Spinner>;

    if (!pending && !success && error) return <p>error</p>;

    if (!singlePost) return <p> </p>;

    if (!pending && success && !error) {
      return (
        <div>
          <PageTitle>{singlePost.title}</PageTitle>
          <FacebookProvider appId={config.FACEBOOK_APP_ID}>
            <ShareButton
              className={style.share_btn}
              href={`${config.BASE_URL}${location.pathname}`}
            >
              Share on Facebook
            </ShareButton>
            <TextBlock role="secondary">{`By: ${singlePost.author}`}</TextBlock>
            <TextBlock role="secondary">{`Added: ${new Date(
              singlePost.createdAt
            ).toLocaleString()}`}</TextBlock>
            <HtmlBox>{singlePost.content}</HtmlBox>
            <Likes id={singlePost.id} likes={singlePost.likes} />
            <Comments
              width="100%"
              href={`${config.BASE_URL}${location.pathname}`}
            />
          </FacebookProvider>
        </div>
      );
    }
  }
}

export default withRouter(Post);
