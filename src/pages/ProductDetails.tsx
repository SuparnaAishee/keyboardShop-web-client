import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/api/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/slices/cartSlice";

const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const {
    data: productData,
    isLoading,
    isError,
  } = useGetProductByIdQuery(productId || "");
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading product</p>;
  if (!productData || !productData.data) return <p>No product found</p>;

  const product = productData.data;
  const { inventory } = product;
  const { quantity = 0, inStock = false } = inventory || {};

  const handleAddToCart = () => {
    if (inStock && quantity > 0) {
      dispatch(
        addToCart({
          id: product._id,
          name: product.name,
          price: product.price,
          availableQuantity: quantity,
        })
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 pt-20">
        <h1 className="text-blue-400 font-bold text-2xl text-center">Booking Details</h1>
      <div className="flex justify-center p-6 bg-gray-800 ">
        <div className="max-w-4xl  bg-white shadow-lg rounded-lg overflow-hidden flex">
          <div className="w-1/2 p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-700 mb-1">Brand: {product.brand}</p>
              <p className="text-gray-700 mb-1">
                Available Quantity: {quantity}
              </p>
              <p className="text-xl font-bold mb-2">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-yellow-500 mb-2">
                Rating: {"★".repeat(Math.round(product.ratings))}
              </p>
              <p className="text-gray-600 mb-4">{product.description}</p>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={quantity === 0}
              className={`mt-4 py-2 px-4 text-white rounded-lg transition duration-200 ${
                quantity > 0
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-blue-400 cursor-not-allowed"
              }`}
            >
              {quantity > 0 ? "Add To Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
