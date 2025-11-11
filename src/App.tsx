import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { router } from "./router/router";

export default function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      <ToastContainer />
    </div>
  )
}
