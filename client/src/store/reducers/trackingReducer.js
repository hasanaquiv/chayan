import { createSlice } from "@reduxjs/toolkit";
import { trackingAction, getAllTrackings, getTracking, updateTrackingAction} from "../actions/trackingAction";

const trackingReducer = createSlice({
  name: "trackings",
  initialState: {
    loader: false,
    error: {},
    response: {},
    trackings: {},
    tracking: {},
    trackingResponse:{}
  },
  extraReducers: {
    [trackingAction.pending]: (state, action) => {
      state.loader = true;
    },
    [trackingAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.response = action.payload;
    },
    [trackingAction.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    [getAllTrackings.pending]: (state, action) => {
      state.loader = true;
    },
    [getAllTrackings.fulfilled]: (state, action) => {
      state.loader = false;
      state.trackings = action.payload;
    },
    [getAllTrackings.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    [getTracking.pending]: (state, action) => {
      state.loader = true;
    },
    [getTracking.fulfilled]: (state, action) => {
      state.loader = false;
      state.tracking = action.payload;
    },
    [getTracking.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    [updateTrackingAction.pending]: (state, action) => {
      state.loader = true;
    },
    [updateTrackingAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.trackingResponse = action.payload;
    },
    [updateTrackingAction.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
  },
});

export default trackingReducer.reducer;
