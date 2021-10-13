import { createSlice } from "@reduxjs/toolkit";
import { manifestAction, getAllManifests, getManifest } from "../actions/manifestAction";

const manifestReducer = createSlice({
  name: "users",
  initialState: {
    loader: false,
    error: {}, 
    response: {},
    manifests:{},
    manifest:{}
  },
  extraReducers: {
    // manifestAction:
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
    // getAllManifests
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
    // getManifest
    [getManifest.pending]: (state, action) => {
      state.loader = true;
    },
    [getManifest.fulfilled]: (state, action) => {
      state.loader = false;
      state.manifest = action.payload;
    },
    [getManifest.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
  },
});

export default manifestReducer.reducer;
