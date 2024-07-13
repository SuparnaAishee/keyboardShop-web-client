 import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
import cartReducer from "../redux/features/slices/cartSlice"
import productReducer from '../redux/features/slices/productSlice'
import ordersReducer from '../redux/features/slices/orderSlice'
import { ordersApi } from "./api/orderApi";
export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    orders: ordersReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, ordersApi.middleware),
});
 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
