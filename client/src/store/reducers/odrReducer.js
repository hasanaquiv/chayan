import { createSlice } from "@reduxjs/toolkit";
import { odrAction, getAllOdrs, getOdr } from "../actions/odrAction";

const odrReducer = createSlice({
  name: "users",
  initialState: {
    loader: false,
    error: {}, 
    response: {},
    odrs:{},
    odr:{}
  },
  extraReducers: {
    // odrAction:
    [odrAction.pending]: (state, action) => {
      state.loader = true;
    },
    [odrAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.response = action.payload;
    },
    [odrAction.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
    // getAllOdrs
    [getAllOdrs.pending]: (state, action) => {
      state.loader = true;
    },
    [getAllOdrs.fulfilled]: (state, action) => {
      state.loader = false;
      state.odrs = action.payload;
    },
    [getAllOdrs.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
    // getOdr
    [getOdr.pending]: (state, action) => {
      state.loader = true;
    },
    [getOdr.fulfilled]: (state, action) => {
      state.loader = false;
      state.odr = action.payload;
    },
    [getOdr.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
  },
});

export default odrReducer.reducer;
