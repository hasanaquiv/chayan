import { createSlice } from "@reduxjs/toolkit";
import { getUser, getAllUser } from "../actions/profileAction";

const printReducer = createSlice({
  name: "user",
  initialState: {
    loader: true,
    error: {},
    user: {},
    users: {},
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.loader = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loader = false;
      state.user = action.payload;
    },
    [getUser.error]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    [getAllUser.pending]: (state, action) => {
      state.loader = true;
    },
    [getAllUser.fulfilled]: (state, action) => {
      state.loader = false;
      state.users = action.payload;
    },
    [getAllUser.error]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
  },
});

export default printReducer.reducer;
