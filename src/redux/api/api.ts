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
       // query: (searchTerm='') => `products?search=${searchTerm}`,
       query: () => ({
         url: "/products",
         method: "GET",
       }),
     }),
     deleteProduct: builder.mutation<void, string>({
       query: (id) => ({
         url: `products/${id}`,
         method: "DELETE",
       }),
     }),
     updateProduct: builder.mutation<
       Product,
       { id: string; product: Partial<Product> }
     >({
       query: ({ id, product }) => ({
         url: `products/${id}`,
         method: "PUT",
         body: product,
       }),
     }),
     createProduct: builder.mutation<Product, Partial<Product>>({
       query: (product) => ({
         url: "products",
         method: "POST",
         body: product,
       }),
     }),
     getLatestProducts: builder.query<Product[], void>({
       query: () => ({
         url: "products/latest",
         method: "GET",
       }),
     }),
     // getProductById: builder.query({
     //   query: (id) => `api/products/${id}`,
     // }),
     // // Add other endpoints as needed
   }),
 });

 export  const {
   useGetProductsQuery,
   useDeleteProductMutation,
   useUpdateProductMutation,
   useCreateProductMutation,
   useGetLatestProductsQuery
 } = baseApi;
