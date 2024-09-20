import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  quantity: string | number | readonly string[] | undefined;
  _id: string;
  image: string;
  name: string;
  brand: string;
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
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    // baseUrl: 'https://keyboard-web-server.vercel.app/api',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<{ data: Product[] }, void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => ({
        url: `products/${id}`,
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
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useCreateProductMutation,
  useGetLatestProductsQuery,
} = baseApi;
