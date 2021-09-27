import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const consigneeAction = createAsyncThunk("consignee", async (consignee) => {
  try {
    const { data } = await axios("/api/consignee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(consignee),
    });

    return data;
  } catch (error) {
    return error;
  }
});

const getAllConsignees = createAsyncThunk("getAllConsignee", async () => {
  try {
    const { data } = await axios.get(`/api/consignee`);
    return data;
  } catch (error) {
    return error;
  }
});

export { consigneeAction, getAllConsignees };
