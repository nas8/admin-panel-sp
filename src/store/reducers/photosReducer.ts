import { PhotoAction, PhotoActionTypes, PhotoState } from '../../types/photos';

const initialState: PhotoState = {
  photos: [],
  loading: false,
  error: null,
  page: 1,
};

export const PhotoReducer = (state = initialState, action: PhotoAction): PhotoState => {
  switch (action.type) {
    case PhotoActionTypes.FETCH_PHOTOS:
      return { ...state, loading: true, error: null };
    case PhotoActionTypes.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        photos: [...state.photos, ...action.payload],
      };
    case PhotoActionTypes.FETCH_PHOTOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PhotoActionTypes.SET_PHOTOS_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
