import { createSlice } from "@reduxjs/toolkit";
import { consigneeAction, getAllConsignees } from "../actions/consigneeAction";

const consigneeReducer = createSlice({
  name: "consignee",
  initialState: {
    loader: false,
    error: {},
    responseCon: {},
    consignees: {},
  },
  extraReducers: {
    [consigneeAction.pending]: (state, action) => {
      state.loader = true;
    },
    [consigneeAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.responseCon = action.payload;
    },
    [consigneeAction.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
    [getAllConsignees.pending]: (state, action) => {
      state.loader = false;
    },
    [getAllConsignees.fulfilled]: (state, action) => {
      state.loader = false;
      state.consignees = action.payload;
    },
    [getAllConsignees.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
  },
});

export default consigneeReducer.reducer;
