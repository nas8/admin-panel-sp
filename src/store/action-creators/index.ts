import * as PostActionCreators from './post';
import * as CommentActionCreators from './comments';

export default {
  ...PostActionCreators,
  ...CommentActionCreators,
};
