import { Post } from '../types/post';

export const POSTS_GET_ALL = 'POSTS_GET_ALL';

interface postsGetAllActionType {
  type: typeof POSTS_GET_ALL;
  payload: Post[];
}

export type ActionTypes = postsGetAllActionType;
