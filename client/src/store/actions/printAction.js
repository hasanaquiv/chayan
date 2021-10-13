import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const printAction = createAsyncThunk("Prints", async (prints) => {
  try {
    const { data } = await axios("/api/print-docket", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: prints,
    });
    return data;
  } catch (error) {
    return error;
  }
});

const getPrintInfo = createAsyncThunk("GetPrintInfo", async (id) => {
  const { data } = await axios.get(`/api/print-docket/${id}`);
  return data;
});

export { printAction, getPrintInfo }; 
