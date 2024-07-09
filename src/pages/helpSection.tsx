import React from "react";

const HelpSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Help & HQ</h2>
        <div className="text-center">
          <p className="mb-4">
            Need assistance? Contact us for support or visit our HQ for more
            information.
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
