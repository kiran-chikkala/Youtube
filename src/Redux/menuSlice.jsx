import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "showmenu",
  initialState: {
    isMenuOpen: true,
    HomeMenu: true,
  },
  reducers: {
    addMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    addHomeMenu: (state) => {
      state.HomeMenu = false;
    },
    addHomeMenureturn: (state) => {
      state.HomeMenu = true;
    },
    removeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export const { addMenu, addHomeMenu, removeMenu, addHomeMenureturn } =
  menuSlice.actions;

export default menuSlice.reducer;
