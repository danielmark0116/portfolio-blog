export interface Post {
  _id: string;
  id: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}
