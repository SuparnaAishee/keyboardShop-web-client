// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/redux/store";

// import { NavLink } from "react-router-dom";
// import { decrementQuantity, incrementQuantity, removeFromCart, setTotalAmount, toggleSelectAll, toggleSelectItem } from "@/redux/features/slices/cartSlice";

// const CartPage: React.FC = () => {
//   const cartItems = useSelector((state: RootState) => state.cart.items);
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   // const totalAmount = useSelector((state: RootState) => state.cart.totalAmount); 
//   const dispatch = useDispatch();

//   const handleIncrement = (id: string) => {
//     dispatch(incrementQuantity(id));
//   };

//   const handleDecrement = (id: string) => {
//     dispatch(decrementQuantity(id));
//   };

//   const handleRemove = (id: string) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleToggleSelect = (id: string) => {
//     dispatch(toggleSelectItem(id));
//   };

//   const handleToggleSelectAll = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     dispatch(toggleSelectAll(event.target.checked));
//   };

//   const calculateTotalPrice = () => {
//     const newTotal = cartItems
//       .filter((item) => item.selected)
//       .reduce((total, item) => total + item.price * item.quantity, 0);

//     dispatch(setTotalAmount(newTotal));
//     return newTotal.toFixed(2);
//   };

//   useEffect(() => {
//     calculateTotalPrice();
//     const handleBeforeUnload = (event: BeforeUnloadEvent) => {
//       if (cartItems.length > 0) {
//         event.preventDefault();
//         event.returnValue =
//           "You have items in your cart. Are you sure you want to leave?";
//       }
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [cartItems]);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       <div className="flex items-center mb-4">
//         <input
//           type="checkbox"
//           onChange={handleToggleSelectAll}
//           className="mr-2"
//         />
//         <span>Select All</span>
//       </div>
//       <div className="grid grid-cols-1 gap-4">
//         {cartItems.length > 0 ? (
//           cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between border p-4 rounded shadow-md"
//             >
//               <input
//                 type="checkbox"
//                 checked={item.selected}
//                 onChange={() => handleToggleSelect(item.id)}
//                 className="mr-4"
//               />
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-24 h-24 object-cover"
//               />
//               <div className="flex-1 ml-4">
//                 <h3 className="text-xl font-semibold">{item.name}</h3>
//                 <p className="text-gray-600">{item.brand}</p>
//                 <p className="text-gray-800 font-bold">
//                   ${item.price.toFixed(2)}
//                 </p>
//                 <div className="flex items-center mt-2">
//                   <button
//                     onClick={() => handleDecrement(item.id)}
//                     className="bg-gray-300 p-1 rounded"
//                   >
//                     -
//                   </button>
//                   <span className="mx-2">{item.quantity}</span>
//                   <button
//                     onClick={() => handleIncrement(item.id)}
//                     className="bg-gray-300 p-1 rounded"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <button
//                 onClick={() => handleRemove(item.id)}
//                 className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           ))
//         ) : (
//           <div>No items in cart</div>
//         )}
//       </div>
//       {cartItems.length > 0 && (
//         <div className="mt-4 flex justify-between items-center">
//           <div className="text-xl font-bold">
//             Total: ${calculateTotalPrice()}
//           </div>
//           <NavLink to="/checkout">
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
//               Proceed to Checkout
//             </button>
//           </NavLink>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/redux/store";
// import {
//   decrementQuantity,
//   incrementQuantity,
//   removeFromCart,
//   setTotalAmount,
//   toggleSelectAll,
//   toggleSelectItem,
// } from "@/redux/features/slices/cartSlice";

// const CartPage: React.FC = () => {
//   const cartItems = useSelector((state: RootState) => state.cart.items);
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // Use navigate hook

//   const handleIncrement = (id: string) => {
//     dispatch(incrementQuantity(id));
//   };

//   const handleDecrement = (id: string) => {
//     dispatch(decrementQuantity(id));
//   };

//   const handleRemove = (id: string) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleToggleSelect = (id: string) => {
//     dispatch(toggleSelectItem(id));
//   };

//   const handleToggleSelectAll = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     dispatch(toggleSelectAll(event.target.checked));
//   };

//   const calculateTotalPrice = () => {
//     const newTotal = cartItems
//       .filter((item) => item.selected)
//       .reduce((total, item) => total + item.price * item.quantity, 0);
//     dispatch(setTotalAmount(newTotal));
//     return newTotal.toFixed(2);
//   };

//   useEffect(() => {
//     calculateTotalPrice();
//     const handleBeforeUnload = (event: BeforeUnloadEvent) => {
//       if (cartItems.length > 0) {
//         event.preventDefault();
//         event.returnValue =
//           "You have items in your cart. Are you sure you want to leave?";
//       }
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [cartItems]);

//   const handleCheckout = () => {
//     // Filter selected cart items and pass their IDs and quantities to the checkout page
//     const selectedItems = cartItems
//       .filter((item) => item.selected)
//       .map((item) => ({
//         id: item.id,
//         quantity: item.quantity,
//       }));

//     navigate("/checkout", { state: { selectedItems } });
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       <div className="flex items-center mb-4">
//         <input
//           type="checkbox"
//           onChange={handleToggleSelectAll}
//           className="mr-2"
//         />
//         <span>Select All</span>
//       </div>
//       <div className="grid grid-cols-1 gap-4">
//         {cartItems.length > 0 ? (
//           cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between border p-4 rounded shadow-md"
//             >
//               <input
//                 type="checkbox"
//                 checked={item.selected}
//                 onChange={() => handleToggleSelect(item.id)}
//                 className="mr-4"
//               />
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-24 h-24 object-cover"
//               />
//               <div className="flex-1 ml-4">
//                 <h3 className="text-xl font-semibold">{item.name}</h3>
//                 <p className="text-gray-600">{item.brand}</p>
//                 <p className="text-gray-800 font-bold">
//                   ${item.price.toFixed(2)}
//                 </p>
//                 <div className="flex items-center mt-2">
//                   <button
//                     onClick={() => handleDecrement(item.id)}
//                     className="bg-gray-300 p-1 rounded"
//                   >
//                     -
//                   </button>
//                   <span className="mx-2">{item.quantity}</span>
//                   <button
//                     onClick={() => handleIncrement(item.id)}
//                     className="bg-gray-300 p-1 rounded"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <button
//                 onClick={() => handleRemove(item.id)}
//                 className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           ))
//         ) : (
//           <div>No items in cart</div>
//         )}
//       </div>
//       {cartItems.length > 0 && (
//         <div className="mt-4 flex justify-between items-center">
//           <div className="text-xl font-bold">
//             Total: ${calculateTotalPrice()}
//           </div>
//           <button
//             onClick={handleCheckout}
//             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useNavigate } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  setTotalAmount,
  toggleSelectAll,
  toggleSelectItem,
} from "@/redux/features/slices/cartSlice";
import { toast } from "react-toastify"; // Ensure you have this import

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCheckoutDisabled, setIsCheckoutDisabled] = useState(false);

  const handleIncrement = (id: string, availableQuantity: number) => {
    const currentItem = cartItems.find((item) => item.id === id);
    if (currentItem) {
      if (currentItem.quantity < availableQuantity) {
        dispatch(incrementQuantity(id));
      } else {
        toast.error(
          `You cannot increase the quantity beyond ${availableQuantity}.`
        );
      }
    }
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

  // Function to check if any cart item exceeds available stock
  const checkIfCheckoutShouldBeDisabled = () => {
    const shouldDisable = cartItems.some(
      (item) => item.quantity > item.inventory?.quantity
    );
    setIsCheckoutDisabled(shouldDisable);
  };

  useEffect(() => {
    calculateTotalPrice();
    checkIfCheckoutShouldBeDisabled(); // Check stock when cart updates

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

  const handleCheckout = () => {
    const selectedItems = cartItems
      .filter((item) => item.selected)
      .map((item) => ({
        id: item.id,
        quantity: item.quantity,
      }));

    navigate("/checkout", { state: { selectedItems } });
  };

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
                <p className="text-red-500">
                  {item.quantity > item.inventory?.quantity
                    ? "Exceeds stock!"
                    : ""}
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
                    onClick={() => {
                      const currentItem = cartItems.find(
                        (cartItem) => cartItem.id === item.id
                      );
                      if (
                        currentItem &&
                        currentItem.quantity >= currentItem.inventory?.quantity
                      ) {
                        toast.error(
                          `You cannot increase the quantity beyond ${currentItem.inventory?.quantity}.`
                        );
                      } else {
                        handleIncrement(item.id, item.inventory?.quantity);
                      }
                    }}
                    className="bg-gray-300 p-1 rounded"
                    disabled={
                      !item.inventory?.inStock ||
                      item.quantity >= item.inventory?.quantity
                    }
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
          <button
            onClick={handleCheckout}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
            disabled={isCheckoutDisabled}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
