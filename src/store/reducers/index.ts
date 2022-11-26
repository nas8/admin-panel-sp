import { combineReducers } from 'redux';
import { albumsReducer } from './albumsReducer';
import { commentReducer } from './commentsReducer';
import { PhotoReducer } from './photosReducer';
import { postReducer } from './postReducer';

export const rootReducer = combineReducers({
  post: postReducer,
  comment: commentReducer,
  albums: albumsReducer,
  photos: PhotoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
