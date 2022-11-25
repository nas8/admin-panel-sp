import { PostAction, PostActionTypes, PostState } from '../../types/posts';

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
  page: 1,
  pages: [],
  numberOfPosts: 0,
};

export const postReducer = (state = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return { ...state, loading: true, error: null };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: [...state.posts, ...action.payload.data],
        numberOfPosts: Number(action.payload.totalCount),
      };
    case PostActionTypes.FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };

    case PostActionTypes.SET_POSTS_PAGE:
      return { ...state, page: action.payload };

    case PostActionTypes.DELETE_POST:
      return { ...state, loading: true, error: null };
    case PostActionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case PostActionTypes.DELETE_POST_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
