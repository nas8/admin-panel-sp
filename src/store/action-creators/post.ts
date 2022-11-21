import { PostAction, PostActionTypes } from '../../types/posts';
import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionTypes.FETCH_POSTS });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_limit=20&_page=1',
      );

      dispatch({ type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей',
      });
    }
  };
};
