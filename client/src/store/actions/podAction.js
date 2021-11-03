import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const podAction = createAsyncThunk("pod", async (formData) => {
  const { data } = await axios("/api/pod", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: formData,
  });
  return data;
});

const getAllPods = createAsyncThunk("getAllPods", async (search) => {
  try {
    const { data } = await axios.get(`/api/pods/${search}`);
    return data;
  } catch (error) {
    return error;
  }
});

const getPod = createAsyncThunk("getPod", async (id) => {
  try {
    const { data } = await axios.get(`/api/pod/${id}`);
    return data.response;
  } catch (error) {
    return error;
  }
});

export { podAction, getAllPods,getPod };
