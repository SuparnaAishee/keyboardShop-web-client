import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetProductsQuery } from "@/redux/api/api";
import { useEffect, useState } from "react";

const ManageProduct = () => {
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
    <div className="bg-gray-800">
      <h1 className="text-3xl font-semibold mb-4 text-center text-white pt-8">
        Product Management
      </h1>
      <div className="pl-20 pr-20">
        <Table className="text-white">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-white">Name</TableHead>
              <TableHead className="text-white">Brand</TableHead>
              <TableHead className="text-white">Price</TableHead>
              <TableHead className="text-right text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.length > 0 ? (
              products.map((item) => (
                <TableRow key={item.id}>
                  {" "}
                  {/* Assuming id is a unique identifier for each product */}
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.brand}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell className="text-right">
                    <Button>del</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="4" className="text-center">
                  No products available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageProduct;

// import { Button } from "@/components/ui/button";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { useGetProductsQuery } from "@/redux/api/api";
// import { useEffect, useState } from "react";

// const ManageProduct =()=>{
//   const { data, error, isLoading } = useGetProductsQuery();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     if (data) {
//       setProducts(data?.data); // Set products to data.data array
//     }
//   }, [data]);

//   console.log("Fetched products:", products);
//   console.log("Query data:", data);
//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div className="bg-gray-800">
//       <h1 className="text-3xl font-semibold mb-4 text-center text-white pt-8">
//         Product Management{" "}
//       </h1>
//       <div className="pl-20 pr-20">
//         <Table className="text-white ">
//           <TableHeader>
//             <TableRow>
//               <TableHead className="w-[100px] text-white">Name</TableHead>
//               <TableHead className="text-white">Brand</TableHead>
//               <TableHead className="text-white">Price</TableHead>
//               <TableHead className="text-right text-white">Actions</TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//              {products.length > 0 ? (
//         products.map((item) => (
//            <TableRow>
//               <TableCell className="font-medium">INV001</TableCell>
//               <TableCell>Paid</TableCell>
//               <TableCell>Credit Card</TableCell>
//               <Button className="text-right">
//               del
//               </Button>
//             </TableRow>
//         )

//       ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   )};
// export default ManageProduct;
