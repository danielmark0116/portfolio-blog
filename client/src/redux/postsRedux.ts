import * as types from './actionTypes';
import { ActionTypes } from './actionTypes';
import { Post } from '../types/post';
import { Dispatch } from 'redux';
import axios from 'axios';
import { API_URL } from '../config';
import { setTimeout } from 'timers';

// NAME CREATORS
const reducerName = 'posts';
const createActionName = (name: string) => `app/${reducerName}/${name}`;

// SELECTORS
export const selectorPostsAll = (state: postsState): Post[] => state.data;
export const selectorPostsPending = (state: postsState): Boolean =>
  state.request.pending;
export const selectorPostsCount = (state: postsState): string =>
  state.data.length > 0 ? state.data.length.toString() : 'no posts';
export const selectorPostsErrorMsg = (state: postsState): string => {
  const { errorMsg } = state.request;
  return errorMsg === null ? '' : errorMsg;
};
export const selectorPostsError = (state: postsState): Boolean =>
  state.request.error;
export const selectorPostsSuccess = (state: postsState): Boolean =>
  state.request.succes;

// ACTIONS
export const postsGetAll = (posts: Post[]): ActionTypes => ({
  type: types.POSTS_GET_ALL,
  payload: posts
});

export const postsStartRequest = (): ActionTypes => ({
  type: types.POSTS_START_REQUEST
});

export const postsEndRequest = (): ActionTypes => ({
  type: types.POSTS_END_REQUEST
});

export const postsError = (errorMsg: string): ActionTypes => ({
  type: types.POSTS_ERROR,
  payload: errorMsg
});

// THUNKS
export const postsFetchAll = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(postsStartRequest());
    try {
      await new Promise((res, rej) => setTimeout(res, 1000));
      let response = await axios.get(API_URL + 'posts');
      let data = await response.data;

      dispatch(postsGetAll(data));
      dispatch(postsEndRequest());
    } catch (e) {
      dispatch(postsError(e.message));
    }
  };
};

interface postsState {
  data: Post[];
  request: {
    pending: boolean;
    error: Boolean;
    succes: Boolean;
    errorMsg: string | null;
  };
}

// REDUCERS
const initState: postsState = {
  data: [],
  request: {
    pending: false,
    error: false,
    succes: false,
    errorMsg: null
  }
};

export function postsReducer(state = initState, action: ActionTypes) {
  switch (action.type) {
    case types.POSTS_GET_ALL:
      return { ...state, data: action.payload };
    case types.POSTS_START_REQUEST:
      return {
        ...state,
        request: {
          ...state.request,
          pending: true,
          succes: false,
          error: false
        }
      };
    case types.POSTS_END_REQUEST:
      return {
        ...state,
        request: {
          ...state.request,
          pending: false,
          error: false,
          succes: true
        }
      };
    case types.POSTS_ERROR:
      return {
        ...state,
        request: {
          ...state.request,
          succes: false,
          error: true,
          pending: false,
          errorMsg: action.payload
        }
      };
    default:
      return state;
  }
}
