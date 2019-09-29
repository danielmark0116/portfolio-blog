import { connect } from 'react-redux';
import { AppState } from '../../../redux/store';
import { selectorPostsCount } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = (state: AppState) => ({
  postsCount: selectorPostsCount(state.postsReducer)
});

export default connect(mapStateToProps)(PostsCounter);
