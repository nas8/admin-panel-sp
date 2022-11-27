import * as PostActionCreators from './post';
import * as CommentActionCreators from './comments';
import * as AlbumsActionCreators from './albums';
import * as PhotoActionCreators from './photos';
import * as TodosActionCreators from './todos';

export default {
  ...PostActionCreators,
  ...CommentActionCreators,
  ...AlbumsActionCreators,
  ...PhotoActionCreators,
  ...TodosActionCreators,
};
