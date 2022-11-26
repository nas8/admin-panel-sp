import * as PostActionCreators from './post';
import * as CommentActionCreators from './comments';
import * as AlbumsActionCreators from './albums';
import * as PhotoActionCreators from './photos';

export default {
  ...PostActionCreators,
  ...CommentActionCreators,
  ...AlbumsActionCreators,
  ...PhotoActionCreators,
};
