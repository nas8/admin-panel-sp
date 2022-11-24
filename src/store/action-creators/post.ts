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
      dispatch({ type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: 'Произошла ошибка при загрузке постов',
      });
    }
  };
};

export function setPostsPage(page: number): PostAction {
  return { type: PostActionTypes.SET_POSTS_PAGE, payload: page };
}
