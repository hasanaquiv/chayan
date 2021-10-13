import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const manifestAction = createAsyncThunk("manifest", async (manifest) => {
  try {
    const { data } = await axios("/api/manifest", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      data: JSON.stringify(manifest),
    });
    return data;
  } catch (error) {
    return error;
  }
});

const getAllManifests = createAsyncThunk("getAllManifests", async (search) => {
  try {
    const { data } = await axios.get(`/api/manifests/${search}`);
    return data;
  } catch (error) {
    return error;
  }
});

const getManifest = createAsyncThunk("getManifest", async (id) => {
  try {
    const { data } = await axios.get(`/api/manifest/${id}`);
    return data.response;
  } catch (error) {
    return error;
  }
});

export { manifestAction, getAllManifests,getManifest };
