import { Post } from './post';

export interface ApiResponse {
  data: Post[] | null;
  success: Boolean;
  msg: string;
}
