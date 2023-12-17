import { configureStore } from "@reduxjs/toolkit";
import { Calendar } from "./slices/Calendar";

export const store = configureStore({
    reducer: {
        Calendar
    }
  })

  export type State = ReturnType<typeof store.getState>
