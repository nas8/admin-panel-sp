export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export interface Posts {
  posts: Post[];
}

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: null | string;
  page: number;
  pages: number[];
  numberOfPosts: number;
}

export enum PostActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',

  SET_POSTS_PAGE = 'SET_POSTS_PAGE',

  DELETE_POST = 'DELETE_POST',
  DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
  DELETE_POST_ERROR = 'DELETE_POST_ERROR',
}

interface FetchPostsAction {
  type: PostActionTypes.FETCH_POSTS;
}
interface FetchPostsSuccessAction {
  type: PostActionTypes.FETCH_POSTS_SUCCESS;
  payload: { data: Post[]; totalCount: string | undefined };
}

interface FetchPostsErrorAction {
  type: PostActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

interface SetPostsPageAction {
  type: PostActionTypes.SET_POSTS_PAGE;
  payload: number;
}

interface DeletePostAction {
  type: PostActionTypes.DELETE_POST;
}
interface DeletePostSuccesAction {
  type: PostActionTypes.DELETE_POST_SUCCESS;
  payload: number;
}
interface DeletePostErrorAction {
  type: PostActionTypes.DELETE_POST_ERROR;
  payload: string;
}

export type PostAction =
  | FetchPostsAction
  | FetchPostsErrorAction
  | FetchPostsSuccessAction
  | SetPostsPageAction
  | DeletePostAction
  | DeletePostSuccesAction
  | DeletePostErrorAction;
