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

const getAllTrackings = createAsyncThunk("trackings", async () => {
  try {
    const { data } = await axios.get("/api/track");
    return { data };
  } catch (error) {
    console.log(error);
  }
});

const getTracking = createAsyncThunk("tracking", async (id) => {
  try {
    const { data } = await axios.get(`/api/track/${id}`);
    return data.response;
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

export { trackingAction, getAllTrackings, getTracking, updateTrackingAction };
