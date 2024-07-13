import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";

import { NavLink } from "react-router-dom";
import { decrementQuantity, incrementQuantity, removeFromCart, setTotalAmount, toggleSelectAll, toggleSelectItem } from "@/redux/features/slices/cartSlice";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const totalAmount = useSelector((state: RootState) => state.cart.totalAmount); 
  const dispatch = useDispatch();

  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleToggleSelect = (id: string) => {
    dispatch(toggleSelectItem(id));
  };

  const handleToggleSelectAll = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(toggleSelectAll(event.target.checked));
  };

  const calculateTotalPrice = () => {
    const newTotal = cartItems
      .filter((item) => item.selected)
      .reduce((total, item) => total + item.price * item.quantity, 0);

    dispatch(setTotalAmount(newTotal));
    return newTotal.toFixed(2);
  };

  useEffect(() => {
    calculateTotalPrice();
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        event.preventDefault();
        event.returnValue =
          "You have items in your cart. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          onChange={handleToggleSelectAll}
          className="mr-2"
        />
        <span>Select All</span>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded shadow-md"
            >
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => handleToggleSelect(item.id)}
                className="mr-4"
              />
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.brand}</p>
                <p className="text-gray-800 font-bold">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="bg-gray-300 p-1 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="bg-gray-300 p-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div>No items in cart</div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="mt-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            Total: ${calculateTotalPrice()}
          </div>
          <NavLink to="/checkout">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
              Proceed to Checkout
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default CartPage;

