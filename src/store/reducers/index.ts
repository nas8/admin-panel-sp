import { combineReducers } from 'redux';
import { commentReducer } from './commentsReducer';
import { postReducer } from './postReducer';

export const rootReducer = combineReducers({
  post: postReducer,
  comment: commentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
