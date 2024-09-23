
import React, { useEffect, useState } from "react";
import "../components/layout/custom.css";



const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); 
  }, []);

  return (
    <div>
      <section className="py-12 px-4 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">About KEYDOM</h2>
          <div className="flex flex-wrap justify-center gap-8 card-container">
            <div
              className={`relative max-w-sm w-60 h-80 bg-white shadow-lg rounded-2xl overflow-hidden transition-transform ${
                isVisible ? "card-animation card " : ""
              }`}
            >
              <img
                src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_1000/f_auto/v1/api-images/misc/about-us-page/3-DSCF0296_1_jkz6lv"
                alt="Keyboard 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className={`relative  max-w-sm w-60 h-80 bg-white shadow-lg rounded-2xl overflow-hidden transition-transform ${
                isVisible ? "card-animation card" : ""
              }`}
            >
              <img
                src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_3500/f_auto/v1/api-images/misc/about-us-page/5-DSCF7084_1_bjjfuv"
                alt="Keyboard 2"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className={`relative max-w-sm w-60 h-80 bg-white shadow-lg rounded-2xl overflow-hidden transition-transform ${
                isVisible ? "card-animation card" : ""
              }`}
            >
              <img
                src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_3500/f_auto/v1/api-images/misc/about-us-page/2-DSC05329_1_d9dtjk"
                alt="Keyboard 3"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className={`relative max-w-sm w-60 h-80 bg-white shadow-lg rounded-2xl overflow-hidden transition-transform ${
                isVisible ? "card-animation card" : ""
              }`}
            >
              <img
                src="https://i.ebayimg.com/images/g/R5AAAOSwNUtj2Isw/s-l1200.webp"
                alt="Keyboard 4"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className={`relative max-w-sm w-60 h-80 bg-white shadow-lg rounded-2xl overflow-hidden transition-transform ${
                isVisible ? "card-animation card" : ""
              }`}
            >
              <img
                src="https://img.freepik.com/free-photo/keyboard-with-notebook-plant-table_23-2148037012.jpg"
                alt="Keyboard 5"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-12 px-4">
        <div className="container mx-auto text-white text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">What We Are</h2>
          <h1 className="text-5xl font-bold mb-6">
            Your Mechanical Keyboard Marketplace
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Welcome to our marketplace where we offer a wide range of mechanical
            keyboards to suit every typing preference and style. Our goal is to
            provide high-quality keyboards that enhance your typing experience
            and bring joy to your daily tasks. Whether you're a gamer, a
            programmer, or just a typing enthusiast, we have something for you.
            Explore our selection and find the perfect keyboard for your needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
