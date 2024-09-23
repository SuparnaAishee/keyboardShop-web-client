// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
// import { useCreateOrderMutation } from "@/redux/api/orderApi";
// import {
//   addOrder,
//   setError,
//   setStatus,
// } from "@/redux/features/slices/orderSlice";

// interface OrderDetails {
//   user: {
//     name: string;
//     email: string;
//     phone: string;
//     address: string;
//   };
//   items: {
//     productId: string;
//     name: string;
//     quantity: number;
//     price: number;
//   }[];
//   paymentMethod: string;
//   totalAmount: number;
// }

// const CheckoutPage: React.FC = () => {
//   const dispatch = useDispatch();
//   const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
//   const cartItems = useSelector((state: RootState) => state.cart.items);

//   const [createOrder, { isLoading, isError, error }] = useCreateOrderMutation();

//   const [orderDetails, setOrderDetails] = useState<OrderDetails>({
//     user: { name: "", email: "", phone: "", address: "" },
//     items: [],
//     paymentMethod: "cash_on_delivery",
//     totalAmount: totalAmount || 0,
//   });

//   useEffect(() => {
//     setOrderDetails((prev) => ({
//       ...prev,
//       items: cartItems.map((item) => ({
//         productId: item._id,
//         name: item.name, 
//         quantity: item.quantity,
//         price: item.price,
//       })),
//     }));
//   }, [cartItems]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setOrderDetails((prev) => ({
//       ...prev,
//       user: { ...prev.user, [name]: value },
//     }));
//   };

//   const handlePlaceOrder = async () => {
//     if (!orderDetails.user.email || !orderDetails.user.address) {
//       console.error("User email and address are required");
//       return;
//     }

//     console.log("Order Details:", orderDetails);

//     dispatch(setStatus("loading"));

//     try {
//       const newOrder = await createOrder(orderDetails).unwrap();
//       dispatch(addOrder(newOrder));
//       dispatch(setStatus("succeeded"));
//       window.location.href = "/success";
//     } catch (err) {
//       const errorMessage =
//         err instanceof Error ? err.message : "An unexpected error occurred";
//       console.error("Order creation failed:", errorMessage); // Log error details
//       dispatch(setError(errorMessage));
//       dispatch(setStatus("failed"));
//     }
//   };

//   return (
//     <div className="p-4 flex justify-center items-center h-screen bg-gray-800">
//       <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
//         <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//         <div className="mb-4">
//           <label className="block mb-2 font-semibold">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={orderDetails.user.name}
//             onChange={handleChange}
//             className="border rounded p-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 font-semibold">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={orderDetails.user.email}
//             onChange={handleChange}
//             className="border rounded p-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 font-semibold">Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             value={orderDetails.user.phone}
//             onChange={handleChange}
//             className="border rounded p-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 font-semibold">Address</label>
//           <input
//             type="text"
//             name="address"
//             value={orderDetails.user.address}
//             onChange={handleChange}
//             className="border rounded p-2 w-full"
//             required
//           />
//         </div>
//         <div className="text-xl font-bold mb-4">
//           Total Amount: ${orderDetails.totalAmount.toFixed(2)}
//         </div>
//         <button
//           onClick={handlePlaceOrder}
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
//           disabled={isLoading}
//         >
//           Place Order
//         </button>
//         {isError && (
//           <p className="text-red-500 mt-4">
//             {error instanceof Error
//               ? error.message
//               : "An unexpected error occurred"}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
// import { useCreateOrderMutation } from "@/redux/api/orderApi";
// import {
//   addOrder,
//   setError,
//   setStatus,
// } from "@/redux/features/slices/orderSlice";

// interface OrderDetails {
//   user: {
//     name: string;
//     email: string;
//     phone: string;
//     address: string;
//   };
//   items: {
//     productId: string;
//     name: string;
//     quantity: number;
//     price: number;
//   }[];
//   paymentMethod: string;
//   totalAmount: number;
// }

// const CheckoutPage: React.FC = () => {
//   const dispatch = useDispatch();
//   const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
//   const cartItems = useSelector((state: RootState) => state.cart.items);

//   const [createOrder, { isLoading, isError, error }] = useCreateOrderMutation();

//   const [orderDetails, setOrderDetails] = useState<OrderDetails>({
//     user: { name: "", email: "", phone: "", address: "" },
//     items: [],
//     paymentMethod: "cash_on_delivery",
//     totalAmount: totalAmount || 0,
//   });

//   // Populate the items in the order from the cart
//   useEffect(() => {
//     setOrderDetails((prev) => ({
//       ...prev,
//       items: cartItems.map((item) => ({
//         productId: item._id || "", // Ensure you're passing the correct product ID from the cart
//         name: item.name,
//         quantity: item.quantity,
//         price: item.price,
//       })),
//       totalAmount: totalAmount || 0, // Ensure totalAmount is set correctly
//     }));
//   }, [cartItems, totalAmount]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setOrderDetails((prev) => ({
//       ...prev,
//       user: { ...prev.user, [name]: value },
//     }));
//   };

//   const handlePaymentMethodChange = (
//     e: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setOrderDetails((prev) => ({
//       ...prev,
//       paymentMethod: e.target.value,
//     }));
//   };

//   const handlePlaceOrder = async () => {
//     // Debugging: Log the order details
//     console.log("Order Details:", orderDetails);

//     // Validate user details
//     if (
//       !orderDetails.user.name ||
//       !orderDetails.user.email ||
//       !orderDetails.user.address
//     ) {
//       console.error("User name, email, and address are required");
//       return;
//     }

//     // Validate cart items
//     if (orderDetails.items.length === 0) {
//       console.error("No items in the cart");
//       return;
//     }

//     for (const item of orderDetails.items) {
//       if (!item.productId || item.quantity <= 0) {
//         console.error("Invalid item in the cart", item);
//         return;
//       }
//     }

//     dispatch(setStatus("loading"));

//     try {
//       const newOrder = await createOrder(orderDetails).unwrap();
//       console.log("Order placed successfully:", newOrder);
//       dispatch(addOrder(newOrder));
//       dispatch(setStatus("succeeded"));
//       window.location.href = "/success"; // Redirect to success page after order placement
//     } catch (err) {
//       console.error("Order creation failed:", err);
//       const errorMessage =
//         err instanceof Error ? err.message : "An unexpected error occurred";
//       console.error("Error message:", errorMessage);
//       dispatch(setError(errorMessage));
//       dispatch(setStatus("failed"));
//     }
//   };

//   return (
//     <div className="p-4 flex justify-center items-center h-screen bg-gray-800">
//       <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
//         <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//         <div className="mb-4">
//           <label className="block mb-2 font-semibold">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={orderDetails.user.name}
//             onChange={handleChange}
//             className="border rounded p-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 font-semibold">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={orderDetails.user.email}
//             onChange={handleChange}
//             className="border rounded p-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 font-semibold">Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             value={orderDetails.user.phone}
//             onChange={handleChange}
//             className="border rounded p-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 font-semibold">Address</label>
//           <input
//             type="text"
//             name="address"
//             value={orderDetails.user.address}
//             onChange={handleChange}
//             className="border rounded p-2 w-full"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 font-semibold">Payment Method</label>
//           <select
//             value={orderDetails.paymentMethod}
//             onChange={handlePaymentMethodChange}
//             className="border rounded p-2 w-full"
//           >
//             <option value="cash_on_delivery">Cash on Delivery</option>
//             {/* Add more payment methods here if needed */}
//           </select>
//         </div>
//         <div className="text-xl font-bold mb-4">
//           Total Amount: ${orderDetails.totalAmount.toFixed(2)}
//         </div>
//         <button
//           onClick={handlePlaceOrder}
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
//           disabled={isLoading}
//         >
//           {isLoading ? "Placing Order..." : "Place Order"}
//         </button>
//         {isError && (
//           <p className="text-red-500 mt-4">
//             {error instanceof Error
//               ? error.message
//               : "An unexpected error occurred"}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useCreateOrderMutation } from "@/redux/api/orderApi";
import {
  addOrder,
  setError,
  setStatus,
} from "@/redux/features/slices/orderSlice";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
// types.ts
export interface Order {
  email: string;
  products: {
    productId: string;
    quantity: number;
  }[];
  mobileno?: number; // Optional
  address: string;
  price: number;
}


interface OrderDetails {
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  items: {
    productId: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  paymentMethod: string;
  totalAmount: number;
}

const CheckoutPage: React.FC = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [createOrder, { isLoading, isError, error }] = useCreateOrderMutation();

  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    user: { name: "", email: "", phone: "", address: "" },
    items: [],
    paymentMethod: "cash_on_delivery",
    totalAmount: totalAmount || 0,
  });

  useEffect(() => {
    setOrderDetails((prev) => ({
      ...prev,
      items: cartItems.map((item) => ({
        productId: item._id || "",
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount: totalAmount || 0,
    }));
  }, [cartItems, totalAmount]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderDetails((prev) => ({
      ...prev,
      user: { ...prev.user, [name]: value },
    }));
  };

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setOrderDetails((prev) => ({
      ...prev,
      paymentMethod: e.target.value,
    }));
  };

  const handlePlaceOrder = async () => {
    if (
      !orderDetails.user.name ||
      !orderDetails.user.email ||
      !orderDetails.user.address
    ) {
      console.error("User name, email, and address are required");
      return;
    }

    if (orderDetails.items.length === 0) {
      console.error("No items in the cart");
      return;
    }

    for (const item of orderDetails.items) {
      if (!item.productId || item.quantity <= 0) {
        console.error("Invalid item in the cart", item);
        return;
      }
    }

    dispatch(setStatus("loading"));

    const order: Order = {
      email: orderDetails.user.email,
      products: orderDetails.items.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
      mobileno: orderDetails.user.phone
        ? Number(orderDetails.user.phone)
        : undefined,
      address: orderDetails.user.address,
      price: totalAmount,
    };

    try {
      const newOrder = await createOrder(order).unwrap();
      console.log("Order placed successfully:", newOrder);
      dispatch(addOrder(newOrder));
      dispatch(setStatus("succeeded"));

      toast.success("Your order has been placed successfully.", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (err) {
      console.error("Order creation failed:", err);
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      dispatch(setError(errorMessage));
      dispatch(setStatus("failed"));

      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="p-4 flex justify-center items-center h-screen bg-gray-800">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={orderDetails.user.name}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={orderDetails.user.email}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Phone</label>
          <input
            type="tel"
            name="phone"
            value={orderDetails.user.phone}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Address</label>
          <input
            type="text"
            name="address"
            value={orderDetails.user.address}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Payment Method</label>
          <select
            value={orderDetails.paymentMethod}
            onChange={handlePaymentMethodChange}
            className="border rounded p-2 w-full"
          >
            <option value="cash_on_delivery">Cash on Delivery</option>
          </select>
        </div>
        <div className="text-xl font-bold mb-4">
          Total Amount: ${orderDetails.totalAmount.toFixed(2)}
        </div>
        <button
          onClick={handlePlaceOrder}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
          disabled={isLoading}
        >
          {isLoading ? "Placing Order..." : "Place Order"}
        </button>
        {isError && (
          <p className="text-red-500 mt-4">
            {error instanceof Error
              ? error.message
              : "An unexpected error occurred"}
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
