export type Album = {
  userId: number;
  id: number;
  title: string;
};

export interface Albums {
  albums: Album[];
}

export interface AlbumState {
  albums: Album[];
  loading: boolean;
  error: null | string;
  page: number;
  pages: number[];
  numberOfAlbums: number;
}

export enum AlbumActionTypes {
  FETCH_ALBUMS = 'FETCH_ALBUMS',
  FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS',
  FETCH_ALBUMS_ERROR = 'FETCH_ALBUMS_ERROR',

  SET_ALBUMS_PAGE = 'SET_ALBUMS_PAGE',

  DELETE_ALBUM = 'DELETE_ALBUM',
  DELETE_ALBUM_SUCCESS = 'DELETE_ALBUM_SUCCESS',
  DELETE_ALBUM_ERROR = 'DELETE_ALBUM_ERROR',
}

interface FetchAlbumsAction {
  type: AlbumActionTypes.FETCH_ALBUMS;
}
interface FetchAlbumsSuccessAction {
  type: AlbumActionTypes.FETCH_ALBUMS_SUCCESS;
  payload: { data: Album[]; totalCount: string | undefined };
}

interface FetchAlbumsErrorAction {
  type: AlbumActionTypes.FETCH_ALBUMS_ERROR;
  payload: string;
}

interface SetAlbumsPageAction {
  type: AlbumActionTypes.SET_ALBUMS_PAGE;
  payload: number;
}

interface DeleteAlbumAction {
  type: AlbumActionTypes.DELETE_ALBUM;
}
interface DeleteAlbumSuccesAction {
  type: AlbumActionTypes.DELETE_ALBUM_SUCCESS;
  payload: number;
}
interface DeleteAlbumErrorAction {
  type: AlbumActionTypes.DELETE_ALBUM_ERROR;
  payload: string;
}

export type AlbumAction =
  | FetchAlbumsAction
  | FetchAlbumsErrorAction
  | FetchAlbumsSuccessAction
  | SetAlbumsPageAction
  | DeleteAlbumAction
  | DeleteAlbumSuccesAction
  | DeleteAlbumErrorAction;
