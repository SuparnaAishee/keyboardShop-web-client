// src/components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
        <div>
          <a href="/privacy" className="hover:text-white mx-2">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white mx-2">
            Terms of Service
          </a>
          <a href="/contact" className="hover:text-white mx-2">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
