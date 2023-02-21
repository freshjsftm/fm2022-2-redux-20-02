import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    //methods
    increment(state, action) {
      console.log("state", state);
      console.log("action", action);
    },
    decrement(state, action) {
      console.log("state", state);
      console.log("action", action);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
