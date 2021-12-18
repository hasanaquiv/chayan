import { createSlice } from "@reduxjs/toolkit";
import { bookingCashAction, getAllBookings, getAllBooking} from "../actions/bookingActionCash";

const bookingReducer = createSlice({
  name: "bookingCash",
  initialState: {
    loader: false,
    error: {},
    response: {},
    bookings:{},
    booking:{}
  },
  extraReducers: {
    [bookingCashAction.pending]: (state, action) => {
      state.loader = true;
    },
    [bookingCashAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.response = action.payload;
    },
    [bookingCashAction.rejected]: (state, action) => {
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
