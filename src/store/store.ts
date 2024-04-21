import { configureStore } from "@reduxjs/toolkit";
import { drugApi } from "src/api/drug";

const store = configureStore({
  reducer: {
    [drugApi.reducerPath]: drugApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(drugApi.middleware),
});

export default store;
