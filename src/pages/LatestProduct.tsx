// import { useGetLatestProductsQuery } from "@/redux/api/api";
// import React from "react";


// const LatestProducts: React.FC = () => {
//   const { data: products, isLoading } = useGetLatestProductsQuery();

//   if (isLoading) return <div>Loading...</div>;
//   // if (error) return <div>Error: {error.message}</div>;

//   return (
//     <section className="bg-gray-800 py-12 ">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-white mb-8 text-center pb-4">
//           Latest Products
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-16">
//           {products && products.length > 0 ? (
//             products.map((product) => (
//               <div
//                 key={product._id}
//                 className="  bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
//                 style={{ maxWidth: "300px" }}
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-32 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {product.name}
//                   </h3>
//                   <p className="text-sm text-gray-600">{product.brand}</p>
//                   <p className="text-sm text-gray-600">
//                     ${product.price.toFixed(2)}
//                   </p>
//                   <div className="flex items-center mb-2">
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
//                   <a
//                     href={`/products/${product._id}`}
//                     className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
//                   >
//                     View Details
//                   </a>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-white">No latest products available.</div>
//           )}
//         </div>
//         <div className="flex justify-center mt-8">
//           <a
//             href="/products"
//             className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
//           >
//             See More
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestProducts;
import React from "react";
import { Link } from "react-router-dom";
import { useGetLatestProductsQuery, Product } from "@/redux/api/api";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/slices/cartSlice";

const LatestProducts: React.FC = () => {
  const { data, error, isLoading } = useGetLatestProductsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const latestProducts: Product[] = data || [];

  const handleAddToCart = (product: Product) => {
    const { quantity = 0, inStock = false } = product.inventory || {};
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
    <div className="p-8 bg-gray-800 pl-20 pr-20 pt-20">
      <h2 className="text-3xl font-semibold mb-4 text-white text-center pb-6">
        Latest Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {latestProducts.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover rounded"
            />
            <h3 className="text-xl font-bold mt-2 text-black">{product.name}</h3>
            <p className="text-gray-700">Brand: {product.brand}</p>
            <p className="text-lg font-bold text-black">${product.price.toFixed(2)}</p>
            <p className="text-yellow-500">
              Rating: {"★".repeat(Math.round(product.ratings))}
            </p>
            <div className="mt-4 flex justify-between">
              <Button
                onClick={() => handleAddToCart(product)}
                disabled={
                  !(
                    product.inventory?.inStock &&
                    product.inventory?.quantity > 0
                  )
                }
                className={`py-2 px-4 text-white rounded-lg transition duration-200 ${
                  product.inventory?.inStock
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-blue-400 cursor-not-allowed"
                }`}
              >
                {product.inventory?.quantity > 0
                  ? "Add to Cart"
                  : "Out of Stock"}
              </Button>
              <Link to={`/products/${product._id}`}>
                <Button className="bg-gray-500 hover:bg-gray-700 transition duration-200">
                  See Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link to="/products">
          <Button className="bg-blue-600 hover:bg-blue-700 transition duration-200">
            See More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;
