import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import banner1 from "../assets/images/banner1.jpg"
import banner2 from"../assets/images/banner2.jpg"
import banner3 from "../assets/images/banner3.jpeg"
const HeroSection: React.FC = () => {
  const slides = [
    {
      image: banner1,
      title: "Discover the Best Keyboards from KEYDOM",
      description: "Find the perfect mechanical keyboard for your needs.",
      buttonText: "Shop Now",
    },
    {
      image: banner3,
      title: "Upgrade Your Setup",
      description: "High-quality keyboards for gaming and work.",
      buttonText: "Shop Now",
    },
    {
      image: banner2,
      title: "Customizable Keyboards",
      description: "Personalize your typing experience.",
      buttonText: "Shop Now",
    },
  ];

  return (
    <div className="bg-gray-800 text-white py-20 px-4">
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-96">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover h-full w-full rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-lg">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-6">
                    {slide.description}
                  </p>
                  <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
