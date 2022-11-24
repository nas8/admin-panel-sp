import { CommentAction, CommentActionTypes, CommentState } from '../../types/comments';

const initialState: CommentState = {
  comments: [],
  loading: false,
  error: null,
};

export const commentReducer = (state = initialState, action: CommentAction): CommentState => {
  switch (action.type) {
    case CommentActionTypes.FETCH_COMMENTS:
      return { loading: true, error: null, comments: [...state.comments] };
    case CommentActionTypes.FETCH_COMMENTS_SUCCESS:
      return { loading: false, error: null, comments: [...state.comments, ...action.payload] };
    case CommentActionTypes.FETCH_COMMENTS_ERROR:
      return { loading: false, error: action.payload, comments: [...state.comments] };
    default:
      return state;
  }
};
