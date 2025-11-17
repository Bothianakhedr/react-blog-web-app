import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { router } from "./router";
import { AuthContextProvider } from "./context/AuthProvider";

export default function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router}/>
      <ToastContainer />
    </AuthContextProvider>
  )
}
