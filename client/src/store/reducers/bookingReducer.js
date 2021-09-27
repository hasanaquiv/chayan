import { createSlice } from "@reduxjs/toolkit";
import { bookingAction, getAllBookings, getAllBooking} from "../actions/bookingAction";

const bookingReducer = createSlice({
  name: "booking",
  initialState: {
    loader: false,
    error: {},
    response: {},
    bookings:{},
    booking:{}
  },
  extraReducers: {
    [bookingAction.pending]: (state, action) => {
      state.loader = true;
    },
    [bookingAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.response = action.payload;
    },
    [bookingAction.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
    [getAllBookings.pending]: (state, action) => {
      state.loader = true;
    },
    [getAllBookings.fulfilled]: (state, action) => {
      state.loader = false;
      state.bookings = action.payload;
    },
    [getAllBookings.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
    [getAllBooking.pending]: (state, action) => {
      state.loader = true;
    },
    [getAllBooking.fulfilled]: (state, action) => {
      state.loader = false;
      state.booking = action.payload;
    },
    [getAllBooking.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
  },
});

export default bookingReducer.reducer;
