import { Post } from '../types/post';

export const POSTS_GET_ALL = 'POSTS_GET_ALL';
export const POSTS_GET_PAGE = 'POSTS_GET_PAGE';
export const POSTS_GET_ONE = 'POSTS_GET_ONE';
export const POSTS_ADD_ONE = 'POSTS_ADD_ONE';
export const POSTS_RESET_SINGLE_POST = 'POSTS_RESET_SINGLE_POST';
export const POSTS_START_REQUEST = 'POSTS_START_REQUEST';
export const POSTS_END_REQUEST = 'POSTS_END_REQUEST';
export const POSTS_ERROR = 'POSTS_ERROR';

// MISC
export const RESET_REQUEST_DATA = 'RESET_REQUEST_DATA';

interface postsGetAllActionType {
  type: typeof POSTS_GET_ALL;
  payload: Post[];
}

interface postsGetPageActionType {
  type: typeof POSTS_GET_PAGE;
  payload: {
    data: Post[];
    postsPerPage: number;
    presentPage: number;
    amount: number;
  };
}

interface postsGetOneActionType {
  type: typeof POSTS_GET_ONE;
  payload: Post;
}

interface postsAddOneActionType {
  type: typeof POSTS_ADD_ONE;
  payload: Boolean;
}

interface postsStartRequestActionType {
  type: typeof POSTS_START_REQUEST;
}

interface postsEndRequestActionType {
  type: typeof POSTS_END_REQUEST;
}

interface postsErrorActionType {
  type: typeof POSTS_ERROR;
  payload: string;
}

interface postsResetSinglePostActionType {
  type: typeof POSTS_RESET_SINGLE_POST;
}

interface resetRequestDataActionType {
  type: typeof RESET_REQUEST_DATA;
}

export type ActionTypes =
  | postsGetAllActionType
  | postsStartRequestActionType
  | postsEndRequestActionType
  | postsErrorActionType
  | postsGetOneActionType
  | postsResetSinglePostActionType
  | postsAddOneActionType
  | resetRequestDataActionType
  | postsGetPageActionType;
