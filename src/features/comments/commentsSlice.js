import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {
    addComment: (state, action) => {
      state.push(action.payload);
    },
    resetComments: () => {
      return [];
    }
  }
});

export const { addComment, resetComments } = commentsSlice.actions;
export default commentsSlice.reducer;
