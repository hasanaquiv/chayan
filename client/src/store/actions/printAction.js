import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const printAction = createAsyncThunk("Prints", async () => {});

const getPrintInfo = createAsyncThunk("GetPrintInfo", async (id) => {
  const { data } = await axios.get(`/api/print-docket/${id}`);
  return data;
});

export { printAction, getPrintInfo };
