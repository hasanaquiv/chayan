import { createSlice } from "@reduxjs/toolkit";
import { consignerAction, getAllConsigners } from "../actions/consignerAction";

const consignerReducer = createSlice({
  name: "consigner",
  initialState: {
    loader: false,
    error: {},
    response: {},
    consigners: {},
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
  },
});

export default consignerReducer.reducer;
