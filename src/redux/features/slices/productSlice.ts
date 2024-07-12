// src/redux/productsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string; 
  name: string;
  price: number;
  image: string;
  brand: string;
  ratings: number;
 
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
      state.filteredProducts = action.payload; 
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      
      const searchTerm = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.brand.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { setProducts, setSearchTerm } = productsSlice.actions;
export default productsSlice.reducer;

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     setProducts(state, action: PayloadAction<Product[]>) {
//      state.products = action.payload;
     
//     },
//   },
// });

// export const { setProducts } = productsSlice.actions;
// export default productsSlice.reducer;
