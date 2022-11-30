import {
  LOADING,
  SAVE_IMAGE_COMPRESSED,
  SAVE_IMAGE_COMPRESSED_IN_GALLERY,
  SET_IMAGE_TO_COMPRESS,
} from '../constants';
import requestImageCompressed from '../../service/api';

export const setImageToCompress = (image) => ({
  type: SET_IMAGE_TO_COMPRESS,
  payload: image,
});

const setLoading = {
  type: LOADING,
};

const saveImageCompressed = (imageCompressed) => ({
  type: SAVE_IMAGE_COMPRESSED,
  payload: imageCompressed,
});

export const getImageCompressed = (imageToCompressUrl) => async (dispatch) => {
  dispatch(setLoading);
  const {
    dest: imageCompressed,
    src_size: originalSize,
    dest_size: imageCompressedSize,
  } = await requestImageCompressed(imageToCompressUrl);

  const newImageCompressed = {
    url: imageCompressed,
    originalUrl: imageToCompressUrl,
    originalSize,
    size: imageCompressedSize,
  };

  dispatch(saveImageCompressed(newImageCompressed));
  dispatch(setLoading);
};

export const saveImageCompressedInGallery = (image) => ({
  type: SAVE_IMAGE_COMPRESSED_IN_GALLERY,
  payload: image,
});

export const otherAction = () => {};
