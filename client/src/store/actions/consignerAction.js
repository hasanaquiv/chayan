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

const getAllConsigners = createAsyncThunk("getAllConsigners", async (search) => {
  try {
    const { data } = await axios.get(`/api/consigners/${search}`);
    return data;
  } catch (error) {
    return error;
  }
});

const getConsigner = createAsyncThunk(
  "getAllConsigner",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/consigner/${id}`); 
      return data.response;
    } catch (error) {
      return error;
    }
  }
);

const getConsignerCode = createAsyncThunk(
  "getConsignerCode",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/consigner-code/${id}`); 
      return data.response;
    } catch (error) {
      return error;
    }
  }
);

export { consignerAction, getAllConsigners, getConsigner, getConsignerCode };
