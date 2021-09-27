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

const getAllManifests = createAsyncThunk("getAllManifests", async () => {
  try {
    const { data } = await axios.get("/api/manifest");
    return data;
  } catch (error) {
    return error;
  }
});

export { manifestAction, getAllManifests };
