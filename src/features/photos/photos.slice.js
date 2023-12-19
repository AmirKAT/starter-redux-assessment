import { createSlice } from "@reduxjs/toolkit";
import photos from "./photos.data.js";

const initialState = {
  photos,
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    addPhoto(state, action) {
      state.photos.unshift(action.payload);
    },

    removePhoto(state, action) {
      const index = state.photos.findIndex(
        (photo) => photo.id === action.payload
      );
      if (index !== -1) {
        state.photos.splice(index, 1);
      }
    },
  },
});

export const { addPhoto, removePhoto } = photosSlice.actions;

export default photosSlice.reducer;

export const selectAllPhotos = (state) => state.photos.photos;

export const selectFilteredPhotos = (state) => {
  const searchTerm = state.search.searchTerm.toLowerCase();
  return state.photos.photos.filter(photo =>
    photo.caption.toLowerCase().includes(searchTerm)
  );
};
