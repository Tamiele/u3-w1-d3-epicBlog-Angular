import { Post } from './post';

export interface iJSONresponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}
