import { AlbumAction, AlbumActionTypes, AlbumState } from '../../types/albums';

const initialState: AlbumState = {
  albums: [],
  loading: false,
  error: null,
  page: 1,
  pages: [],
  numberOfAlbums: 0,
};

export const albumsReducer = (state = initialState, action: AlbumAction): AlbumState => {
  switch (action.type) {
    case AlbumActionTypes.FETCH_ALBUMS:
      return { ...state, loading: true, error: null };
    case AlbumActionTypes.FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        albums: [...state.albums, ...action.payload.data],
        numberOfAlbums: Number(action.payload.totalCount),
      };
    case AlbumActionTypes.FETCH_ALBUMS_ERROR:
      return { ...state, loading: false, error: action.payload };

    case AlbumActionTypes.SET_ALBUMS_PAGE:
      return { ...state, page: action.payload };

    case AlbumActionTypes.DELETE_ALBUM:
      return { ...state, loading: true, error: null };
    case AlbumActionTypes.DELETE_ALBUM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        albums: state.albums.filter((album) => album.id !== action.payload),
      };
    case AlbumActionTypes.DELETE_ALBUM_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
