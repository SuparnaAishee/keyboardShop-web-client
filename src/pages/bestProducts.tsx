// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";

// interface Product {
//   id: number;
//   name: string;
//   brand: string;
//   price: number;
//   ratings: number;
//   image?: string;
// }

// const productData: Product[] = [
//   {
//     id: 1,
//     name: "Product 1",
//     brand: "Brand A",
//     price: 29.99,
//     ratings: 4.5,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdj9Zz_wiq-g97Io9L2MLnfb8uc9Q6c4kQzA&s",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     brand: "Brand B",
//     price: 39.99,
//     ratings: 3.8,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdj9Zz_wiq-g97Io9L2MLnfb8uc9Q6c4kQzA&s",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     brand: "Brand A",
//     price: 49.99,
//     ratings: 4.2,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdj9Zz_wiq-g97Io9L2MLnfb8uc9Q6c4kQzA&s",
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     brand: "Brand C",
//     price: 59.99,
//     ratings: 4.9,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdj9Zz_wiq-g97Io9L2MLnfb8uc9Q6c4kQzA&s",
//   },
//   {
//     id: 5,
//     name: "Product 5",
//     brand: "Brand B",
//     price: 69.99,
//     ratings: 4.0,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdj9Zz_wiq-g97Io9L2MLnfb8uc9Q6c4kQzA&s",
//   },
//   {
//     id: 6,
//     name: "Product 6",
//     brand: "Brand B",
//     price: 69.99,
//     ratings: 4.0,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdj9Zz_wiq-g97Io9L2MLnfb8uc9Q6c4kQzA&s",
//   },
//   {
//     id: 7,
//     name: "Product 7",
//     brand: "Brand B",
//     price: 69.99,
//     ratings: 4.0,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdj9Zz_wiq-g97Io9L2MLnfb8uc9Q6c4kQzA&s",
//   },
//   {
//     id: 8,
//     name: "Product 8",
//     brand: "Brand B",
//     price: 69.99,
//     ratings: 4.0,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdj9Zz_wiq-g97Io9L2MLnfb8uc9Q6c4kQzA&s",
//   },
//   {
//     id: 9,
//     name: "Product 9",
//     brand: "Brand B",
//     price: 69.99,
//     ratings: 4.0,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdj9Zz_wiq-g97Io9L2MLnfb8uc9Q6c4kQzA&s",
//   },
//   {
//     id: 10,
//     name: "Product 10",
//     brand: "Brand B",
//     price: 69.99,
//     ratings: 4.0,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdj9Zz_wiq-g97Io9L2MLnfb8uc9Q6c4kQzA&s",
//   },
// ];

// const BestSellingProducts: React.FC = () => {
//   const [products] = useState<Product[]>(productData);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="bg-gray-900 py-12">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-base-100 mb-8 text-center">
//           Best Selling Products
//         </h2>
//         <div className="relative">
//           <div
//             ref={scrollContainerRef}
//             className="overflow-x-auto whitespace-nowrap pb-4 scroll-smooth scroll-container"
//           >
//             {products.map((product, index) => (
//               <div
//                 key={index}
//                 className="inline-block bg-white shadow-lg rounded-lg overflow-hidden w-60 mr-4"
//               >
//                 {product.image && (
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-40 object-cover"
//                   />
//                 )}
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {product.name}
//                   </h3>
//                   <p className="text-gray-600">{product.brand}</p>
//                   <p className="text-gray-600">${product.price.toFixed(2)}</p>
//                   <div className="flex items-center">
//                     {[...Array(5)].map((_, i) => (
//                       <svg
//                         key={i}
//                         className={`w-5 h-5 ${
//                           i < product.ratings
//                             ? "text-yellow-400"
//                             : "text-gray-300"
//                         }`}
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-9.19-.79L12 2 11.19 8.45 2 9.24l5.46 4.73L5.82 21z" />
//                       </svg>
//                     ))}
//                   </div>
//                   <Link
//                     to={`/products/${product.id}`}
//                     className="text-blue-500 hover:underline"
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="absolute inset-y-0 left-0 flex items-center">
//             <button
//               onClick={scrollLeft}
//               className="p-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center">
//             <button
//               onClick={scrollRight}
//               className="p-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestSellingProducts;
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/api"; // Assuming you're using RTK Query to fetch products
import { addToCart } from "../redux/features/slices/cartSlice";

// Define the structure for the product data
export interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  ratings: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

const BestSellingProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { data, isLoading } = useGetProductsQuery(); // Fetching products from your backend
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch and set the top 6 products
  useEffect(() => {
    if (data) {
      setProducts(data?.data.slice(0, 6));
    }
  }, [data]);

  // Handle adding a product to the cart
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({
      ...product, quantity: 1, id: product._id,
      inventory: {
        quantity: 0,
        inStock: false
      }
    }));
  };

  // Handle navigation to product details
  const handleShowDetails = (id: string) => {
    navigate(`/product/${id}`);
  };

  // Loading state
  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Best Selling Products
        </h2>
        <div className="relative">
          <div className="overflow-x-auto whitespace-nowrap pb-4 scroll-smooth scroll-container">
            {/* Display products in a horizontal scroll */}
            {products.map((product, index) => (
              <div
                key={index}
                className="inline-block bg-white shadow-lg rounded-lg overflow-hidden w-75 mr-4"
              >
                {/* Product Image */}
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-4">
                  {/* Product Name, Brand, Price */}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.brand}</p>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>

                  {/* Ratings */}
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

                  {/* Buttons for 'View Details' and 'Add to Cart' */}
                  <div className="flex space-x-2 mt-auto">
                    <button
                      onClick={() => handleShowDetails(product._id)}
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200 flex-grow"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200 flex-grow"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button className="p-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
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
            <button className="p-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
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
