
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string; 
  name: string;
  price: number;
  image: string;
  brand: string;
  ratings: number;
  quantity:number;
  data:Product[];
 
}

interface ProductsState {
  products: Product[];
  status: "idle" | "loading" | "failed";
  filteredProducts: Product[];
  searchTerm: string;
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  filteredProducts: [],
  searchTerm: "",
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

