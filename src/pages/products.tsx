import { Product, useGetProductsQuery } from "@/redux/api/api";
import { addToCart } from "@/redux/features/slices/cartSlice";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductsPage: React.FC = () => {
  
  const { data, error, isLoading } = useGetProductsQuery();
   const [products, setProducts] = useState([]);
 
   const dispatch = useDispatch();
   const navigate = useNavigate();




  useEffect(() => {
    if (data) {
      setProducts(data?.data); 
    }
  }, [data]);

 const handleAddToCart = (product: Product) => {
   dispatch(addToCart({
     ...product, quantity: 1,
     id: product._id,
   }));
 };

 const handleShowDetails = (id: string) => {
   navigate(`/product/${id}`);
 };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center pt-6 pb-4">
        Choose Your Keyboard from Keydom
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pl-12 ">
        {products.length > 0 ? (
        products.map((item: Product) => (
            <div
              key={item._id}
              className="flex flex-col border rounded shadow-md p-4  hover:shadow-3xl transition-shadow duration-300 h-[400px] w-[320px]"
            >
              <div className="relative w-full h-48 mb-4 pl-8 ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-1">{item.brand}</p>
                <p className="text-gray-800 font-bold mb-2">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        index < Math.round(item.ratings)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927C9.29 2.586 9.71 2.586 9.951 2.927l1.285 1.947 2.118.306c.38.055.531.524.257.793l-1.536 1.496.363 2.114c.064.375-.333.66-.66.483L10 9.58 7.681 10.866c-.327.177-.725-.108-.66-.483l.363-2.114-1.536-1.496c-.274-.269-.123-.738.257-.793l2.118-.306 1.285-1.947z" />
                    </svg>
                  ))}
                </div>
                <div className="flex space-x-2 mt-auto">
                  <button
                    onClick={() => handleShowDetails(item.id)}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200 flex-grow"
                  >
                    Show Details
                  </button>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200 flex-grow"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
