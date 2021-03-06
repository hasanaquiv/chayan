const { createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

const getUser = createAsyncThunk("getUser", async (username) => {
  // const { data } = await axios.get(`/api/user/${username}`);
  const token = JSON.parse(localStorage.getItem("authUser"));
  try {
    const { data } = await axios.get(`/api/user/${username}`, {
      headers: { Authorization: token },
    });

    return data.response;
  } catch (err) {
    return err;
  }
});

const getAllUser = createAsyncThunk("getAllUser", async () => {
  try {
    const { data } = await axios.get("/api/user");
    return data.response;
  } catch (error) {
    return error;
  }
});

export { getUser, getAllUser };
