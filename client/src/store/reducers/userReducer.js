import { createSlice } from "@reduxjs/toolkit";
import { loginAction, auth } from "../actions/loginAction";

const userReducer = createSlice({
  name: "users",
  initialState: {
    users: [],
    loader: false,
    error: {},
    response: {},
    username:{}
  },
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.users = [...state.users, action.payload];
    },
    logoutAction: (state, action) => {
      localStorage.removeItem("authUser");
      state.response = "logout";
    },
  },

  extraReducers: {
    [loginAction.pending]: (state, action) => {
      state.loader = true;
    },
    [loginAction.fulfilled]: (state, action) => {
      state.loader = false;
      state.response = action.payload;
    },
    [loginAction.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
    [auth.pending]: (state, action) => {
      state.loader = true;
    },
    [auth.fulfilled]: (state, action) => {
      state.loader = false;
      state.username = action.payload;
    },
    [auth.rejected]: (state, action) => {
      state.loader = false;
      state.errors = action.payload;
    },
  },
});

export const { addUser, logoutAction} = userReducer.actions;
export default userReducer.reducer;
