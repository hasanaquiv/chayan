import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const odrAction = createAsyncThunk("odr", async (odr) => {
  try {
    const { data } = await axios("/api/odr", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      data: JSON.stringify(odr),
    });
    return data;
  } catch (error) {
    return error;
  }
});

const getAllOdrs = createAsyncThunk("getAllOdrs", async (search) => {
  try {
    const { data } = await axios.get(`/api/odrs/${search}`); 
    return data;
  } catch (error) {
    return error;
  }
});

const getOdr = createAsyncThunk("getOdr", async (id) => {
  try {
    const { data } = await axios.get(`/api/odr/${id}`);
    console.log(data);
    return data.response;
  } catch (error) {
    return error;
  }
});

export { odrAction, getAllOdrs,getOdr };
