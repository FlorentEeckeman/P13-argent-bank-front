import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    addToken: (state, action) => {
      //console.log(action.payload);
      state.value = action.payload;
    },
    removeToken: (state) => {
      state.value = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
