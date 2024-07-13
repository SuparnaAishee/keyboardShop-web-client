import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useCreateOrderMutation } from "@/redux/api/orderApi";
import {
  addOrder,
  setError,
  setStatus,
} from "@/redux/features/slices/orderSlice";

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
        productId: item._id,
        name: item.name, 
        quantity: item.quantity,
        price: item.price,
      })),
    }));
  }, [cartItems]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderDetails((prev) => ({
      ...prev,
      user: { ...prev.user, [name]: value },
    }));
  };

  const handlePlaceOrder = async () => {
    if (!orderDetails.user.email || !orderDetails.user.address) {
      console.error("User email and address are required");
      return;
    }

    console.log("Order Details:", orderDetails);

    dispatch(setStatus("loading"));

    try {
      const newOrder = await createOrder(orderDetails).unwrap();
      dispatch(addOrder(newOrder));
      dispatch(setStatus("succeeded"));
      window.location.href = "/success";
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      console.error("Order creation failed:", errorMessage); // Log error details
      dispatch(setError(errorMessage));
      dispatch(setStatus("failed"));
    }
  };

  return (
    <div className="p-4 flex justify-center items-center h-screen">
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
        <div className="text-xl font-bold mb-4">
          Total Amount: ${orderDetails.totalAmount.toFixed(2)}
        </div>
        <button
          onClick={handlePlaceOrder}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
          disabled={isLoading}
        >
          Place Order
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
