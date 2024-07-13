
import React from "react";
import "./custom.css"

const Marquee: React.FC = () => {
  return (
    <div className="marquee-container bg-blue-600">
      <div className="marquee-content text-bold text-base">
        <p>Best Deals! </p>
        <p>Up to 50% discount! </p>
        <p>New Arrivals! </p>
        <p>Customization avaiable! </p>
        <p>We have 24/7 Supporting team!</p>
        <p>Pick your keyboard! </p>
        <p>Upgrade your setup with KEYDOM!</p>
        <p>Limited time offer!</p>
      </div>
    </div>
  );
};

export default Marquee;
