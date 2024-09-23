import React from "react";
import brands from "@/brand.json";

const TopBrands: React.FC = () => {
  return (
    <section className="py-12 px-4 pt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Top Featured Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4  ">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="p-4 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center bg-gray-900"
              style={{ height: "200px", width: "250px" }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-28 w-28 mb-2 object-contain"
              />
              <h3 className="text-lg font-bold">{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
