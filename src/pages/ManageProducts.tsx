import  { useEffect, useState } from "react";
import  {
  useGetProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useCreateProductMutation,
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
import { useToast } from "@/components/ui/use-toast";

const ManageProduct = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [createProduct] = useCreateProductMutation();
  const { toast } = useToast();

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    price: 0,
    description: "",
    image: "",
    availableQuantity: 0,
    rating: 0,
  });

  useEffect(() => {
    if (data) {
      setProducts(data.data);
    }
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id).unwrap();
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
      toast({ description: "Product deleted successfully!" });
    } catch (err) {
      console.error("Delete Error:", err);
      toast({
        description: "Failed to delete product.",
        variant: "destructive",
      });
    }
  };
 
  const handleUpdate = async (id, updatedProduct) => {
    try {
      const response = await updateProduct({
        id,
        product: updatedProduct,
      }).unwrap();
      setProducts((prevProducts) =>
        prevProducts.map((product) => (product._id === id ? response : product))
      );
      toast({ description: "Product updated successfully!" });
    } catch (err) {
      console.error("Update Error:", err);
      toast({
        description: "Failed to update product.",
        variant: "destructive",
      });
    }
  };

  const handleCreate = async (product) => {
    try {
      const response = await createProduct(product).unwrap();
      setProducts([...products, response]);
      toast({ description: "Product created successfully!" });
    } catch (err) {
      console.error("Create Error:", err);
      toast({
        description: "Failed to create product.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-gray-800">
      <h1 className="text-3xl font-semibold mb-4 text-center text-white pt-8">
        Product Management
      </h1>
      <div className="pl-20 pr-20">
        <Button onClick={() => setSelectedProduct({})} className="bg-blue-600">Add Product</Button>
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
                <TableRow key={item._id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.brand}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell className="text-right">
                    <Button onClick={() => setSelectedProduct(item)}>
                      Update
                    </Button>
                    <Button onClick={() => handleDelete(item._id)}>
                      Delete
                    </Button>
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
      {selectedProduct && (
        <Dialog open={true} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {selectedProduct._id ? "Update Product" : "Add Product"}
              </DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (selectedProduct._id) {
                    handleUpdate(selectedProduct._id, selectedProduct);
                  } else {
                    handleCreate(newProduct);
                  }
                  setSelectedProduct(null);
                }}
              >
                <Input
                  placeholder="Name"
                  value={
                    selectedProduct._id ? selectedProduct.name : newProduct.name
                  }
                  onChange={(e) =>
                    selectedProduct._id
                      ? setSelectedProduct({
                          ...selectedProduct,
                          name: e.target.value,
                        })
                      : setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
                <Input
                  placeholder="Brand"
                  value={
                    selectedProduct._id
                      ? selectedProduct.brand
                      : newProduct.brand
                  }
                  onChange={(e) =>
                    selectedProduct._id
                      ? setSelectedProduct({
                          ...selectedProduct,
                          brand: e.target.value,
                        })
                      : setNewProduct({ ...newProduct, brand: e.target.value })
                  }
                />
                <Input
                  placeholder="Price"
                  type="number"
                  value={
                    selectedProduct._id
                      ? selectedProduct.price
                      : newProduct.price
                  }
                  onChange={(e) =>
                    selectedProduct._id
                      ? setSelectedProduct({
                          ...selectedProduct,
                          price: parseFloat(e.target.value),
                        })
                      : setNewProduct({
                          ...newProduct,
                          price: parseFloat(e.target.value),
                        })
                  }
                />
                <Input
                  placeholder="Description"
                  value={
                    selectedProduct._id
                      ? selectedProduct.description
                      : newProduct.description
                  }
                  onChange={(e) =>
                    selectedProduct._id
                      ? setSelectedProduct({
                          ...selectedProduct,
                          description: e.target.value,
                        })
                      : setNewProduct({
                          ...newProduct,
                          description: e.target.value,
                        })
                  }
                />
                <Input
                  placeholder="Image URL"
                  value={
                    selectedProduct._id
                      ? selectedProduct.image
                      : newProduct.image
                  }
                  onChange={(e) =>
                    selectedProduct._id
                      ? setSelectedProduct({
                          ...selectedProduct,
                          image: e.target.value,
                        })
                      : setNewProduct({ ...newProduct, image: e.target.value })
                  }
                />
                <Input
                  placeholder="Available Quantity"
                  type="number"
                  value={
                    selectedProduct._id
                      ? selectedProduct.availableQuantity
                      : newProduct.availableQuantity
                  }
                  onChange={(e) =>
                    selectedProduct._id
                      ? setSelectedProduct({
                          ...selectedProduct,
                          availableQuantity: parseInt(e.target.value),
                        })
                      : setNewProduct({
                          ...newProduct,
                          availableQuantity: parseInt(e.target.value),
                        })
                  }
                />
                <Input
                  placeholder="Rating"
                  type="number"
                  value={
                    selectedProduct._id
                      ? selectedProduct.rating
                      : newProduct.rating
                  }
                  onChange={(e) =>
                    selectedProduct._id
                      ? setSelectedProduct({
                          ...selectedProduct,
                          rating: parseFloat(e.target.value),
                        })
                      : setNewProduct({
                          ...newProduct,
                          rating: parseFloat(e.target.value),
                        })
                  }
                />
                <DialogFooter>
                  <Button type="submit">
                    {selectedProduct._id ? "Update" : "Add"} Product
                  </Button>
                </DialogFooter>
              </form>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ManageProduct;
