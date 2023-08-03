import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
// initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// creating async thunk function (outside of the slice)
// create async thunk will automatically dispatch the promise lifecycle methods as actions no need for manual rendering
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.data;
    });
});

// slice
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.loading = false),
        (state.users = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.loading = false),
        (state.users = []),
        (state.error = action.error.message);
    });
  },
});

export default userSlice.reducer;
