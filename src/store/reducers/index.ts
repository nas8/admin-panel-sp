import { combineReducers } from 'redux';
import { albumsReducer } from './albumsReducer';
import { commentReducer } from './commentsReducer';
import { photoReducer } from './photosReducer';
import { postReducer } from './postReducer';
import { todoReducer } from './todosReducer';

export const rootReducer = combineReducers({
  post: postReducer,
  comment: commentReducer,
  albums: albumsReducer,
  photos: photoReducer,
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
