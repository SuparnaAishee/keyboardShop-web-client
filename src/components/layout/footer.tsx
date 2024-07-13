

import React from "react";


const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img src="/assets/images/logo.png" alt="My E-commerce Logo" className="w-30 h-24 mb-4" />
          <p className="text-sm">
            &copy; {new Date().getFullYear()} KEYDOM. All rights
            reserved.
          </p>
          <p className="text-sm mt-2"> New market, Shopping City</p>
          <p className="text-sm mt-2">Phone: +1 (555) 123-4567</p>
          <p className="text-sm mt-2">Email: keydom@shop.com</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <a href="/about" className="hover:text-white mb-2">
            About Us
          </a>
          <a href="/shop" className="hover:text-white mb-2">
            Shop
          </a>
          <a href="/faq" className="hover:text-white mb-2">
            FAQ
          </a>
          <a href="/contact" className="hover:text-white mb-2">
            Contact Us
          </a>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
         Facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-gray-800 mb-2 mx-2 "
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md pr-4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
