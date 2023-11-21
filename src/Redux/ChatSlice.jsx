import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    chaList: [],
  },
  reducers: {
    addChat: (state, action) => {
      state.chaList.splice(10, 1);
      state.chaList.unshift(action.payload);
    },
  },
});
export const { addChat } = ChatSlice.actions;
export default ChatSlice.reducer;
