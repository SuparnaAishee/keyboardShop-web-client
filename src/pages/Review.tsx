import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import avtar1 from "../assets/images/avtar1.png"

const reviews = [
  {
    name: "John Doe",
    review: "This is the best keyboard I have ever used! Highly recommend it.",
    avatar: avtar1, 
  },
  {
    name: "Jane Smith",
    review: "Amazing quality and great customer service. Will buy again!",
    avatar: avtar1,
  },
  {
    name: "Alice Johnson",
    review: "Excellent build quality and great feel. Worth every penny.",
    avatar: avtar1,
  },
];

const ReviewSection: React.FC = () => {
  return (
    <section className="py-12 px-4 ">
      <div className="container mx-auto text-center ">
        <h2 className="text-2xl text-white font-bold mb-8">Hear From Our Happy Clients</h2>
        <div className="flex flex-wrap justify-center">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="max-w-sm p-4 bg-gray-900  shadow-lg rounded-lg mx-2 mb-4 transform transition-transform duration-300 hover:scale-105 "
            >
              <Avatar className="h-16 w-16 text-white rounded-full mx-auto mb-4 border-2 border-blue-500">
                <AvatarImage src={review.avatar} alt={review.name} />
                <AvatarFallback>{review.name[0]}</AvatarFallback>
              </Avatar>
              <p className="text-white mb-2">{review.review}</p>
              <h3 className="text-lg font-bold text-blue-400">{review.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;