import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const billingAction = createAsyncThunk("Billings", async () => {});

const getAllBillings = createAsyncThunk("GetAllBillings", async () => {
  try {
    const { data } = await axios.get("/api/billing");
    return data;
  } catch (error) {
    return error;
  }
});

const getBilling = createAsyncThunk("getBilling", async (id) => {
  try {
    const { data } = await axios.get(`/api/billing/${id}`);
    return data;
  } catch (error) {
    return error;
  }
});

export { billingAction, getAllBillings, getBilling };
