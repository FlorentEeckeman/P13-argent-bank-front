import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  value: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.value = action.payload;
    },
    removeToken: (state) => {
      state.value = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
