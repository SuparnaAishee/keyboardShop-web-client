// src/components/BestSellingProducts.tsx

import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  ratings: number;
  image?: string; // Optional, if you have images
}

const BestSellingProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("src/bestProduct.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product[] = await response.json();
        setProducts(data); // Load all products
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-base-100 mb-8 text-center">
          Best Selling Products
        </h2>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto whitespace-nowrap pb-4 scroll-smooth scroll-container"
          >
            {/* Displaying products */}
            {products.map((product, index) => (
              <div
                key={index}
                className="inline-block bg-white shadow-lg rounded-lg overflow-hidden w-60 mr-4"
              >
                {/* Optional image section */}
                {/* <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                /> */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.brand}</p>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <div className="flex items-center">
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
                  <Link
                    to={`/products/${product.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={scrollLeft}
              className="p-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={scrollRight}
              className="p-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
