import { useGetLatestProductsQuery } from "@/redux/api/api";
import React from "react";


const LatestProducts: React.FC = () => {
  const { data: products, error, isLoading } = useGetLatestProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="bg-gray-800 py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center pb-4">
          Latest Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-16">
          {products && products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="  bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                style={{ maxWidth: "300px" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.brand}</p>
                  <p className="text-sm text-gray-600">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < product.ratings
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-9.19-.79L12 2 11.19 8.45 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <a
                    href={`/products/${product._id}`}
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white">No latest products available.</div>
          )}
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="/products"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
