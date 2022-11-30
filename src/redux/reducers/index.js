import {
  LOADING,
  LOGIN,
  SAVE_IMAGE_COMPRESSED,
  SAVE_IMAGE_COMPRESSED_IN_GALLERY,
  SET_IMAGE_TO_COMPRESS,
} from '../constants';

const INITIAL_STATE = {
  isLogged: false,
  imageToCompress: null,
  currentImageCompressed: null,
  imagesCompressed: [],
  isLoading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      isLogged: true,
    };
  case SET_IMAGE_TO_COMPRESS:
    return {
      ...state,
      imageToCompress: action.payload,
    };
  case LOADING:
    return {
      ...state,
      isLoading: !state.isLoading,
    };
  case SAVE_IMAGE_COMPRESSED:
    return {
      ...state,
      currentImageCompressed: action.payload,
    };
  case SAVE_IMAGE_COMPRESSED_IN_GALLERY:
    return {
      ...state,
      imagesCompressed: [...state.imagesCompressed, action.payload],
    };
  default:
    return state;
  }
};

export default reducer;
