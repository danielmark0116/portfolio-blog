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
export const selectorPostsAll = (state: postsState): Post[] => {
  return state.data;
};
export const selectorPostById = (state: postsState, id: String): Post[] => {
  return state.data.filter(post => post.id === id);
};
export const selectorPostsAllFromLatest = (state: postsState): Post[] => {
  return state.data.sort(
    (a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
  );
};
export const selectorPostsPending = (state: postsState): Boolean => {
  return state.request.pending;
};
export const selectorPostsCount = (state: postsState): string => {
  if (state.data.length > 0) {
    return state.data.length.toString();
  } else {
    return 'no posts';
  }
};
export const selectorPostsErrorMsg = (state: postsState): string => {
  const { errorMsg } = state.request;
  return errorMsg === null ? '' : errorMsg;
};
export const selectorPostsError = (state: postsState): Boolean => {
  return state.request.error;
};
export const selectorPostsSuccess = (state: postsState): Boolean => {
  return state.request.success;
};
export const selectorPostsPostSuccess = (state: postsState): Boolean => {
  return state.request.postSuccess;
};
export const selectorPostsGetOne = (state: postsState): Post => {
  return state.singlePost[0];
};

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

export const postsGetOne = (post: Post): ActionTypes => ({
  type: types.POSTS_GET_ONE,
  payload: post
});

export const postsPostPutSuccess = (success: Boolean): ActionTypes => ({
  type: types.POSTS_ADD_ONE,
  payload: success
});

export const postsResetSinglePost = (): ActionTypes => ({
  type: types.POSTS_RESET_SINGLE_POST
});

export const resetRequestData = (): ActionTypes => ({
  type: types.RESET_REQUEST_DATA
});

// THUNKS
export const postsFetchAll = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(postsStartRequest());
    try {
      await new Promise((res, rej) => setTimeout(res, 500));
      let response = await axios.get(API_URL + 'posts');
      let data = await response.data;

      dispatch(postsGetAll(data));
      dispatch(postsEndRequest());
    } catch (err) {
      dispatch(postsError(err.message));
    }
  };
};

export const postsFetchOneById = (id: string) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(postsStartRequest());
    dispatch(postsResetSinglePost());
    try {
      let response = await axios.get(API_URL + `post/${id}`);
      let data = await response.data;
      dispatch(postsGetOne(data));
      dispatch(postsEndRequest());
    } catch (err) {
      dispatch(postsError(err.message));
    }
  };
};

export const postsAddPostThunk = (post: Post) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    try {
      dispatch(postsStartRequest());

      await new Promise((res, rej) => setTimeout(res, 1000));

      let response = await axios.post(API_URL + 'posts', post);
      dispatch(postsEndRequest());
      dispatch(postsPostPutSuccess(true));
    } catch (err) {
      dispatch(postsError(err.message));
    }
  };
};

export const postsEditPostThunk = (
  id: String,
  data: { title: String; content: String; author: String }
) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    try {
      dispatch(postsStartRequest());

      await new Promise((res, rej) => setTimeout(res, 1000));

      let response = await axios.put(API_URL + `post/${id}`, data);
      dispatch(postsEndRequest());
      dispatch(postsPostPutSuccess(true));
    } catch (err) {
      dispatch(postsError(err.message));
    }
  };
};

// REDUCERS

interface postsState {
  data: Post[];
  singlePost: Post[];
  request: {
    pending: boolean;
    error: Boolean;
    success: Boolean;
    postSuccess: Boolean;
    errorMsg: string | null;
  };
}

const initState: postsState = {
  data: [],
  singlePost: [
    {
      title: '',
      author: '',
      content: '',
      id: '',
      _id: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  request: {
    pending: false,
    error: false,
    postSuccess: false,
    success: false,
    errorMsg: null
  }
};

export function postsReducer(state = initState, action: ActionTypes) {
  switch (action.type) {
    case types.POSTS_GET_ALL:
      return { ...state, data: action.payload };
    case types.POSTS_GET_ONE:
      return {
        ...state,
        singlePost: [action.payload]
      };
    case types.POSTS_ADD_ONE:
      return {
        ...state,
        request: { ...state.request, postSuccess: action.payload }
      };
    case types.POSTS_RESET_SINGLE_POST:
      return { ...state, singlePost: [] };
    case types.POSTS_START_REQUEST:
      return {
        ...state,
        request: {
          ...state.request,
          pending: true,
          success: false,
          postSuccess: false,
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
          success: true,
          postSuccess: false,
          errorMsg: ''
        }
      };
    case types.POSTS_ERROR:
      return {
        ...state,
        request: {
          ...state.request,
          success: false,
          postSuccess: false,
          error: true,
          pending: false,
          errorMsg: action.payload
        }
      };
    case types.RESET_REQUEST_DATA:
      return {
        ...state,
        request: {
          pending: false,
          success: false,
          error: false,
          errorMsg: '',
          postSuccess: false
        }
      };
    default:
      return state;
  }
}
