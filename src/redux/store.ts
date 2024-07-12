 import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
import cartReducer from "../redux/features/slices/cartSlice"
import productReducer from '../redux/features/slices/productSlice'

export const store = configureStore({
  reducer: {
    product:productReducer,
    cart: cartReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
