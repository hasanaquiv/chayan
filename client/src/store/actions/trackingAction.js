import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const trackingAction = createAsyncThunk("trackingAction", async (tracking) => {
  try {
    const { data } = await axios("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: tracking,
    });

    return { data };
  } catch (error) {
    return error;
  }
});

const getAllTrackings = createAsyncThunk("trackings", async (search) => {
  try {
    const { data } = await axios.get(`/api/track/${search}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const getTracking = createAsyncThunk("tracking", async (id) => {
  try {
    const { data } = await axios.get(`/api/track/${id}`);
    return data.response[0];
  } catch (error) {
    return error;
  }
});

const getUserTrack = createAsyncThunk("userTracking", async (search) => {
  try {
    const { data } = await axios.get(`/api/user-track/${search}`);
    return data.response[0];
  } catch (error) {
    return error;
  }
});
 
const updateTrackingAction = createAsyncThunk(
  "updateTracking",
  async (tracking) => {
    const { vehicleNumber, manifestNUmbers, locations } = tracking;
    try {
      const { data } = await axios(`/api/track/${vehicleNumber}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        data: { manifestNUmbers, locations },
      });
      return data;
    } catch (error) {
      return error;
    }
  }
);

export { trackingAction, getAllTrackings, getTracking, updateTrackingAction, getUserTrack };
