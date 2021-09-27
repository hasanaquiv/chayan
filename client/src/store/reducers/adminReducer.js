import { createSlice } from "@reduxjs/toolkit";
import { adminAction } from "../actions/adminAction";

const adminReducer = createSlice({
  name: "admin",
  initialState: {
    loader: false,
    error: {}, 
    response: {},
  },
  extraReducers: {
    [adminAction.pending]: (state, action) => {
      state.loader = true;
    },
    [adminAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.response = action.payload;
    },
    [adminAction.rejected]: (state, action) => {
        state.loader = false;
        state.error = action.payload;
    }
  },
});

export default adminReducer.reducer;
