import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";

const Store = configureStore({
  reducer: {
    auth: Slice.reducer,
  },
});
 export default Store


 