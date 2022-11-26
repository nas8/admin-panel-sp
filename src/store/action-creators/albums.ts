import { AlbumAction, AlbumActionTypes } from '../../types/albums';
import { Dispatch } from 'redux';
import axios from 'axios';

let pages: number[] = [];

export const fetchAlbums = (currentPage: number) => {
  return async (dispatch: Dispatch<AlbumAction>, getState: () => any) => {
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
      dispatch({ type: AlbumActionTypes.FETCH_ALBUMS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums', {
        params: { _page: currentPage, _limit: 3 },
      });
      const totalCount = response.headers['x-total-count'];
      console.log(response);

      dispatch({
        type: AlbumActionTypes.FETCH_ALBUMS_SUCCESS,
        payload: { data: response.data, totalCount },
      });
    } catch (e) {
      dispatch({
        type: AlbumActionTypes.FETCH_ALBUMS_ERROR,
        payload: 'Произошла ошибка при загрузке альбомов',
      });
    }
  };
};

export const setAlbumsPage = (page: number): AlbumAction => {
  return { type: AlbumActionTypes.SET_ALBUMS_PAGE, payload: page };
};

export const deleteAlbum = (albumId: number) => {
  return async (dispatch: Dispatch<AlbumAction>) => {
    try {
      dispatch({ type: AlbumActionTypes.DELETE_ALBUM });
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/Albums/${albumId}`);
      dispatch({ type: AlbumActionTypes.DELETE_ALBUM_SUCCESS, payload: albumId });
    } catch (e) {
      dispatch({
        type: AlbumActionTypes.DELETE_ALBUM_ERROR,
        payload: 'Произошла ошибка при удалении поста',
      });
    }
  };
};
