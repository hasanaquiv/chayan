import { createSlice } from "@reduxjs/toolkit";
import { manifestAction, getAllManifests } from "../actions/manifestAction";

const manifestReducer = createSlice({
  name: "users",
  initialState: {
    loader: false,
    error: {}, 
    response: {},
    manifests:{}
  },
  extraReducers: {
    [manifestAction.pending]: (state, action) => {
      state.loader = true;
    },
    [manifestAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.response = action.payload;
    },
    [manifestAction.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
    [getAllManifests.pending]: (state, action) => {
      state.loader = true;
    },
    [getAllManifests.fulfilled]: (state, action) => {
      state.loader = false;
      state.manifests = action.payload;
    },
    [getAllManifests.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
  },
});

export default manifestReducer.reducer;
