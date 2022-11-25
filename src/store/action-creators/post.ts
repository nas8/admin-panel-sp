import { PostAction, PostActionTypes } from '../../types/posts';
import { Dispatch } from 'redux';
import axios from 'axios';

let pages: number[] = [];

export const fetchPosts = (currentPage: number) => {
  return async (dispatch: Dispatch<PostAction>, getState: () => any) => {
    let isPageExist = false;

    pages.forEach((page: number) => {
      if (!isPageExist && page === currentPage) {
        isPageExist = true;
      }
    });

    if (isPageExist) {
      return;
    }
    pages.push(currentPage);

    try {
      dispatch({ type: PostActionTypes.FETCH_POSTS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: { _page: currentPage },
      });
      const totalCount = response.headers['x-total-count'];

      console.log({ data: response.data, totalCount });

      dispatch({
        type: PostActionTypes.FETCH_POSTS_SUCCESS,
        payload: { data: response.data, totalCount },
      });
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: 'Произошла ошибка при загрузке постов',
      });
    }
  };
};

export const setPostsPage = (page: number): PostAction => {
  return { type: PostActionTypes.SET_POSTS_PAGE, payload: page };
};

export const deletePost = (postId: number) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionTypes.DELETE_POST });
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      dispatch({ type: PostActionTypes.DELETE_POST_SUCCESS, payload: postId });
    } catch (e) {
      dispatch({
        type: PostActionTypes.DELETE_POST_ERROR,
        payload: 'Произошла ошибка при удалении поста',
      });
    }
  };
};
