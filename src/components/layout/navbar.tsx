// src/components/Navbar.tsx

import React from "react";
import logo from "../../assets/images/logo.png";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";


const Navbar: React.FC = () => {
  return (
    <nav className="bg-black pt-4 pb-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-40" />
          <div className="flex items-center bg-gray-800 text-gray-300 rounded-lg ml-2">
            <input
              type="text"
              placeholder="Search Product..."
              className="bg-transparent border-none focus:outline-none focus:ring-0 pl-3 pr-2 py-1"
            />
            <Button className="p-2 bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <NavLink to="/" className="text-gray-300 hover:text-white mx-2">
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="text-gray-300 hover:text-white mx-2"
          >
            Products
          </NavLink>

          <NavLink
            to="/manage-products"
            className="text-gray-300 hover:text-white mx-2"
          >
            ManageProducts
          </NavLink>
          <NavLink to="/about" className="text-gray-300 hover:text-white mx-2">
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-300 hover:text-white mx-2"
          >
            Contact
          </NavLink>
          <NavLink to="/cart" className="text-gray-300 hover:text-white mx-2">
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
