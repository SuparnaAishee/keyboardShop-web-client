import React, { useEffect } from "react";
import shipping from "../assets/images/shipping.png"
import payment from "../assets/images/payment.png"
import support from"../assets/images/support.png"
import cashback from "../assets/images/cashback.png"
import { Card } from "@/components/ui/card";
import Aos from "aos";
import "aos/dist/aos.css";
const features = [
  {
    icon: shipping,
    title: "Free Shipping",
    description: "Enjoy free shipping on all orders, no minimum required.",
  },
  {
    icon: payment,
    title: "Quick Payment",
    description:
      "Secure and fast payment options available for a smooth checkout experience.",
  },
  {
    icon: support,
    title: "24/7 Support",
    description:
      "Our support team is available around the clock to assist you with any issues.",
  },
  {
    icon: cashback,
    title: "Big Cashback",
    description:
      "Earn cashback on your purchases and save more with every order.",
  },
];

const FeatureSection: React.FC = () => {
     useEffect(() => {
       Aos.init({ duration: 1000, once: false });
     }, []);
  
  return (
    <section className="py-12 px-4 pt-20 pb-20" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="max-w-xs mx-auto p-6 bg-white shadow-md rounded-lg text-center"
              data-aos="flip-left"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl  font-bold mb-2 text-blue-600">
                {feature.title}
              </h3>
              <p className="text-black mb-4">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
