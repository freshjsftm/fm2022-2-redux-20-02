import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [{ id: 1, name: "Tom" }],
    error: null,
    isFetching: false,
  },
  reducers: {},
});

export default usersSlice.reducer;
