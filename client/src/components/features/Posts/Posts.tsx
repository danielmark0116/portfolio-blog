import React from 'react';

import PostsList from '../PostsList/PostsList';
import Pagination from '../../common/Pagination/Pagination';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

import { stateToProps, dispatchToProps } from './PostsContainer';

interface IProps {}

interface IState {}

type Props = stateToProps & dispatchToProps & IProps;

class Posts extends React.Component<Props, IState> {
  static defaultProps = {
    initPage: 1,
    pagination: true,
    random: false
  };

  componentDidMount() {
    const {
      postsGetPage,
      postsGetRandom,
      resetRequestData,
      initPage,
      postsPerPage,
      random
    } = this.props;

    resetRequestData();

    // random && postsGetRandom();
    // postsPerPage
    //   ? postsGetPage(initPage, postsPerPage)
    //   : postsGetPage(initPage);

    if (!random) {
      postsPerPage
        ? postsGetPage(initPage, postsPerPage)
        : postsGetPage(initPage);
    } else {
      postsGetRandom();
    }
  }

  pageChange = (pageNo: number) => {
    const { postsGetPage, postsPerPage } = this.props;

    postsPerPage ? postsGetPage(pageNo, postsPerPage) : postsGetPage(pageNo);
  };

  render() {
    const {
      activePage,
      posts,
      singlePost,
      random,
      pending,
      error,
      success,
      errorMsg,
      noOfPages,
      pagination
    } = this.props;

    if (!pending && !success && error)
      return <Alert variant={'error'}>{errorMsg}</Alert>;

    if (random) {
      if (!pending && success && !error && !singlePost)
        return <Alert variant={'info'}>No posts...</Alert>;
    }

    if (!random) {
      if (!pending && success && !error && posts.length === 0)
        return <Alert variant={'info'}>No posts...</Alert>;
    }

    if (pending || (!success && posts.length === 0)) return <Spinner></Spinner>;

    if (!success) return <Spinner></Spinner>;

    if (!pending && success && !error && (posts.length > 0 || singlePost))
      return (
        <div>
          <PostsList posts={random ? [singlePost] : posts} />
          {pagination && (
            <Pagination
              activePage={activePage}
              pages={noOfPages}
              onPageChange={(page: number) => {
                this.pageChange(page);
              }}
            />
          )}
        </div>
      );
  }
}

export default Posts;
