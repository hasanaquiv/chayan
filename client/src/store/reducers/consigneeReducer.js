import { createSlice } from "@reduxjs/toolkit";
import { consigneeAction, getAllConsignees,getConsignee,updateConsignees } from "../actions/consigneeAction";

const consigneeReducer = createSlice({
  name: "consignee",
  initialState: {
    loader: false,
    error: {},
    responseCon: {},
    consignees: {},
    consigneeFind: {},
    updateResponse:{}
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
    [updateConsignees.pending]: (state, action) => {
      state.loader = false;
    },
    [updateConsignees.fulfilled]: (state, action) => {
      state.loader = false;
      state.updateResponse = action.payload;
    },
    [updateConsignees.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    [getConsignee.pending]: (state, action) => {
      state.loader = false;
    },
    [getConsignee.fulfilled]: (state, action) => {
      state.loader = false;
      state.consigneeFind = action.payload;
    },
    [getConsignee.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
  },
});

export default consigneeReducer.reducer;
