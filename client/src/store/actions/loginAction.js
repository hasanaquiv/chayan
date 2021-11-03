const { createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

const loginAction = createAsyncThunk("Login", async (values) => {
  try {
    const { data } = await axios("/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    });
    localStorage.setItem("authUser", JSON.stringify(data.token));
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

const passwordChange = createAsyncThunk("passwordChange", async (value) => {
  const {id, password} = value
  try {
    const { data } = await axios(`/api/password/${id}`, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
      },
      data: {"password":password},
    });
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
});

export { loginAction, logoutAction, auth, passwordChange };
