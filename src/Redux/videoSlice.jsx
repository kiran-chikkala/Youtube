import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: " video",
  initialState: {
    Youtube: null,
    details: null,
  },
  reducers: {
    addVideos: (state, action) => {
      state.Youtube = action.payload;
    },
    addVideosDetilas: (state, action) => {
      state.details = action.payload;
    },
  },
});
export const { addVideos, addVideosDetilas } = videoSlice.actions;
export default videoSlice.reducer;
