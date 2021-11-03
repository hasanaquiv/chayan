import { createSlice } from "@reduxjs/toolkit";
import { podAction, getAllPods,getPod } from "../actions/podAction";

const podReducer = createSlice({
  name: "users",
  initialState: {
    loader: false,
    error: {}, 
    response: {},
    pods:{},
    pod:{}
  },
  extraReducers: {
    [podAction.pending]: (state, action) => {
      state.loader = true;
    },
    [podAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.response = action.payload;
    },
    [podAction.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
    [getAllPods.pending]: (state, action) => {
      state.loader = true;
    },
    [getAllPods.fulfilled]: (state, action) => {
      state.loader = false;
      state.pods = action.payload;
    },
    [getAllPods.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
    [getPod.pending]: (state, action) => {
      state.loader = true;
    },
    [getPod.fulfilled]: (state, action) => {
      state.loader = false;
      state.pod = action.payload;
    },
    [getPod.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
  },
});

export default podReducer.reducer;
