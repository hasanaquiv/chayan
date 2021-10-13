import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const podAction = createAsyncThunk("pod", async (pod) => {
  const { data } = await axios("/api/pod", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(pod),
  });
  return data;
});

const getAllPods = createAsyncThunk("getAllPods", async (search) => {
  try {
    const { data } = await axios.get(`/api/pod/${search}`);
    return data;
  } catch (error) {
    return error;
  }
});

export { podAction, getAllPods };
