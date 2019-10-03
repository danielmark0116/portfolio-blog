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
    pagination: true
  };

  componentDidMount() {
    const {
      postsGetPage,
      resetRequestData,
      initPage,
      postsPerPage
    } = this.props;

    resetRequestData();
    postsPerPage
      ? postsGetPage(initPage, postsPerPage)
      : postsGetPage(initPage);
  }

  pageChange = (pageNo: number) => {
    const { postsGetPage, postsPerPage } = this.props;

    postsPerPage ? postsGetPage(pageNo, postsPerPage) : postsGetPage(pageNo);
  };

  render() {
    const {
      activePage,
      posts,
      pending,
      error,
      success,
      errorMsg,
      noOfPages,
      pagination
    } = this.props;

    if (!pending && !success && error)
      return <Alert variant={'error'}>{errorMsg}</Alert>;

    if (!pending && success && !error && posts.length === 0)
      return <Alert variant={'info'}>No posts...</Alert>;

    if (pending || (!success && posts.length === 0)) return <Spinner></Spinner>;

    if (!success) return <Spinner></Spinner>;

    if (!pending && success && !error && posts.length > 0)
      return (
        <div>
          <PostsList posts={posts} />
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
