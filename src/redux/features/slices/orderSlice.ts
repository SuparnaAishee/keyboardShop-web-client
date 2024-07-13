import { Order } from "@/redux/api/orderApi";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface OrdersState {
  orders: Order[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
 
}

const initialState: OrdersState = {
  orders: [],
  status: "idle",
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload);
    },
    setStatus(
      state,
      action: PayloadAction<"idle" | "loading" | "succeeded" | "failed">
    ) {
      state.status = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  
  },
});

export const { addOrder, setStatus, setError } = ordersSlice.actions;

export default ordersSlice.reducer;
