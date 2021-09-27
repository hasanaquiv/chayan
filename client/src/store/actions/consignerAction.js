import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const consignerAction = createAsyncThunk("consigner", async (values) => {
  try {
    const { data } = await axios("/api/consigner", {
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

const getAllConsigners = createAsyncThunk("getAllConsigners", async () => {
  try {
    const { data } = await axios.get("/api/consigner");
    return data;
  } catch (error) {
    return error;
  }
});

const getAllConsigner = createAsyncThunk(
  "getAllConsigner",
  async (consignerCode) => {
    try {
      const { data } = await axios.get(`/api/consigner/CHC1`);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export { consignerAction, getAllConsigners, getAllConsigner };
