import { Photo, PhotoAction, PhotoActionTypes } from '../../types/photos';
import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchPhotos = (id: number, page: number) => {
  return async (dispatch: Dispatch<PhotoAction>, getState: () => any) => {
    const { photos } = getState().photos;
    let isPhotoExist = false;

    photos.forEach((photo: Photo) => {
      if (!isPhotoExist && photo.albumId === id) {
        isPhotoExist = true;
      }
    });

    if (isPhotoExist) {
      return;
    }

    try {
      dispatch({ type: PhotoActionTypes.FETCH_PHOTOS });
      const response = await axios.get(`https://jsonplaceholder.typicode.com/album/${id}/photos`, {
        params: { _page: page, _limit: 50 },
      });
      dispatch({ type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: PhotoActionTypes.FETCH_PHOTOS_ERROR,
        payload: 'Произошла ошибка при загрузке комментариев',
      });
    }
  };
};

export const setPhotosPage = (page: number): PhotoAction => {
  return { type: PhotoActionTypes.SET_PHOTOS_PAGE, payload: page };
};
