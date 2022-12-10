import { configureStore } from "@reduxjs/toolkit";
import { tendersApi } from "./tenders/api";
import { tendersReducer, tendersSlice } from "./tenders/slice";
import { userReducer, userSlice } from "./user/slice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { feedbackApi } from "./feedback/api";

export const store = configureStore({
  reducer: {
    [tendersApi.reducerPath]: tendersApi.reducer,
    [feedbackApi.reducerPath]: feedbackApi.reducer,
    [tendersSlice.name]: tendersReducer,
    [userSlice.name]: userReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(tendersApi.middleware, feedbackApi.middleware)
});

setupListeners(store.dispatch);

export type TendersStoreType = ReturnType<typeof store.getState>
export type TendersStoreDispatch = typeof store.dispatch