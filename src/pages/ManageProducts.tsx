
// import { useEffect, useState } from "react";
// import {
//   useGetProductsQuery,
//   useDeleteProductMutation,
//   useUpdateProductMutation,
//   useCreateProductMutation,
//   Product,
// } from "@/redux/api/api";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogFooter,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/components/ui/use-toast";

// const ManageProduct = () => {
//   const { data, error, isLoading } = useGetProductsQuery();
//   const [deleteProduct] = useDeleteProductMutation();
//   const [updateProduct] = useUpdateProductMutation();
//   const [createProduct] = useCreateProductMutation();
//   const { toast } = useToast();

//   const [products, setProducts] = useState<Product[]>([]);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [newProduct, setNewProduct] = useState<Partial<Product>>({
//     name: "",
//     brand: "",
//     price: 0,
//     description: "",
//     image: "",
//     quantity: 0,
//     ratings: 0,
//   });
//   const [open, setOpen] = useState(false); // Modal state

//   useEffect(() => {
//     if (data) {
//       setProducts(data?.data);
//     }
//   }, [data]);

//  const handleDelete = async (id: string) => {
//    try {
//      const response = await deleteProduct(id).unwrap();
//      console.log("Product deleted:", response); // Log to confirm deletion
//      toast({ description: "Product deleted successfully!" }); // Toast should show
//      setProducts(products.filter((product) => product._id !== id)); // Update the product list
//    } catch (err) {
//      console.log("Error while deleting product:", err);
//      toast({
//        description: "Failed to delete product.",
//        variant: "destructive",
//      });
//    }
//  };


//   const handleUpdate = async (id: string, updatedProduct: Partial<Product>) => {
//     try {
//       await updateProduct({ id, product: updatedProduct }).unwrap();
//       toast({ description: "Product updated successfully!" });
//     } catch (err) {
//       toast({
//         description: "Failed to update product.",
//         variant: "destructive",
//       });
//     }
//   };

//   const handleCreate = async (newProduct: Partial<Product>) => {
//     try {
//       await createProduct(newProduct).unwrap();
//       toast({ description: "Product created successfully!" });
//     } catch (err) {
//       toast({
//         description: "Failed to create product.",
//         variant: "destructive",
//       });
//     }
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error)
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     return <div>Error: {(error as any).data?.message || "Unknown error"}</div>;

//   return (
//     <div className="bg-gray-800 p-8 pl-20 pr-20 pt-20">
//       <h1 className="text-3xl font-semibold mb-4 text-center text-white">
//         Product Management
//       </h1>
//       <div className="flex justify-end mb-4">
//         <Button
//           onClick={() => {
//             setSelectedProduct(null);
//             setNewProduct({
//               name: "",
//               brand: "",
//               price: 0,
//               description: "",
//               image: "",
//               quantity: 0,
//               ratings: 0,
//             });
//             setOpen(true); // Open modal for adding product
//           }}
//           className="bg-blue-600 hover:bg-blue-700 transition duration-200"
//         >
//           Add Product
//         </Button>
//       </div>
//       <Table className="text-white bg-gray-600 pl-8 pr-8">
//         <TableHeader>
//           <TableRow >
//             <TableHead className="w-[550px] text-white pl-4">Name</TableHead>
//             <TableHead className="w-[350px] text-white pl-4">Brand</TableHead>
//             <TableHead className="w-[100px] text-white pl-4">Price</TableHead>
//             <TableHead className="text-right text-white">Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {products.length > 0 ? (
//             products.map((item) => (
//               <TableRow
//                 key={item._id}
//                 className="hover:bg-gray-700 transition duration-150"
//               >
//                 <TableCell className="font-medium">{item.name}</TableCell>
//                 <TableCell>{item.brand}</TableCell>
//                 <TableCell>${item.price.toFixed(2)}</TableCell>
//                 <TableCell className="text-right">
//                   <Button
//                     onClick={() => {
//                       setSelectedProduct(item);
//                       setNewProduct(item);
//                       setOpen(true); // Open modal for updating product
//                     }}
//                     className="mr-4"
//                   >
//                     Update
//                   </Button>
//                   <Button
//                     onClick={() => handleDelete(item._id)}
//                     variant="destructive"
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell colSpan={4} className="text-center">
//                 No products available
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>
//               {selectedProduct ? "Update Product" : "Add Product"}
//             </DialogTitle>
//           </DialogHeader>
//           <DialogDescription>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 if (selectedProduct) {
//                   handleUpdate(selectedProduct._id, newProduct);
//                 } else {
//                   handleCreate(newProduct);
//                 }
//                 setOpen(false); // Close modal after submission
//               }}
//             >
//               <div className="mb-4">
//                 <Input
//                   placeholder="Name"
//                   value={newProduct.name}
//                   onChange={(e) =>
//                     setNewProduct({ ...newProduct, name: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="mb-4">
//                 <Input
//                   placeholder="Brand"
//                   value={newProduct.brand}
//                   onChange={(e) =>
//                     setNewProduct({ ...newProduct, brand: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="mb-4">
//                 <Input
//                   placeholder="Price"
//                   type="number"
//                   value={newProduct.price}
//                   onChange={(e) =>
//                     setNewProduct({
//                       ...newProduct,
//                       price: parseFloat(e.target.value),
//                     })
//                   }
//                 />
//               </div>
//               <div className="mb-4">
//                 <Input
//                   placeholder="Description"
//                   value={newProduct.description}
//                   onChange={(e) =>
//                     setNewProduct({
//                       ...newProduct,
//                       description: e.target.value,
//                     })
//                   }
//                 />
//               </div>
//               <div className="mb-4">
//                 <Input
//                   placeholder="Image URL"
//                   value={newProduct.image}
//                   onChange={(e) =>
//                     setNewProduct({ ...newProduct, image: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="mb-4">
//                 <Input
//                   placeholder="Quantity"
//                   type="number"
//                   value={newProduct.quantity}
//                   onChange={(e) =>
//                     setNewProduct({
//                       ...newProduct,
//                       quantity: parseInt(e.target.value),
//                     })
//                   }
//                 />
//               </div>
//               <div className="mb-4">
//                 <Input
//                   placeholder="Ratings"
//                   type="number"
//                   value={newProduct.ratings}
//                   onChange={(e) =>
//                     setNewProduct({
//                       ...newProduct,
//                       ratings: parseFloat(e.target.value),
//                     })
//                   }
//                 />
//               </div>
//               <DialogFooter>
//                 <Button type="submit">
//                   {selectedProduct ? "Update" : "Add"} Product
//                 </Button>
//               </DialogFooter>
//             </form>
//           </DialogDescription>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default ManageProduct;
import { useEffect, useState } from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useCreateProductMutation,
  Product,
} from "@/redux/api/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2"; // Import SweetAlert

const ManageProduct = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [createProduct] = useCreateProductMutation();

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: "",
    brand: "",
    price: 0,
    description: "",
    image: "",
    inventory: { quantity: 0, inStock: true },
    category: "",
    ratings: 0,
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setProducts(data?.data);
    }
  }, [data]);

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
      setProducts(products.filter((product) => product._id !== id));
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Product deleted successfully!",
      });
    } catch (err) {
      console.error("Error while deleting product:", err);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to delete product.",
      });
    }
  };

  const handleUpdate = async (id: string, updatedProduct: Partial<Product>) => {
    try {
      await updateProduct({ id, product: updatedProduct }).unwrap();
      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Product updated successfully!",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to update product.",
      });
    }
  };

  const handleCreate = async (newProduct: Partial<Product>) => {
    try {
      await createProduct(newProduct).unwrap();
      Swal.fire({
        icon: "success",
        title: "Created!",
        text: "Product created successfully!",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to create product.",
      });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <div>Error: {(error as any).data?.message || "Unknown error"}</div>;

  return (
    <div className="bg-gray-800 p-8 pl-20 pr-20 pt-20">
      <h1 className="text-3xl font-semibold mb-4 text-center text-white">
        Product Management
      </h1>
      <div className="flex justify-end mb-4">
        <Button
          onClick={() => {
            setSelectedProduct(null);
            setNewProduct({
              name: "",
              brand: "",
              price: 0,
              description: "",
              image: "",
              inventory: { quantity: 0, inStock: true },
              category: "",
              ratings: 0,
            });
            setOpen(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 transition duration-200"
        >
          Add Product
        </Button>
      </div>
      <Table className="text-white bg-gray-600 pl-8 pr-8">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[550px] text-white pl-4">Name</TableHead>
            <TableHead className="w-[350px] text-white pl-4">Brand</TableHead>
            <TableHead className="w-[100px] text-white pl-4">Price</TableHead>
            <TableHead className="text-right text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.length > 0 ? (
            products.map((item) => (
              <TableRow
                key={item._id}
                className="hover:bg-gray-700 transition duration-150"
              >
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.brand}</TableCell>
                <TableCell>${item.price.toFixed(2)}</TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={() => {
                      setSelectedProduct(item);
                      setNewProduct(item);
                      setOpen(true);
                    }}
                    className="mr-4"
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => handleDelete(item._id)}
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No products available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedProduct ? "Update Product" : "Add Product"}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (selectedProduct) {
                  handleUpdate(selectedProduct._id, newProduct);
                } else {
                  handleCreate(newProduct);
                }
                setOpen(false);
              }}
            >
              <div className="mb-4">
                <label className="block text-black mb-1">Name</label>
                <Input
                  placeholder="Enter product name"
                  value={newProduct.name}
                  required
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-black mb-1">Brand</label>
                <Input
                  placeholder="Enter brand"
                  value={newProduct.brand}
                  required
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, brand: e.target.value })
                  }
                />
              </div>
              <div className="flex mb-4 space-x-4">
                <div className="w-1/2">
                  <label className="block text-black mb-1">Price</label>
                  <Input
                    placeholder="Price"
                    type="number"
                    value={newProduct.price}
                    required
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        price: parseFloat(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-black mb-1">Category</label>
                  <Input
                    placeholder="Category"
                    value={newProduct.category}
                    required
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        category: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex mb-4 space-x-4">
                <div className="w-1/2">
                  <label className="block text-black mb-1">Quantity</label>
                  <Input
                    placeholder="Quantity"
                    type="number"
                    value={newProduct.inventory?.quantity}
                    required
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        inventory: {
                          ...newProduct.inventory,
                          quantity: parseInt(e.target.value),
                        },
                      })
                    }
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-black mb-1">In Stock</label>
                  <Input
                    type="checkbox"
                    checked={newProduct.inventory?.inStock}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        inventory: {
                          ...newProduct.inventory,
                          inStock: e.target.checked,
                        },
                      })
                    }
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-black mb-1">Description</label>
                <Input
                  placeholder="Enter product description"
                  value={newProduct.description}
                  required
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-black mb-1">Image URL</label>
                <Input
                  placeholder="Image URL"
                  value={newProduct.image}
                  required
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      image: e.target.value,
                    })
                  }
                />
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 transition duration-200"
                >
                  {selectedProduct ? "Update Product" : "Create Product"}
                </Button>
                <Button onClick={() => setOpen(false)} className="ml-2">
                  Cancel
                </Button>
              </DialogFooter>
            </form>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManageProduct;
