




// import { RouterProvider } from "react-router-dom";
// import router from "./routes/route";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const App: React.FC = () => {
//   return (
//     <>
//       <RouterProvider router={router} />
//       <ToastContainer /> {/* Add the ToastContainer here */}
//     </>
//   );
// };

// export default App;
import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // Show a toast notification before the page reloads or is closed
      toast.warn("You're trying to reload or leave the page!", {
        position: "top-center", 
        autoClose: 3000, 
      });

    
      event.preventDefault(); 
      event.returnValue = ""; 
    };

  
    window.addEventListener("beforeunload", handleBeforeUnload);

    
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer /> 
    </>
  );
};

export default App;
