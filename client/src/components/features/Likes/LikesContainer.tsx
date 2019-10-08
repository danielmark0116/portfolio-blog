import React, { Component } from 'react';
import { connect } from 'react-redux';
import Likes from './Likes';
import { AppState } from '../../../redux/store';
import { postsLikeThunk } from '../../../redux/postsRedux';
import { ActionTypes } from '../../../redux/actionTypes';
import { ThunkDispatch } from 'redux-thunk';

export interface IProps {
  id: string;
  likes: number;
}

export interface dispatchToProps {
  likePost: Function;
}

const mapStateToProps = (state: AppState, ownProps: IProps) => ({
  id: ownProps.id,
  likes: ownProps.likes
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, ActionTypes>
) => ({
  likePost: (id: string, value: number) => dispatch(postsLikeThunk(id, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Likes);
