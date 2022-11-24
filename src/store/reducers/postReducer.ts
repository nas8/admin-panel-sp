import { PostAction, PostActionTypes, PostState } from '../../types/posts';

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
  page: 1,
  pages: [],
};

export const postReducer = (state = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return { ...state, loading: true, error: null };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, error: null, posts: [...state.posts, ...action.payload] };
    case PostActionTypes.FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PostActionTypes.SET_POSTS_PAGE:
      return { ...state, page: action.payload, pages: [...state.pages, action.payload] };
    default:
      return state;
  }
};
