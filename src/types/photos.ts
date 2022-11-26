export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export interface Photos {
  photos: Photo[];
}

export interface PhotoState {
  photos: Photo[];
  loading: boolean;
  error: null | string;
  page: number;
}

export enum PhotoActionTypes {
  FETCH_PHOTOS = 'FETCH_PHOTOS',
  FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
  SET_PHOTOS_PAGE = 'SET_PHOTOS_PAGE',
}

interface FetchPhotosAction {
  type: PhotoActionTypes.FETCH_PHOTOS;
}
interface FetchPhotosSuccessAction {
  type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS;
  payload: Photo[];
}

interface FetchPhotosErrorAction {
  type: PhotoActionTypes.FETCH_PHOTOS_ERROR;
  payload: string;
}

interface SetPhotosPageAction {
  type: PhotoActionTypes.SET_PHOTOS_PAGE;
  payload: number;
}

export type PhotoAction =
  | FetchPhotosAction
  | FetchPhotosErrorAction
  | FetchPhotosSuccessAction
  | SetPhotosPageAction;
