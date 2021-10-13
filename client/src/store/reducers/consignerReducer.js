import { createSlice } from "@reduxjs/toolkit";
import { consignerAction, getAllConsigners, getConsigner, getConsignerCode } from "../actions/consignerAction";

const consignerReducer = createSlice({
  name: "consigner",
  initialState: {
    loader: true,
    error: {},
    response: {},
    consigners: {},
    consigner: {},
    consignerCode:{}
  },
  extraReducers: {
    [consignerAction.pending]: (state, action) => {
      state.loader = true;
    },
    [consignerAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.response = action.payload;
    },
    [consignerAction.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
    [getAllConsigners.pending]: (state, action) => {
      state.loader = false;
    },
    [getAllConsigners.fulfilled]: (state, action) => {
      state.loader = false;
      state.consigners = action.payload;
    },
    [getAllConsigners.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    [getConsigner.pending]: (state, action) => {
      state.loader = false;
    },
    [getConsigner.fulfilled]: (state, action) => {
      state.loader = false;
      state.consigner = action.payload;
    },
    [getConsigner.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    [getConsignerCode.pending]: (state, action) => {
      state.loader = false;
    },
    [getConsignerCode.fulfilled]: (state, action) => {
      state.loader = false;
      state.consignerCode = action.payload;
    },
    [getConsignerCode.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
  },
});

export default consignerReducer.reducer;
