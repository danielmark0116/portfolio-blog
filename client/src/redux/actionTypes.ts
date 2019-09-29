import { Post } from '../types/post';

export const POSTS_GET_ALL = 'POSTS_GET_ALL';
export const POSTS_START_REQUEST = 'POSTS_START_REQUEST';
export const POSTS_END_REQUEST = 'POSTS_END_REQUEST';
export const POSTS_ERROR = 'POSTS_ERROR';

interface postsGetAllActionType {
  type: typeof POSTS_GET_ALL;
  payload: Post[];
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

export type ActionTypes =
  | postsGetAllActionType
  | postsStartRequestActionType
  | postsEndRequestActionType
  | postsErrorActionType;
