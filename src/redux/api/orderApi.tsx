

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// interface OrderItem {
//   productId: string;
//   name: string;
//   quantity: number;
//   price: number;
// }


// export interface User {
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
// }

// export interface Order {
//   user: User;
//   items: OrderItem[];
//   paymentMethod: string;
//   totalAmount: number;
//   createdAt?: string; 
// }
// export const ordersApi = createApi({
//   reducerPath: "ordersApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:5000/api",
//     // baseUrl: "https://keyboard-web-server.vercel.app/api",
//   }),
//   endpoints: (builder) => ({
//     createOrder: builder.mutation<Order, Partial<Order>>({
//       query: (orderDetails) => ({
//         url: "orders",
//         method: "POST",
//         body: orderDetails,
//       }),
//     }),
//   }),
// });

// export const { useCreateOrderMutation } = ordersApi;
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
  // Add any additional fields as needed (e.g., orderId, status, etc.)
}

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api", // Update this if needed
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json"); // Set content type
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation<Order, Partial<Order>>({
      query: (orderDetails) => ({
        url: "orders",
        method: "POST",
        body: orderDetails,
      }),
      // Optional: handle success and error states
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { data } = await queryFulfilled;
          // Optionally, dispatch any action with the newly created order
        } catch (error) {
          // Optional: handle errors if necessary
          console.error("Failed to create order: ", error);
        }
      },
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApi;
