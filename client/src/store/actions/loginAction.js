const { createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

const loginAction = createAsyncThunk("Login", async (values) => {
  try {
    const { data } = await axios("/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data:values,
    });
    localStorage.setItem("authUser", JSON.stringify(data.token));
    console.log(data)
    return data;
  } catch (error) {
    return error;
  }
});

const auth = createAsyncThunk("auth", async () => {
  const token = JSON.parse(localStorage.getItem("authUser"));
  try {
    const { data } = await axios.get("/api/home", {
      headers: { Authorization: token },
    });
    return data.user;
  } catch (err) {
    console.log(err); 
  }
});

const logoutAction = createAsyncThunk("Logout", () => {
  localStorage.removeItem("authUser");
});

export { loginAction, logoutAction, auth };
