import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const bookingAction = createAsyncThunk("Booking", async (values) => { 
  try {
    const { data } = await axios("/api/booking", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(values),
    });
    return data;
  } catch (error) {
    return error;
  }
});

const getAllBookings = createAsyncThunk("getAllBookings", async () => {
  try {
    const { data } = await axios.get("/api/booking");
    return data;
  } catch (error) {
    return error;
  }
});

const getAllBooking = createAsyncThunk("getAllBooking", async () => {
  try {
    let id = "613ef790e57b57107ff0f291";
    const { data } = await axios.get(`/api/booking/${id}`);
    return data;
  } catch (error) {
    return error;
  }
});

export { bookingAction, getAllBookings, getAllBooking };
