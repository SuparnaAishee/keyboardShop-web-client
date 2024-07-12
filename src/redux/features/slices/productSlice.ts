// src/redux/productsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string; // Use the correct field from your data, e.g., MongoDB `_id`
  name: string;
  price: number;
  image: string;
  brand: string;
  ratings: number;
  // Include other fields if needed
}

interface ProductsState {
  products: Product[];
  status: "idle" | "loading" | "failed";
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
     state.products = action.payload;
     
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
