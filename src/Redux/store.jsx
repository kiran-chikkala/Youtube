import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./menuSlice";
import VideoReducer from "./videoSlice";
import ChatReducers from "./ChatSlice";
const store = configureStore({
  reducer: {
    showmenu: MenuReducer,
    video: VideoReducer,
    LiveChat: ChatReducers,
  },
});

export default store;
