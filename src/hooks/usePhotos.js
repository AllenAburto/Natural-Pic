import { useEffect, useReducer } from "react";
import { photoReducer } from "../reducers/photoReducer";
import { getPhotos } from "../api/photo";

const initialState = [];

export const usePhotos = () => {
  const [photos, dispatch] = useReducer(photoReducer, initialState);

  useEffect(() => {
    getPhotos().then((photos) => {
      const action = {
        type: "[PHOTO] Get All",
        payload: photos,
      };
      dispatch(action);
    });
  }, []);

  const togglePhoto = (id) => {
    const action = {
      type: "[PHOTO] Like/dislike Photo",
      payload: id,
    };
    dispatch(action);
  };

  return {
    photos,
    togglePhoto,
    favPhotos: photos.filter((photo) => photo.liked),
  };
};