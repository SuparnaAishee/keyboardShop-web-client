
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/redux/store.ts";
import { ReactNode } from "react";
interface CartItem {
  image: string | undefined;
  brand: ReactNode;
  _id: string;
  id: string; // or other unique identifier
  name: string;
  price: number;
  quantity: number;
  selected?: boolean; // Add this line if you need it
  inventory: {
    quantity: number; // Backend's inventory quantity
    inStock: number; // Available stock
  };
}


interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}
const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0, 
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.totalQuantity -= state.items[index].quantity;
        state.items.splice(index, 1);
      }
    },
    toggleSelectItem(state, action: PayloadAction<string>) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.selected = !item.selected;
    },
    toggleSelectAll(state, action: PayloadAction<boolean>) {
      state.items.forEach((item) => (item.selected = action.payload));
    },
    setTotalAmount(state, action: PayloadAction<number>) {
      state.totalAmount = action.payload;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  toggleSelectAll,
  toggleSelectItem,
  setTotalAmount
  
} = cartSlice.actions;
export const selectTotalQuantity = (state: RootState) =>
  state.cart.totalQuantity;
export default cartSlice.reducer;
