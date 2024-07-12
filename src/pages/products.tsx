import { Product, useGetProductsQuery } from "@/redux/api/api";
import React, { useState, useEffect } from "react";

const ProductsPage: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data?.data); // Set products to data.data array
    }
  }, [data]);

  console.log("Fetched products:", products);
  console.log("Query data:", data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Choose Your Keyboard from Keydom
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((item: Product) => (
            <div
              key={item._id}
              className="max-w-sm mx-auto border rounded shadow-md p-4 hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.brand}</p>
              <p className="text-gray-800 font-bold">
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
              <div className="mt-auto">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
                  Show Details
                </button>
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200 ml-2">
                  Add To Cart
                </button>
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
