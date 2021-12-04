import { createSlice } from "@reduxjs/toolkit";
import {getAllBillings,getBilling} from "../actions/billingAction";


const billingReducer = createSlice({
  name: "billings",
  initialState: {
    loader: false,
    error: {},
    response: {},
    billings: {},
    billing: {}, 
  },
  extraReducers: {
      [getAllBillings.pending]:(state, action) => { 
          state.loader = true;
      },
      [getAllBillings.fulfilled]:(state, action) => {
          state.loader = false;
          state.billings = action.payload;
      },
      [getAllBillings.rejected]:(state, action) => {
          state.loader = false;
          state.error = action.payload;
      },
      [getBilling.pending]:(state, action) => {
        state.loader = true;
    },
    [getBilling.fulfilled]:(state, action) => {
        state.loader = false;
        state.billing = action.payload;
    },
    [getBilling.rejected]:(state, action) => {
        state.loader = false;
        state.error = action.payload;
    },
  }
});

export default billingReducer.reducer;
