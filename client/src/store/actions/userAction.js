const { createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

const getUser = createAsyncThunk('user', async () => {
  const response = await axios.get("/user");
  
  return response.data; 
});

export { getUser };
