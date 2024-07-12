// src/components/FAQ.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for items in their original condition and packaging. Refunds or exchanges are processed once we receive the returned item.",
    },
    {
      question: "How do I track my order?",
      answer:
        "After shipping, you'll receive an email with a tracking number. Use this number on our tracking page to monitor your order's status.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship worldwide. International shipping fees and delivery times vary based on your location.",
    },
    {
      question: "How can I contact customer service?",
      answer:
        "For support, email us at support@example.com or call +1 (555) 987-6543. We're available Monday to Friday, 9 AM - 6 PM.",
    },
  ];

  const companyDescription =
    "At our company, we strive to provide the best service possible. If you have any questions or need further information, feel free to reach out to us. We're here to help you with anything you need.";

  return (
    <section className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between md:items-start mb-8 border-t-2 border-gray-500 pt-4">
          <div className="md:w-1/3 md:pr-4">
            <h2 className="text-3xl font-bold text-white text-center md:text-right mb-4">
              Frequently Asked Questions
            </h2>
            <p className="pl-4 text-gray-100 text-lg text-justify md:text-
            left">
              {companyDescription}
            </p>
          </div>
          <div className="flex-grow md:pl-4">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="flex flex-col mb-4">
                  <div
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="cursor-pointer flex items-center justify-between px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {openIndex === index && (
                    <div className="p-4 bg-white text-black rounded-b-lg">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center  md:text-right">
              <Link
                to="/contact"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold"
              >
                More Questions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
