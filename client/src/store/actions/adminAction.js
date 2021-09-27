import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const adminAction = createAsyncThunk("adminAction", async (admin) => {
  try {
    const { data } = await axios("api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      data: admin,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

export { adminAction };
