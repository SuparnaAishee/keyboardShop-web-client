

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}


export interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Order {
  user: User;
  items: OrderItem[];
  paymentMethod: string;
  totalAmount: number;
  createdAt?: string; 
}
export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    createOrder: builder.mutation<Order, Partial<Order>>({
      query: (orderDetails) => ({
        url: "orders",
        method: "POST",
        body:orderDetails
       
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApi;
