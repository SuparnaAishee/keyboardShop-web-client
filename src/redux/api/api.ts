import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export interface Product {
  _id: string;
  image: string;
  name: string;
  brand:string;
  description: string;
  price: number;
  ratings: number;
  category: string;
  tags: string[];
  variants: { type: string; value: string }[];
  inventory: { quantity: number; inStock: boolean };
}
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    // getProductById: builder.query({
    //   query: (id) => `api/products/${id}`,
    // }),
    // // Add other endpoints as needed
  }),
});
 export const { useGetProductsQuery }=baseApi;