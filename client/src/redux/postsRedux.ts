import * as types from './actionTypes';
import { ActionTypes } from './actionTypes';
import { Post } from '../types/post';
import { Dispatch } from 'redux';
import axios from 'axios';
import { API_URL } from '../config';

// NAME CREATORS
const reducerName = 'posts';
const createActionName = (name: string) => `app/${reducerName}/${name}`;

// SELECTORS
export const selectorPostsCount = (posts: Post[]): string =>
  posts.length > 0 ? posts.length.toString() : 'no posts';

// ACTIONS
export const postsGetAll = (posts: Post[]): ActionTypes => ({
  type: types.POSTS_GET_ALL,
  payload: posts
});

// THUNKS
export const postsFetchAll = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    try {
      let response = await axios.get(API_URL + 'posts');
      let data = await response.data;

      dispatch(postsGetAll(data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

// REDUCERS
const initState: Post[] = [];

export function postsReducer(state = initState, action: ActionTypes) {
  switch (action.type) {
    case types.POSTS_GET_ALL:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
