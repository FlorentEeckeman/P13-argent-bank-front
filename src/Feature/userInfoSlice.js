import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfos: { firstName: null, lastName: null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfos: (state, action) => {
      state.userInfos.firstName = action.payload.firstName;
      state.userInfos.lastName = action.payload.lastName;
    },
    removeUserInfos: (state) => {
      state.userInfos.firstName = null;
      state.userInfos.lastName = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUserInfos, removeUserInfos } = userSlice.actions;

export default userSlice.reducer;
