import { PostAction, PostActionTypes } from '../../types/posts';
import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchPosts = (limit = 10) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionTypes.FETCH_POSTS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: { _limit: limit },
      });
      dispatch({ type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: 'Произошла ошибка при загрузке постов',
      });
    }
  };
};
