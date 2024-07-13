import React from "react";
import  "../components/layout/custom.css";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";


const ContactUs: React.FC = () => {
  
 return (
   <div className="bg-gray-800">
     <section className="py-12 px-4 bg-gray-800">
       <div className="container mx-auto flex flex-col md:flex-row items-center">
        
         <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center px-4">
           <h1 className="text-4xl font-bold mb-4 text-white">
             Get in Touch with Us
           </h1>
           <p className="text-lg text-white mb-6">
             We are here to assist you with any questions or concerns you may
             have. Whether you need support, have feedback, or just want to say
             hello, feel free to reach out to us. Our team is always happy to
             help and provide you with the best experience possible.
           </p>
           <form className="space-y-4 pl-8">
             <div>
               <label
                 htmlFor="name"
                 className="block text-lg font-semibold text-white mb-2"
               >
                 Name
               </label>
               <Input
                 type="text"
                 id="name"
                 name="name"
                 placeholder="Your Name"
                 required
                 className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
               />
             </div>
             <div>
               <label
                 htmlFor="email"
                 className="block text-lg font-semibold text-white mb-2"
               >
                 Email
               </label>
               <Input
                 type="email"
                 id="email"
                 name="email"
                 placeholder="Your Email"
                 required
                 className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
               />
             </div>
             <div>
               <label
                 htmlFor="message"
                 className="block text-lg font-semibold text-white mb-2"
               >
                 Message
               </label>
               <Textarea
                 id="message"
                 name="message"
                 placeholder="Your Message"
                 rows={4}
                 required
                 className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
               />
             </div>
             <Button
               type="submit"
               className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
             >
               Send Message
             </Button>
           </form>
         </div>

        
         <div className="md:w-1/2 flex justify-center items-center px-4">
           <img
             src="/assets/images/pngegg (1).png" 
             alt="Contact Us"
             className="w-full max-w-md h-auto" 
           />
         </div>
       </div>
     </section>
     <section >
       <div className="mt-16  ">
         <h2 className="text-3xl pt-6 font-bold text-white text-center mb-8 mt-16 ">
           We'Re Here To Help
         </h2>
         <div className=" flex flex-wrap justify-center gap-8 pb-16">
           <div className="p-4  shadow-lg rounded-lg text-center pb-12hover:shadow-xl transition-shadow duration-300 w-60 bg-gray-900">
           
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="white"
               className="size-6"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
               />
             </svg>

             <h3 className="text-xl font-bold text-white">Send Email</h3>
           </div>
           <div className="p-4 bg-gray-900 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300 w-60">
           
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="white"
               className="size-6"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
               />
             </svg>

             <h3 className="text-xl font-bold text-white">Discord</h3>
           </div>
           <div className="p-4 bg-gray-900 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300 w-60">
             
             <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="white"
               className="size-6"
             >
               <path
                 fill-rule="evenodd"
                 d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z"
                 clip-rule="evenodd"
               />
               <path
                 fill-rule="evenodd"
                 d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z"
                 clip-rule="evenodd"
               />
             </svg>

             <h3 className="text-xl font-bold text-white">Social Media</h3>
           </div>
           <div className="p-4 bg-gray-900 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300 w-60">
             
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke-width="1.5"
               stroke="white"
               className="size-6"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
               />
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
               />
             </svg>

             <h3 className="text-xl font-bold text-white">Location</h3>
           </div>
         </div>
       </div>
     </section>
   </div>
 );
};

export default ContactUs;
