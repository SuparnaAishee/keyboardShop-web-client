
import MainLayout from "@/components/layout/Mainlayout";
import About from "@/pages/About";
import Cart from "@/pages/Cart";
import Home from "@/pages/Home";

import ManageProducts from "@/pages/ManageProducts";

import Product from "@/pages/products";
import { Contact } from "lucide-react";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Product/> },
      { path: "manage-products", element: <ManageProducts /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
export default router;