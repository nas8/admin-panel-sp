import { Comment, CommentAction, CommentActionTypes } from '../../types/comments';
import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchComments = (id: number) => {
  return async (dispatch: Dispatch<CommentAction>, getState: () => any) => {
    const { comments } = getState().comment;

    let isCommentExist = false;

    comments.forEach((comment: Comment) => {
      if (!isCommentExist && comment.postId === id) {
        isCommentExist = true;
      }
    });

    if (isCommentExist) {
      return;
    }

    try {
      dispatch({ type: CommentActionTypes.FETCH_COMMENTS });
      const response = await axios.get(`https://jsonplaceholder.typicode.com/post/${id}/comments`);
      dispatch({ type: CommentActionTypes.FETCH_COMMENTS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: CommentActionTypes.FETCH_COMMENTS_ERROR,
        payload: 'Произошла ошибка при загрузке комментариев',
      });
    }
  };
};
