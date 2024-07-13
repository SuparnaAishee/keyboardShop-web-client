import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Product, useGetProductsQuery } from "@/redux/api/api";
import { addToCart } from "@/redux/features/slices/cartSlice";

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const { data, error, isLoading } = useGetProductsQuery();
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setProducts(data?.data);
    }
  }, [data]);

  // Handle search and filter logic
  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (filterOption === "low_to_high") {
        return a.price - b.price;
      } else if (filterOption === "high_to_low") {
        return b.price - a.price;
      }
      return 0;
    });

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1, id: product._id }));
  };

  const handleShowDetails = (id: string) => {
    navigate(`/product/${id}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterOption(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchSubmit(e as unknown as React.FormEvent);
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4 bg-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-white text-center pt-6 pb-4">
        Choose Your Keyboard from Keydom
      </h1>
      <div className="flex flex-col items-center mb-4">
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center w-full max-w-md"
        >
          <input
            type="text"
            placeholder="Search by name or brand"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyPress}
            className="border p-2 rounded-l w-full bg-gray-200"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </form>
        <button
          onClick={toggleFilters}
          className="mt-4 p-2  text-white rounded hover:bg-gray-600 transition-colors duration-200 bg-blue-600"
        >
          Filter
        </button>
        {showFilters && (
          <div className="flex flex-col items-center mt-4">
            <label className="flex items-center text-white">
              <input
                type="radio"
                value="low_to_high"
                checked={filterOption === "low_to_high"}
                onChange={handleFilterChange}
                className="mr-2 text-white"
              />
              Price: Low to High
            </label>
            <label className="flex items-center text-white">
              <input
                type="radio"
                value="high_to_low"
                checked={filterOption === "high_to_low"}
                onChange={handleFilterChange}
                className="mr-2 text-white"
              />
              Price: High to Low
            </label>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pl-12 ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item: Product) => (
            <div
              key={item._id}
              className="flex flex-col bg-gray-900  rounded shadow-md p-4 hover:shadow-3xl transition-shadow duration-300 h-[400px] w-[320px]"
            >
              <div className="relative w-full h-48 mb-4 pl-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl text-gray-300 font-semibold mb-2">{item.name}</h3>
                <p className="text-white mb-1">{item.brand}</p>
                <p className="text-white font-bold mb-2">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      className={`w-8 h-10 ${
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
                    onClick={() => handleShowDetails(item._id)}
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

// import { Product, useGetProductsQuery } from "@/redux/api/api";
// import { addToCart } from "@/redux/features/slices/cartSlice";
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const ProductsPage: React.FC = () => {

//   const { data, error, isLoading } = useGetProductsQuery();
//    const [products, setProducts] = useState([]);

//    const dispatch = useDispatch();
//    const navigate = useNavigate();

//   useEffect(() => {
//     if (data) {
//       setProducts(data?.data);
//     }
//   }, [data]);

//  const handleAddToCart = (product: Product) => {
//    dispatch(addToCart({
//      ...product, quantity: 1,
//      id: product._id,
//    }));
//  };

//  const handleShowDetails = (id: string) => {
//    navigate(`/product/${id}`);
//  };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center pt-6 pb-4">
//         Choose Your Keyboard from Keydom
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pl-12 ">
//         {products.length > 0 ? (
//         products.map((item: Product) => (
//             <div
//               key={item._id}
//               className="flex flex-col border rounded shadow-md p-4  hover:shadow-3xl transition-shadow duration-300 h-[400px] w-[320px]"
//             >
//               <div className="relative w-full h-48 mb-4 pl-8 ">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="absolute inset-0 w-full h-full object-cover rounded"
//                 />
//               </div>
//               <div className="flex flex-col flex-grow">
//                 <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
//                 <p className="text-gray-600 mb-1">{item.brand}</p>
//                 <p className="text-gray-800 font-bold mb-2">
//                   ${item.price.toFixed(2)}
//                 </p>
//                 <div className="flex items-center mb-4">
//                   {Array.from({ length: 5 }, (_, index) => (
//                     <svg
//                       key={index}
//                       className={`w-5 h-5 ${
//                         index < Math.round(item.ratings)
//                           ? "text-yellow-400"
//                           : "text-gray-300"
//                       }`}
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.049 2.927C9.29 2.586 9.71 2.586 9.951 2.927l1.285 1.947 2.118.306c.38.055.531.524.257.793l-1.536 1.496.363 2.114c.064.375-.333.66-.66.483L10 9.58 7.681 10.866c-.327.177-.725-.108-.66-.483l.363-2.114-1.536-1.496c-.274-.269-.123-.738.257-.793l2.118-.306 1.285-1.947z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <div className="flex space-x-2 mt-auto">
//                   <button
//                     onClick={() => handleShowDetails(item.id)}
//                     className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200 flex-grow"
//                   >
//                     Show Details
//                   </button>
//                   <button
//                     onClick={() => handleAddToCart(item)}
//                     className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200 flex-grow"
//                   >
//                     Add To Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div>No products found</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;
