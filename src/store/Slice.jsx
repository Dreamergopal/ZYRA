import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const Slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.status = true), (state.userData = action.payload);
    },
    logout: (state) => { // logout me koi v action ka need nhi hota h.
      (state.status = false), (state.userData = null);
    },
  },
});

export default Slice;
export const { login, logout } = Slice.actions;
