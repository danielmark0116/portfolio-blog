import { connect } from 'react-redux';

import Posts from './Posts';
import { AppState } from '../../../redux/store';
import { ThunkDispatch } from 'redux-thunk';
import { ActionTypes } from '../../../redux/actionTypes';
import { postsFetchAll } from '../../../redux/postsRedux';

const mapStateToProps = (state: AppState) => ({
  posts: state.postsReducer
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
