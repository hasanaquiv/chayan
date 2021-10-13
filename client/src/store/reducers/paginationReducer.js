import { createSlice } from "@reduxjs/toolkit";

const paginationReducer = createSlice({
  name: "pagination",
  initialState: {
    pagination: "",
  },
  reducers: {
    checkPagination: (state, action) => {
        console.log(action)
      state.pagination = action.payload;
    },
  },
});

export const {checkPagination} = paginationReducer.actions
export default paginationReducer.reducer;
